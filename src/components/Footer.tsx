import React from 'react';
import { Phone, Mail, MapPin, Play } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const presenceLinks = [
    "Cook in Lucknow", "Cook in Delhi", "Cook in Noida", "Cook in Ghaziabad", "Cook in Mumbai",
    "Cook in Hyderabad", "Cook in Kolkata", "Cook in Kanpur", "Cook in Agra", "Cook in Ayodhya",
    "Cook in Bengaluru", "Cook in Ludhiana", "Cook in Bhopal", "Cook in Gorakhpur", "Cook in Prayagraj", "Cook in Varanasi"
  ];

  const occasionLinks = [
    "Chef for Birthday Party", "Chef for House Party", "Chef for Wedding Functions", "Chef for Corporate Event",
    "Chef for Anniversary Party", "Chef for Kids Party", "Chef for Kitty Party", "Chef for Bachelor Party"
  ];

  const aboutLinks = [
    "What We Do", "Blogs", "Privacy Policy", "Cancellation & Refunds", "Complaints",
    "Terms & Conditions", "Contact us", "How it works ?", "Delete My Account"
  ];

  const chefLinks = [
    "Join As Chef", "Top Chefs", "Code of Conduct", "Training Program", 
    "Chef's Gallery", "Find SRN( Staff Regi. Number)", "Order Chef Kit"
  ];

  const serviceLinks = [
    "Home Cook", "Book for Occasion/Party", "Book a Chef for Hotel/Restaurant/Cafe",
    "List of Services", "Packages", "Package Terms & Conditions", "Raise Replacement Request"
  ];

  return (
    <footer className="relative bg-[#024a9d] text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top SEO / Keywords Section */}
        <div className="mb-12 space-y-10">
          
          {/* Presence */}
          <div>
            <h3 className="text-xl font-bold mb-4 inline-block border-b-2 border-white pb-1">Our Presence</h3>
            <div className="text-[13px] md:text-[14px] leading-relaxed font-medium text-blue-100 flex flex-wrap gap-x-2 gap-y-1">
              {presenceLinks.map((link, i) => (
                <React.Fragment key={i}>
                  <Link href="#" className="hover:text-white transition-colors">{link}</Link>
                  {i < presenceLinks.length - 1 && <span className="opacity-60">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className="h-px w-full bg-blue-700/50"></div>
          
          {/* Occasions */}
          <div>
            <h3 className="text-xl font-bold mb-4 inline-block border-b-2 border-white pb-1">For Occasions</h3>
            <div className="text-[13px] md:text-[14px] leading-relaxed font-medium text-blue-100 flex flex-wrap gap-x-2 gap-y-1">
              {occasionLinks.map((link, i) => (
                <React.Fragment key={i}>
                  <Link href="#" className="hover:text-white transition-colors">{link}</Link>
                  {i < occasionLinks.length - 1 && <span className="opacity-60">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className="h-px w-full bg-blue-700/50"></div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          
          {/* Column 1: About Us */}
          <div>
            {/* Official Logo */}
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/logo.jpeg" 
                alt="Zomocook Logo" 
                className="h-16 lg:h-20 w-auto object-contain rounded-md shadow-md"
              />
            </Link>
            
            <h3 className="text-lg font-bold mb-4 inline-block border-b-2 border-white pb-1">About Us</h3>
            <ul className="space-y-2.5 text-sm font-medium text-blue-50">
              {aboutLinks.map((link, i) => (
                <li key={i}><Link href="#" className="hover:text-white transition-colors hover:underline underline-offset-4">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 2: Chef & Home Cook */}
          <div>
            <h3 className="text-lg font-bold mb-4 inline-block border-b-2 border-white pb-1">For Chef & Home Cook</h3>
            <ul className="space-y-2.5 text-sm font-medium text-blue-50 mb-8">
              {chefLinks.map((link, i) => (
                <li key={i}><Link href="#" className="hover:text-white transition-colors hover:underline underline-offset-4">{link}</Link></li>
              ))}
            </ul>
            
            {/* Social Icons using inline SVGs to avoid version conflicts */}
            <div className="flex items-center gap-3">
              <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#024a9d] hover:scale-110 transition-transform">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#024a9d] hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162A4 4 0 1112 8a4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100-2.881 1.44 1.44 0 000 2.881z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 inline-block border-b-2 border-white pb-1">Our Services</h3>
            <ul className="space-y-2.5 text-sm font-medium text-blue-50">
              {serviceLinks.map((link, i) => (
                <li key={i}><Link href="#" className="hover:text-white transition-colors hover:underline underline-offset-4">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect With Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 inline-block border-b-2 border-white pb-1">Connect With Us</h3>
            <ul className="space-y-3.5 text-sm font-medium text-blue-50 mb-8">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+91 951 980 8734</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>zomocookhelp@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Jankipuram, Lucknow</span>
              </li>
            </ul>

            {/* App Download Box */}
            <div className="bg-[#e42e23] border border-red-500 rounded-xl p-5 shadow-lg group cursor-pointer hover:bg-[#d0241a] transition-colors">
              <h4 className="font-bold text-[15px] leading-tight mb-4 pr-4">
                For Quick Hiring - Download ZomoCook App
              </h4>
              <button className="bg-black text-white flex items-center gap-3 px-4 py-2 rounded-lg w-fit hover:scale-105 transition-transform">
                <Play className="w-6 h-6 fill-current text-current" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] text-gray-300 font-semibold mb-0.5 uppercase tracking-wider">GET IT ON</span>
                  <span className="text-base font-bold font-sans">Google Play</span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-white text-[#024a9d] py-5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm font-bold">
          Copyright © 2026 Zomocook | Powered by Zomocook
        </div>

        {/* WhatsApp Floating FAB */}
        <Link 
          href="#"
          className="absolute right-4 sm:right-8 lg:right-12 bottom-1/2 translate-y-1/2 w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all"
        >
          {/* Custom SVG for accurate WhatsApp logo */}
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </Link>
      </div>
    </footer>
  );
}
