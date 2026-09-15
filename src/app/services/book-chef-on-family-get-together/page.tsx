"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Soup, UtensilsCrossed, Star, MapPin, ChefHat, Check, Heart, Users, Home, Flame, PartyPopper } from 'lucide-react';
import ServiceLeadForm from '@/components/forms/ServiceLeadForm';

export default function PrivateChefPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const privateFaqs = [
    { q: "How much does Chef on Demand cost?", a: "Charges vary depending on guest count, menu selection, location, cuisine type, and event duration." },
    { q: "Do you provide ingredients?", a: "No, clients provide the ingredients. However, we provide a detailed ingredient list and exact quantity recommendations based on your selected menu." },
    { q: "How early should I book a chef?", a: "We recommend booking at least 3 to 5 days in advance, especially for weekends and festivals, to ensure chef availability." },
    { q: "Can I customize the menu?", a: "Yes, the menu can be completely customized based on your preferences, dietary requirements, and the type of event." },
    { q: "Do chefs bring utensils and equipment?", a: "Chefs do not bring utensils. They use the equipment and utensils available in your kitchen to prepare the meals." },
    { q: "What cuisines are available?", a: "Our chefs specialize in North Indian, Mughlai, South Indian, Chinese, Continental, Italian, and Mexican cuisines, among others." }
  ];

  return (
    <main className="min-h-screen bg-[#fffcf9] font-sans selection:bg-[#fb923c] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="pt-36 sm:pt-48 pb-24 px-4 sm:px-6 lg:px-8 text-center max-w-6xl mx-auto">
        <div className="bg-[#fff7ed] text-[#ea580c] text-[12px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full mb-8 shadow-sm inline-flex items-center gap-2 border border-orange-100">
          Chef On Demand Service
        </div>
        
        <h1 className="text-4xl sm:text-[54px] font-black text-[#1e293b] leading-[1.15] mb-6 tracking-tight drop-shadow-sm">
          Private Chef for Your Family Get-Together
        </h1>
        
        <p className="text-[#475569] text-[17px] font-medium leading-relaxed mb-10 max-w-4xl mx-auto">
          Enjoy restaurant-style food at home with experienced chefs who cook fresh at your location for birthdays, anniversaries, house parties, family gatherings, and special celebrations.
        </p>

        {/* Categories Pills */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14 max-w-5xl mx-auto">
          {["Birthday Parties", "Anniversary Celebrations", "House Parties", "Family Gatherings", "Special Events"].map((pill, i) => (
             <span key={i} className="bg-white border border-slate-200 shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-[#334155] text-[13.5px] font-bold px-6 py-3 rounded-full cursor-default">
               {pill}
             </span>
          ))}
        </div>
        
        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row w-full gap-5 justify-center items-center">
          <Link href="#contact-form" className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-10 rounded-xl shadow-md transition-colors text-[16px] w-full sm:w-auto inline-block">
            Book a Chef Now
          </Link>
          <Link href="#signature-menu" scroll={true} className="bg-white border-2 border-[#ea580c] text-[#ea580c] hover:bg-[#fff7ed] font-bold py-3.5 px-10 rounded-xl transition-colors text-[16px] w-full sm:w-auto inline-flex items-center justify-center">
            View Sample Menus
          </Link>
        </div>
      </section>

      {/* ================= PERFECT FOR CELEBRATION ================= */}
      <section className="bg-white pt-10 pb-10 text-center border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[32px] font-black text-[#1e293b] leading-tight mb-3">
            Perfect for Every Celebration
          </h2>
          <p className="text-[#64748b] text-[15px] font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether it's an intimate family gathering or a grand celebration, our professional chefs create memorable dining experiences at your home.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: '🎂', lbl: "Birthday Parties" },
              { icon: '💍', lbl: "Anniversary Celebrations" },
              { icon: '🏡', lbl: "House Parties" },
              { icon: '🎉', lbl: "Kitty Parties" },
              { icon: '👨‍👩‍👧‍👦', lbl: "Family Get-Togethers", active: true },
              { icon: '🪔', lbl: "Festival Celebrations" },
              { icon: '🔑', lbl: "Housewarming Parties" },
              { icon: '🍽️', lbl: "Special Dinner Events" },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-[12px] p-4 flex flex-col items-center justify-center transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-md ${item.active ? 'border-[2px] border-[#ea580c] shadow-[0_4px_20px_rgba(234,88,12,0.15)]' : 'border border-slate-100'}`}
              >
                <div className="text-[28px] sm:text-[32px] mb-2 drop-shadow-sm leading-none">{item.icon}</div>
                <h3 className="font-bold text-[#1e293b] text-[13px] sm:text-[14px] text-center">{item.lbl}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESTAURANT EXPERIENCE ================= */}
      <section className="bg-[#fffcf9] pt-10 pb-12 text-center border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[32px] font-black text-[#1e293b] leading-tight mb-3">
            Restaurant Experience at Your Home
          </h2>
          <p className="text-[#64748b] text-[15px] font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            Enjoy professional chef services, customized menus, and freshly prepared food for a truly memorable dining experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { emoji: '👨‍🍳', title: 'Professional Chefs', desc: 'Experts in Indian, Mughlai, Chinese, South Indian and Multi-Cuisine cooking.' },
              { emoji: '🍲', title: 'Freshly Cooked', desc: 'Meals are prepared fresh in your kitchen for superior taste and hygiene.' },
              { emoji: '📋', title: 'Customized Menus', desc: 'Choose dishes based on your guests, event type, and budget.' },
              { emoji: '✨', title: 'Hassle-Free Service', desc: 'Relax and enjoy your event while the chef manages food preparation.' },
              { emoji: '⭐', title: 'Trusted by Families', desc: 'Preferred by thousands of customers for private parties and celebrations.' },
              { emoji: '📍', title: 'Multi-City Availability', desc: 'Quick chef booking support available across major cities in India.' }
            ].map((f, i) => (
              <div key={i} className="bg-white p-5 rounded-[16px] shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col items-start text-left hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#fff7ed] flex items-center justify-center mb-3 text-xl border border-orange-50">
                  {f.emoji}
                </div>
                <h3 className="font-extrabold text-[15px] sm:text-[16px] text-[#0f172a] mb-2">{f.title}</h3>
                <p className="text-[#64748b] text-[13px] sm:text-[14px] font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SIGNATURE MENU ================= */}
      <section id="signature-menu" className="bg-white pt-12 pb-16 text-center border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] sm:text-[36px] font-black text-[#1e293b] leading-tight mb-4">
            Explore Our Signature Menu Collection
          </h2>
          <p className="text-[#64748b] text-[15px] font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
            From intimate family dinners to grand celebrations, our chefs can prepare hundreds of dishes across Indian and International cuisines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {/* Column 1: North Indian */}
            <div className="bg-white rounded-[24px] p-6 border border-slate-200 shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex flex-col items-center hover:-translate-y-1 transition-transform">
               <div className="w-12 h-12 rounded-full bg-[#fff7ed] flex items-center justify-center text-2xl mb-4">🍛</div>
               <h3 className="font-extrabold text-[18px] text-[#1e293b] mb-4">North Indian & Mughlai</h3>
               
               <ul className="w-full text-left space-y-0 text-[14px] font-semibold text-[#475569] divide-y divide-slate-100 flex-grow mb-6">
                 <li className="py-2.5">Paneer Tikka</li>
                 <li className="py-2.5">Hariyali Kebab</li>
                 <li className="py-2.5">Dahi Ke Kebab</li>
                 <li className="py-2.5">Dal Makhani</li>
                 <li className="py-2.5">Paneer Lababdar</li>
                 <li className="py-2.5">Kadhai Paneer</li>
                 <li className="py-2.5">Shahi Paneer</li>
                 <li className="py-2.5">Butter Chicken</li>
                 <li className="py-2.5">Chicken Tikka Masala</li>
                 <li className="py-2.5">Mutton Rogan Josh</li>
                 <li className="py-2.5">Chicken Biryani</li>
                 <li className="py-2.5">Mutton Biryani</li>
               </ul>

               <Link href="#contact-form" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm block text-center">
                 View 120+ More Dishes
               </Link>
            </div>

            {/* Column 2: Chinese & Asian */}
            <div className="bg-white rounded-[24px] p-6 border border-slate-200 shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex flex-col items-center hover:-translate-y-1 transition-transform">
               <div className="w-12 h-12 rounded-full bg-[#fff7ed] flex items-center justify-center text-2xl mb-4">🍜</div>
               <h3 className="font-extrabold text-[18px] text-[#1e293b] mb-4">Chinese & Asian</h3>
               
               <ul className="w-full text-left space-y-0 text-[14px] font-semibold text-[#475569] divide-y divide-slate-100 flex-grow mb-6">
                 <li className="py-2.5">Honey Chilli Potato</li>
                 <li className="py-2.5">Chilli Paneer</li>
                 <li className="py-2.5">Veg Manchurian</li>
                 <li className="py-2.5">Chilli Mushroom</li>
                 <li className="py-2.5">Chicken Wings</li>
                 <li className="py-2.5">Chicken Spring Rolls</li>
                 <li className="py-2.5">Veg Fried Rice</li>
                 <li className="py-2.5">Hakka Noodles</li>
                 <li className="py-2.5">Chicken Fried Rice</li>
                 <li className="py-2.5">Chicken Noodles</li>
                 <li className="py-2.5">Kung Pao Chicken</li>
                 <li className="py-2.5">Chicken Manchurian</li>
               </ul>

               <Link href="#contact-form" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm block text-center">
                 View 80+ More Dishes
               </Link>
            </div>

            {/* Column 3: Barbecue & Tandoor */}
            <div className="bg-white rounded-[24px] p-6 border border-slate-200 shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex flex-col items-center hover:-translate-y-1 transition-transform">
               <div className="w-12 h-12 rounded-full bg-[#fff7ed] flex items-center justify-center text-2xl mb-4">🍢</div>
               <h3 className="font-extrabold text-[18px] text-[#1e293b] mb-4">Barbecue & Tandoor</h3>
               
               <ul className="w-full text-left space-y-0 text-[14px] font-semibold text-[#475569] divide-y divide-slate-100 flex-grow mb-6">
                 <li className="py-2.5">Paneer Tikka</li>
                 <li className="py-2.5">Mushroom Tikka</li>
                 <li className="py-2.5">Tandoori Aloo</li>
                 <li className="py-2.5">Tandoori Broccoli</li>
                 <li className="py-2.5">Soya Malai Chaap</li>
                 <li className="py-2.5">Chicken Tikka</li>
                 <li className="py-2.5">Murgh Malai Tikka</li>
                 <li className="py-2.5">Chicken Seekh Kebab</li>
                 <li className="py-2.5">Mutton Seekh Kebab</li>
                 <li className="py-2.5">Fish Tikka</li>
                 <li className="py-2.5">Tandoori Prawns</li>
                 <li className="py-2.5">Tandoori Chicken</li>
               </ul>

               <Link href="#contact-form" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm block text-center">
                 View 75+ More Dishes
               </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-6">
            {/* Column 4: South Indian */}
            <div className="bg-white rounded-[24px] p-6 border border-slate-200 shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex flex-col items-center hover:-translate-y-1 transition-transform">
               <div className="w-12 h-12 rounded-full bg-[#fff7ed] flex items-center justify-center text-2xl mb-4">🌶️</div>
               <h3 className="font-extrabold text-[18px] text-[#1e293b] mb-4">South Indian</h3>
               
               <ul className="w-full text-left space-y-0 text-[14px] font-semibold text-[#475569] divide-y divide-slate-100 flex-grow mb-6">
                 <li className="py-2.5">Dosa</li>
                 <li className="py-2.5">Masala Dosa</li>
                 <li className="py-2.5">Plain Idli</li>
                 <li className="py-2.5">Rava Idli</li>
                 <li className="py-2.5">Medu Vada</li>
                 <li className="py-2.5">Dahi Vada</li>
                 <li className="py-2.5">Uttappam</li>
                 <li className="py-2.5">Sambhar</li>
                 <li className="py-2.5">Rasam</li>
                 <li className="py-2.5">Lemon Rice</li>
                 <li className="py-2.5">Appam</li>
                 <li className="py-2.5">Chettinad Chicken</li>
               </ul>

               <Link href="#contact-form" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm block text-center">
                 View 55+ More Dishes
               </Link>
            </div>

            {/* Column 5: Italian & Mexican */}
            <div className="bg-white rounded-[24px] p-6 border border-slate-200 shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex flex-col items-center hover:-translate-y-1 transition-transform">
               <div className="w-12 h-12 rounded-full bg-[#fff7ed] flex items-center justify-center text-2xl mb-4">🍝</div>
               <h3 className="font-extrabold text-[18px] text-[#1e293b] mb-4 whitespace-nowrap text-center">Italian, Continental &<br/>Mexican</h3>
               
               <ul className="w-full text-left space-y-0 text-[14px] font-semibold text-[#475569] divide-y divide-slate-100 flex-grow mb-6 mt-1">
                 <li className="py-2.5 border-t border-slate-100">Garlic Bread</li>
                 <li className="py-2.5">Bruschetta</li>
                 <li className="py-2.5">Pasta Alfredo</li>
                 <li className="py-2.5">Pasta Arrabbiata</li>
                 <li className="py-2.5">Margherita Pizza</li>
                 <li className="py-2.5">Veg Pizza</li>
                 <li className="py-2.5">Lasagna</li>
                 <li className="py-2.5">Veg Taco</li>
                 <li className="py-2.5">Quesadilla</li>
                 <li className="py-2.5">Baked Vegetables</li>
                 <li className="py-2.5">Mac & Cheese</li>
                 <li className="py-2.5">Chicken Lasagna</li>
               </ul>

               <Link href="#contact-form" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm block text-center">
                 View 60+ More Dishes
               </Link>
            </div>

            {/* Column 6: Desserts & Beverages */}
            <div className="bg-white rounded-[24px] p-6 border border-slate-200 shadow-[0_4px_15px_rgba(0,0,0,0.03)] flex flex-col items-center hover:-translate-y-1 transition-transform">
               <div className="w-12 h-12 rounded-full bg-[#fff7ed] flex items-center justify-center text-2xl mb-4">🍹</div>
               <h3 className="font-extrabold text-[18px] text-[#1e293b] mb-4 whitespace-nowrap text-center">Desserts, Beverages &<br/>Mocktails</h3>
               
               <ul className="w-full text-left space-y-0 text-[14px] font-semibold text-[#475569] divide-y divide-slate-100 flex-grow mb-6 mt-1">
                 <li className="py-2.5 border-t border-slate-100">Virgin Mojito</li>
                 <li className="py-2.5">Fruit Punch</li>
                 <li className="py-2.5">Cold Coffee</li>
                 <li className="py-2.5">Mango Cooler</li>
                 <li className="py-2.5">Shikanji</li>
                 <li className="py-2.5">Fruit Cream</li>
                 <li className="py-2.5">Shahi Tukda</li>
                 <li className="py-2.5">Mango Phirni</li>
                 <li className="py-2.5">Kheer</li>
                 <li className="py-2.5">Moong Dal Halwa</li>
                 <li className="py-2.5">Fruit Custard</li>
                 <li className="py-2.5">Ice Cream Pudding</li>
               </ul>

               <Link href="#contact-form" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm block text-center">
                 View 80+ More Options
               </Link>
            </div>
          </div>

          <div className="mt-10 bg-[#fff7ed] rounded-xl py-6 px-6 text-center max-w-4xl mx-auto border border-orange-100">
             <h4 className="flex justify-center items-center gap-2 text-[#ea580c] font-black text-[16px] sm:text-[18px] mb-2">
               🍽️ Can't Find Your Favorite Dish?
             </h4>
             <p className="text-[#ea580c] font-medium text-[14px] sm:text-[15px] max-w-2xl mx-auto">
               Our chefs can prepare 500+ dishes and fully customize the menu according to your event type, guest count, dietary preferences, and budget.
             </p>
          </div>
        </div>
      </section>

      {/* ================= BOOKING INCLUDES ================= */}
      <section className="bg-[#fffcf9] pt-12 pb-12 text-center border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] sm:text-[36px] font-black text-[#1e293b] leading-tight mb-4">
            Every Booking Includes
          </h2>
          <p className="text-[#64748b] text-[15px] font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            Enjoy a hassle-free experience with professional chef services designed to make your event memorable.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
             {[
               { icon: '🧑‍🍳', doc: 'Professional Chef', info: 'Experienced chefs specialized in party and event cooking.' },
               { icon: '📋', doc: 'Menu Planning', info: 'Expert assistance in selecting dishes according to your event.' },
               { icon: '🍳', doc: 'Cooking at Your Venue', info: 'Fresh food preparation at your home or event location.' },
               { icon: '🛒', doc: 'Ingredient Guidance', info: 'Detailed ingredient list and quantity recommendations.' },
               { icon: '🤝', doc: 'Dedicated Support', info: 'Booking assistance and coordination before your event.' }
             ].map((inc, x) => (
                <div key={x} className="bg-white rounded-[16px] p-5 shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col items-center hover:-translate-y-1 transition-transform">
                   <div className="bg-[#fff7ed] w-12 h-12 rounded-xl flex justify-center items-center text-xl mb-4 border border-orange-50">
                     {inc.icon}
                   </div>
                   <h3 className="font-bold text-[14px] text-[#1e293b] mb-2 text-center">{inc.doc}</h3>
                   <p className="text-[12.5px] text-[#64748b] font-medium text-center leading-relaxed">
                     {inc.info}
                   </p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section id="contact-form" className="bg-white border-y border-slate-100 pt-12 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-[28px] sm:text-[36px] font-black text-[#1e293b] leading-tight mb-3">
            Turn Your Home into a Restaurant
          </h2>
          <p className="text-[#64748b] text-[15px] font-medium leading-relaxed mb-6">
            Enjoy a customized culinary experience with a Private Chef in the comfort of your own home.
          </p>

          <div className="w-12 h-1 bg-[#ea580c] rounded-full mx-auto mb-10"></div>

          <div className="bg-white rounded-[20px] border-[2px] border-[#ea580c] shadow-[0_8px_30px_rgba(0,0,0,0.04)] px-6 sm:px-8 py-8 text-left relative overflow-hidden">
             <h3 className="text-[16px] font-bold text-[#1e293b] mb-6 pb-3 border-b border-slate-100">
               Personal Details
             </h3>
             
             <ServiceLeadForm />
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="bg-[#fffcf9] pt-12 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] sm:text-[36px] font-black text-[#1e293b] leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#64748b] text-[15px] font-medium leading-relaxed mb-10 mx-auto">
            Find answers to common questions about our Chef on Demand service.
          </p>

          <div className="space-y-3 text-left">
            {privateFaqs.map((faq, idx) => (
              <div 
                 key={idx} 
                 onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                 className="bg-white border border-slate-200 shadow-sm rounded-xl px-5 py-4 hover:border-orange-300 transition-colors cursor-pointer"
              >
                 <div className="flex justify-between items-center">
                    <h3 className="font-bold text-[14px] text-[#334155]">{faq.q}</h3>
                    <span className="text-[#ea580c] text-lg font-black">{openFaq === idx ? '-' : '+'}</span>
                 </div>
                 {openFaq === idx && (
                   <div className="mt-3 text-[13.5px] text-[#64748b] leading-relaxed border-t border-slate-100 pt-3">
                     {faq.a}
                   </div>
                 )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA BANNER ================= */}
      <section className="bg-[#fffcf9] pb-16 px-4 sm:px-6 lg:px-8">
         <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-[20px] p-8 sm:p-10 text-center shadow-md">
            
            <h2 className="text-[24px] sm:text-[32px] font-black leading-tight mb-3 text-[#1e293b]">
               Ready to Make Your Event Special?
            </h2>
            <p className="text-[#64748b] text-[14px] sm:text-[15px] font-medium leading-relaxed max-w-xl mx-auto mb-8">
               Book a professional chef and enjoy fresh restaurant-style food prepared at your home for celebrations and special occasions.
            </p>
            
            <div className="w-12 h-1 bg-[#ea580c] rounded-full mx-auto mb-8"></div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
               <Link href="#contact-form" className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto shadow-sm inline-block">
                  Book a Chef Now
               </Link>
               <a href="tel:+919519808734" className="bg-white border-2 border-[#ea580c] text-[#ea580c] hover:bg-[#fff7ed] font-bold py-2.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors w-full sm:w-auto text-[15px]">
                  <span className="text-xl">📞</span> Call Now
               </a>
            </div>
            
            <div className="mt-6 flex justify-center items-center gap-2 text-[#475569] font-medium tracking-wide text-[14px]">
               📱 Call / WhatsApp: <span className="font-bold text-[#1e293b]">9519808734</span>
            </div>
         </div>
      </section>

    </main>
  );
}
