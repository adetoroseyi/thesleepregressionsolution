import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'The Sleep Regression Solution'
  const category = searchParams.get('category') || 'Sleep Guide'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FAF8F5',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            height: '8px',
            width: '100%',
            background: 'linear-gradient(to right, #5BAFA9, #E8836B)',
          }}
        />

        {/* Main content area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            padding: '60px 80px',
          }}
        >
          {/* Category pill */}
          <div
            style={{
              display: 'flex',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                backgroundColor: '#5BAFA9',
                color: 'white',
                padding: '8px 24px',
                borderRadius: '999px',
                fontSize: '22px',
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}
            >
              {category}
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: title.length > 60 ? '48px' : '56px',
              fontWeight: 800,
              color: '#2D3436',
              lineHeight: 1.2,
              maxWidth: '900px',
              letterSpacing: '-1px',
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom bar with branding */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 80px',
            borderTop: '2px solid #E8E4DF',
          }}
        >
          {/* Logo / Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#5BAFA9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: 700,
              }}
            >
              S
            </div>
            <div
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#2D3436',
              }}
            >
              thesleepregressionsolution.com
            </div>
          </div>

          {/* Author */}
          <div
            style={{
              fontSize: '18px',
              color: '#636E72',
            }}
          >
            By Marli Benjamin
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
