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
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight mb-4">
            Our Presence
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto bg-gradient-to-r from-[#024a9d] to-[#d62423]"></div>
        </div>

        {/* Cities Grid - 8 columns on large screens to match the image precisely */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-12 gap-x-4">
          {cities.map((city, index) => {
            const IconComponent = city.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center group cursor-pointer"
              >
                {/* Thin line-art icon styling matching the image */}
                <div className="w-16 h-16 flex items-center justify-center mb-4 text-slate-800 group-hover:text-blue-600 group-hover:-translate-y-2 transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-md">
                  <IconComponent 
                    className="w-10 h-10 md:w-12 md:h-12" 
                    strokeWidth={1} // Very thin to mimic line art
                  />
                </div>
                
                {/* City Name */}
                <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">
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
