import { Trophy, Award, Star, Globe, Medal, Shield, Zap } from 'lucide-react'

const AWARDS = [
  { Icon: Award,   line1: 'Awarded by',     line2: 'Financial Expo Egypt 2022' },
  { Icon: Trophy,  line1: 'Best Forex',      line2: 'Platform 2015' },
  { Icon: Zap,     line1: 'Best Financial',  line2: 'Trading Platform 2015' },
  { Icon: Star,    line1: 'Best Innovative', line2: 'Forex Provider 2013' },
  { Icon: Globe,   line1: 'FOREX EXPO',      line2: 'Dubai' },
  { Icon: Medal,   line1: 'Awarded by',      line2: 'Forex Expo Dubai' },
  { Icon: Shield,  line1: 'HR Awards',       line2: 'Silver' },
]

export default function AwardsStrip() {
  return (
    <div className="max-w-345 mx-auto px-6 md:px-12 mt-8">
      {/* Top divider */}
      <div className="w-full h-px bg-white/8 mb-6" />

      {/* Awards row */}
      <div className="flex items-center justify-center overflow-x-auto scrollbar-none">
        <div className="flex items-center min-w-max">
          {AWARDS.map((award, i) => (
            <div key={i} className="flex items-center">
              {/* Award item */}
              <div className="flex flex-col items-center text-center px-6 md:px-8 gap-2">
                <award.Icon
                  size={22}
                  strokeWidth={1.5}
                  className="text-white/35"
                />
                <div>
                  <p className="text-[11px] font-medium text-white/35 leading-tight whitespace-nowrap">
                    {award.line1}
                  </p>
                  <p className="text-[11px] font-semibold text-white/55 leading-tight whitespace-nowrap mt-0.5">
                    {award.line2}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {i < AWARDS.length - 1 && (
                <div className="w-px h-8 bg-white/10 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-[11px] font-medium text-white/30 tracking-widest uppercase mt-5 mb-2">
        Awarded Best Broker Year After Year
      </p>
    </div>
  )
}
