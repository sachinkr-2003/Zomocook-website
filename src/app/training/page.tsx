import { 
  ChefHat, 
  GraduationCap, 
  UtensilsCrossed, 
  Users, 
  IndianRupee, 
  Briefcase, 
  HandPlatter,
  CheckCircle2,
  ArrowRight,
  MapPin,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import Presence from '@/components/Presence';

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden selection:bg-blue-200">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#024a9d] pt-28 pb-16 lg:pt-36 lg:pb-32 overflow-hidden flex items-center min-h-[70vh] lg:min-h-[80vh]">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[100%] bg-blue-500/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-cyan-400/20 blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left pt-10 sm:pt-0">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                Zomocook Academy
              </div>
              
              <h1 className="text-[38px] sm:text-5xl lg:text-[64px] font-black text-white leading-[1.1] mb-6 tracking-tight relative">
                Become A <br className="hidden lg:block"/>
                <span className="text-blue-200">Professional Cook</span> <br className="hidden lg:block"/>
                in 15 Days
              </h1>
              <p className="text-blue-50 text-base sm:text-lg lg:text-xl font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-95 mb-10 border-l-4 border-blue-400 pl-4 text-left">
                Learn Cooking & Hospitality Skills with Practical Training + Job Placement Support
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-[#024a9d] hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 shadow-black/10">
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center lg:justify-end items-center relative w-full h-full mt-4 sm:mt-0">
              <div className="relative z-10 w-full max-w-[400px] lg:max-w-[460px] rounded-3xl p-1.5 bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] transform transition-transform duration-700 hover:scale-[1.02] hover:-translate-y-2">
                <img 
                   src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" 
                   alt="Professional Cook Training"
                   className="w-full h-auto aspect-[4/5] object-cover rounded-2xl"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4 animate-bounce hover:animate-none transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Briefcase className="text-[#024a9d] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-[15px] leading-tight">Job Placement</h4>
                    <p className="text-slate-500 font-medium text-xs">100% Support</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTRO & WHO CAN JOIN (Split layout) */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 bg-white relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="bg-blue-50/50 p-8 sm:p-12 rounded-[40px] border border-blue-100/50">
            <h2 className="text-[#024a9d] text-3xl sm:text-4xl font-black mb-6 tracking-tight">Let's Explain This Simply</h2>
            <div className="w-12 h-1.5 bg-blue-500 rounded-full mb-8"></div>
            <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
              At Zomocook, we believe cooking is not just a skill, but a way to build a career. Our mission is to help people learn cooking and start earning with confidence. We offer practical chef training and hospitality courses for beginners and experienced learners, focusing on real-world skills for jobs and business.
            </p>
          </div>

          <div className="text-center lg:text-left lg:pl-10 relative">
            <div className="absolute top-0 right-10 w-32 h-32 bg-[#38bdf8]/10 rounded-full blur-[40px] -z-10"></div>
            <h2 className="text-[#024a9d] text-3xl sm:text-4xl font-black mb-4 tracking-tight">Who Can Join</h2>
            <p className="text-slate-500 font-medium text-lg border-b border-slate-100 pb-6 mb-8 inline-block lg:block lg:w-max">Inclusive programs for everyone.</p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              {["Housewives", "Beginners", "Job seekers", "Anyone interested in cooking"].map((tag, i) => (
                <span key={i} className="bg-white border border-slate-200 shadow-sm text-slate-700 font-bold text-sm px-5 py-2.5 rounded-full hover:border-[#024a9d] hover:text-[#024a9d] transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. COURSES SECTION */}
      <section className="py-20 lg:py-32 bg-slate-50 relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <h2 className="text-[32px] sm:text-4xl lg:text-5xl font-black text-[#024a9d] tracking-tight mb-4 leading-tight">
              Explore Our Training Programs
            </h2>
            <p className="text-slate-500 font-medium text-base sm:text-xl">
              Find the perfect course to learn, grow, and succeed.
            </p>
            <div className="w-16 h-1 mt-6 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Course 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border-2 border-transparent hover:border-blue-100 transition-all duration-300 hover:shadow-xl flex flex-col group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
               <div className="w-16 h-16 rounded-2xl bg-[#024a9d] text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
                 <ChefHat className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-black text-[#024a9d] mb-4 group-hover:text-blue-600 transition-colors">Chef Training</h3>
               <ul className="text-slate-600 text-sm font-medium space-y-2 mb-8 flex-1">
                 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Commercial Training</li>
                 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Home cook Training</li>
                 <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Placement support</li>
               </ul>
               <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                 <p className="text-[13px] text-slate-500 font-bold mb-1">Duration: <span className="text-green-600">30 Days Program</span></p>
                 <p className="text-[13px] text-slate-500 font-bold">Course Fees: <span className="text-green-600">Rs.14,999/-</span></p>
               </div>
               <button className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider relative overflow-hidden group/btn">
                 <span className="relative z-10 flex items-center gap-2">View Course <ArrowRight className="w-4 h-4" /></span>
               </button>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border-2 border-transparent hover:border-blue-100 transition-all duration-300 hover:shadow-xl flex flex-col group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
               <div className="w-16 h-16 rounded-2xl bg-[#024a9d] text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
                 <GraduationCap className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-black text-[#024a9d] mb-4 group-hover:text-blue-600 transition-colors">Special Courses</h3>
               <p className="text-slate-600 text-sm font-medium mb-3">Learn high-demand food:</p>
               <p className="text-slate-500 text-sm font-semibold leading-relaxed mb-8 flex-1">
                 Momos | Biryani | Fast Food | Chaap | Pizza | Chaat Master
               </p>
               <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                 <p className="text-[13px] text-slate-500 font-bold mb-1">Duration: <span className="text-green-600">10 Days Program</span></p>
                 <p className="text-[13px] text-slate-500 font-bold">Course Fees: <span className="text-green-600">Rs.9,999/-</span></p>
               </div>
               <button className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                 View Course <ArrowRight className="w-4 h-4" />
               </button>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border-2 border-transparent hover:border-blue-100 transition-all duration-300 hover:shadow-xl flex flex-col group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
               <div className="w-16 h-16 rounded-2xl bg-[#024a9d] text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
                 <UtensilsCrossed className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-black text-[#024a9d] mb-4 group-hover:text-blue-600 transition-colors">Cuisine Courses</h3>
               <p className="text-slate-600 text-sm font-medium mb-3">Become expert in:</p>
               <p className="text-slate-500 text-sm font-semibold leading-relaxed mb-8 flex-1">
                 Chinese, Continental, South & North Indian cooking
               </p>
               <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                 <p className="text-[13px] text-slate-500 font-bold mb-1">Duration: <span className="text-green-600">30 Days Program</span></p>
                 <p className="text-[13px] text-slate-500 font-bold">Course Fees: <span className="text-green-600">Rs.14,999/-</span></p>
               </div>
               <button className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                 View Course <ArrowRight className="w-4 h-4" />
               </button>
            </div>

            {/* Course 4 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border-2 border-transparent hover:border-blue-100 transition-all duration-300 hover:shadow-xl flex flex-col group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
               <div className="w-16 h-16 rounded-2xl bg-[#024a9d] text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
                 <Users className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-black text-[#024a9d] mb-4 group-hover:text-blue-600 transition-colors">Staff Training</h3>
               <p className="text-slate-600 text-sm font-medium mb-3">Get trained for Job Ready Skills:</p>
               <p className="text-slate-500 text-sm font-semibold leading-relaxed mb-8 flex-1">
                 Captain, Waiter & kitchen assistant roles
               </p>
               <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                 <p className="text-[13px] text-slate-500 font-bold mb-1">Duration: <span className="text-green-600">5 Days Program</span></p>
                 <p className="text-[13px] text-slate-500 font-bold">Course Fees: <span className="text-green-600">Rs.3,999/-</span></p>
               </div>
               <button className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                 View Course <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US & PROGRAM HIGHLIGHTS */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <h2 className="text-[32px] sm:text-4xl lg:text-5xl font-black text-[#024a9d] tracking-tight mb-4 leading-tight">
              Why Choose Zomocook Training?
            </h2>
            <p className="text-slate-600 font-bold text-base sm:text-xl">
              Practical Training + Job Placement Support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 mb-24">
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <HandPlatter className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#024a9d] mb-3">Hands On Training</h3>
              <p className="text-slate-500 font-medium text-[15px] leading-relaxed max-w-[280px]">
                100% Practical Training from Experienced Professional Chefs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <IndianRupee className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#024a9d] mb-3">Affordable Fees Structure</h3>
              <p className="text-slate-500 font-medium text-[15px] leading-relaxed max-w-[280px]">
                Get the best training experience at a cost-effective price.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <Briefcase className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#024a9d] mb-3">Job Placement</h3>
              <p className="text-slate-500 font-medium text-[15px] leading-relaxed max-w-[280px]">
                Partnered with 30+ brands and 650+ restaurants for placement opportunities.
              </p>
            </div>

          </div>

          {/* Program Highlights */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#024a9d] tracking-tight">
              Program Highlights
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-red-100 rounded-3xl p-8 sm:p-10 text-center shadow-lg shadow-red-50 hover:border-red-200 transition-colors">
              <p className="text-slate-700 font-bold text-lg mb-3">15+ Days Training</p>
              <p className="text-slate-500 font-medium text-base">Live Cooking Practice</p>
            </div>
            <div className="bg-white border-2 border-red-100 rounded-3xl p-8 sm:p-10 text-center shadow-lg shadow-red-50 hover:border-red-200 transition-colors">
              <p className="text-slate-700 font-bold text-lg mb-3">Training Certificate</p>
              <p className="text-slate-500 font-medium text-base">Real Kitchen Experience</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. TRAINING CENTER (Map) */}
      <section className="py-20 lg:py-32 bg-slate-50 border-t border-slate-100 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#024a9d] tracking-tight mb-8">
              Training Center
            </h2>
            
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-lg border border-slate-100 max-w-2xl mx-auto mb-12 transform hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-red-100 text-[#e11d48] flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#024a9d] mb-2">Address</h3>
              <p className="text-slate-500 font-medium text-base sm:text-lg">
                B1-91/D, Block B1, Sector G, Jankipuram,<br/>
                Lucknow, Uttar Pradesh 226021
              </p>
            </div>
            
            {/* Google Maps iFrame */}
            <div className="w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden border-4 border-red-500 shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.678077579893!2d80.93883901614217!3d26.903803875317765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957cdce3238eb%3A0xe758d4a51e60086!2sJankipuram%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703665518921!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0"
              ></iframe>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (Styled List) */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 bg-white border-t border-slate-100 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-[32px] sm:text-4xl lg:text-5xl font-black text-[#024a9d] tracking-tight">
              FAQ's
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            
            {[
              {
                q: "1. What is Zomocook?",
                a: "Zomocook is a platform that connects restaurants and homes with experienced chefs and cooks for various culinary needs."
              },
              {
                q: "What services does Zomocook offer?",
                a: "Zomocook offers complete chef solution for commercial needs either it for permanent requirment for staff or temporary staffing needs when your chef on leave. also we provide chef and cook hiring services for events, parties, and home cooking, including specialized cuisines."
              },
              {
                q: "How do I book a chef or cook through Zomocook?",
                a: "Simply visit our website or Call to 9519808734, select the type of service you need, choose your preferred chef or cook, and follow the booking process."
              },
              {
                q: "What types of chefs and cooks are available on Zomocook?",
                a: "We have a wide range of experienced chefs and cooks specializing in various cuisines, including Japanese, Indian, Italian, and more."
              },
              {
                q: "Can I request a specific chef or cook?",
                a: "Yes, you can choose from our list of available professionals or request a specific chef/cook based on your preferences."
              },
              {
                q: "Is there a cancellation policy?",
                a: "Yes, please refer to our terms and conditions for details on our cancellation and refund processes."
              },
              {
                q: "What types of events do you cater to?",
                a: "We cater to a wide range of events, including corporate events, weddings, birthdays, and more."
              },
              {
                q: "Can Zomocook provide complete chef team for new or running restaurant?",
                a: "Zomocook offers comprehensive chef team solutions for both new and running restaurants. Our services include: Experienced Chefs Kitchen Staff, Customized Solutions and also help to setup kitchen and all required documentation process."
              },
              {
                q: "Can I find temporary staff from Zomocook in Lucknow?",
                a: "Yes, we offer emergency and short-term temporary staffing solutions across Lucknow for any immediate operational requirements."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-50/50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="bg-slate-100/80 px-6 sm:px-8 py-5 flex items-start gap-4">
                  <h3 className="text-[#0e1726] font-bold text-base sm:text-lg flex-1 leading-snug">{faq.q}</h3>
                </div>
                <div className="px-6 sm:px-8 py-6 bg-white">
                  <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 7. PRESENCE FOOTER */}
      <Presence />

    </div>
  );
}
