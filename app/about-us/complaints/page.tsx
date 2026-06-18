
export default function ComplaintsPage() {
  return (
      <main className="min-h-screen bg-[#0B111E] pt-36 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-blue-400 mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight"
            style={{
              fontFamily: 'var(--font-inter)',
              background: 'linear-gradient(160deg, #ffffff 0%, #ffffff 40%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            Complaints
          </h1>
        </div>
      </main>
  )
}
