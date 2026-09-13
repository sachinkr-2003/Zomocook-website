import React from 'react';
import { Landmark, Building2, Building, Castle, MapPin, AlignEndHorizontal } from 'lucide-react';

export default function Presence() {
  const cities = [
    { name: "Lucknow", icon: Landmark },
    { name: "Delhi", icon: Castle },
    { name: "Noida", icon: Building2 },
    { name: "Ghaziabad", icon: Building },
    { name: "Bengaluru", icon: Building2 },
    { name: "Hyderabad", icon: Castle },
    { name: "Kolkata", icon: AlignEndHorizontal }, // Represents a bridge
    { name: "Mumbai", icon: Building2 },
    { name: "Kanpur", icon: Building },
    { name: "Agra", icon: Castle },
    { name: "Ayodhya", icon: Landmark },
    { name: "Bhopal", icon: Building },
    { name: "Ludhiana", icon: Building },
    { name: "Gorakhpur", icon: Landmark },
    { name: "Prayagraj", icon: Castle },
    { name: "Varanasi", icon: Landmark },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100/50">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#024a9d] bg-white border border-slate-200 shadow-sm rounded-full px-5 py-1.5 mb-5">
            Global Scale
          </span>
          <h2 className="text-4xl lg:text-[44px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#024a9d] to-[#103061] tracking-tight mb-4">
            Our Presence
          </h2>
          <p className="text-slate-500 font-medium text-lg mb-8">
            Elevate your experience with our pan-India network of culinary expertise.
          </p>
          <div className="w-16 h-1 rounded-full mx-auto bg-gradient-to-r from-[#024a9d] to-[#d62423]"></div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-12 gap-x-6">
          {cities.map((city, index) => {
            const IconComponent = city.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center group cursor-pointer"
              >
                {/* Glassmorphic Icon Wrapper */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_5px_15px_-5px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center mb-4 text-slate-400 group-hover:text-[#024a9d] group-hover:-translate-y-2 group-hover:shadow-[0_15px_30px_-5px_rgba(2,74,157,0.15)] group-hover:border-blue-100 transition-all duration-300 relative">
                  {/* Subtle hover pulse */}
                  <div className="absolute inset-0 rounded-2xl bg-blue-100 scale-50 opacity-0 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500 pointer-events-none"></div>
                  
                  <IconComponent 
                    className="w-7 h-7 relative z-10 transition-transform duration-500 group-hover:scale-110" 
                    strokeWidth={1.5}
                  />
                </div>
                
                {/* City Name */}
                <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                  {city.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
