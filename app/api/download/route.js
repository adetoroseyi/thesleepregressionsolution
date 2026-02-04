import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

// Map product IDs to storage file paths
const STORAGE_FILES = {
  '18-month': '18_month_sleep_regression_survival_guide.pdf',
  '2-year': '2_year_sleep_regression_blueprint.pdf',
  '3-year': '3_year_sleep_regression_playbook.pdf',
  'working-parent': 'working_parent_sleep_survival_guide.pdf',
}

export async function GET(request) {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')

  if (!token) {
    return new Response(renderErrorPage('Missing download token', 'Please use the download link from your email.'), {
      status: 400,
      headers: { 'Content-Type': 'text/html' },
    })
  }

  try {
    const { data: tokenData, error: tokenError } = await supabaseAdmin
      .from('download_tokens')
      .select('*')
      .eq('token', token)
      .single()

    if (tokenError || !tokenData) {
      return new Response(renderErrorPage('Invalid download link', 'This download link is not valid. Please check your email for the correct link.'), {
        status: 404,
        headers: { 'Content-Type': 'text/html' },
      })
    }

    const now = new Date()
    const expiresAt = new Date(tokenData.expires_at)

    if (now > expiresAt) {
      return new Response(renderErrorPage(
        'Download link expired',
        'This download link has expired (15-day limit). Please email us at hello@thesleepregressionsolution.com to request fresh download links.'
      ), {
        status: 410,
        headers: { 'Content-Type': 'text/html' },
      })
    }

    if (tokenData.download_count >= tokenData.max_downloads) {
      return new Response(renderErrorPage(
        'Download limit reached',
        'You have reached the maximum number of downloads for this link. Please email us at hello@thesleepregressionsolution.com for assistance.'
      ), {
        status: 429,
        headers: { 'Content-Type': 'text/html' },
      })
    }

    const fileName = STORAGE_FILES[tokenData.product_id]

    if (!fileName) {
      return new Response(renderErrorPage('File not found', 'The requested file could not be found.'), {
        status: 404,
        headers: { 'Content-Type': 'text/html' },
      })
    }

    const { data: fileData, error: fileError } = await supabaseAdmin
      .storage
      .from('ebooks')
      .download(fileName)

    if (fileError) {
      console.error('Storage download error:', fileError)
      return new Response(renderErrorPage(
        'Download failed',
        'There was an error downloading your file. Please try again or email us at hello@thesleepregressionsolution.com'
      ), {
        status: 500,
        headers: { 'Content-Type': 'text/html' },
      })
    }

    await supabaseAdmin
      .from('download_tokens')
      .update({ download_count: tokenData.download_count + 1 })
      .eq('token', token)

    const arrayBuffer = await fileData.arrayBuffer()

    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Cache-Control': 'no-store',
      },
    })

  } catch (error) {
    console.error('Download error:', error)
    return new Response(renderErrorPage(
      'Something went wrong',
      'Please try again or email us at hello@thesleepregressionsolution.com'
    ), {
      status: 500,
      headers: { 'Content-Type': 'text/html' },
    })
  }
}

function renderErrorPage(title, message) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title} | The Sleep Regression Solution</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          margin: 0;
          background: #FDF8F5;
          color: #2C3E50;
        }
        .container {
          text-align: center;
          max-width: 500px;
          padding: 40px 20px;
        }
        .icon {
          font-size: 64px;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 16px;
        }
        p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        a {
          display: inline-block;
          background: #4A9BA8;
          color: white;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: bold;
        }
        a:hover { background: #3d8490; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="icon">⚠️</div>
        <h1>${title}</h1>
        <p>${message}</p>
        <a href="https://thesleepregressionsolution.com">Back to Home</a>
      </div>
    </body>
    </html>
  `
}
