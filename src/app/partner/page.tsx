import React from 'react';
import PartnerHero from '@/components/PartnerHero';
import PartnerForm from '@/components/PartnerForm';
import Presence from '@/components/Presence';

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">

      {/* Section 1: Hero */}
      <PartnerHero />

      {/* Section 2: Form & Info Core */}
      <PartnerForm />
      
      {/* Visual Section Divider */}
      <div className="w-full h-px bg-slate-200"></div>

      {/* Section 3: Premium Clients Section (Exact Match to Reference Data but SaaS Styling) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Soft Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-50/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#024a9d] bg-blue-50 border border-blue-100 rounded-full px-5 py-1.5 mb-5 shadow-sm">
              Featured Partners
            </span>
            <h2 className="text-4xl lg:text-[44px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#024a9d] to-[#103061] tracking-tight mb-4">
              Our Clients
            </h2>
            <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
              Delighting Clients, One Plate at a Time: Zomocook's Expert Chef Consultancy Tailored to Your Every Culinary Desire.
            </p>
            <div className="w-16 h-1 mt-8 bg-gradient-to-r from-[#024a9d] to-[#d62423] rounded-full"></div>
          </div>
          
          {/* Logo Strip -> Premium Grid/Cards */}
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
            {/* ROYAL CAFE */}
            <div className="w-40 h-24 bg-white/70 backdrop-blur-md shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center rounded-2xl hover:shadow-[0_15px_30px_-5px_rgba(2,74,157,0.15)] hover:-translate-y-1 transition-all duration-300">
              <span className="font-extrabold text-red-500 text-lg uppercase tracking-wider relative flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 absolute -left-3 animate-pulse"></span>
                Royal Cafe
              </span>
            </div>
            
            {/* MOMOMIA */}
            <div className="w-40 h-24 bg-white/70 backdrop-blur-md shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center rounded-2xl hover:shadow-[0_15px_30px_-5px_rgba(255,165,0,0.2)] hover:-translate-y-1 transition-all duration-300">
               <span className="font-black text-orange-500 text-xl tracking-tight">Momomia</span>
            </div>
            
            {/* BBQ NATION */}
            <div className="w-40 h-24 bg-white/70 backdrop-blur-md shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center rounded-2xl hover:shadow-[0_15px_30px_-5px_rgba(214,36,35,0.2)] hover:-translate-y-1 transition-all duration-300 flex-col leading-tight">
               <span className="font-bold text-red-700 uppercase tracking-widest text-[11px]">Barbeque</span>
               <span className="font-black text-red-800 uppercase tracking-widest text-[#d62423] text-lg">Nation</span>
            </div>
            
            {/* KUDU CHICKEN */}
            <div className="w-40 h-24 bg-white/70 backdrop-blur-md shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center rounded-2xl hover:shadow-[0_15px_30px_-5px_rgba(202,138,4,0.15)] hover:-translate-y-1 transition-all duration-300 flex-col leading-tight">
               <span className="font-black text-yellow-500 text-xl tracking-tight">Kudu</span>
               <span className="font-bold text-yellow-600 text-xs tracking-widest">CHICKEN</span>
            </div>
            
            {/* M&M */}
            <div className="w-40 h-24 bg-white/70 backdrop-blur-md shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center rounded-2xl hover:shadow-[0_15px_30px_-5px_rgba(180,83,9,0.15)] hover:-translate-y-1 transition-all duration-300">
               <span className="font-black text-amber-900 text-3xl tracking-tighter">m&m</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section Divider */}
      <div className="w-full h-px bg-slate-100"></div>

      {/* Section 4: Presence Section */}
      <Presence />
    </div>
  );
}
