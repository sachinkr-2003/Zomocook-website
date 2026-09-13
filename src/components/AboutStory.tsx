import React from "react";

export default function AboutStory() {
  return (
    <section id="story" className="py-12 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
          {/* Left Title Column */}
          <div className="relative">
            <div className="lg:sticky lg:top-32 relative">
              <div className="inline-block px-2.5 py-1 mb-3 rounded-full bg-blue-50 border border-blue-100 text-[#024a9d] text-[9px] font-black uppercase tracking-widest">
                Our Genesis
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 leading-tight tracking-tight">
                Exciting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#024a9d] to-blue-500">Story</span> <br className="hidden lg:block" />
                behind the <br className="hidden lg:block" />
                Birth
              </h2>
              <div className="w-12 h-1 mt-6 bg-gradient-to-r from-[#024a9d] to-red-500 rounded-full"></div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="space-y-6 text-slate-600 text-sm sm:text-[15px] font-medium leading-relaxed lg:mt-4">
            <p>
              <span className="font-bold text-slate-900">Zomocook</span> was born out of a deep love for culinary arts and a passion for bringing diverse, flavorful
              experiences to the table. Our journey began in mid-2021, during the second wave of COVID-19 in India,
              when our founder, Karmveer Yadav, noticed a gap in the market for a service that could provide expertly
              trained chefs to cater to various culinary needs, whether for a restaurant, a hotel, or even a home kitchen.
            </p>
            <p>
              <strong className="text-slate-900">The story</strong> of Zomocook's birth is one of determination, collaboration, and the unwavering support of friends. Karmveer's vision was clear, but turning it into
              reality required a lot of help. Initially, Karmveer reached out to his close friend, who played a crucial role in helping him create the first version of the
              Zomocook website. However, building the platform required more resources, so Karmveer borrowed money from different friends, who believed in his vision
              and supported him financially to bring Zomocook to life.
            </p>

            {/* Elite Blockquote wrapper */}
            <div className="my-8 relative px-2 sm:px-0">
              <div className="absolute -top-10 -left-2 sm:-left-6 text-[100px] text-blue-100 font-serif leading-none opacity-40 z-0 select-none">"</div>
              
              <div className="relative z-10 bg-white/60 backdrop-blur-xl p-6 sm:p-8 rounded-[24px] border border-blue-50 shadow-[0_20px_50px_-15px_rgba(2,74,157,0.08)]">
                <div className="w-10 h-1 bg-[#024a9d] mb-6 rounded-full"></div>
                
                <div className="space-y-5 italic font-medium">
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-[15px]">
                    In the early days, Zomocook started by connecting with local tiffin services, which allowed the company to build a network of chefs and establish a foothold in the market. The company initially began with three
                    friends working together to make the dream a reality. However, as time went on, these friends eventually joined government services, leaving Karmveer as the sole driving force behind Zomocook. This led to the
                    company being registered as a One Person Company (OPC), reflecting Karmveer's commitment and determination to see his vision through...
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-[15px]">
                    Throughout this journey, Karmveer was fortunate to have the financial support of <strong className="text-[#024a9d] font-bold">Vishal Dwivedi</strong>, who helped keep the company afloat during challenging times, and the technical support of <strong className="text-[#024a9d] font-bold">Ravi Kant</strong>, who
                    provided crucial expertise in shaping the Zomocook platform. Together, this small but dedicated team laid the foundation for what would quickly become a trusted name in the industry for high-quality, personalized
                    chef services....
                  </p>
                  <p className="text-slate-900 leading-relaxed text-sm sm:text-[15px] font-bold not-italic pt-4 border-t border-slate-100 mt-4">
                    "Zomocook's story is not just about a business; it's about the power of friendship, determination, and the belief that with the right support, even the most ambitious dreams can become a reality. Today, Zomocook
                    continues to grow, driven by the same passion and commitment that inspired its creation."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
