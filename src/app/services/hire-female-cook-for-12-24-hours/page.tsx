"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Check, X, ArrowRight, UserCheck, Zap, Star, ShieldCheck, MapPin, HeartHandshake } from 'lucide-react';
import ServiceLeadForm from '@/components/forms/ServiceLeadForm';

export default function DomesticCookPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does it take to hire a home cook?", 
      a: "Most requirements are fulfilled within 36 to 72 hours. Timelines may vary depending on location, experience requirements, and availability of candidates."
    },
    { 
      q: "Do you provide verified cooks?", 
      a: "Yes. Candidate profiles are screened and verified before being shared with clients for consideration."
    },
    { 
      q: "Can I interview the cook before hiring?", 
      a: "Yes. You can speak with shortlisted candidates over phone or video call before making a final decision."
    },
    { 
      q: "Do you provide 10-hour and 24-hour cooks?", 
      a: "Yes. We provide both 10-hour domestic cooks and 24-hour live-in cooks based on your family's requirements." 
    },
    { 
      q: "What are the hiring charges?", 
      a: "Hiring charges depend on the salary offered, service package selected, and validity period. A ₹299 requirement verification fee is applicable to start the hiring process." 
    },
    { 
      q: "Do you provide replacement support?", 
      a: "Yes. Replacement assistance is available according to the selected service package and applicable terms." 
    },
    { 
      q: "Is accommodation mandatory for hiring a cook?", 
      a: "No. Accommodation is not required for local cooks. However, accommodation is generally required for 24-hour live-in cooks and outstation candidates." 
    },
    { 
      q: "Can I hire a cook from another city?", 
      a: "Yes. Depending on your requirement, we can source suitable candidates from both local and outstation locations." 
    },
    { 
      q: "What if I don't hire any candidate?", 
      a: "If no candidate profiles are shared, a refund may be processed as per the refund policy. Refund eligibility after profile sharing or trials will be governed by the applicable terms and conditions." 
    },
    { 
      q: "Which cities do you serve?", 
      a: "Zomocook provides domestic cook hiring services across 250+ cities throughout India." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#fffdfb] font-sans selection:bg-[#fb923c] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="pt-36 sm:pt-[140px] md:pt-[160px] pb-20 px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto">
        <div className="bg-[#fef3c7] text-[#92400e] text-[11px] sm:text-xs font-black uppercase tracking-wider px-6 py-2.5 rounded-full mb-8 shadow-sm inline-flex items-center gap-2 border border-yellow-200">
          <span>🏠</span> Trusted Home Cook Hiring Service Across India
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-[52px] font-black text-[#1e293b] leading-[1.15] mb-6 tracking-tight max-w-4xl mx-auto drop-shadow-sm">
          Hire Female Cook For 12/24 Hours
        </h1>
        
        <p className="text-[#475569] text-[17px] font-medium leading-relaxed px-4 mb-8 max-w-3xl mx-auto">
          Find verified and experienced domestic cooks for daily home cooking, 10-hour shifts, or 24-hour live-in support. Get suitable cook profiles within 36–72 hours.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-bold text-[#334155] mb-12">
          <span className="flex items-center gap-1.5"><Check className="w-5 h-5 text-green-600"/> Verified Cooks</span>
          <span className="flex items-center gap-1.5"><Check className="w-5 h-5 text-green-600"/> PAN India Service</span>
          <span className="flex items-center gap-1.5"><Check className="w-5 h-5 text-green-600"/> Replacement Support</span>
          <span className="flex items-center gap-1.5"><Check className="w-5 h-5 text-green-600"/> Fast Hiring</span>
        </div>
        
        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row w-full gap-5 justify-center mx-auto mb-20">
          <button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-4 px-10 rounded-xl shadow-[0_10px_25px_rgba(249,115,22,0.3)] hover:-translate-y-1 transition-all duration-300 text-[16px]">
            Book a Cook Now
          </button>
          <button className="bg-white text-[#f97316] font-bold py-4 px-10 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.04)] border-2 border-[#f97316] hover:bg-[#fff7ed] hover:-translate-y-1 transition-all duration-300 text-[16px]">
            Check Salary Guide
          </button>
        </div>

        {/* STATS PILLS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl mx-auto">
           {[
             { num: "12,500+", lbl: "Cooks Placed" },
             { num: "25,500+", lbl: "Happy Families" },
             { num: "4.6★", lbl: "Customer Rating" },
             { num: "250+", lbl: "Cities Covered" }
           ].map((s, i) => (
             <div key={i} className="bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] p-6 rounded-[24px] flex flex-col items-center justify-center hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-300">
               <span className="font-black text-[28px] sm:text-[32px] text-[#f97316] mb-1 leading-none">{s.num}</span>
               <span className="font-semibold text-[13px] text-[#64748b] uppercase tracking-wide">{s.lbl}</span>
             </div>
           ))}
        </div>
      </section>

      {/* ================= COMPARISON SECTION ================= */}
      <section className="bg-white pt-24 pb-20 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fff7ed] text-[#f97316] text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full mb-6 inline-block border border-orange-100">
            Why Families Choose Zomocook
          </div>
          
          <h2 className="text-[32px] sm:text-[40px] font-black text-[#1e293b] leading-tight mb-5">
            Finding a Reliable Home Cook Shouldn't Be Difficult
          </h2>
          
          <p className="text-[#64748b] text-[16px] font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
            We help families hire trusted, experienced and dependable cooks without the usual hiring hassles.
          </p>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-4 relative px-4">
             {/* Left Card (Challenges) */}
             <div className="bg-white border text-left border-slate-200 shadow-[0_15px_50px_rgba(0,0,0,0.05)] rounded-[24px] rounded-tl-[8px] flex-1 overflow-hidden relative pb-8 pt-8 px-8 border-t-[5px] border-t-red-500">
                <div className="text-3xl mb-6">😟</div>
                <h3 className="font-extrabold text-[20px] text-[#0f172a] mb-6">The Challenges</h3>
                <ul className="space-y-4">
                  {[
                    "Frequent absenteeism",
                    "Unverified candidates",
                    "Poor cooking skills",
                    "Last-minute cancellations",
                    "No replacement support"
                  ].map((txt, i) => (
                    <li key={i} className="bg-slate-50 rounded-xl px-5 py-4 text-[14px] font-semibold text-[#475569]">{txt}</li>
                  ))}
                </ul>
             </div>

             {/* Arrow Icon */}
             <div className="flex items-center justify-center my-4 md:my-0 md:-mx-6 z-10 w-14 h-14 bg-[#f97316] rounded-full mx-auto self-center shadow-lg text-white shrink-0 outline outline-4 outline-white">
                <ArrowRight className="w-6 h-6 hidden md:block" />
                <ArrowRight className="w-6 h-6 md:hidden rotate-90" />
             </div>

             {/* Right Card (Solution) */}
             <div className="bg-white border text-left border-slate-200 shadow-[0_15px_50px_rgba(0,0,0,0.05)] rounded-[24px] rounded-tr-[8px] flex-1 overflow-hidden relative pb-8 pt-8 px-8 border-t-[5px] border-t-green-500">
                <div className="mb-6 flex items-center justify-center w-10 h-10 bg-green-500 rounded-lg text-white"><Check className="w-6 h-6"/></div>
                <h3 className="font-extrabold text-[20px] text-[#0f172a] mb-6">The Zomocook Solution</h3>
                <ul className="space-y-4">
                  {[
                    "Verified & screened cooks",
                    "Multi-cuisine professionals",
                    "10 Hr & 24 Hr options",
                    "Quick profile sharing",
                    "Replacement assistance"
                  ].map((txt, i) => (
                    <li key={i} className="bg-slate-50 rounded-xl px-5 py-4 text-[14px] font-semibold text-[#475569]">{txt}</li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="bg-[#fffdfb] pt-24 pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fff7ed] text-[#f97316] text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full mb-6 inline-block border border-orange-100">
            Why Choose Zomocook
          </div>
          
          <h2 className="text-[32px] sm:text-[40px] font-black text-[#1e293b] leading-tight mb-5">
            Trusted by Thousands of Families Across India
          </h2>
          
          <p className="text-[#64748b] text-[16px] font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
            Professional hiring support, verified candidates, and hassle-free onboarding.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <UserCheck className="w-7 h-7 text-[#f97316]"/>, title: "Verified Cooks", desc: "Profiles are screened before sharing with families." },
              { icon: <Zap className="w-7 h-7 text-[#f59e0b]"/>, title: "Fast Hiring", desc: "Suitable profiles shared within 36-72 hours." },
              { icon: <Star className="w-7 h-7 text-[#10b981]"/>, title: "Experienced Staff", desc: "Home-style, multi-cuisine & live-in cook options." },
              { icon: <ShieldCheck className="w-7 h-7 text-[#3b82f6]"/>, title: "Replacement Support", desc: "Replacement assistance as per selected package." },
              { icon: <MapPin className="w-7 h-7 text-[#ef4444]"/>, title: "PAN India Service", desc: "Serving families across 250+ cities in India." },
              { icon: <HeartHandshake className="w-7 h-7 text-[#f43f5e]"/>, title: "Dedicated Support", desc: "Continuous assistance throughout the hiring process." }
            ].map((f, i) => (
              <div key={i} className="bg-white p-10 rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-[#fff7ed] flex items-center justify-center mb-6 shadow-sm border border-orange-50">
                  {f.icon}
                </div>
                <h3 className="font-extrabold text-[19px] text-[#0f172a] mb-3">{f.title}</h3>
                <p className="text-[#64748b] text-[14.5px] font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SALARY GUIDE ================= */}
      <section className="bg-white pt-24 pb-20 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] sm:text-[40px] font-black text-[#1e293b] leading-tight mb-5">
            Home Cook Salary Guide
          </h2>
          <p className="text-[#64748b] text-[16px] font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
            Estimated monthly salary ranges based on experience, skills, and job responsibilities.
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 lg:gap-4 mb-10">
            {/* Box 1 */}
            <div className="bg-white rounded-[24px] p-8 border border-slate-200 shadow-sm w-full lg:w-1/3 text-left">
              <h3 className="font-extrabold text-[20px] text-[#1e293b] mb-4">Basic Cook</h3>
              <div className="font-black text-[28px] text-[#f97316] mb-8">₹14,000 – ₹16,000</div>
              <ul className="space-y-4 text-[14px] font-semibold text-[#475569] divide-y divide-slate-100">
                <li className="pt-2 border-transparent">2-3 Years Experience</li>
                <li className="pt-4">Basic Home-Style Cooking</li>
                <li className="pt-4">North Indian Meals</li>
                <li className="pt-4">Small Family Requirements</li>
              </ul>
            </div>

            {/* Box 2 (Highlighted) */}
            <div className="bg-white rounded-[24px] p-8 border-[3px] border-[#f97316] shadow-[0_15px_40px_rgba(249,115,22,0.1)] w-full lg:w-1/3 text-left relative transform lg:-translate-y-4">
              <div className="absolute -top-4 right-6 bg-[#f97316] text-white text-[11px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">Most Hired</div>
              <h3 className="font-extrabold text-[20px] text-[#1e293b] mb-4">Standard Cook</h3>
              <div className="font-black text-[28px] text-[#f97316] mb-8 leading-tight">₹18,000 –<br/>₹22,000</div>
              <ul className="space-y-4 text-[14px] font-semibold text-[#475569] divide-y divide-slate-100">
                <li className="pt-2 border-transparent">5-6 Years Experience</li>
                <li className="pt-4">Multi-Cuisine Skills</li>
                <li className="pt-4">North & South Indian</li>
                <li className="pt-4">Chinese & Daily Meals</li>
              </ul>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-[24px] p-8 border border-slate-200 shadow-sm w-full lg:w-1/3 text-left">
              <h3 className="font-extrabold text-[20px] text-[#1e293b] mb-4">Premium Cook</h3>
              <div className="font-black text-[28px] text-[#f97316] mb-8">₹25,000+</div>
              <ul className="space-y-4 text-[14px] font-semibold text-[#475569] divide-y divide-slate-100">
                <li className="pt-2 border-transparent">Highly Experienced</li>
                <li className="pt-4">Professional Cooking Skills</li>
                <li className="pt-4">Multiple Cuisine Expertise</li>
                <li className="pt-4">Large Family Support</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#fff7ed] rounded-[16px] p-5 text-sm font-semibold text-[#92400e] max-w-4xl mx-auto">
            <span className="font-black">Note:</span> Salary may vary based on experience, location, accommodation, working hours, and cooking requirements.
          </div>
        </div>
      </section>

      {/* ================= HIRING OPTIONS ================= */}
      <section className="bg-[#fffdfb] pt-24 pb-20 text-center border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fff7ed] text-[#f97316] text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full mb-6 inline-block border border-orange-100">
            Choose Your Requirement
          </div>
          <h2 className="text-[32px] sm:text-[40px] font-black text-[#1e293b] leading-tight mb-5">
            Domestic Cook Hiring Options
          </h2>
          <p className="text-[#64748b] text-[16px] font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
            Select the staffing model that best suits your family's cooking needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 10 Hours Cook */}
            <div className="bg-white border border-slate-200 rounded-[32px] p-8 sm:p-12 text-left shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col hover:border-[#f97316] transition-colors">
               <div className="text-4xl mb-6 bg-[#fff7ed] w-16 h-16 rounded-2xl flex items-center justify-center border border-orange-100 shadow-sm">👨‍🍳</div>
               <h3 className="font-extrabold text-[24px] text-[#1e293b] mb-4">10 Hours Cook</h3>
               <p className="text-[#64748b] font-medium text-[15px] mb-8 leading-relaxed">
                 Ideal for families looking for daily cooking assistance during fixed working hours.
               </p>
               <ul className="space-y-5 text-[15px] font-semibold text-[#475569] divide-y divide-slate-100 flex-grow">
                 <li className="pt-2 border-transparent">Breakfast, Lunch & Dinner Preparation</li>
                 <li className="pt-4">Daily Kitchen Management</li>
                 <li className="pt-4">Suitable for Small & Medium Families</li>
                 <li className="pt-4">No Accommodation Required</li>
                 <li className="pt-4 border-b border-transparent">Flexible Working Hours</li>
               </ul>
               <div className="mt-8 text-center text-[#f97316] font-extrabold bg-[#fff7ed] py-4 rounded-[16px] border border-orange-100">
                  Most Popular for Families
               </div>
            </div>

            {/* 24 Hours Live-In Cook */}
            <div className="bg-white border-[3px] border-[#f97316] rounded-[32px] p-8 sm:p-12 text-left shadow-[0_20px_50px_rgba(249,115,22,0.1)] relative flex flex-col hover:-translate-y-1 transition-transform">
               <div className="absolute -top-4 right-8 bg-[#f97316] text-white text-[12px] font-black uppercase tracking-wider px-5 py-2 rounded-full shadow-lg">
                 Recommended
               </div>
               <div className="text-4xl mb-6 bg-[#fff7ed] w-16 h-16 rounded-2xl flex items-center justify-center border border-orange-100 shadow-sm">🏠</div>
               <h3 className="font-extrabold text-[24px] text-[#1e293b] mb-4">24 Hours Live-In Cook</h3>
               <p className="text-[#64748b] font-medium text-[15px] mb-8 leading-relaxed">
                 Best for large families requiring full-time cooking and household support.
               </p>
               <ul className="space-y-5 text-[15px] font-semibold text-[#475569] divide-y divide-slate-100 flex-grow">
                 <li className="pt-2 border-transparent">Full-Time Live-In Support</li>
                 <li className="pt-4">All Meals Preparation</li>
                 <li className="pt-4">Suitable for Large Families</li>
                 <li className="pt-4">Ideal for Elderly Care Homes</li>
                 <li className="pt-4 border-b border-transparent">Accommodation Required</li>
               </ul>
               <div className="mt-8 text-center text-[#f97316] font-extrabold bg-[#fff7ed] py-4 rounded-[16px] border border-orange-100">
                  Maximum Convenience
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4 STEPS HOW IT WORKS ================= */}
      <section className="bg-white pt-24 pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fff7ed] text-[#f97316] text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full mb-6 inline-block border border-orange-100">
            How It Works
          </div>
          
          <h2 className="text-[32px] sm:text-[40px] font-black text-[#1e293b] leading-tight mb-5">
            Hire a Home Cook in 4 Simple Steps
          </h2>
          
          <p className="text-[#64748b] text-[16px] font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
            From requirement submission to successful joining, we make the hiring process simple and hassle-free.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Submit Requirement", desc: "Fill out your requirement form and complete the ₹299 verification process." },
              { num: "02", title: "Profile Shortlisting", desc: "Our team shortlists suitable cook profiles based on your location, budget, and preferences." },
              { num: "03", title: "Select Package", desc: "Choose a service package and proceed with candidate discussions and final selection." },
              { num: "04", title: "Cook Joins", desc: "Once finalized, we coordinate the joining process and provide post-hiring support." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full bg-[#f97316] text-white flex items-center justify-center font-black text-[22px] mb-6 shadow-md">
                   {step.num}
                 </div>
                 <h3 className="font-extrabold text-[18px] text-[#1e293b] mb-4">{step.title}</h3>
                 <p className="text-[#64748b] text-[14px] font-medium leading-relaxed">
                   {step.desc}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section className="bg-slate-50 border-y border-slate-200 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-[32px] sm:text-[40px] font-black text-[#1e293b] leading-tight mb-4">
            Tell Us Your Requirement
          </h2>
          
          <p className="text-[#64748b] text-[16px] font-medium leading-relaxed mb-8">
            Complete the form below and receive suitable home cook profiles tailored to your family's needs.
          </p>

          <div className="w-16 h-1.5 bg-[#f97316] rounded-full mx-auto mb-16"></div>

          <div className="bg-white rounded-[24px] border-[4px] border-[#f97316] shadow-[0_20px_60px_rgba(0,0,0,0.08)] px-8 sm:px-12 py-10 text-left">
             <h3 className="text-[18px] font-bold text-[#1e293b] mb-8 pb-4 border-b border-slate-100">
               Personal Details
             </h3>
             
                          <ServiceLeadForm />
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="bg-[#fffdfb] pt-24 pb-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fff7ed] text-[#f97316] text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full mb-6 inline-block border border-orange-100">
            Frequently Asked Questions
          </div>
          
          <h2 className="text-[32px] sm:text-[40px] font-black text-[#1e293b] leading-tight mb-5">
            Got Questions? We've Got Answers
          </h2>
          
          <p className="text-[#64748b] text-[16px] font-medium leading-relaxed mb-16 mx-auto">
            Everything you need to know about hiring a home cook through Zomocook.
          </p>

          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => (
              <div 
                 key={idx} 
                 onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                 className="bg-white border border-slate-100 shadow-sm rounded-xl px-6 py-5 hover:border-orange-200 transition-colors cursor-pointer"
              >
                 <div className="flex justify-between items-center">
                    <h3 className="font-bold text-[15px] text-[#334155]">{faq.q}</h3>
                    <span className="text-[#f97316] text-xl font-bold">{openFaq === idx ? '-' : '+'}</span>
                 </div>
                 {openFaq === idx && (
                   <div className="mt-4 text-[14px] text-[#64748b] leading-relaxed border-t border-slate-50 pt-4">
                     {faq.a}
                   </div>
                 )}
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
             <button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-4 px-8 rounded-lg shadow-sm hover:-translate-y-0.5 transition-all">
                Book a Home Cook Now
             </button>
             <a href="#salary-guide" className="bg-white text-[#f97316] border-2 border-[#f97316] hover:bg-orange-50 font-bold py-4 px-8 rounded-lg transition-all hover:-translate-y-0.5">
                View Salary Guide
             </a>
          </div>
        </div>
      </section>

    </main>
  );
}
