import React from 'react';
import Link from 'next/link';
import { UserCheck, Zap, RefreshCw, Map, FileEdit, Users, Handshake, Rocket } from 'lucide-react';
import ServiceLeadForm from '@/components/forms/ServiceLeadForm';

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-[#fafbfc] font-sans selection:bg-[#024a9d] selection:text-white">
      
      {/* ================= HERO SECTION (Premium Split Layout) ================= */}
      <section className="bg-white pt-32 pb-12 sm:pt-[140px] md:pt-[160px] sm:pb-16 relative overflow-hidden">
        {/* Soft background line to separate from next section */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (Typography & CTA) */}
            <div className="text-left flex flex-col items-center lg:items-start text-center lg:text-left pt-2 sm:pt-0">
              <div className="bg-[#eff6ff] text-[#024a9d] text-[11px] font-black uppercase tracking-wider px-5 py-2 rounded-full mb-6 ring-1 ring-blue-100/80 inline-block shadow-sm">
                Premium Female Staffing Partner
              </div>
              
              <h1 className="text-[38px] sm:text-5xl lg:text-[54px] font-black text-[#0f172a] leading-[1.12] mb-5 tracking-tight drop-shadow-sm">
                Hire Female Cook For Hostel/PG
              </h1>
              
              <div className="lg:hidden w-12 h-1.5 bg-gradient-to-r from-[#024a9d] to-[#e11d48] rounded-full shadow-sm mb-6"></div>
              
              <p className="text-[#475569] text-[16px] sm:text-[17px] font-medium leading-relaxed mb-8 max-w-[540px]">
                Find experienced Chefs, Waiters, Kitchen Helpers, Captains, Managers and Hospitality Professionals for Hotels, Restaurants and Cafes.
              </p>
              
              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[500px] lg:max-w-none">
                <button className="flex-1 sm:flex-none justify-center bg-[#024a9d] hover:bg-[#023a7d] text-white font-bold py-3.5 px-7 rounded-[14px] shadow-[0_8px_20px_rgba(2,74,157,0.25)] hover:-translate-y-0.5 transition-all flex items-center gap-2.5 text-[15.5px]">
                  <Rocket className="w-4.5 h-4.5 text-blue-200" />
                  Register Requirement
                </button>
                <button className="flex-1 sm:flex-none justify-center bg-white text-[#0f172a] hover:text-[#024a9d] font-bold py-3.5 px-7 rounded-[14px] shadow-sm border border-slate-200 hover:bg-slate-50 hover:border-blue-200 hover:-translate-y-0.5 transition-all flex items-center gap-2.5 text-[15.5px]">
                  <span className="text-[18px] leading-none">💰</span>
                  Salary Guide
                </button>
              </div>
            </div>
            
            {/* Right Stats Grid (Staggered 2x2) */}
            <div className="relative pl-0 lg:pl-12 xl:pl-20 mt-6 lg:mt-0 max-w-[600px] mx-auto w-full">
               {/* Soft Glow behind stats */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-[70px] pointer-events-none"></div>
               
               <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10 px-2 sm:px-0">
                 {/* Box 1 */}
                 <div className="bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-4 sm:p-5 rounded-[18px] hover:-translate-y-1 hover:border-blue-100 transition-all">
                   <div className="w-10 h-10 bg-blue-50/80 rounded-xl flex items-center justify-center text-[18px] mb-2.5 border border-blue-100/50 shadow-sm">🥂</div>
                   <div className="text-[18px] sm:text-[22px] font-black text-[#0f172a] leading-none mb-1.5">12,500+</div>
                   <div className="text-[12.5px] font-bold text-[#64748b] leading-tight">Staff Placed</div>
                 </div>
                 
                 {/* Box 2 (Staggered down) */}
                 <div className="bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-4 sm:p-5 rounded-[18px] lg:mt-5 hover:-translate-y-1 hover:border-indigo-100 transition-all">
                   <div className="w-10 h-10 bg-indigo-50/80 rounded-xl flex items-center justify-center text-[18px] mb-2.5 border border-indigo-100/50 shadow-sm">🏢</div>
                   <div className="text-[18px] sm:text-[22px] font-black text-[#0f172a] leading-none mb-1.5">7,500+</div>
                   <div className="text-[12.5px] font-bold text-[#64748b] leading-tight">HoReCa Partners</div>
                 </div>
                 
                 {/* Box 3 */}
                 <div className="bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-4 sm:p-5 rounded-[18px] hover:-translate-y-1 hover:border-orange-100 transition-all">
                   <div className="w-10 h-10 bg-orange-50/80 rounded-xl flex items-center justify-center text-[18px] mb-2.5 border border-orange-100/50 shadow-sm">🇮🇳</div>
                   <div className="text-[18px] sm:text-[22px] font-black text-[#0f172a] leading-none mb-1.5">PAN India</div>
                   <div className="text-[12.5px] font-bold text-[#64748b] leading-tight">Hiring Reach</div>
                 </div>
                 
                 {/* Box 4 (Staggered down) */}
                 <div className="bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-4 sm:p-5 rounded-[18px] lg:mt-5 hover:-translate-y-1 hover:border-red-100 transition-all">
                   <div className="w-10 h-10 bg-red-50/80 rounded-xl flex items-center justify-center text-[18px] mb-2.5 border border-red-100/50 shadow-sm">⚡</div>
                   <div className="text-[18px] sm:text-[22px] font-black text-[#0f172a] leading-none mb-1.5">36-72 Hr</div>
                   <div className="text-[12.5px] font-bold text-[#64748b] leading-tight">Fast Hiring</div>
                 </div>
               </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="pt-24 pb-20 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-200/70 text-[#024a9d] text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full mb-6 inline-block">
          Why Choose Zomocook
        </div>
        
        <h2 className="text-[32px] sm:text-[40px] font-black text-[#024a9d] leading-tight mb-5">
          Why Businesses Trust Zomocook?
        </h2>
        
        <p className="text-[#64748b] text-[16px] font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
          Trusted hospitality staffing solutions for hotels, restaurants, cafes, cloud kitchens, and catering companies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { tag: "Pre-Screened Candidates", desc: "Verified and shortlisted hospitality professionals ready for hiring.", icon: UserCheck },
            { tag: "Quick Hiring Support", desc: "Get suitable candidate profiles quickly and reduce hiring delays.", icon: Zap },
            { tag: "Replacement Guarantee", desc: "Replacement support available as per your selected service package.", icon: RefreshCw },
            { tag: "PAN India Staffing", desc: "Hire chefs and hospitality staff from across India seamlessly.", icon: Map },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[24px] shadow-[0_15px_50px_rgba(0,0,0,0.06)] relative overflow-hidden px-8 pb-10 pt-10 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 flex flex-col items-center h-full group">
              {/* Zomocook Top Line Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#024a9d] to-[#e11d48]"></div>
              
              {/* Premium Gradient Icon */}
              <div className="w-[72px] h-[72px] mx-auto rounded-[20px] bg-gradient-to-br from-[#024a9d] to-[#e11d48] flex items-center justify-center mb-6 shadow-[0_10px_25px_rgba(2,74,157,0.25)] group-hover:scale-110 transition-transform duration-300">
                 <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-extrabold text-[18px] text-[#0f172a] mb-3">{item.tag}</h3>
              <p className="text-[#475569] text-[14.5px] leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="pt-12 pb-24 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#eff6ff] text-[#024a9d] text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full mb-6 inline-block">
          How It Works
        </div>
        
        <h2 className="text-[32px] sm:text-[40px] font-black text-[#0f172a] leading-tight mb-5">
          Hire Hospitality Staff in 4 Easy Steps
        </h2>
        
        <p className="text-[#64748b] text-[16px] font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
          From requirement submission to successful joining, Zomocook manages the complete recruitment process flawlessly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden lg:block absolute top-[85px] left-[15%] right-[15%] h-[2px] bg-slate-200 -z-10"></div>
           
          {[
            { step: "Step 01", title: "Submit Requirement", desc: "Share your staffing requirements including position, salary, location, and joining details.", icon: FileEdit },
            { step: "Step 02", title: "Get Verified Profiles", desc: "Our HR team screens and shortlists suitable candidates matching your exact requirements.", icon: Users },
            { step: "Step 03", title: "Interview & Select", desc: "Review profiles, conduct interviews or trials, and confidently choose the best candidate.", icon: UserCheck },
            { step: "Step 04", title: "Staff Joins", desc: "Selected candidate joins your organization with replacement support as per your package.", icon: Handshake },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[24px] shadow-[0_15px_50px_rgba(0,0,0,0.06)] relative overflow-hidden px-8 pb-10 pt-10 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 flex flex-col items-center h-full group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#024a9d] to-[#e11d48]"></div>
              
              <div className="w-[72px] h-[72px] mx-auto rounded-[20px] bg-gradient-to-br from-[#024a9d] to-[#e11d48] flex items-center justify-center mb-6 shadow-[0_10px_25px_rgba(2,74,157,0.25)] group-hover:scale-110 transition-transform duration-300">
                 <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-[#e11d48] text-[10px] font-black uppercase tracking-widest mb-3 bg-red-50/50 py-1.5 px-4 rounded-full">{item.step}</div>
              <h3 className="font-extrabold text-[18px] text-[#0f172a] mb-3">{item.title}</h3>
              <p className="text-[#475569] text-[14.5px] leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= REGISTER REQUIREMENT BLOCK ================= */}
      <section className="bg-white border-y border-slate-200" id="register-requirement">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-[#eff6ff] text-[#024a9d] text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full mb-4 inline-block">
            Zomocook Commercial Hiring
          </div>
          
          <h2 className="text-3xl md:text-[40px] font-black text-[#0f172a] leading-tight mb-3">
            Register Your Requirement Here
          </h2>
          
          <p className="text-[#64748b] text-[16px] font-medium leading-relaxed mb-6">
            Hire Reliable Staff in Just a Few Steps
          </p>

          <div className="w-full flex justify-center mb-10">
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#024a9d] to-[#e11d48] rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-[24px] border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] text-left px-8 sm:px-12 py-12 max-w-[700px] mx-auto relative hover:shadow-[0_25px_65px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden">
             {/* Premium Top Line */}
             <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#024a9d] to-[#e11d48]"></div>
             
             <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-5">
               <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 bg-opacity-80 border border-blue-100">
                  <UserCheck className="w-5 h-5" />
               </div>
               <h3 className="text-[22px] font-black text-[#0f172a] font-sans">
                 Personal Details
               </h3>
             </div>
             
                          <ServiceLeadForm />
          </div>
        </div>
      </section>

      {/* ================= SALARY GUIDE ================= */}
      <section className="pt-24 pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#eff6ff] text-[#024a9d] text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full mb-6 inline-block">
            Salary Guide
          </div>
          
          <h2 className="text-[32px] sm:text-[40px] font-black text-[#0f172a] leading-tight mb-5">
            Know the Right Salary Before You Hire
          </h2>
          
          <p className="text-[#64748b] text-[16px] font-medium leading-relaxed mb-12 mx-auto max-w-2xl">
            Average salary ranges to help you plan your hospitality hiring budget effectively.
          </p>
          
          <div className="w-full flex justify-center mb-16">
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#024a9d] to-[#e11d48] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
            {/* Kitchen Staff Box */}
            <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-200 pb-2 overflow-hidden hover:shadow-[0_20px_50px_rgba(2,74,157,0.1)] transition-all duration-300">
               <div className="bg-[#1877f2] p-8 text-left text-white shadow-sm">
                  <h3 className="font-extrabold text-[24px] flex items-center gap-3">👨‍🍳 Kitchen Staff</h3>
                  <p className="text-blue-100 text-[14px] font-semibold mt-1">Chef Department</p>
               </div>
               
               <div className="flex flex-col text-[15px] pt-2">
                 {[
                   { role: "Executive Chef", range: "₹70K - ₹1.5L+" },
                   { role: "Head Chef",      range: "₹40K - ₹80K" },
                   { role: "CDP",            range: "₹28K - ₹40K" },
                   { role: "DCDP",           range: "₹22K - ₹26K" },
                   { role: "Commi 1",        range: "₹18K - ₹22K" },
                   { role: "Commi 2",        range: "₹14K - ₹18K" }
                 ].map((s, idx) => (
                   <div key={idx} className="flex justify-between items-center px-8 py-5 border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <span className="text-[#334155] font-semibold">{s.role}</span>
                      <span className="text-[#024a9d] font-bold text-[17px]">{s.range}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Service Staff Box */}
            <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-200 pb-2 overflow-hidden hover:shadow-[0_20px_50px_rgba(225,29,72,0.1)] transition-all duration-300 flex flex-col">
               <div className="bg-[#e11d48] p-8 text-left text-white shadow-sm">
                  <h3 className="font-extrabold text-[24px] flex items-center gap-3">🍽️ Service Staff</h3>
                  <p className="text-red-100 text-[14px] font-semibold mt-1">Front Office & Restaurant</p>
               </div>
               
               <div className="flex flex-col text-[15px] flex-grow pt-2">
                 {[
                   { role: "Restaurant Manager", range: "₹35K - ₹80K" },
                   { role: "Captain / Supervisor", range: "₹18K - ₹30K" },
                   { role: "Steward / Waiter",     range: "₹10K - ₹18K" }
                 ].map((s, idx) => (
                   <div key={idx} className="flex justify-between items-center px-8 py-5 border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <span className="text-[#334155] font-semibold">{s.role}</span>
                      <span className="text-[#e11d48] font-bold text-[17px]">{s.range}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
          
          <div className="bg-[#f8fafc] rounded-2xl border-l-[5px] border-[#024a9d] p-6 text-left max-w-5xl mx-auto shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-slate-200">
            <p className="text-[14.5px] leading-relaxed text-[#475569]">
               <span className="font-extrabold text-[#0f172a]">Important Note:</span> Salary may vary depending on experience, city, accommodation facilities, skill level and job responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TRUST METRICS ================= */}
      <section className="bg-white border-y border-slate-200 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] sm:text-[40px] font-black text-[#0f172a] leading-[1.2] mb-5">
            Trusted by Thousands Across India
          </h2>
          
          <p className="text-[#475569] text-[16px] font-medium leading-relaxed mb-16 mx-auto max-w-2xl">
            With thousands of successful placements and satisfied clients, we are helping businesses hire faster and smarter across India.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
             {[
               { num: "12,500+", lbl: "Chef Placed", clr: "text-[#024a9d]", bg: "bg-[#eff6ff] border-[#bfdbfe]" },
               { num: "7,500+", lbl: "Happy HoReCa Partners", clr: "text-[#16a34a]", bg: "bg-[#f0fdf4] border-[#bbf7d0]" },
               { num: "4.6★", lbl: "Customer Rating", clr: "text-[#ea580c]", bg: "bg-[#fff7ed] border-[#fed7aa]" },
               { num: "250+", lbl: "Cities Nationwide", clr: "text-[#db2777]", bg: "bg-[#fdf2f8] border-[#fbcfe8]" }
             ].map((metric, i) => (
                <div key={i} className={`border ${metric.bg} rounded-3xl py-14 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300`}>
                  <div className={`text-[46px] font-black ${metric.clr} leading-none mb-4`}>
                    {metric.num}
                  </div>
                  <div className="text-[14.5px] font-extrabold text-[#475569]">{metric.lbl}</div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="pt-24 pb-32 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] sm:text-[40px] font-black text-[#0f172a] leading-[1.2] mb-5">
          Frequently Asked Questions
        </h2>
        
        <p className="text-[#64748b] text-[16px] font-medium leading-relaxed mb-16 mx-auto max-w-2xl">
          Everything you need to know about our staffing and hiring process.
        </p>

        <div className="w-full flex justify-center mb-16">
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#024a9d] to-[#e11d48] rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {[
            { q: "How long does hiring take?", a: "Hiring typically takes 36-72 hours depending on urgency, location, profile availability and hiring model." },
            { q: "How long do I get support?", a: "Support duration depends on the selected service package. We assist with profile sharing, follow-ups and replacement support during the package validity period." },
            { q: "Do you provide replacement?", a: "Yes. Valid replacements are provided according to the selected service package and applicable terms." },
            { q: "What are the charges?", a: "Service charges depend on the number of staff required, salary offered and selected service support package." },
            { q: "Is accommodation mandatory?", a: "No. Accommodation is not mandatory for local staff. However, providing accommodation often helps attract better candidates and improves staff retention." },
            { q: "What is the refund policy?", a: "If no candidate profiles are shared, a 100% refund will be provided as per our refund policy. If profiles, trials or recruitment activities have already been conducted, refunds will be processed according to the applicable policy terms." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border-2 border-blue-50/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-3xl p-7 md:p-9 text-left hover:border-blue-200 transition-colors h-full flex flex-col">
               <h3 className="font-extrabold text-[17px] text-[#024a9d] leading-snug">{faq.q}</h3>
               <p className="text-[14.5px] font-medium text-[#475569] mt-3.5 leading-relaxed">
                  {faq.a}
               </p>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/919876543210" className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 z-50">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.066.381-.039c.101-.099.445-.521.566-.702.121-.181.24-.15.4-.092.16.058 1.011.478 1.185.565s.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.082 2.115c5.448 0 9.886 4.437 9.886 9.885 0 5.449-4.438 9.887-9.886 9.887-1.739 0-3.32-.441-4.664-1.201l-5.334 1.401 1.428-5.201c-.815-1.396-1.315-3.09-1.315-4.886 0-5.448 4.435-9.885 9.885-9.885z"/></svg>
      </a>
      
    </main>
  );
}
