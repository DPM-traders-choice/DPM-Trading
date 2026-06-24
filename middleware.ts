import { NextRequest, NextResponse } from 'next/server'

const UPSTREAM = 'https://my.dpmtrade.com'

function resolveUpstreamUrl(req: NextRequest): string {
  const { pathname, search } = req.nextUrl
  const path =
    pathname === '/login'    ? '/my/login'    :
    pathname === '/register' ? '/my/register' :
    pathname                                   // /my/* passes through as-is
  return `${UPSTREAM}${path}${search}`
}

export async function middleware(req: NextRequest) {
  const targetUrl = resolveUpstreamUrl(req)

  const headers = new Headers(req.headers)
  headers.set('host', 'my.dpmtrade.com')
  headers.delete('x-forwarded-host')
  headers.delete('x-forwarded-for')

  const isBodyless = ['GET', 'HEAD', 'OPTIONS'].includes(req.method)

  const upstreamRes = await fetch(targetUrl, {
    method: req.method,
    headers,
    ...(!isBodyless && { body: req.body, duplex: 'half' }),
    redirect: 'manual',
  } as RequestInit)

  // Rewrite any redirect that points back to the subdomain → main domain
  if (upstreamRes.status >= 300 && upstreamRes.status < 400) {
    const raw = upstreamRes.headers.get('location') ?? ''
    const location = raw.replace(
      /https?:\/\/my\.dpmtrade\.com/g,
      req.nextUrl.origin,
    )
    const dest = location.startsWith('http')
      ? location
      : new URL(location, req.nextUrl.origin).toString()

    const res = NextResponse.redirect(dest, { status: upstreamRes.status })
    // Forward cookies from the upstream redirect response
    upstreamRes.headers.forEach((val, key) => {
      if (key.toLowerCase() === 'set-cookie') res.headers.append('set-cookie', val)
    })
    return res
  }

  // Pass through all other responses (HTML, JS, CSS, API, etc.)
  const res = new NextResponse(upstreamRes.body, {
    status: upstreamRes.status,
    statusText: upstreamRes.statusText,
    headers: upstreamRes.headers,
  })
  return res
}

export const config = {
  matcher: ['/login', '/register', '/my/:path*'],
}
