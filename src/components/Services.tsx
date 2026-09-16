import React from 'react';
import { ChefHat, Home, Utensils, PartyPopper, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      badge: "Commercial",
      badgeColor: "bg-[#024a9d] text-white font-bold",
      title: "Hotel Staff Service",
      description: "Chef, Waiter, Helper & Kitchen Staff available on urgent demand.",
      btnText: "Hire Now",
      icon: ChefHat,
      href: "/services/hotel-chefs-waiter-provider",
    },
    {
      id: 2,
      badge: "Domestic Cook",
      badgeColor: "bg-[#d62423] text-white font-bold",
      title: "Home Cook Service",
      description: "Full-Time, Part-Time, Live-In and Family Cook Services.",
      btnText: "Hire Now",
      icon: Home,
      href: "/services/hire-professional-chef-for-home",
    },
    {
      id: 3,
      badge: "Dom & Com",
      badgeColor: "bg-[#0f172a] text-white font-bold",
      title: "Daily Cook Service",
      description: "Reliable daily cooking solutions for homes, offices and businesses.",
      btnText: "Hire Now",
      icon: Utensils,
      href: "/services/hire-cook-for-daily-basis",
    },
    {
      id: 4,
      badge: "Domestic",
      badgeColor: "bg-[#059669] text-white font-bold",
      title: "Chef For Party",
      description: "Private chefs for birthdays, house parties, family gatherings & events.",
      btnText: "Book Chef",
      icon: PartyPopper,
      href: "/services/book-chef-on-birthday-party",
    }
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-[80px]">
          <h2 className="text-[34px] md:text-[42px] font-black text-[#0f172a] tracking-tight mb-4">
            Professional Cooking Services
          </h2>
          <p className="text-[15px] sm:text-[17px] text-slate-500 leading-relaxed font-medium mb-6 max-w-2xl mx-auto">
            Hire verified chefs and cooks for homes, hotels, restaurants, cafes and special events across India.
          </p>
          <div className="w-16 h-[5px] rounded-none mx-auto bg-gradient-to-r from-[#024a9d] to-[#d62423]"></div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="group relative bg-[#fafcff] rounded-none p-8 border border-slate-200 shadow-sm hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.08)] hover:border-[#024a9d] transition-all duration-300 flex flex-col h-full overflow-hidden hover:-translate-y-1.5"
              >
                {/* Sharp Corner Badge Top Right */}
                <div className={`absolute top-0 right-0 px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-none shadow-sm ${service.badgeColor}`}>
                  {service.badge}
                </div>

                {/* Top Icon Square Wrapper */}
                <div className="w-[60px] h-[60px] bg-white rounded-none flex items-center justify-center mb-6 mt-4 border border-slate-200 group-hover:border-[#024a9d] group-hover:bg-blue-50 transition-colors shadow-sm">
                  <Icon className="w-8 h-8 text-slate-800 group-hover:text-[#024a9d] transition-colors" strokeWidth={1.75} />
                </div>
                
                {/* Center Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-[20px] font-extrabold text-[#0f172a] mb-3 group-hover:text-[#024a9d] transition-colors tracking-wide">
                    {service.title}
                  </h3>
                  
                  <div className="w-8 h-0.5 bg-slate-300 mb-4 group-hover:bg-[#024a9d] transition-colors"></div>
                  
                  <p className="text-[14px] text-slate-500 font-medium leading-[1.7] mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Premium Button */}
                <div className="mt-auto w-full pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-3 hidden">
                     <Check className="w-3.5 h-3.5 text-green-500" strokeWidth={3}/> Available
                  </div>
                  <Link href={service.href} className="relative w-full flex items-center justify-between text-[#024a9d] group/btn">
                    <span className="font-extrabold text-[15px] tracking-wide relative">
                      {service.btnText}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#024a9d] transition-all duration-300 group-hover/btn:w-full"></span>
                    </span>
                    <div className="w-8 h-8 bg-slate-100 flex items-center justify-center rounded-none group-hover/btn:bg-[#024a9d] transition-colors">
                       <ArrowRight className="w-4 h-4 text-slate-600 group-hover/btn:text-white group-hover/btn:-rotate-45 transition-all" />
                    </div>
                  </Link>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
