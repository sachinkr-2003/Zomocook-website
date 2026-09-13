import React from 'react';

export default function PartnerForm() {
  return (
    <section className="py-12 lg:py-20 bg-slate-50 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* LEFT SIDE: Cinematic Collage */}
        <div className="w-full relative">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px] uppercase tracking-widest mb-2">Investment Opportunity</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#024a9d] mb-2 tracking-tight leading-[1.15]">
            HoReCa- India's Most <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#d62423]">Leading Industry</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm lg:text-base mb-4 max-w-sm">
            Tap into a rapidly growing market full of scalable opportunities and immense potential for recurring ROI.
          </p>

          <div className="relative w-full max-w-[360px] h-[280px] mx-auto xl:mx-0 mt-4">
            {/* Dynamic Glow Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-gradient-to-tr from-blue-300 to-red-200 rounded-full blur-[60px] opacity-40 z-0"></div>

            {/* Top Polaroid (Slanted) */}
            <div className="absolute top-0 left-0 w-[220px] h-[160px] bg-white p-2 pb-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-md transform -rotate-6 z-10 border border-slate-100 transition-all duration-500 hover:-rotate-3 hover:scale-105">
              <div className="w-full h-full bg-slate-100 rounded overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop"
                  alt="Training chefs"
                  className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </div>

            {/* Bottom Polaroid (Straight) */}
            <div className="absolute bottom-4 right-0 w-[240px] h-[180px] bg-white p-2 shadow-[0_40px_80px_-15px_rgba(2,74,157,0.2)] rounded-md z-20 border border-slate-100 transition-all duration-500 hover:-rotate-2 hover:scale-105">
              <div className="w-full h-full bg-slate-100 rounded overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop"
                  alt="Professional Kitchen"
                  className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: High-End Application Form */}
        <div className="w-full bg-white p-6 lg:p-8 rounded-[32px] shadow-[0_20px_80px_-15px_rgba(0,0,0,0.08)] border border-slate-100 relative">
          {/* Form Top Accent */}
          <div className="absolute top-0 left-8 w-20 h-1bg-gradient-to-r from-[#024a9d] to-[#d62423] rounded-b-full"></div>

          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
            Investor Consultation
          </h2>
          <p className="font-bold text-slate-500 text-sm mb-8">
            Connect with us in 3 simple steps
          </p>

          {/* Premium Stepper Wizard */}
          <div className="flex items-center justify-between mb-8 relative w-full pr-4">
            {/* Active Loading line */}
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-100 rounded-full -z-10 translate-y-[-50%] overflow-hidden">
              <div className="w-[10%] h-full bg-gradient-to-r from-[#024a9d] to-blue-400 rounded-full"></div>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#024a9d] to-blue-500 shadow-md text-white text-xs font-black flex items-center justify-center ring-4 ring-white">1</div>
              <span className="text-[#024a9d] text-[10px] font-black uppercase tracking-wider">Page 1</span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-500 text-xs font-black flex items-center justify-center ring-4 ring-white transition-colors hover:bg-slate-300">2</div>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Page 2</span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-500 text-xs font-black flex items-center justify-center ring-4 ring-white transition-colors hover:bg-slate-300">3</div>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Finish</span>
            </div>
          </div>

          {/* Form Fields inside clean slate block */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-100 text-[#d62423] flex items-center justify-center text-[10px]">◆</span>
              Personal Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="relative group flex flex-col">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#024a9d] mb-1 block opacity-0 transform translate-y-2 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all">Full Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 outline-none focus:border-[#024a9d] focus:ring-2 focus:ring-blue-50 focus:bg-white text-sm placeholder-slate-400 font-semibold transition-all relative z-10"
                />
              </div>

              {/* Phone */}
              <div className="relative group flex flex-col">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#024a9d] mb-1 block opacity-0 transform translate-y-2 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all">Phone Number</label>
                <div className="relative w-full z-10">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 outline-none focus:border-[#024a9d] focus:ring-2 focus:ring-blue-50 focus:bg-white text-sm placeholder-slate-400 font-semibold transition-all pr-12"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 pointer-events-none">0/10</span>
                </div>
              </div>

              {/* Email Address */}
              <div className="relative group flex flex-col">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#024a9d] mb-1 block opacity-0 transform translate-y-2 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all">Email Address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 outline-none focus:border-[#024a9d] focus:ring-2 focus:ring-blue-50 focus:bg-white text-sm placeholder-slate-400 font-semibold transition-all relative z-10"
                />
              </div>

              {/* Address */}
              <div className="relative group flex flex-col">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#024a9d] mb-1 block opacity-0 transform translate-y-2 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all">Full Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 outline-none focus:border-[#024a9d] focus:ring-2 focus:ring-blue-50 focus:bg-white text-sm placeholder-slate-400 font-semibold transition-all relative z-10"
                />
              </div>
            </div>

            {/* Next Button */}
            <div className="mt-8 flex justify-end">
              <button className="bg-gradient-to-r from-[#024a9d] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-sm px-10 py-3 rounded-xl shadow-[0_5px_15px_-5px_rgba(2,74,157,0.6)] transform transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-5px_rgba(2,74,157,0.7)]">
                Continue Form &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
