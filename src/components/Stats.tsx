import React from 'react';
import { Shield, HeartHandshake, MapPin, Star } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      id: 1,
      icon: Shield,
      value: "1,25,000+",
      label: "Verified Staff",
      showDivider: true
    },
    {
      id: 2,
      icon: HeartHandshake,
      value: "15,500+",
      label: "Horeca Partners",
      showDivider: true
    },
    {
      id: 3,
      icon: MapPin,
      value: "250+",
      label: "Cities Served",
      showDivider: true
    },
    {
      id: 4,
      icon: Star,
      value: "4.6 / 5",
      label: "Global Rating",
      showDivider: false,
      iconColor: "text-amber-400 fill-amber-400"
    }
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Deep Blue Banner Container */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#1e3a8a] to-[#1d4ed8] overflow-hidden shadow-[0_20px_50px_-15px_rgba(29,78,216,0.5)]">
          
          {/* Subtle Ambient Glows inside the banner for premium tech feel */}
          <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="px-6 py-16 sm:px-12 sm:py-20 relative z-10">
            
            {/* Header Content */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight mb-5 drop-shadow-sm">
                Trusted By Thousands <span className="text-red-500">Across India</span>
              </h2>
              <p className="text-blue-100 text-base md:text-lg font-medium opacity-90 max-w-2xl mx-auto tracking-wide">
                Connecting Homes, Hotels & Restaurants with Verified Professionals
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.id} className="relative flex flex-col items-center text-center group">
                    
                    {/* Icon Circle */}
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/20 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                      <Icon className={`w-8 h-8 ${stat.iconColor ? stat.iconColor : 'text-white'}`} strokeWidth={1.5} />
                    </div>
                    
                    {/* Value & Label */}
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight drop-shadow-sm group-hover:text-blue-50 transition-colors">
                      {stat.value}
                    </h3>
                    <p className="text-sm font-semibold tracking-wider uppercase text-blue-200 group-hover:text-white transition-colors">
                      {stat.label}
                    </p>

                    {/* Dividing Line (hidden on mobile and last item) */}
                    {stat.showDivider && (
                      <div className="hidden lg:block absolute right-[-12px] top-[10%] h-[80%] w-[1px] bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"></div>
                    )}
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
