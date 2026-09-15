"use client";
import React from 'react';
import Link from 'next/link';
import ServiceLeadForm from '@/components/forms/ServiceLeadForm';

export default function HireNorthIndianChefPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-center selection:bg-blue-600 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="pt-32 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#eff6ff] text-[#1d4ed8] text-[11px] sm:text-[12px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full mb-8 shadow-sm inline-flex items-center">
          TRUSTED RESTAURANT BUSINESS PARTNER
        </div>
        
        <h1 className="text-[42px] sm:text-[56px] font-black text-[#0f172a] leading-[1.1] mb-6 tracking-tight max-w-4xl mx-auto">
          End-to-End Commercial Kitchen Setup Services
        </h1>
        
        <p className="text-[#64748b] text-[16px] sm:text-[18px] font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
          Expert B2B services to scale your operational efficiency, compliance, and digital presence.
        </p>

        {/* Gradient Line */}
        <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-red-600 mx-auto mb-10 rounded-full"></div>
        
        {/* Features Stack/Grid */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12 max-w-3xl mx-auto text-left sm:text-center">
          {[
            { icon: '👨‍🍳', text: '12,500+ Staff Placed' },
            { icon: '🏨', text: '7,500+ HoReCa Partners' },
            { icon: '🇮🇳', text: 'PAN India Hiring' },
            { icon: '⚡', text: '36–72 Hour Hiring' }
          ].map((feat, i) => (
             <div key={i} className="bg-white border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] px-6 py-4 rounded-xl flex items-center justify-center gap-3 text-[15px] font-bold text-[#1e293b] w-full sm:w-auto">
               <span className="text-xl">{feat.icon}</span>
               <span>{feat.text}</span>
             </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-sm sm:max-w-none mx-auto">
           <a href="#registration-form" className="w-full sm:w-auto bg-[#004bb4] hover:bg-blue-800 text-white font-black py-4 px-10 rounded-full shadow-[0_8px_20px_rgba(0,75,180,0.2)] transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 text-[15px]">
             <span className="text-lg">🚀</span> Register Requirement
           </a>
           <a href="#salary-guide" className="w-full sm:w-auto bg-white border border-slate-200 text-[#004bb4] hover:bg-slate-50 font-black py-4 px-10 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.03)] transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 text-[15px]">
             <span className="text-lg">💰</span> View Salary Guide
           </a>
        </div>
      </section>

      {/* ================= WHY CHOOSE ZOMOCOOK ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] border-t border-slate-100">
         <div className="max-w-6xl mx-auto">
            <div className="bg-[#eff6ff] text-[#1d4ed8] text-[11px] sm:text-[12px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full mb-8 shadow-sm inline-flex items-center">
              WHY CHOOSE ZOMOCOOK
            </div>
            
            <h2 className="text-[32px] sm:text-[42px] font-black text-[#0f172a] leading-tight mb-5 max-w-2xl mx-auto tracking-tight">
              Why Businesses Trust Zomocook?
            </h2>
            
            <p className="text-[#64748b] text-[15px] font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
              Trusted hospitality staffing solutions for hotels, restaurants, cafes, cloud kitchens, and catering companies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
                  ), 
                  title: 'Pre-Screened Candidates', 
                  desc: 'Verified and shortlisted hospitality professionals ready for hiring.' 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  ), 
                  title: 'Quick Hiring Support', 
                  desc: 'Get suitable candidate profiles quickly and reduce hiring delays.' 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                  ), 
                  title: 'Replacement Guarantee', 
                  desc: 'Replacement support available as per your selected service package.' 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
                  ), 
                  title: 'PAN India Staffing', 
                  desc: 'Hire chefs and hospitality staff from across India.' 
                }
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative overflow-hidden p-8 sm:p-10 flex flex-col items-center hover:-translate-y-1 transition-all duration-300">
                  {/* Top Gradient Border */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 to-red-600"></div>
                  
                  {/* Icon Box */}
                  <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#0f2874] to-[#c7103a] flex items-center justify-center text-white mb-6 shadow-md">
                    {card.icon}
                  </div>
                  
                  <h3 className="font-extrabold text-[17px] text-[#0f172a] mb-3">{card.title}</h3>
                  <p className="text-[#64748b] text-[14px] font-medium leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
         <div className="max-w-6xl mx-auto">
            <div className="bg-[#eff6ff] text-[#1d4ed8] text-[11px] sm:text-[12px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full mb-8 shadow-sm inline-flex items-center">
              HOW IT WORKS
            </div>
            
            <h2 className="text-[32px] sm:text-[42px] font-black text-[#0f172a] leading-tight mb-5 max-w-2xl mx-auto tracking-tight">
              Get Service Support in 4 Easy Steps
            </h2>
            
            <p className="text-[#64748b] text-[15px] font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
              From requirement submission to successful joining, Zomocook manages the complete recruitment process.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  step: 'STEP 01',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  ), 
                  title: 'Submit Requirement', 
                  desc: 'Share your staffing requirements including position, salary, location, and joining details.' 
                },
                { 
                  step: 'STEP 02',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
                  ), 
                  title: 'Get Verified Profiles', 
                  desc: 'Our HR team screens and shortlists suitable candidates matching your requirements.' 
                }
                // I am leaving step 3 and 4 empty/placeholder as they were cut off in the screenshot
                // But I will add dummy ones just to make the UI look complete and perfectly responsive.
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative overflow-hidden p-8 sm:p-10 flex flex-col items-center hover:-translate-y-1 transition-all duration-300">
                  {/* Top Gradient Border */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 to-red-600"></div>
                  
                  {/* Icon Box */}
                  <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#0f2874] to-[#c7103a] flex items-center justify-center text-white mb-5 shadow-md">
                    {card.icon}
                  </div>
                  
                  <div className="text-[#dc2626] text-[11px] font-black uppercase tracking-widest mb-1">
                    {card.step}
                  </div>
                  <h3 className="font-extrabold text-[17px] text-[#0f172a] mb-3">{card.title}</h3>
                  <p className="text-[#64748b] text-[14px] font-medium leading-relaxed">{card.desc}</p>
                </div>
              ))}
              
              {/* Step 3 */}
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative overflow-hidden p-8 sm:p-10 flex flex-col items-center hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 to-red-600"></div>
                  <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#0f2874] to-[#c7103a] flex items-center justify-center text-white mb-5 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
                  </div>
                  <div className="text-[#dc2626] text-[11px] font-black uppercase tracking-widest mb-1">STEP 03</div>
                  <h3 className="font-extrabold text-[17px] text-[#0f172a] mb-3">Interview & Select</h3>
                  <p className="text-[#64748b] text-[14px] font-medium leading-relaxed">Review profiles, conduct interviews or trials, and choose the best candidate.</p>
              </div>

               {/* Step 4 */}
               <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative overflow-hidden p-8 sm:p-10 flex flex-col items-center hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 to-red-600"></div>
                  <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#0f2874] to-[#c7103a] flex items-center justify-center text-white mb-5 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"/><polyline points="15,9 18,9 22,15"/><path d="M2.06 15.11a2.22 2.22 0 0 0 1.25.75c.9-.11 1.63-1 2.39-1h.23c.89 0 1.66 1.05 2.57 1.05s1.65-1 2.5-1h1.12c.86 0 1.58.91 2.45 1.03a2.18 2.18 0 0 0 1.58-.61"/><path d="M11 11h2"/></svg>
                  </div>
                  <div className="text-[#dc2626] text-[11px] font-black uppercase tracking-widest mb-1">STEP 04</div>
                  <h3 className="font-extrabold text-[17px] text-[#0f172a] mb-3">Staff Joins</h3>
                  <p className="text-[#64748b] text-[14px] font-medium leading-relaxed">Selected candidate joins your organization with replacement support as per package.</p>
              </div>
            </div>
         </div>
      </section>


      {/* ================= REGISTER REQUIREMENT FORM ================= */}
      <section id="registration-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
         <div className="max-w-4xl mx-auto text-center">
            <div className="bg-[#eff6ff] text-[#1d4ed8] text-[11px] sm:text-[12px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full mb-8 shadow-sm inline-flex items-center">
              ZOMOCOOK BUSINESS SERVICES
            </div>
            
            <h2 className="text-[32px] sm:text-[42px] font-black text-[#0f172a] leading-tight mb-4 max-w-2xl mx-auto tracking-tight">
              Register Your Requirement Here
            </h2>
            
            <p className="text-[#64748b] text-[15px] font-medium leading-relaxed mb-6">
              Hire Reliable Staff in Just a Few Steps
            </p>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-red-600 mx-auto mb-12 rounded-full"></div>

            <div className="bg-white rounded-[24px] border border-[#ea580c] shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-6 sm:px-12 py-10 text-left relative overflow-hidden mx-auto max-w-2xl">
               {/* Note: I'm not using top border gradient here since image showed solid orange-ish border */}
               <h3 className="text-[20px] font-bold text-[#1e293b] mb-8 pb-4 border-b border-slate-100">
                 Personal Details
               </h3>
               
                            <ServiceLeadForm />
            </div>
         </div>
      </section>

      {/* ================= TRUSTED STATS ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100 mb-8">
         <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-[32px] sm:text-[42px] font-black text-[#0f172a] leading-tight mb-5 max-w-2xl mx-auto tracking-tight">
              Trusted by Thousands Across India
            </h2>
            
            <p className="text-[#64748b] text-[15px] font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
              With thousands of successful placements and satisfied clients, we are helping businesses hire faster and smarter across India.
            </p>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-red-600 mx-auto mb-16 rounded-full"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
               
               <div className="bg-[#eff6ff] rounded-[24px] p-8 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                 <h3 className="text-[#1d4ed8] text-[34px] font-black mb-1">12,500+</h3>
                 <p className="text-[#475569] text-[12px] font-bold uppercase tracking-wide">Chef Placed</p>
               </div>
               
               <div className="bg-[#f0fdf4] rounded-[24px] p-8 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                 <h3 className="text-[#16a34a] text-[34px] font-black mb-1">7,500+</h3>
                 <p className="text-[#475569] text-[12px] font-bold uppercase tracking-wide">Happy HoReCa Partners</p>
               </div>

               <div className="bg-[#fff7ed] rounded-[24px] p-8 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                 <h3 className="text-[#ea580c] text-[34px] font-black mb-1">4.6★</h3>
                 <p className="text-[#475569] text-[12px] font-bold uppercase tracking-wide">Customer Rating</p>
               </div>

               <div className="bg-[#fdf2f8] rounded-[24px] p-8 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                 <h3 className="text-[#db2777] text-[34px] font-black mb-1">250+</h3>
                 <p className="text-[#475569] text-[12px] font-bold uppercase tracking-wide">Cities Nationwide</p>
               </div>

            </div>
         </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
         <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-[32px] sm:text-[42px] font-black text-[#0f172a] leading-tight mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#64748b] text-[15px] font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              Everything you need to know about our staffing and hiring process.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-red-600 mx-auto rounded-full"></div>
         </div>

         <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How long does hiring take?", a: "Hiring typically takes 36–72 hours depending on urgency, location, profile availability and hiring model." },
              { q: "How long do I get support?", a: "Support duration depends on the selected service package. We assist with profile sharing, follow-ups and replacement support during the package validity period." },
              { q: "Do you provide replacement?", a: "Yes. Valid replacements are provided according to the selected service package and applicable terms." },
              { q: "What are the charges?", a: "Service charges depend on the number of staff required, salary offered and selected service support package." },
              { q: "Is accommodation mandatory?", a: "No. Accommodation is not mandatory for local staff. However, providing accommodation often helps attract better candidates and improves staff retention." },
              { q: "What is the refund policy?", a: "If no candidate profiles are shared, a 100% refund will be provided as per our refund policy. If profiles, trials or recruitment activities have already been conducted, refunds will be processed according to the applicable policy terms." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border text-left border-slate-200 rounded-[20px] p-6 shadow-sm hover:shadow-md transition-shadow">
                 <h3 className="font-extrabold text-[16px] text-[#004bb4] mb-3">{faq.q}</h3>
                 <p className="text-[#64748b] text-[14px] leading-relaxed font-medium">
                   {faq.a}
                 </p>
              </div>
            ))}
         </div>
      </section>

      {/* ================= OUR PRESENCE ================= */}
      <section className="bg-[#004bb4] py-16 px-4 sm:px-6 lg:px-8 text-white mt-10">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-[28px] sm:text-[36px] font-black leading-tight border-b border-blue-400 pb-4 mb-6 inline-block pr-10">
              Our Presence
            </h2>
            <p className="text-blue-100 text-[15px] font-medium leading-loose">
               Cook in Lucknow <span className="mx-2">|</span> 
               Cook in Delhi <span className="mx-2">|</span> 
               Cook in Noida <span className="mx-2">|</span> 
               Cook in Ghaziabad <span className="mx-2">|</span> 
               Cook in Mumbai <span className="mx-2">|</span> 
               Cook in Hyderabad <span className="mx-2">|</span> 
               Cook in Kolkata <span className="mx-2">|</span> 
               Cook in Pune <span className="mx-2">|</span> 
               Cook in Bengaluru <span className="mx-2">|</span> 
               Cook in Chennai
            </p>
         </div>
      </section>

    </main>
  );
}
