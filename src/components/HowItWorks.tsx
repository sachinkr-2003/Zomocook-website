import React from 'react';
import { FileText, CreditCard, Users, Handshake } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      number: "1",
      title: "Share Requirement",
      description: "Tell us your staffing requirement, cuisine preference, location and service type.",
      icon: FileText,
      color: "text-blue-600",
      bgIcon: "bg-blue-50"
    },
    {
      id: 2,
      number: "2",
      title: "Activate Service Package",
      description: "Select the suitable hiring package and activate your requirement.",
      icon: CreditCard,
      color: "text-emerald-600",
      bgIcon: "bg-emerald-50"
    },
    {
      id: 3,
      number: "3",
      title: "Receive Profiles & Trial",
      description: "Get shortlisted profiles and conduct interviews or trial sessions.",
      icon: Users,
      color: "text-amber-600",
      bgIcon: "bg-amber-50"
    },
    {
      id: 4,
      number: "4",
      title: "Final Joining",
      description: "Select the best candidate and complete the onboarding process.",
      icon: Handshake,
      color: "text-rose-600",
      bgIcon: "bg-rose-50"
    }
  ];

  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight mb-6">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-xl mx-auto">
            Get verified chefs and cooks in just a few simple steps.
          </p>
          <div className="w-20 h-1.5 rounded-full mx-auto bg-gradient-to-r from-[#024a9d] to-[#d62423]"></div>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector Line (Desktop Only) for premium workflow look */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 border-t-2 border-dashed border-blue-200 z-0 opacity-70"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.id} 
                  className="group relative bg-white rounded-[20px] p-8 lg:p-6 xl:p-8 text-center border border-slate-100 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 mt-8 lg:mt-0"
                >
                  {/* Floating Step Number */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-[#1d4ed8] to-blue-700 text-white font-black text-2xl flex items-center justify-center rounded-full shadow-[0_8px_20px_-5px_rgba(29,78,216,0.6)] group-hover:scale-110 transition-transform duration-300 border-4 border-slate-50">
                    {step.number}
                  </div>

                  {/* Icon Wrapper directly corresponding to the image's emoji area */}
                  <div className={`w-14 h-14 mx-auto mt-6 mb-6 rounded-2xl flex items-center justify-center ${step.bgIcon} transition-colors duration-300 group-hover:bg-slate-50`}>
                    <Icon className={`w-7 h-7 ${step.color} group-hover:scale-110 transition-transform`} strokeWidth={1.75} />
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
