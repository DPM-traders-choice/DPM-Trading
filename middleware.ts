import { NextRequest, NextResponse } from 'next/server'

const UPSTREAM = 'https://my.dpmtrade.com'

// Paths that map to /my/* on upstream
const REMAPPED: Record<string, string> = {
  '/login':    '/my/login',
  '/register': '/my/register',
}

// Paths that pass through to upstream as-is (no /my/ prefix)
// Add more here as you discover them (e.g. '/dashboard', '/settings')
const PASSTHROUGH_PREFIXES = [
  '/my',
  '/profile',
]

function resolveUpstreamUrl(req: NextRequest): string {
  const { pathname, search } = req.nextUrl
  const path = REMAPPED[pathname] ?? pathname
  return `${UPSTREAM}${path}${search}`
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Admin routes — handle entirely here, never proxy
  if (pathname.startsWith('/admin')) {
    if (pathname.startsWith('/admin/login')) {
      return NextResponse.next()
    }
    const session = req.cookies.get('admin_session')
    if (!session?.value) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
    return NextResponse.next()
  }

  const targetUrl = resolveUpstreamUrl(req)

  const headers = new Headers(req.headers)
  headers.set('host', 'my.dpmtrade.com')

  // Rewrite origin/referer so the auth system doesn't detect a proxy
  headers.set('origin', 'https://my.dpmtrade.com')
  const referer = req.headers.get('referer')
  if (referer) {
    headers.set('referer', referer.replace(req.nextUrl.origin, UPSTREAM))
  }

  headers.delete('x-forwarded-host')
  headers.delete('x-forwarded-for')

  const isBodyless = ['GET', 'HEAD', 'OPTIONS'].includes(req.method)

  const upstreamRes = await fetch(targetUrl, {
    method: req.method,
    headers,
    ...(!isBodyless && { body: req.body, duplex: 'half' }),
    redirect: 'manual',
  } as RequestInit)

  // Rewrite redirect Location headers — keep user on main domain
  if (upstreamRes.status >= 300 && upstreamRes.status < 400) {
    const raw = upstreamRes.headers.get('location') ?? ''
    const location = raw.replace(/https?:\/\/my\.dpmtrade\.com/g, req.nextUrl.origin)
    const dest = location.startsWith('http')
      ? location
      : new URL(location, req.nextUrl.origin).toString()

    const res = NextResponse.redirect(dest, { status: upstreamRes.status })
    upstreamRes.headers.forEach((val, key) => {
      if (key.toLowerCase() === 'set-cookie') res.headers.append('set-cookie', val)
    })
    return res
  }

  return new NextResponse(upstreamRes.body, {
    status: upstreamRes.status,
    statusText: upstreamRes.statusText,
    headers: upstreamRes.headers,
  })
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/login',
    '/register',
    '/my/:path*',
    '/profile',
    '/profile/:path*',
  ],
}
