import React from 'react';
import { Star, BadgeCheck, ChevronRight, Info } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      avatar: "t",
      avatarBg: "bg-blue-500",
      name: "theveggieslife",
      date: "17/07/2025",
      text: "Zomcook is Excellent consultant for Hospitality industry from the menu planning, costing, staffing and also help to onboard on swiggy and..."
    },
    {
      id: 2,
      avatar: "A",
      avatarBg: "bg-[#d94f29]", // Burnt orange/red
      name: "Amit Yadav",
      date: "16/07/2025",
      text: "I recently used Zomocook service for my baby birthday and I'm very happy with the experience. The arrived on time, was well-prepar..."
    },
    {
      id: 3,
      avatar: "P", // Mocking photo with initial on yellow
      avatarBg: "bg-yellow-500 text-white",
      name: "Pranav Maheshwari",
      date: "13/06/2025",
      text: "On time and a great experience. The chef was highly professional and made sure all the dishes were prepared exactly as requested, great..."
    }
  ];

  // Helper for generating the fake Google logo Text
  const GoogleLogo = () => (
    <div className="text-3xl font-bold tracking-tighter mt-1 select-none">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </div>
  );

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8 justify-center">
          
          {/* Left Summary Box */}
          <div className="flex flex-col items-center lg:w-[250px] lg:shrink-0 lg:pt-4">
            <h3 className="font-extrabold text-xl text-slate-900 tracking-wide">EXCELLENT</h3>
            
            {/* Stars */}
            <div className="flex items-center gap-1 my-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 flex items-center justify-center -ml-0.5" style={i===4 ? {clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)', backgroundColor: '#fbbf24', marginLeft: '-1px'} : {}}>
                  <Star className={`w-7 h-7 text-[#fbbf24] fill-[#fbbf24] ${i===4 ? '-ml-[16px]' : ''}`} />
                </div>
              ))}
            </div>
            
            <p className="text-sm text-slate-600 font-medium mb-1">
              Based on <span className="font-bold text-slate-900">490 reviews</span>
            </p>
            <GoogleLogo />
          </div>

          {/* Right Cards Carousel Slider Container */}
          <div className="relative w-full max-w-4xl flex items-center group/slider">
            <div className="w-full flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-2 scrollbar-hide no-scrollbar -mx-2">
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="snap-start shrink-0 w-[300px] sm:w-[320px] bg-[#f9fafb] p-6 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] transition-all duration-300"
                >
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-lg ${review.avatarBg}`}>
                        {review.avatar}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 text-[15px] leading-tight">
                          {review.name}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    {/* Small Google icon */}
                    <div className="bg-white rounded-full p-0.5 shadow-sm">
                      <div className="font-bold text-sm tracking-tighter leading-none select-none">
                        <span className="text-[#4285F4]">G</span>
                      </div>
                    </div>
                  </div>

                  {/* Stars & Verified */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
                    ))}
                    <BadgeCheck className="w-4 h-4 text-blue-500 fill-white ml-1" />
                  </div>

                  {/* Review Text */}
                  <div className="text-[14px] text-slate-700 font-medium leading-relaxed mb-1 line-clamp-3">
                    {review.text}
                  </div>
                  <button className="text-xs text-slate-500 hover:text-slate-700 font-semibold mb-2">
                    Read more
                  </button>
                </div>
              ))}
            </div>

            {/* Next Chevron Button */}
            <button className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 hover:text-slate-800 shadow-md transition-colors z-20">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
        </div>

        {/* Global Floating TrustIndex Badge (Bottom Right align of the container) */}
        <div className="flex justify-end mt-4 lg:-mt-6 relative z-30 max-w-5xl mx-auto px-4">
          <div className="relative group/tooltip flex items-center cursor-pointer">
            {/* The Badge */}
            <div className="flex items-center gap-1.5 bg-[#1b6b43] text-white px-3 py-1.5 rounded-md text-xs font-bold shadow-sm hover:bg-[#155334] transition-colors">
              Verified by Trustindex <Info className="w-3.5 h-3.5" />
            </div>

            {/* The Tooltip Popover mimicking the image */}
            <div className="absolute right-0 bottom-full mb-3 w-[280px] bg-white border border-slate-200 rounded-lg p-4 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 origin-bottom-right z-50">
              
              {/* Tooltip Down Arrow Tail */}
              <div className="absolute right-6 -bottom-[6px] w-3 h-3 bg-white border-b border-r border-slate-200 rotate-45"></div>
              
              <p className="text-[11px] leading-relaxed text-slate-700">
                <strong className="text-slate-900">Trustindex verified badge is the Universal Symbol of Trust.</strong> Only the greatest companies can get the verified badge who has a review score above 4.5, based on customer reviews over the past 12 months. <span className="font-bold underline cursor-pointer hover:text-slate-900">Read more</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
