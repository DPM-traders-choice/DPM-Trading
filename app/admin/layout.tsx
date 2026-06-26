'use client'

import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const NAV = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    label: 'Announcements',
    href: '/admin/announcements',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
  },
  {
    label: 'Bonus Content',
    href: '/admin/bonus-content',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
]

/* ─── Sidebar content (shared between desktop + drawer) ─── */
function SidebarContent({ onNav }: { onNav?: () => void }) {
  const pathname = usePathname()
  const router   = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="relative h-9 w-28">
          <Image src="/logoGold.png" alt="DPM" fill className="object-contain object-left" />
        </div>
        <span
          className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md"
          style={{ background: 'rgba(96,165,250,0.12)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.2)' }}
        >
          Admin
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-6 flex flex-col gap-1">
        {NAV.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNav}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
              style={active ? {
                background: 'rgba(96,165,250,0.12)',
                color: '#60a5fa',
                border: '1px solid rgba(96,165,250,0.2)',
              } : {
                color: 'rgba(255,255,255,0.4)',
                border: '1px solid transparent',
              }}
            >
              <span style={{ color: active ? '#60a5fa' : 'rgba(255,255,255,0.3)' }}>{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
          style={{ color: 'rgba(255,255,255,0.3)', border: '1px solid transparent' }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.color = '#f87171'
            el.style.background = 'rgba(239,68,68,0.08)'
            el.style.borderColor = 'rgba(239,68,68,0.15)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.color = 'rgba(255,255,255,0.3)'
            el.style.background = 'transparent'
            el.style.borderColor = 'transparent'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Logout
        </button>
      </div>
    </div>
  )
}

/* ─── Mobile top bar ─── */
function MobileTopBar({ onOpen }: { onOpen: () => void }) {
  const pathname = usePathname()
  const current  = NAV.find(n => n.href === pathname)

  return (
    <div
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 h-14 lg:hidden"
      style={{ background: '#080f1e', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="flex items-center gap-3">
        <div className="relative h-7 w-20">
          <Image src="/logoGold.png" alt="DPM" fill className="object-contain object-left" />
        </div>
        {current && (
          <>
            <span className="text-white/20 text-xs">/</span>
            <span className="text-white/60 text-sm font-medium">{current.label}</span>
          </>
        )}
      </div>
      <button
        onClick={onOpen}
        className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all duration-200"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        <span className="w-5 h-px bg-white/50 rounded-full" />
        <span className="w-5 h-px bg-white/50 rounded-full" />
        <span className="w-3 h-px bg-white/50 rounded-full self-start ml-1" />
      </button>
    </div>
  )
}

/* ─── Mobile drawer ─── */
function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 lg:hidden transition-all duration-300"
        style={{
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 left-0 h-full w-72 z-50 lg:hidden transition-transform duration-300 ease-out"
        style={{
          background: '#080f1e',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          boxShadow: open ? '20px 0 60px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-150"
          style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <SidebarContent onNav={onClose} />
      </div>
    </>
  )
}

/* ─── Bottom nav (mobile) ─── */
function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden flex items-center justify-around px-2 pb-safe"
      style={{
        background: 'rgba(8,15,30,0.95)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '10px',
        paddingBottom: 'max(10px, env(safe-area-inset-bottom))',
      }}
    >
      {NAV.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-1 px-4 py-1 rounded-xl transition-all duration-200 min-w-0"
            style={{ color: active ? '#60a5fa' : 'rgba(255,255,255,0.3)' }}
          >
            <span style={{ transform: active ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
              {item.icon}
            </span>
            <span className="text-[10px] font-semibold tracking-wide truncate" style={{ color: active ? '#60a5fa' : 'rgba(255,255,255,0.3)' }}>
              {item.label}
            </span>
            {active && (
              <span className="w-1 h-1 rounded-full bg-blue-400" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}

/* ─── Root layout ─── */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname        = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const isLogin = pathname === '/admin/login'

  // Close drawer on route change
  useEffect(() => { setDrawerOpen(false) }, [pathname])

  if (isLogin) return <>{children}</>

  return (
    <div className="min-h-screen flex" style={{ background: '#070d1a' }}>

      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 h-screen w-60 flex-col z-50"
        style={{ background: '#080f1e', borderRight: '1px solid rgba(255,255,255,0.06)' }}
      >
        <SidebarContent />
      </aside>

      {/* Mobile top bar */}
      <MobileTopBar onOpen={() => setDrawerOpen(true)} />

      {/* Mobile drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Mobile bottom nav */}
      <BottomNav />

      {/* Main content */}
      <main className="flex-1 lg:ml-60 min-h-screen pt-14 lg:pt-0 pb-24 lg:pb-0">
        {children}
      </main>
    </div>
  )
}
