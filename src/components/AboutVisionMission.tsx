import React from "react";
import { Lightbulb, Target } from "lucide-react";

export default function AboutVisionMission() {
  return (
    <section className="py-10 lg:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* VISION SECTION */}
        <div className="mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Side: Title */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-12 h-12 bg-blue-100 text-[#024a9d] rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#024a9d] tracking-tight mb-2">
                Vision
              </h2>
              <p className="text-slate-600 font-bold text-sm lg:text-base uppercase tracking-wider">
                The One-Stop Chef Solution
              </p>
            </div>

            {/* Right Side: Content Box */}
            <div className="lg:col-span-8">
              <div className="bg-gradient-to-r from-blue-600 to-[#024a9d] p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl text-blue-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-[30px] pointer-events-none"></div>
                
                <p className="relative z-10 text-sm sm:text-[15px] leading-relaxed sm:leading-loose font-medium text-center lg:text-left max-w-3xl mx-auto">
                  At Zomocook, our vision is to become the go-to platform for culinary expertise, 
                  where anyone can experience the joy of exquisite dining, whether at home, in a 
                  restaurant, or at a special event. We aim to empower chefs by providing them with 
                  a platform to showcase their skills, while ensuring that our customers enjoy memorable 
                  dining experiences. Beyond this, we envision Zomocook as a driver of positive change, 
                  creating job opportunities for culinary professionals across the country, and contributing 
                  to the growth and resilience of the hospitality industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MISSION SECTION */}
        <div className="relative max-w-4xl mx-auto rounded-[24px] shadow-[0_15px_40px_-20px_rgba(0,0,0,0.1)] bg-white border border-slate-100 p-8 sm:p-12 overflow-hidden transition-all duration-300">
          
          {/* Decorative Corner accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 translate-x-1/2 -translate-y-1/2 rounded-full blur-xl pointer-events-none"></div>
          
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 border border-blue-100 text-[#024a9d] rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Target className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#024a9d] tracking-tight mb-3">
              Our Mission
            </h2>
            <p className="text-blue-500 font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] mb-6 pb-6 border-b border-slate-100 w-full max-w-xs mx-auto">
              Crafting Memorable Dining Moments
            </p>
            
            <p className="text-slate-600 text-[13px] sm:text-[15px] leading-relaxed sm:leading-loose font-medium px-0 opacity-95">
              Our mission is to connect customers with the best culinary experts, providing personalized, 
              high-quality services that cater to all culinary needs. We are dedicated to making the process 
              of hiring a chef as seamless and straightforward as possible, ensuring that our customers can enjoy 
              delicious, professionally prepared meals with ease. At the same time, we are committed to creating 
              meaningful employment opportunities for chefs, helping them to develop their careers and achieve 
              financial stability. By maintaining the highest standards of culinary excellence and customer 
              satisfaction, we strive to make a lasting impact on both our customers and the culinary professionals we serve.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
