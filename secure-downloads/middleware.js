import { NextResponse } from 'next/server'

export function middleware(request) {
  // Block direct access to PDF files in /downloads/
  if (request.nextUrl.pathname.startsWith('/downloads/') && 
      request.nextUrl.pathname.endsWith('.pdf')) {
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Access Denied | The Sleep Regression Solution</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex; align-items: center; justify-content: center;
            min-height: 100vh; margin: 0; background: #FDF8F5; color: #2C3E50;
          }
          .container { text-align: center; max-width: 500px; padding: 40px 20px; }
          .icon { font-size: 64px; margin-bottom: 20px; }
          h1 { font-size: 24px; margin-bottom: 16px; }
          p { color: #666; line-height: 1.6; margin-bottom: 24px; }
          a {
            display: inline-block; background: #4A9BA8; color: white;
            text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="icon">🔒</div>
          <h1>Access Denied</h1>
          <p>This content is available to customers only. Purchase a guide to receive your secure download link.</p>
          <a href="https://thesleepregressionsolution.com">View Our Guides</a>
        </div>
      </body>
      </html>`,
      {
        status: 403,
        headers: { 'Content-Type': 'text/html' },
      }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/downloads/:path*',
}
