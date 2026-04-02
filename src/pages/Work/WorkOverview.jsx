import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';

export default function WorkOverview() {
  // Custom inline styles to guarantee pixel-perfect gradients and glows
  const premiumGradient = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)',
  };

  const textGradient = {
    background: 'linear-gradient(to right, #4647d3, #6a37d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const heroGlow = {
    background: 'radial-gradient(circle at 70% 30%, rgba(147, 150, 255, 0.15) 0%, rgba(248, 250, 252, 0) 60%)',
  };

  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  return (
    <div className="bg-[#F8FAFC] text-[#242f41] font-body min-h-screen">
      
      {/* Hero Section */}
      <ScrollReveal direction="up">
        <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" style={heroGlow}>
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="inline-block font-label text-xs font-bold tracking-[0.2em] text-[#4647d3] uppercase mb-4">OUR WORK</span>
                <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-[#242f41] leading-[1.1]">
                  Projects That Deliver <span style={textGradient}>Real Results</span>
                </h1>
              </div>
              <p className="font-body text-lg text-[#515c70] leading-relaxed max-w-lg">
                Explore how we’ve helped businesses scale with AI, development, and growth systems. We build digital products that move the needle.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to="/contact"
                  style={premiumGradient} 
                  className="inline-block text-white px-8 py-4 rounded-3xl font-headline font-bold text-sm shadow-xl hover:opacity-90 transition-opacity active:scale-95 text-center"
                >
                  Book a Call
                </Link>
                <Link 
                  to="/services"
                  className="inline-block bg-[#cdddfe] text-[#4647d3] px-8 py-4 rounded-3xl font-headline font-bold text-sm hover:bg-[#d5e3ff] transition-colors active:scale-95 text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
            
            {/* Dashboard Preview UI */}
            <div className="relative">
              <div className="bg-[#ffffff] rounded-3xl shadow-2xl p-6 border border-[#a2adc4]/10 relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#b41340]/20"></div>
                    <div className="w-3 h-3 rounded-full bg-[#4647d3]/20"></div>
                    <div className="w-3 h-3 rounded-full bg-[#6a37d4]/20"></div>
                  </div>
                  <div className="h-2 w-32 bg-[#dee8ff] rounded-full"></div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-[#9396ff]/20 rounded-2xl flex flex-col justify-center px-4">
                      <div className="h-2 w-12 bg-[#4647d3]/30 rounded-full mb-3"></div>
                      <div className="h-3 w-16 bg-[#4647d3]/50 rounded-full"></div>
                    </div>
                    <div className="h-20 bg-[#dac9ff]/20 rounded-2xl flex flex-col justify-center px-4">
                      <div className="h-2 w-12 bg-[#6a37d4]/30 rounded-full mb-3"></div>
                      <div className="h-3 w-16 bg-[#6a37d4]/50 rounded-full"></div>
                    </div>
                    <div className="h-20 bg-[#ff909d]/20 rounded-2xl flex flex-col justify-center px-4">
                      <div className="h-2 w-12 bg-[#a53046]/30 rounded-full mb-3"></div>
                      <div className="h-3 w-16 bg-[#a53046]/50 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-full bg-[#dee8ff] rounded-full"></div>
                    <div className="h-4 w-5/6 bg-[#dee8ff] rounded-full"></div>
                    <div className="h-4 w-4/6 bg-[#dee8ff] rounded-full"></div>
                  </div>
                  <div className="pt-4">
                    <div className="h-32 bg-[#ecf1ff] rounded-2xl relative overflow-hidden">
                      <div className="absolute inset-0 flex items-end">
                        <div className="w-1/4 h-[40%] bg-[#4647d3]/40"></div>
                        <div className="w-1/4 h-[70%] bg-[#6a37d4]/40"></div>
                        <div className="w-1/4 h-[55%] bg-[#4647d3]/40"></div>
                        <div className="w-1/4 h-[90%] bg-[#6a37d4]/40"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </header>
      </ScrollReveal>

      {/* Work Categories Section */}
      <section className="py-24 bg-[#f4f6ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI WORK */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="bg-[#ffffff] p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col group hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-shadow duration-300 border border-[#a2adc4]/10 h-full">
                <span className="material-symbols-outlined text-[#4647d3] text-4xl mb-6" style={iconStyle}>psychology</span>
                <h3 className="font-headline text-2xl font-bold text-[#242f41] mb-4">AI WORK</h3>
                <p className="font-body text-[#515c70] mb-8 flex-grow leading-relaxed">
                  Custom LLM implementations and predictive analytics engines that automate complex decision making.
                </p>
                <Link to="/work/ai-solutions" className="font-headline font-bold text-sm text-[#4647d3] flex items-center gap-2 group-hover:gap-3 transition-all">
                  View AI Projects <span className="material-symbols-outlined text-lg" style={iconStyle}>arrow_forward</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* DEVELOPMENT WORK */}
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <div className="bg-[#ffffff] p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col group hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-shadow duration-300 border border-[#a2adc4]/10 h-full">
                <span className="material-symbols-outlined text-[#6a37d4] text-4xl mb-6" style={iconStyle}>code</span>
                <h3 className="font-headline text-2xl font-bold text-[#242f41] mb-4">DEVELOPMENT WORK</h3>
                <p className="font-body text-[#515c70] mb-8 flex-grow leading-relaxed">
                  High-performance web applications and enterprise-grade software built for extreme scalability and speed.
                </p>
                <Link to="/work/development" className="font-headline font-bold text-sm text-[#6a37d4] flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Dev Projects <span className="material-symbols-outlined text-lg" style={iconStyle}>arrow_forward</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* GROWTH WORK */}
            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <div className="bg-[#ffffff] p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col group hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-shadow duration-300 border border-[#a2adc4]/10 h-full">
                <span className="material-symbols-outlined text-[#a53046] text-4xl mb-6" style={iconStyle}>trending_up</span>
                <h3 className="font-headline text-2xl font-bold text-[#242f41] mb-4">GROWTH WORK</h3>
                <p className="font-body text-[#515c70] mb-8 flex-grow leading-relaxed">
                  Data-driven acquisition funnels and conversion optimization systems that turn traffic into loyal revenue.
                </p>
                <Link to="/work/growth-systems" className="font-headline font-bold text-sm text-[#a53046] flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Growth Projects <span className="material-symbols-outlined text-lg" style={iconStyle}>arrow_forward</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal direction="up">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-headline text-4xl font-bold text-[#242f41]">Featured Success Stories</h2>
                <p className="font-body text-[#515c70] mt-2">See how our solutions perform in the real world.</p>
              </div>
              <div className="hidden md:block">
                <Link className="font-headline font-bold text-[#4647d3] hover:underline">See All Case Studies</Link>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="group cursor-pointer h-full">
                <div className="aspect-[16/10] bg-white rounded-3xl overflow-hidden shadow-sm mb-6 relative border border-[#a2adc4]/5">
                  <img 
                    alt="Data visualization dashboard" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiOsykfwKHu1VB-g24C62hDqO_RIlxiI51zBfgjbkN5qrJTvmR9bW7CeGFOj8TQJ6Sql0riGeijEy5db-jSfi7SGPf3mtFTPLm2Bk8fM3vMZMLJUu-MINI73gL2iMaitUxgm3aD-iPbzb2cbiuBqOzhPzO8WqWIUFIhJo9k4veatdZIz6J5s1X6z3LDG1y92dOvb3VNPth_fXE0nTYZIY1l03gHVgNqYemZcpcmHPdzcQRvGXKqRx6Yr0I2lpyICoo7-kR5t-8NQ3m"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-label text-[10px] font-bold tracking-widest text-[#4647d3] shadow-sm uppercase">AI CASE STUDY</span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <h3 className="font-headline text-xl font-bold text-[#242f41] group-hover:text-[#4647d3] transition-colors">Nexus Analytics Platform</h3>
                  <div className="bg-[#9396ff]/20 text-[#4647d3] px-3 py-1 rounded-full font-headline text-xs font-bold whitespace-nowrap">
                    +45% Conversions
                  </div>
                </div>
                <p className="font-body text-[#515c70] text-sm leading-relaxed">
                  We developed a custom AI model that predicts user behavior, allowing Nexus to personalize their homepage in real-time, resulting in a massive lift in user retention.
                </p>
              </div>
            </ScrollReveal>

            {/* Project Card 2 */}
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <div className="group cursor-pointer h-full">
                <div className="aspect-[16/10] bg-white rounded-3xl overflow-hidden shadow-sm mb-6 relative border border-[#a2adc4]/5">
                  <img 
                    alt="SaaS interface design" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjVBCPktpEJdQ83wPQySU_NG9GWIKPNSiBPIFElzHr42dG1l5D3NWgQ7B0XEVoE_Z6aHByuYwGyJXfCajdopGDRznHtFpgvEsvHbUhdPW9U2SjDeS09b-Fvzs7cykE_1RGmvheOOlLOMb3wCsO63DZRNS6YrjdHt5CQQKzFWClJGV9CVRG6j15ctCBnZN8jByRRGK8IM507dCR2fK4OWd7rRjABaKgFyyN3Q1ck39deNuiKYXNESq3JsmHV4rONnY7BlVjx01nTJOJ"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-label text-[10px] font-bold tracking-widest text-[#6a37d4] shadow-sm uppercase">SYSTEMS DEV</span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <h3 className="font-headline text-xl font-bold text-[#242f41] group-hover:text-[#6a37d4] transition-colors">CloudFlow Infrastructure</h3>
                  <div className="bg-[#dac9ff]/20 text-[#6a37d4] px-3 py-1 rounded-full font-headline text-xs font-bold whitespace-nowrap">
                    99.9% Efficiency
                  </div>
                </div>
                <p className="font-body text-[#515c70] text-sm leading-relaxed">
                  Re-architected CloudFlow's legacy system into a serverless powerhouse. The transition reduced infrastructure costs by 60% while doubling deployment speed.
                </p>
              </div>
            </ScrollReveal>

            {/* Project Card 3 */}
            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <div className="group cursor-pointer h-full">
                <div className="aspect-[16/10] bg-white rounded-3xl overflow-hidden shadow-sm mb-6 relative border border-[#a2adc4]/5">
                  <img 
                    alt="Growth marketing dashboard" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA38-KURmyNJaEK020fuHLJGyHT89Abv_NxdujNmvBNXo6lkYkkKJiTm7th0-GC4U9OsoxTlBx5eBuiuaCWuWfv-NPdnNmJM2T2dbvikE85AJ4nJqHCJrbPMZk2gVsftSSvyL0dst3yurdF1GWxDI7ZjnNJ8xLqtREs-wvzLzs0nLz3x6YcJMiCZ3Pa6_1x7SQMRocSveIXC7LxBZd8wHTay5ahFTsSyyju8GFclLvSUbYDuALINTD7DoJOjffv9fbmcieOU2OZLS6i"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-label text-[10px] font-bold tracking-widest text-[#a53046] shadow-sm uppercase">GROWTH SYSTEM</span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <h3 className="font-headline text-xl font-bold text-[#242f41] group-hover:text-[#a53046] transition-colors">Precision Ad-Tech Scale</h3>
                  <div className="bg-[#ff909d]/20 text-[#a53046] px-3 py-1 rounded-full font-headline text-xs font-bold whitespace-nowrap">
                    3.5x ROI
                  </div>
                </div>
                <p className="font-body text-[#515c70] text-sm leading-relaxed">
                  Implemented a neuro-response engine to optimize creative assets, delivering a record-breaking ROAS while simultaneously lowering CPA by 40%.
                </p>
              </div>
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
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight">Have a Project in Mind?</h2>
              <p className="text-lg text-inverse-on-surface/80"> Let’s build systems that deliver real results. Our team is ready to help you navigate the future of AI and development.</p>
              <div className="pt-8">
                <Link to="/contact" className="btn-gradient text-white px-12 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all">
                  Book a Call
                </Link>
              </div>
            </div>
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-[120px] opacity-20"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-secondary rounded-full blur-[120px] opacity-20"></div>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}