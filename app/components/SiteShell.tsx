'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import CTABanner from './CTABanner'
import Footer from './Footer'
import AnnouncementBar from './AnnouncementBar'

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')

  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <AnnouncementBar />
      <div className="flex-1 flex flex-col">{children}</div>
      <div className="bg-white">
        <CTABanner />
      </div>
      <Footer />
    </>
  )
}
