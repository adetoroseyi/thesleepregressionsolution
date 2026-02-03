import { NextResponse } from 'next/server'

export function middleware(request) {
  const path = request.nextUrl.pathname

  // Allow the free checklist through
  if (path === '/downloads/sleep-regression-checklist.pdf') {
    return NextResponse.next()
  }

  // Block direct access to all other downloads (paid ebooks)
  if (path.startsWith('/downloads/')) {
    return new NextResponse(
      '<html><body style="font-family:sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#f8f9fa"><div style="text-align:center;padding:40px"><h1 style="color:#e74c3c">Access Denied</h1><p>This file can only be accessed through a valid purchase link.</p><a href="/" style="color:#4A9BA8">← Back to Home</a></div></div></body></html>',
      { status: 403, headers: { 'Content-Type': 'text/html' } }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/downloads/:path*',
}
