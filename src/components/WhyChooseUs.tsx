import React from 'react';
import { UserCheck, Zap, Target, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      title: "Verified Professionals",
      description: "Background-verified chefs, cooks and hospitality staff for complete peace of mind.",
      icon: UserCheck,
      color: "text-blue-600",
      bgWrapper: "bg-blue-50 border-blue-100"
    },
    {
      id: 2,
      title: "Quick Hiring",
      description: "Receive shortlisted profiles quickly and hire staff without lengthy delays.",
      icon: Zap,
      color: "text-amber-500",
      bgWrapper: "bg-amber-50 border-amber-100"
    },
    {
      id: 3,
      title: "Specialized Talent",
      description: "Indian, Chinese, Tandoor, Continental, Bakery and multi-cuisine experts available.",
      icon: Target,
      color: "text-rose-600",
      bgWrapper: "bg-rose-50 border-rose-100"
    },
    {
      id: 4,
      title: "Dedicated Support",
      description: "Our team assists throughout the hiring process to ensure successful placements.",
      icon: HeartHandshake,
      color: "text-emerald-600",
      bgWrapper: "bg-emerald-50 border-emerald-100"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight mb-6">
            Why Choose Zomocook?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-2xl mx-auto">
            India's trusted platform for hiring professional chefs, cooks and hospitality staff.
          </p>
          <div className="w-24 h-1.5 rounded-full mx-auto bg-gradient-to-r from-[#024a9d] to-[#d62423]"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div 
                key={reason.id}
                className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                {/* Icon Wrapper */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 border ${reason.bgWrapper} group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <Icon className={`w-7 h-7 ${reason.color}`} strokeWidth={1.75} />
                </div>
                
                {/* Content */}
                <h3 className="text-[19px] font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
