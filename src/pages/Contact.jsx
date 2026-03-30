export default function Contact() {
  // Custom inline styles to guarantee pixel-perfect rendering without CSS config
  const primaryGradient = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)',
  };

  const heroGlow = {
    background: 'radial-gradient(circle at center, rgba(147, 150, 255, 0.15) 0%, transparent 70%)',
  };

  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  return (
    <div className="bg-[#f4f6ff] text-[#515c70] font-body min-h-screen">
      <div className="pt-20">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-20 px-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10" style={heroGlow}></div>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#4647d3]/10 text-[#4647d3] font-label text-[10px] font-bold tracking-widest uppercase">
              CONTACT US
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#242f41] font-headline leading-[1.1]">
              Let’s Connect and Build <br /> <span className="text-[#4647d3]">Something Great</span>
            </h1>
            <p className="text-[#515c70] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Have a question or a project in mind? Reach out and we’ll get back to you. We're here to turn your AI vision into reality.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="bg-[#F8FAFC] py-24 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Details & Socials Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-headline text-[#242f41]">Get in touch</h2>
                <div className="grid gap-4">
                  
                  {/* Card 1: Email */}
                  <div className="bg-[#ffffff] p-8 rounded-[1.5rem] shadow-sm shadow-[#242f41]/5 border border-[#a2adc4]/10 flex items-center gap-6 group hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-[#4647d3]/5 flex items-center justify-center text-[#4647d3]">
                      <span className="material-symbols-outlined" style={iconStyle}>mail</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-[#515c70] uppercase mb-1">Email</p>
                      <p className="text-[#242f41] font-medium">your@email.com</p>
                    </div>
                  </div>
                  
                  {/* Card 2: Phone */}
                  <div className="bg-[#ffffff] p-8 rounded-[1.5rem] shadow-sm shadow-[#242f41]/5 border border-[#a2adc4]/10 flex items-center gap-6 group hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-[#4647d3]/5 flex items-center justify-center text-[#4647d3]">
                      <span className="material-symbols-outlined" style={iconStyle}>call</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-[#515c70] uppercase mb-1">Phone</p>
                      <p className="text-[#242f41] font-medium">+91 XXXXX XXXXX</p>
                    </div>
                  </div>
                  
                  {/* Card 3: WhatsApp */}
                  <div className="bg-[#ffffff] p-8 rounded-[1.5rem] shadow-sm shadow-[#242f41]/5 border border-[#a2adc4]/10 space-y-6 group hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#4647d3]/5 flex items-center justify-center text-[#4647d3]">
                        <span className="material-symbols-outlined" style={iconStyle}>chat</span>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-widest text-[#515c70] uppercase mb-1">WhatsApp</p>
                        <p className="text-[#242f41] font-medium">+91 XXXXX XXXXX</p>
                      </div>
                    </div>
                    <button style={primaryGradient} className="w-full text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                      Chat on WhatsApp
                    </button>
                  </div>

                </div>
              </div>

              {/* Social Links Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-headline text-[#242f41]">Follow our journey</h3>
                <div className="flex flex-wrap gap-4">
                  <button style={primaryGradient} className="text-white px-8 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
                    Visit Instagram
                  </button>
                  <button style={primaryGradient} className="text-white px-8 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
                    Visit Facebook
                  </button>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="p-8 rounded-[1.5rem] bg-[#ecf1ff] border border-[#a2adc4]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[#242f41] font-semibold">Prefer a quick call?</p>
                  <p className="text-sm text-[#515c70]">Schedule a 15-min intro.</p>
                </div>
                <button className="bg-[#ffffff] text-[#4647d3] px-6 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-white transition-colors">
                  Book a Call
                </button>
              </div>

            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-[#ffffff] p-10 md:p-14 rounded-[2rem] shadow-sm shadow-[#242f41]/5 border border-[#a2adc4]/10">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest text-[#515c70] uppercase px-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-[#ecf1ff] border-transparent rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#4647d3]/20 focus:border-[#4647d3]/40 transition-all placeholder:text-[#515c70]/40 outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest text-[#515c70] uppercase px-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-[#ecf1ff] border-transparent rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#4647d3]/20 focus:border-[#4647d3]/40 transition-all placeholder:text-[#515c70]/40 outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-[#515c70] uppercase px-1">How can we help?</label>
                    <textarea 
                      rows="6" 
                      placeholder="Tell us about your project or inquiry..." 
                      className="w-full bg-[#ecf1ff] border-transparent rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#4647d3]/20 focus:border-[#4647d3]/40 transition-all placeholder:text-[#515c70]/40 outline-none resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    style={primaryGradient} 
                    className="w-full text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-[#4647d3]/20 hover:scale-[1.01] active:scale-[0.99] transition-transform"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-8">
          <div style={primaryGradient} className="max-w-7xl mx-auto rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center space-y-8">
            <div className="absolute inset-0 opacity-10">
              <img 
                alt="abstract digital waves and geometric patterns" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVuZSm_Bx0eO5YTu1H-6pEQWoTmiZ499wHK9sub0fMm0qOkjnj9GrR0snrgFOZGKYrnOH_pOyJJiuTNQUU6szkDGGwdnPjIQNeH542JOclzaTTd4Jx318WOmRFIS2qj8w3oFXtmhaCmzWjZLfrV3BO9H8YMamsQZ-o88ZFCF3fBHHAB2OCgov5armWLl86DLHUwA63FSXr9OPXqOPjuAMyd1e3_QILJvpOTYY_h-FVpgYmAW7Kp7jwXEiQr-Fo3Ta9c56QVFLtyh8q"
              />
            </div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white font-headline tracking-tight">Let’s Build Your Next Project</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto">
                Join the ranks of innovative companies leveraging Neuro Works AI to transform their digital landscape.
              </p>
              <button className="bg-white text-[#4647d3] px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-shadow scale-100 hover:scale-105 active:scale-95 duration-300">
                Book a Call
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}