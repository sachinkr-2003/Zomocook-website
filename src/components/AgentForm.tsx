import React from 'react';
import { Send } from 'lucide-react';

export default function AgentForm() {
  return (
    <section id="agent-form" className="py-12 lg:py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] border border-slate-200 lg:flex lg:h-[460px]">
          
          {/* Left Side - Tall Premium Image */}
          <div className="lg:w-[45%] relative hidden lg:block h-full">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
              alt="Professional Business Agent"
              className="w-full h-full object-cover object-top"
            />
            {/* Elegant Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-10 text-white w-full">
              <h3 className="text-3xl font-extrabold mb-4 leading-tight shadow-sm">Start Your <br/>Journey Today.</h3>
              <p className="text-slate-200 text-[15px] font-medium opacity-90 leading-relaxed max-w-sm">
                Join our elite agency network. Our team will review your details securely and prioritize your onboarding.
              </p>
            </div>
          </div>
          
          {/* Right Side - Classic Form */}
          <div className="lg:w-[55%] p-6 lg:p-8 lg:pl-10 bg-white flex flex-col justify-center h-full overflow-hidden">
            
            <div className="lg:hidden mb-4">
               <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Start Your Journey Today</h3>
               <p className="text-slate-500 text-sm">Join our elite agency network by filling out the details below.</p>
            </div>

            <div className="w-8 h-1 bg-[#024a9d] mb-4 rounded-full hidden lg:block"></div>
            <h4 className="text-[22px] font-extrabold text-slate-900 mb-6 hidden lg:block tracking-tight">Agent Application</h4>
            
            <form className="space-y-4 lg:space-y-5">
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter full name"
                    className="w-full bg-slate-50/50 border border-slate-200 hover:border-slate-300 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#024a9d] focus:bg-white transition-all font-medium text-slate-700"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91"
                    className="w-full bg-slate-50/50 border border-slate-200 hover:border-slate-300 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#024a9d] focus:bg-white transition-all font-medium text-slate-700"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-slate-50/50 border border-slate-200 hover:border-slate-300 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#024a9d] focus:bg-white transition-all font-medium text-slate-700"
                />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">City / Location</label>
                <input 
                  type="text" 
                  placeholder="Where do you operate?"
                  className="w-full bg-slate-50/50 border border-slate-200 hover:border-slate-300 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#024a9d] focus:bg-white transition-all font-medium text-slate-700"
                />
              </div>
              
              <div className="pt-2">
                <button 
                  type="button"
                  className="w-full bg-[#024a9d] hover:bg-[#013576] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_10px_20px_rgba(2,74,157,0.15)] group"
                >
                  Submit Application
                  <Send className="w-4 h-4 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
