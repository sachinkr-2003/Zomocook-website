import React from "react";
import { ArrowDown } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-[#024a9d] to-blue-900 pt-20 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
      {/* Background Abstract Shapes for Premium Feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-300/10 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 w-max mx-auto lg:mx-0 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
              <span className="text-white text-[9px] font-bold tracking-[0.15em] uppercase">Est. 2021 India</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white mb-3 tracking-tight leading-[1.2]">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Company</span>
            </h1>
            <p className="text-blue-50/90 text-sm sm:text-[15px] font-medium leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6">
              Welcome to Zomocook – Your Own Cook! Our chef consultancy service
              aims to provide you with the best culinary experts for your hotel,
              restaurant, cafe, or even for your home. With our diverse offerings, you
              can enjoy the benefits of highly experienced chefs and ensure a
              delightful dining experience for your valued customers or yourself.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a 
                href="#story" 
                className="inline-flex items-center gap-2.5 bg-white text-[#024a9d] uppercase tracking-wide font-bold text-[11px] px-6 py-2.5 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:bg-slate-50 relative overflow-hidden group"
              >
                Read our story
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 group-hover:translate-y-1 transition-all">
                  <ArrowDown className="w-3 h-3" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Image/Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-[240px] h-[280px] sm:w-[280px] sm:h-[320px] lg:w-[320px] lg:h-[380px] z-10 transition-transform duration-700 hover:scale-105">
              {/* Decorative Background behind Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#024a9d]/80 to-transparent rounded-3xl z-10 pointer-events-none border border-white/20"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop" 
                alt="Professional Chef"
                className="w-full h-full object-cover rounded-3xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)]"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-6 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl shadow-xl border border-white z-20 flex items-center gap-2.5 animate-bounce-slow">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#024a9d]">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path></svg>
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-black text-slate-900 leading-tight">Highly</p>
                  <p className="text-[8px] sm:text-[9px] font-bold text-slate-500 uppercase tracking-wider leading-none">Experienced</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Elegant Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
          <path d="M0,80 C320,130 640,-20 960,40 C1280,100 1360,80 1440,70 L1440,120 L0,120 Z" fill="#ffffff" opacity="0.5" />
          <path d="M0,100 C320,140 640,0 960,50 C1280,100 1360,90 1440,80 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
