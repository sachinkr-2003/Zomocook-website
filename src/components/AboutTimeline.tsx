import React from "react";

export default function AboutTimeline() {
  const timelines = [
    {
      period: "Mid : 2021",
      description: "The second wave of COVID-19 hit India, bringing unprecedented challenges to the hospitality industry. Amidst the chaos, Karmveer Yadav conceived the idea of Zomocook. Recognizing the growing demand for chef – at home dining experiences and the need for professional culinary services during such trying times."
    },
    {
      period: "Late : 2021",
      description: "Zomocook officially launched, starting with a small but dedicated team of chefs. The company quickly gained attention for its ability to provide safe, reliable, and professional culinary services in a time when dining out was fraught with risks."
    },
    {
      period: "Early : 2022",
      description: "As the pandemic continued, Zomocook expanded its services to meet the increasing demand for home-cooked meals, special occasion catering, and Horeca services. The company began to build a strong reputation for its user-friendly booking platform and its diverse range of culinary expertise."
    },
    {
      period: "Mid : 2022",
      description: "Zomocook's presence grew across major cities in India, including Delhi, Mumbai, Hyderabad, and Kolkata. The company also began offering specialized services such as cooking for weddings, corporate events, and home gatherings, catering to the evolving needs of its customers during the pandemic."
    },
    {
      period: "Year : 2023 - First Office inauguration",
      description: "With the pandemic's impact still lingering, Zomocook focused on further enhancing its digital platform, making it easier for customers to hire chefs online. The company continued to grow its chef network and expanded its service offerings to include more personalized culinary experiences."
    },
    {
      period: "Year : 2024",
      description: "Zomocook reached new heights, becoming a trusted name in the culinary services industry across India. The company remained committed to providing high-quality, safe, and convenient culinary solutions, ensuring that customers could enjoy delicious, professionally prepared meals in the comfort of their homes."
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-200/60">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] -z-10 translate-x-[-30%]"></div>
      <div className="absolute bottom-10 right-0 w-[300px] h-[300px] bg-blue-50/60 rounded-full blur-[80px] -z-10 translate-x-[20%]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-14 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#024a9d] tracking-tight mb-3 leading-tight">
            Timeline of Zomocook
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#024a9d] to-blue-400"></div>
        </div>

        {/* Timeline Grid (Masonry look or standard grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {timelines.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[20px] p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] border border-blue-50 hover:border-[#024a9d] hover:shadow-[0_15px_40px_-15px_rgba(2,74,157,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 group flex flex-col h-full"
            >
              <h3 className="text-blue-600 font-bold text-[17px] sm:text-lg text-center mb-4 pb-3 border-b border-slate-100 group-hover:text-[#024a9d] transition-colors relative">
                {item.period}
                {/* Decorative dot */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-100 rounded-full group-hover:bg-[#024a9d] transition-colors shadow-sm"></span>
              </h3>
              <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-center font-medium opacity-90 flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
