"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail, UserRound } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Add shadow on scroll for a premium feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "About Us", href: "/about", hasDropdown: true },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Packages", href: "/packages", hasDropdown: true },
    { name: "Training", href: "/training", hasDropdown: false },
  ];

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      {/* Top Bar - Classic Service Vibe */}
      <div className={`bg-slate-900 text-gray-300 py-2 transition-all duration-300 ${scrolled ? 'hidden' : 'block'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@zomocoock.com" className="hidden sm:flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@zomocoock.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <UserRound className="w-4 h-4" />
              <span>Login / Register</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo area - Referencing uploaded image */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img src="/logo.jpeg" alt="Zomocook Logo" className="h-12 md:h-14 w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Menu - Classic Typography & Hover Effects */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group px-4 py-8 -my-8 flex items-center">
                  <Link 
                    href={link.href}
                    className="flex items-center gap-1 text-[15px] font-semibold text-slate-700 group-hover:text-blue-700 transition-colors"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition-colors" />
                    )}
                  </Link>
                  {/* Classic underline animation */}
                  <span className="absolute bottom-6 left-4 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>

                  {/* Mega Menu Specifically for About Us */}
                  {link.name === "About Us" && (
                    <div className="absolute top-[80px] left-1/2 -translate-x-[30%] mt-0 w-[600px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex overflow-hidden cursor-default border border-slate-100 z-50">
                      
                      {/* Left Sidebar Links */}
                      <div className="w-[40%] py-8 px-8 bg-white flex flex-col">
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-1 h-5 bg-[#3b82f6]"></div>
                          <h4 className="font-extrabold text-[15px] uppercase text-slate-900 tracking-wide">ABOUT US</h4>
                        </div>
                        <ul className="space-y-4 text-[14px] font-medium text-slate-700">
                          <li><Link href="/experts" className="hover:text-blue-600 transition-colors">Our Experts</Link></li>
                          <li><Link href="/partner" className="hover:text-blue-600 transition-colors">Join as Partner</Link></li>
                          <li><Link href="/about" className="text-blue-500 font-semibold">About Company</Link></li>
                          <li><Link href="/agent" className="hover:text-blue-600 transition-colors">Join As Agent</Link></li>
                        </ul>
                      </div>

                      {/* Right Promo Banner */}
                      <div className="w-[60%] bg-[#024a9d] p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                          Hire A Cook! In Just Few Clicks...
                        </h3>
                        <p className="text-blue-100/90 text-[13px] mb-6 font-medium tracking-wide">
                          Trained | Trusted | Verified
                        </p>
                        <button className="bg-white text-slate-900 font-bold px-6 py-2.5 rounded-lg text-sm w-fit hover:bg-slate-100 transition-transform hover:scale-105 shadow-sm">
                          Hire Now!
                        </button>
                      </div>

                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <div className="bg-black hover:bg-slate-800 text-white cursor-pointer px-6 py-2.5 rounded-lg flex items-center gap-3 transition-transform hover:scale-105 shadow-md">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" 
                  alt="Play Store"
                  className="w-5 h-5"
                />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase leading-none opacity-80">Get it on</span>
                  <span className="text-sm font-bold leading-none mt-0.5">Google Play</span>
                </div>
              </div>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  if (isOpen) setOpenDropdown(null);
                }}
                className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 bg-slate-50 rounded-lg border border-slate-100"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden transition-all duration-500 overflow-y-auto ${isOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 bg-white border-t border-slate-100 shadow-xl space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    if (link.hasDropdown) {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === link.name ? null : link.name);
                    } else {
                      setIsOpen(false);
                      setOpenDropdown(null);
                    }
                  }}
                  className="block px-4 py-3 rounded-lg text-base font-semibold text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors flex justify-between items-center"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                
                {/* Mobile Submenu for About Us */}
                {link.name === "About Us" && openDropdown === "About Us" && (
                  <div className="pl-6 space-y-1 mt-1 border-l-2 border-red-100 ml-4 overflow-hidden">
                    <Link href="/experts" onClick={() => { setIsOpen(false); setOpenDropdown(null); }} className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-[#024a9d] hover:bg-blue-50 transition-colors">Our Experts</Link>
                    <Link href="/partner" onClick={() => { setIsOpen(false); setOpenDropdown(null); }} className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-[#024a9d] hover:bg-blue-50 transition-colors">Join as Partner</Link>
                    <Link href="/about" onClick={() => { setIsOpen(false); setOpenDropdown(null); }} className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-[#024a9d] hover:bg-blue-50 transition-colors">About Company</Link>
                    <Link href="/agent" onClick={() => { setIsOpen(false); setOpenDropdown(null); }} className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-[#024a9d] hover:bg-blue-50 transition-colors">Join As Agent</Link>
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4 pt-4 border-t border-slate-100">
              <button className="w-full bg-black text-white px-5 py-3 rounded-lg flex items-center justify-center gap-3 shadow-md">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" 
                  alt="Play Store"
                  className="w-5 h-5"
                />
                <div className="flex flex-col text-left font-sans">
                  <span className="text-[10px] uppercase leading-none opacity-80">Get it on</span>
                  <span className="text-sm font-bold leading-none mt-0.5">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
