import React from 'react';
import { Building2, UtensilsCrossed, Coffee, Home } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      id: 1,
      name: "Hotels",
      description: "Luxury, business, boutique and budget hotel staffing solutions.",
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "group-hover:border-blue-200"
    },
    {
      id: 2,
      name: "Restaurants",
      description: "Chefs, cooks, waiters and kitchen staff for restaurants.",
      icon: UtensilsCrossed,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "group-hover:border-red-200"
    },
    {
      id: 3,
      name: "Cafés",
      description: "Baristas, cooks and service staff for cafés and bakeries.",
      icon: Coffee,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "group-hover:border-amber-200"
    },
    {
      id: 4,
      name: "Homes",
      description: "Home cooks, private chefs and domestic kitchen staff.",
      icon: Home,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "group-hover:border-emerald-200"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background blurs to keep the premium theme consistent */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight mb-6">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-2xl mx-auto">
            We help hotels, restaurants, cafés, and households hire verified cooks, chefs, waiters, and hospitality professionals quickly and efficiently.
          </p>
          
          {/* Gradient Divider mimicking the image but strictly premium */}
          <div className="w-24 h-1.5 rounded-full mx-auto bg-gradient-to-r from-[#d62423] to-[#024a9d]"></div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div 
                key={industry.id}
                className={`group bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 cursor-pointer ${industry.borderColor}`}
              >
                {/* Premium Icon Wrapper */}
                <div className={`w-16 h-16 ${industry.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 mx-auto`}>
                  <Icon className={`w-8 h-8 ${industry.color}`} strokeWidth={1.5} />
                </div>
                
                {/* Card Text Content */}
                <h3 className="text-xl font-bold text-slate-900 text-center mb-3 group-hover:text-slate-800 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-[14px] text-slate-500 text-center leading-relaxed font-medium">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
