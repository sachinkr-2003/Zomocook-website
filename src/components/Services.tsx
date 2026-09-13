import React from 'react';
import { ChefHat, Home, Utensils, PartyPopper, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      badge: "Commercial",
      badgeColor: "bg-blue-100 text-blue-700 font-bold",
      title: "Hotel Staff Service",
      description: "Chef, Waiter, Helper & Kitchen Staff available on urgent demand.",
      btnText: "Hire Now",
      icon: ChefHat,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50/80",
    },
    {
      id: 2,
      badge: "Domestic Cook",
      badgeColor: "bg-red-100 text-red-700 font-bold",
      title: "Home Cook Service",
      description: "Full-Time, Part-Time, Live-In and Family Cook Services.",
      btnText: "Hire Now",
      icon: Home,
      iconColor: "text-rose-600",
      iconBg: "bg-rose-50/80",
    },
    {
      id: 3,
      badge: "Domestic & Commercial",
      badgeColor: "bg-purple-100 text-purple-700 font-bold",
      title: "Daily Cook Service",
      description: "Reliable daily cooking solutions for homes, offices and businesses.",
      btnText: "Hire Now",
      icon: Utensils,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50/80",
    },
    {
      id: 4,
      badge: "Domestic",
      badgeColor: "bg-red-100 text-red-700 font-bold",
      title: "Chef For Party",
      description: "Private chefs for birthdays, house parties, family gatherings and special events.",
      btnText: "Book Chef",
      icon: PartyPopper,
      iconColor: "text-rose-600",
      iconBg: "bg-rose-50/80",
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight mb-6">
            Professional Cooking Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-2xl mx-auto">
            Hire verified chefs and cooks for homes, hotels, restaurants, cafes and special events across India.
          </p>
          {/* Gradient Divider matching the reference reversing colors */}
          <div className="w-24 h-1.5 rounded-full mx-auto bg-gradient-to-r from-[#024a9d] to-[#d62423]"></div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="group relative bg-[#fafcff] rounded-[24px] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                {/* Floating Absolute Badge */}
                <div className={`absolute top-5 right-5 px-3 py-1 text-[11px] uppercase tracking-wider rounded-full shadow-sm ${service.badgeColor}`}>
                  {service.badge}
                </div>

                {/* Top Icon Circular Wrapper */}
                <div className={`w-20 h-20 mx-auto rounded-full ${service.iconBg} flex items-center justify-center mb-6 mt-2 shadow-inner ring-4 ring-white`}>
                  <Icon className={`w-9 h-9 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                </div>
                
                {/* Center Content */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <h3 className="text-[22px] font-black text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 font-medium leading-relaxed mb-8 px-2">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Premium Button */}
                <div className="mt-auto w-full">
                  <button className="relative w-full overflow-hidden group/btn flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white px-6 py-4 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg">
                    <span className="relative z-10 flex items-center gap-2 tracking-wide">
                      {service.btnText}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    {/* Liquid fill overlay for Premium tech feel */}
                    <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-500 ease-out group-hover/btn:w-full z-0 skew-x-12 -ml-8"></div>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
