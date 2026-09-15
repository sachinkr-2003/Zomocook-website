import React from "react";
import { Sparkles, HelpingHand, Rocket, HeartHandshake, Quote } from "lucide-react";

export default function AboutStory() {
  return (
    <section id="story" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Content */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-slate-200 shadow-sm text-[#024a9d] text-[10px] font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            Our Genesis
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
            The Exciting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#024a9d] to-blue-500">Story</span> <br className="hidden sm:block" />
            Behind The Birth
          </h2>
          <p className="text-slate-500 font-medium text-[15px] sm:text-base max-w-2xl mx-auto leading-relaxed">
            Drawn from challenging times during the 2021 pandemic, Zomocook arose from a passion for culinary arts and a sheer determination to bridge the gap in hospitality staffing.
          </p>
        </div>

        {/* Story Journey Vertical Nodes */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-200 via-blue-100 to-transparent -translate-x-1/2 rounded-full hidden sm:block"></div>

          <div className="space-y-12 sm:space-y-20">
            
            {/* Story Block 1 */}
            <div className="relative flex flex-col sm:flex-row items-center justify-between group">
              <div className="hidden sm:flex w-full lg:w-[45%] justify-end lg:pr-12 order-1 lg:order-1"></div>
              
              <div className="absolute left-4 sm:left-8 lg:left-1/2 w-12 h-12 bg-white rounded-full border-4 border-blue-50 shadow-md flex items-center justify-center -translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-110">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#024a9d] to-blue-600 flex items-center justify-center text-white">
                  <Rocket className="w-3 h-3" />
                </div>
              </div>

              <div className="w-full lg:w-[45%] pl-16 sm:pl-24 lg:pl-12 order-2 lg:order-3">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-5px_rgba(2,74,157,0.1)] transition-all duration-300 relative">
                  <span className="text-[10px] font-black tracking-widest text-[#024a9d] uppercase mb-2 block">Mid-2021</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Identifying the Gap</h3>
                  <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                    Zomocook was born out of a deep love for culinary arts during the second wave of COVID-19 in India. Our founder, <strong className="text-slate-900">Karmveer Yadav</strong>, noticed a huge gap in the market for a service that could provide expertly trained chefs for restaurants, hotels, and home kitchens.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Block 2 */}
            <div className="relative flex flex-col sm:flex-row items-center justify-between group">
              <div className="w-full lg:w-[45%] pl-16 sm:pl-24 lg:pl-0 lg:pr-12 order-2 lg:order-1 text-left lg:text-right">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-5px_rgba(2,74,157,0.1)] transition-all duration-300 relative">
                  <span className="text-[10px] font-black tracking-widest text-red-500 uppercase mb-2 block">The Struggle</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Building the Foundation</h3>
                  <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                    Karmveer reached out to close friends to create the platform's first version. Building it required heavy resources, so he borrowed money from friends who believed in his vision. Initially partnering with local tiffin services, three friends worked tirelessly to establish a strong foothold in the market.
                  </p>
                </div>
              </div>
              
              <div className="absolute left-4 sm:left-8 lg:left-1/2 w-12 h-12 bg-white rounded-full border-4 border-blue-50 shadow-md flex items-center justify-center -translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-110">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white">
                  <HelpingHand className="w-3 h-3" />
                </div>
              </div>

              <div className="hidden lg:block lg:w-[45%] order-3"></div>
            </div>

            {/* Story Block 3 */}
            <div className="relative flex flex-col sm:flex-row items-center justify-between group">
              <div className="hidden lg:block lg:w-[45%] order-1"></div>
              
              <div className="absolute left-4 sm:left-8 lg:left-1/2 w-12 h-12 bg-white rounded-full border-4 border-blue-50 shadow-md flex items-center justify-center -translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-110">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#024a9d] to-blue-600 flex items-center justify-center text-white">
                  <HeartHandshake className="w-3 h-3" />
                </div>
              </div>

              <div className="w-full lg:w-[45%] pl-16 sm:pl-24 lg:pl-12 order-2 lg:order-3">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-5px_rgba(2,74,157,0.1)] transition-all duration-300 relative">
                  <span className="text-[10px] font-black tracking-widest text-[#024a9d] uppercase mb-2 block">The Turning Point</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">The Pillars of Support</h3>
                  <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                    As friends left for government services, Karmveer became the sole driving force, registering Zomocook as an OPC. Fortunately, the pivotal financial backing of <strong className="text-[#024a9d] font-bold">Vishal Dwivedi</strong> kept the company afloat, while the technical expertise of <strong className="text-[#024a9d] font-bold">Ravi Kant</strong> shaped the platform.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Grand Quote Ending */}
          <div className="mt-20 pt-8 border-t border-slate-200/50 max-w-3xl mx-auto text-center relative px-4">
            <Quote className="w-10 h-10 text-blue-100 mx-auto mb-6 transform rotate-180" />
            <p className="text-lg sm:text-[22px] font-bold text-slate-800 leading-relaxed italic">
              "Zomocook's story is not just about a business; it's about the power of friendship, determination, and the belief that with the right support, even the most ambitious dreams can become a reality."
            </p>
            <div className="mt-6 inline-block bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
              The Journey Continues
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
