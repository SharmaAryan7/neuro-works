export default function Development() {
  // Custom inline styles to guarantee pixel-perfect rendering without CSS config
  const textGradient = {
    background: 'linear-gradient(to right, #4647d3, #6a37d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const glassCard = {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  };

  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  return (
    <div className="bg-[#F8FAFC] text-[#242f41] font-body min-h-screen">
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-8 py-20 lg:py-32 max-w-7xl mx-auto">
          <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[120px] mix-blend-multiply opacity-70"></div>
          <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#9396ff]/20 text-[#4647d3] font-label text-xs font-bold tracking-[0.15em] uppercase">
                Development Services
              </div>
              <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Development Solutions That <span style={textGradient}>Build and Scale</span>
              </h1>
              <p className="text-lg text-[#515c70] leading-relaxed max-w-xl">
                We design and develop high-performance websites and scalable SaaS platforms tailored for growth.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#4647d3] to-[#6a37d4] text-white rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-[#4647d3]/20 hover:-translate-y-1">
                  Start Building
                </button>
                <button className="px-8 py-4 bg-[#ecf1ff] text-[#4647d3] rounded-xl font-bold transition-all hover:bg-[#d5e3ff]">
                  View Case Studies
                </button>
              </div>
            </div>

            {/* Mockup Image Cluster */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-[2rem] blur-2xl transition-all group-hover:blur-3xl"></div>
              <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-white/20">
                <img 
                  alt="Development Dashboard" 
                  className="w-full h-auto" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI7etzBL3Qz53z-gepGOD58O9DjkmjELdRkq0g4J5kR0x5uFy9lyVTDBxJVxkPAq95AVDzFwIY4iCoIdp27KK8NnbM10z_gDBY4HPKGSAqkG_kfErNR5bHF8njiC0mowEsUBhu52SfxQ1SL5etxQg196zJyPhXOEkIkviqiSszNdnGC0RJFK1WabJnBXuSoHE0ugpeFUGHU_K6v1zfRt1PG-tnk56vbOhsHKGLZVnAJJoCXLLshmwL_D94-4xUe6BDneeZP5jbMneF"
                />
                
                {/* Floating Glass Element */}
                <div style={glassCard} className="absolute bottom-8 -left-8 p-6 rounded-2xl shadow-xl max-w-[240px]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">
                      <span className="material-symbols-outlined" style={iconStyle}>speed</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#242f41]">Optimization</div>
                      <div className="text-[10px] text-[#515c70]">Real-time stats</div>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-green-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="px-8 py-24 max-w-7xl mx-auto text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-[#242f41]">Scale With Confidence</h2>
            <p className="text-lg text-[#515c70] leading-relaxed">
              Development at Neuro Works isn't just about writing code; it's about engineering the backbone of your digital success. We build scalable, high-performance systems that adapt as your business grows.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-[#9396ff]/10 flex items-center justify-center text-[#4647d3] mb-6">
                <span className="material-symbols-outlined" style={iconStyle}>rocket_launch</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Performance First</h3>
              <p className="text-sm text-[#515c70] leading-relaxed">Every line of code is optimized for lightning-fast load times and seamless user interactions.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-[#dac9ff]/20 flex items-center justify-center text-[#6a37d4] mb-6">
                <span className="material-symbols-outlined" style={iconStyle}>dynamic_feed</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Agile Sprints</h3>
              <p className="text-sm text-[#515c70] leading-relaxed">Continuous delivery ensures your product evolves rapidly with real-world feedback loops.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-[#ff909d]/10 flex items-center justify-center text-[#a53046] mb-6">
                <span className="material-symbols-outlined" style={iconStyle}>security</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Military-Grade Security</h3>
              <p className="text-sm text-[#515c70] leading-relaxed">Robust architecture built with security-first principles to protect your data and users.</p>
            </div>
          </div>
        </section>

        {/* Services Offered Section */}
        <section className="bg-[#EEF2FF] py-24 px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <div className="text-[#4647d3] font-label text-xs font-bold tracking-[0.2em] uppercase">The Toolkit</div>
              <h2 className="font-headline text-4xl font-bold">Our Core Expertise</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#f4f6ff] mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-[#4647d3]" style={iconStyle}>browser_updated</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                <p className="text-[#515c70] leading-relaxed">
                  Build fast, responsive, and modern websites optimized for performance.
                </p>
              </div>
              {/* Card 2 */}
              <div className="group bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#f4f6ff] mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-[#4647d3]" style={iconStyle}>cloud_done</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">SaaS Development</h3>
                <p className="text-[#515c70] leading-relaxed">
                  Develop scalable platforms and digital products tailored to your business.
                </p>
              </div>
              {/* Card 3 */}
              <div className="group bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#f4f6ff] mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-[#4647d3]" style={iconStyle}>hub</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">System Architecture</h3>
                <p className="text-[#515c70] leading-relaxed">
                  Design robust systems that support long-term scalability and performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Successes Section */}
        <section className="px-8 py-24 max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <h2 className="font-headline text-4xl font-bold">Recent Successes</h2>
              <p className="text-[#515c70] text-lg">Real results for visionary companies.</p>
            </div>
            <a className="flex items-center gap-2 text-[#4647d3] font-bold group" href="#">
              View All Development Projects 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={iconStyle}>arrow_forward</span>
            </a>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Card 1 */}
            <div className="group rounded-[2.5rem] overflow-hidden bg-white shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  alt="Project One" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwp-G05J_jmcnmWIkDPeeek8egbHX391zSNYImmgEn2RYZekhHJvu8W8jq-pd8GWrDe0yu29lT9Q8ybYNZQ_SXgtn5PLkmo2RSmLzhiOE4XHwEJdRz7OBpe12p2lPjBGPgWGr9TYrX-xTMRhWRaJkcR2qK1RrooXjpArF1Rsub6-LBh4zft206mVJp2kQ90I2MzUPd2fM7GYeFJu_jUzuaHaUBi5mhv8LIgcXe9UQziR_I9VmwQqwRDrueWEfQ1MzldMm5LOZ2obDS"
                />
              </div>
              <div className="p-10 space-y-4">
                <div className="text-[#4647d3] font-bold text-3xl">60%</div>
                <h4 className="text-2xl font-bold">Vantage Retail Platform</h4>
                <p className="text-[#515c70] leading-relaxed">
                  Improved website performance by 60% and enabled seamless multi-region deployment for a global e-commerce brand.
                </p>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="group rounded-[2.5rem] overflow-hidden bg-white shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  alt="Project Two" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJxKyu7cxRgNNH4n43YL7dLNMttrvE9aQfAhx-SZa0HItb_33rjwm47Uhj3gdBswYlrshPPPY8MgMHhh2d-Uz534N6SUWt5F2t5R9FCiixHwTVDZiSeLlolfPv4jmZkFF4kVk_hmirokqEHKsUA0DOoivff8CEW7im2zF3mcZbEXp0CQpaLBnOc4eqAnXjIH0gkOrB_pa90FS_6QNkuNT5-Ek0KJJJg5JJxIYKhd-_c7kvLzMew3L_kcBbEvYsE8008vTPs60G-Yzu"
                />
              </div>
              <div className="p-10 space-y-4">
                <div className="text-[#4647d3] font-bold text-3xl">2.5M</div>
                <h4 className="text-2xl font-bold">Nexus SaaS Infrastructure</h4>
                <p className="text-[#515c70] leading-relaxed">
                  Architected a robust serverless backend capable of handling 2.5M daily active users with zero downtime deployments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}

      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-inverse-surface text-white p-12 md:p-24 relative overflow-hidden text-center">
          <div className="absolute inset-0 btn-gradient opacity-10"></div>
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight">Ready to Build Your Next Product?</h2>
            <p className="text-lg text-inverse-on-surface/80">Let’s create scalable digital solutions tailored to your needs. Our team is ready to bring your vision to life.</p>
            <div className="pt-8">
              <button className="btn-gradient text-white px-12 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all">
                Book a Call
              </button>
            </div>
          </div>
          {/* Background Decorative Elements */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-secondary rounded-full blur-[120px] opacity-20"></div>
        </div>
      </section>
      </div>
    </div>
  );
}