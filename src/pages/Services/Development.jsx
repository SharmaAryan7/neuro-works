import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';

export default function Development() {
  // Custom inline styles to guarantee pixel-perfect gradients without CSS config
  const primaryGradientBg = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)',
  };

  const gradientText = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  return (
    <div className="pt-24 bg-[#f4f6ff]">
      {/* Hero Section (Sizes Adjusted) */}
      <ScrollReveal direction="up">
        <section className="relative overflow-hidden py-16 lg:py-20 px-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-30 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4647d3]/40 to-[#6a37d4]/40 blur-[120px] rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#4647d3]/10 text-[#4647d3] text-[11px] font-bold tracking-[0.05em] uppercase font-label">
                DEVELOPMENT SERVICES
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold font-headline tracking-tight leading-[1.2] text-[#242f41]">
                Development Solutions That <br />
                <span style={gradientText}>Build and Scale</span>
              </h1>
              <p className="text-base lg:text-lg text-[#515c70] max-w-lg font-body leading-relaxed mx-auto lg:mx-0">
                We design and develop high-performance websites and scalable SaaS platforms tailored for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link 
                  style={primaryGradientBg}
                  className="inline-block text-center text-white px-8 py-3.5 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-[#4647d3]/30 transition-all active:scale-[0.98]"
                >
                  Start Building
                </Link>
                <Link 
                  to="/work/development"
                  className="px-8 py-3.5 bg-[#ecf1ff] text-[#4647d3] rounded-xl font-bold text-base transition-all hover:bg-[#d5e3ff] text-center"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="relative bg-[#ffffff] rounded-xl p-3 shadow-2xl shadow-[#242f41]/5 border border-[#a2adc4]/10 max-w-lg mx-auto">
                <img 
                  alt="Development Dashboard" 
                  className="rounded-lg w-full h-[350px] lg:h-[400px] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI7etzBL3Qz53z-gepGOD58O9DjkmjELdRkq0g4J5kR0x5uFy9lyVTDBxJVxkPAq95AVDzFwIY4iCoIdp27KK8NnbM10z_gDBY4HPKGSAqkG_kfErNR5bHF8njiC0mowEsUBhu52SfxQ1SL5etxQg196zJyPhXOEkIkviqiSszNdnGC0RJFK1WabJnBXuSoHE0ugpeFUGHU_K6v1zfRt1PG-tnk56vbOhsHKGLZVnAJJoCXLLshmwL_D94-4xUe6BDneeZP5jbMneF"
                />
                <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-xl shadow-xl border border-[#a2adc4]/10 max-w-[220px]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#4647d3]/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#4647d3] text-sm" style={iconStyle}>speed</span>
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#242f41]">Optimization</div>
                      <div className="text-[10px] text-[#515c70]">Real-time stats</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-[#dee8ff] rounded"></div>
                    <div className="h-2 w-4/5 bg-[#dee8ff] rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What We Do Section */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-6 text-slate-900">Scale With Confidence</h2>
              <p className="text-lg text-slate-500 font-body leading-relaxed">
                Development at Neuro Works isn't just about writing code; it's about engineering the backbone of your digital success. We build scalable, high-performance systems that adapt as your business grows.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#9396ff]/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#4647d3]" style={iconStyle}>rocket_launch</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#242f41]">Performance First</h4>
                    <p className="text-[#515c70] leading-relaxed">Every line of code is optimized for lightning-fast load times and seamless user interactions.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#9396ff]/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#4647d3]" style={iconStyle}>dynamic_feed</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#242f41]">Agile Sprints</h4>
                    <p className="text-[#515c70] leading-relaxed">Continuous delivery ensures your product evolves rapidly with real-world feedback loops.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#9396ff]/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#4647d3]" style={iconStyle}>security</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#242f41]">Military-Grade Security</h4>
                    <p className="text-[#515c70] leading-relaxed">Robust architecture built with security-first principles to protect your data and users.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Cards */}
      <section className="py-24 px-6 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4 text-[#242f41]">Our Core Expertise</h2>
              <p className="text-[#515c70]">Specialized development systems designed for modern enterprise needs.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#4647d3]/5 flex items-center justify-center mb-8 group-hover:bg-[#4647d3]/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#4647d3]" style={iconStyle}>browser_updated</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">Web Development</h3>
                <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                  Build fast, responsive, and modern websites optimized for performance and user experience.
                </p>
                <Link to="/contact" className="text-[#4647d3] font-bold inline-flex items-center gap-2 group/link w-fit">
                  Learn more <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform" style={iconStyle}>arrow_forward</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#6a37d4]/5 flex items-center justify-center mb-8 group-hover:bg-[#6a37d4]/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#6a37d4]" style={iconStyle}>cloud_done</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">SaaS Development</h3>
                <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                  Develop scalable platforms and digital products tailored to solve complex business problems.
                </p>
                <Link to="/contact" className="text-[#6a37d4] font-bold inline-flex items-center gap-2 group/link w-fit">
                  Learn more <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform" style={iconStyle}>arrow_forward</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#4647d3]/5 flex items-center justify-center mb-8 group-hover:bg-[#4647d3]/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#4647d3]" style={iconStyle}>hub</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">System Architecture</h3>
                <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                  Design robust systems that support long-term scalability, performance, and integrations.
                </p>
                <Link to="/contact" className="text-[#4647d3] font-bold inline-flex items-center gap-2 group/link w-fit">
                  Learn more <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform" style={iconStyle}>arrow_forward</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Recent Successes Section (Updated to 3 Columns) */}
      <section className="py-24 px-6 bg-[#f4f6ff]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4 text-slate-900">Recent Successes</h2>
                <p className="text-lg text-slate-500">Real results for visionary companies</p>
              </div>
              <Link to="/work/development" className="inline-flex items-center gap-2 font-bold text-[#4647d3] hover:text-[#6a37d4] transition-colors">
                View All Development Projects <span className="material-symbols-outlined" style={iconStyle}>arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <Link to="/work/development" className="block group cursor-pointer h-full">
                <div className="overflow-hidden rounded-xl aspect-[16/10] mb-6 shadow-lg">
                  <img 
                    alt="Vantage Retail Platform" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwp-G05J_jmcnmWIkDPeeek8egbHX391zSNYImmgEn2RYZekhHJvu8W8jq-pd8GWrDe0yu29lT9Q8ybYNZQ_SXgtn5PLkmo2RSmLzhiOE4XHwEJdRz7OBpe12p2lPjBGPgWGr9TYrX-xTMRhWRaJkcR2qK1RrooXjpArF1Rsub6-LBh4zft206mVJp2kQ90I2MzUPd2fM7GYeFJu_jUzuaHaUBi5mhv8LIgcXe9UQziR_I9VmwQqwRDrueWEfQ1MzldMm5LOZ2obDS"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-[#4647d3]/10 text-[#4647d3] text-[10px] font-extrabold uppercase tracking-widest rounded-full">E-Commerce</span>
                  <span className="text-sm font-bold text-[#6a37d4]">60% Performance Boost</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#242f41] group-hover:text-[#4647d3] transition-colors">Vantage Retail Platform</h3>
                <p className="text-[#515c70] text-sm font-body leading-relaxed">
                  Improved website performance by 60% and enabled seamless multi-region deployment for a global e-commerce brand.
                </p>
              </Link>
            </ScrollReveal>

            {/* Project 2 */}
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <Link to="/work/development" className="block group cursor-pointer h-full">
                <div className="overflow-hidden rounded-xl aspect-[16/10] mb-6 shadow-lg">
                  <img 
                    alt="Nexus SaaS Infrastructure" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJxKyu7cxRgNNH4n43YL7dLNMttrvE9aQfAhx-SZa0HItb_33rjwm47Uhj3gdBswYlrshPPPY8MgMHhh2d-Uz534N6SUWt5F2t5R9FCiixHwTVDZiSeLlolfPv4jmZkFF4kVk_hmirokqEHKsUA0DOoivff8CEW7im2zF3mcZbEXp0CQpaLBnOc4eqAnXjIH0gkOrB_pa90FS_6QNkuNT5-Ek0KJJJg5JJxIYKhd-_c7kvLzMew3L_kcBbEvYsE8008vTPs60G-Yzu"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-[#6a37d4]/10 text-[#6a37d4] text-[10px] font-extrabold uppercase tracking-widest rounded-full">Architecture</span>
                  <span className="text-sm font-bold text-[#4647d3]">2.5M Daily Users</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#242f41] group-hover:text-[#4647d3] transition-colors">Nexus SaaS Infrastructure</h3>
                <p className="text-[#515c70] text-sm font-body leading-relaxed">
                  Architected a robust serverless backend capable of handling 2.5M daily active users with zero downtime deployments.
                </p>
              </Link>
            </ScrollReveal>

            {/* Project 3 (New) */}
            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <Link to="/work/development" className="block group cursor-pointer h-full">
                <div className="overflow-hidden rounded-xl aspect-[16/10] mb-6 shadow-lg">
                  <img 
                    alt="CloudStream Engine" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAUsUjGZZAv_bimOTK5zxmoZzRD5PvsjcHH0GF4A20U72hJKzr65AqurCfNdeIPXKE-VQpGQjIozwzG4attzJdDyFq6J6MiMZ93ua5z0ZFLVcRU2e-WY0EHLCeKEm1-fVM9VF1QP0Zi7pLBNcpU5a8gC9Z7ufwmz4bfa5Gxy2VzhaDr7yXYZSVI9iuBZ1IKY_qUSsk2WUCJo4RuGaOBwX7CrQoigLgSWyDySnCoG8Xulpy5Bn1paF8SyuZhJahrn4v3io8bbGNH1yl"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-[#4647d3]/10 text-[#4647d3] text-[10px] font-extrabold uppercase tracking-widest rounded-full">Web App</span>
                  <span className="text-sm font-bold text-[#6a37d4]">Zero Downtime</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#242f41] group-hover:text-[#4647d3] transition-colors">CloudStream Engine</h3>
                <p className="text-[#515c70] text-sm font-body leading-relaxed">
                  Custom cloud-streaming layer engineered for scale, delivering global video data with sub-second latency and high availability.
                </p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <ScrollReveal direction="up">
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto rounded-[3rem] bg-inverse-surface text-white p-12 md:p-24 relative overflow-hidden text-center">
            <div className="absolute inset-0 btn-gradient opacity-10"></div>
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight">Ready to Build Your Next Product?</h2>
              <p className="text-lg text-inverse-on-surface/80">Let’s create scalable digital solutions tailored to your needs. Our team is ready to bring your vision to life.</p>
              <div className="pt-8">
                <Link 
                  to="/contact" 
                  className="inline-block btn-gradient text-white px-12 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all"
                >
                  Book a Call
                </Link>
              </div>
            </div>
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-secondary rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}