import ScrollReveal from '../../components/ScrollReveal';

export default function CaseStudy() {
  // Custom inline styles to guarantee pixel-perfect rendering
  const heroGradient = {
    background: 'radial-gradient(circle at top right, rgba(147, 150, 255, 0.15), transparent 50%), radial-gradient(circle at bottom left, rgba(106, 55, 212, 0.05), transparent 50%)',
  };

  const textGradient = {
    background: 'linear-gradient(to right, #4647d3, #6a37d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const ctaGradient = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)',
  };

  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  return (
    <div className="bg-[#f4f6ff] text-[#242f41] font-body min-h-screen">
      <div className="pt-20">
        
        {/* Hero Section */}
        <ScrollReveal direction="up">
          <section className="relative overflow-hidden py-24 md:py-32" style={heroGradient}>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9396ff]/20 text-[#4647d3] font-label text-xs font-bold tracking-widest uppercase">
                  Case Study
                </div>
                <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-[#242f41] leading-[1.1] tracking-tight">
                  AI Automation System for <span style={textGradient}>Global Logistics</span>
                </h1>
                <p className="text-xl text-[#515c70] leading-relaxed max-w-xl">
                  A high-impact implementation of intelligent routing and automated load scheduling that transformed operations for a global logistics leader.
                </p>
                <div className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-[#ffffff] rounded-xl shadow-sm flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#4647d3]" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                    <span className="font-bold text-[#242f41]">+70% Operational Efficiency</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-[#4647d3]/10 bg-[#ffffff] p-2 border border-[#a2adc4]/10">
                  <img 
                    alt="Logistics Dashboard Preview" 
                    className="w-full h-auto rounded-lg" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4ogyFhgTg38-Wq4s780Ok7Iqdqbgrf-JTkKa2McObe1s58dmcMDKfHkLsgmbxlNMJX36aChQfbWYQboLN5cKFPk6g60v-1_Ry6Vnl6tohhGOmBchrZpUPjgw4xGAjCD9lP6VArviqq_4xZoqHRcrKPzNBAViujaW57-NRU5rYtUX04fNHp_PFoa-G_txmWGy0r3vGfe_NqiEFrofuhnjYbhlY42z-OyCQwa-dR-E9LOrAbbP-l71JoTj18S7Xu1iLT5FCsDiewCTI"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -z-10 -top-12 -right-12 w-64 h-64 bg-[#6a37d4]/10 blur-3xl rounded-full"></div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Project Overview & Info Blocks */}
        <section className="bg-[#ecf1ff] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <ScrollReveal direction="up" delay={0.1}>
                  <h2 className="font-headline text-3xl font-bold text-[#242f41]">Overview</h2>
                  <p className="text-lg text-[#515c70] leading-relaxed">
                    We partnered with a top-tier logistics firm to tackle their complex scheduling challenges. By building a custom AI orchestration engine, we automated 80% of manual routing tasks, allowing their team to focus on high-value strategic decisions.
                  </p>
                </ScrollReveal>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <ScrollReveal direction="up" delay={0.2} className="h-full">
                    <div className="p-8 bg-[#ffffff] rounded-xl h-full">
                      <span className="material-symbols-outlined text-[#4647d3] mb-4 block" style={{ ...iconStyle, fontSize: '32px' }}>psychology</span>
                      <h4 className="font-headline font-bold text-[#242f41] mb-2">The Challenge</h4>
                      <p className="text-[#515c70]">Fragmented data sources and manual dependency tracking led to frequent scheduling bottlenecks and rising fuel costs.</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="up" delay={0.3} className="h-full">
                    <div className="p-8 bg-[#ffffff] rounded-xl h-full">
                      <span className="material-symbols-outlined text-[#4647d3] mb-4 block" style={{ ...iconStyle, fontSize: '32px' }}>auto_awesome</span>
                      <h4 className="font-headline font-bold text-[#242f41] mb-2">The Solution</h4>
                      <p className="text-[#515c70]">A neural network-based optimization engine that processes millions of variables in real-time to generate optimal routes.</p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
              
              {/* Side Info Cards */}
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.4}>
                  <div className="bg-[#ffffff] p-8 rounded-xl shadow-sm border border-[#a2adc4]/5">
                    <h3 className="font-headline text-xl font-bold text-[#242f41] mb-6">Key Details</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="font-label text-xs font-bold text-[#6c778c] uppercase tracking-wider block mb-2">Industry</label>
                        <p className="font-semibold text-[#242f41]">Logistics & Supply Chain</p>
                      </div>
                      <div>
                        <label className="font-label text-xs font-bold text-[#6c778c] uppercase tracking-wider block mb-2">Services</label>
                        <p className="font-semibold text-[#242f41]">AI Solutions, System Architecture</p>
                      </div>
                      <div>
                        <label className="font-label text-xs font-bold text-[#6c778c] uppercase tracking-wider block mb-2">Technologies</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-3 py-1 bg-[#dee8ff] text-[#4647d3] text-xs font-semibold rounded-full">Python</span>
                          <span className="px-3 py-1 bg-[#dee8ff] text-[#4647d3] text-xs font-semibold rounded-full">TensorFlow</span>
                          <span className="px-3 py-1 bg-[#dee8ff] text-[#4647d3] text-xs font-semibold rounded-full">React</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
                
                {/* Project Links */}
                <ScrollReveal direction="up" delay={0.5}>
                  <div className="flex flex-col gap-4">
                    <button style={ctaGradient} className="w-full py-4 text-white rounded-xl font-bold shadow-lg shadow-[#4647d3]/20 flex items-center justify-center gap-2 active:scale-95 transition-transform">
                      View Live Project
                      <span className="material-symbols-outlined text-sm" style={iconStyle}>open_in_new</span>
                    </button>
                    <button className="w-full py-4 bg-[#ffffff] text-[#4647d3] border-2 border-[#4647d3]/20 hover:border-[#4647d3]/40 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                      Download Case Study PDF
                      <span className="material-symbols-outlined text-sm" style={iconStyle}>download</span>
                    </button>
                  </div>
                </ScrollReveal>
              </div>
              
            </div>
          </div>
        </section>

        {/* Results & Impact Section */}
        <section className="bg-[#f4f6ff] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal direction="up">
              <div className="text-center mb-16 space-y-4">
                <h2 className="font-headline text-4xl font-extrabold text-[#242f41]">Results & Impact</h2>
                <p className="text-[#515c70] max-w-2xl mx-auto">Tangible growth metrics achieved through the deployment of our custom AI orchestration layer.</p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Result Card 1 */}
              <ScrollReveal direction="up" delay={0.1}>
                <div className="bg-white p-10 rounded-xl shadow-xl shadow-[#4647d3]/5 group hover:-translate-y-1 transition-transform border border-transparent hover:border-[#4647d3]/10">
                  <div className="w-14 h-14 bg-[#9396ff]/20 rounded-full flex items-center justify-center mb-6 text-[#4647d3] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined" style={{ ...iconStyle, fontSize: '32px' }}>schedule</span>
                  </div>
                  <div className="text-4xl font-extrabold text-[#4647d3] mb-2">85%</div>
                  <p className="font-headline font-bold text-[#242f41] mb-2">Time Reduction</p>
                  <p className="text-[#515c70]">Reduced manual scheduling time from days to minutes through automated optimization.</p>
                </div>
              </ScrollReveal>
              
              {/* Result Card 2 */}
              <ScrollReveal direction="up" delay={0.2}>
                <div className="bg-white p-10 rounded-xl shadow-xl shadow-[#4647d3]/5 group hover:-translate-y-1 transition-transform border border-transparent hover:border-[#4647d3]/10">
                  <div className="w-14 h-14 bg-[#dac9ff]/30 rounded-full flex items-center justify-center mb-6 text-[#6a37d4] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined" style={{ ...iconStyle, fontSize: '32px' }}>local_shipping</span>
                  </div>
                  <div className="text-4xl font-extrabold text-[#6a37d4] mb-2">12%</div>
                  <p className="font-headline font-bold text-[#242f41] mb-2">Fuel Savings</p>
                  <p className="text-[#515c70]">Decreased fuel consumption through intelligent route optimization and idling reduction.</p>
                </div>
              </ScrollReveal>
              
              {/* Result Card 3 */}
              <ScrollReveal direction="up" delay={0.3}>
                <div className="bg-white p-10 rounded-xl shadow-xl shadow-[#4647d3]/5 group hover:-translate-y-1 transition-transform border border-transparent hover:border-[#4647d3]/10">
                  <div className="w-14 h-14 bg-[#ff909d]/20 rounded-full flex items-center justify-center mb-6 text-[#a53046] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined" style={{ ...iconStyle, fontSize: '32px' }}>verified</span>
                  </div>
                  <div className="text-4xl font-extrabold text-[#a53046] mb-2">99.9%</div>
                  <p className="font-headline font-bold text-[#242f41] mb-2">Accuracy Rate</p>
                  <p className="text-[#515c70]">Achieved near-perfect scheduling accuracy across 12 distinct global markets.</p>
                </div>
              </ScrollReveal>
              
            </div>
          </div>
        </section>

        {/* Final CTA Section 1 */}
        <ScrollReveal direction="up">
          <section className="max-w-7xl mx-auto px-6 mb-24">
            <div style={ctaGradient} className="rounded-xl p-12 md:p-20 relative overflow-hidden text-center space-y-8">
              {/* Decorative Glows */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10 space-y-4">
                <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white">Want Similar Results for Your Business?</h2>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">Let’s build systems that deliver real impact. Our team is ready to help you orchestrate your AI journey.</p>
              </div>
              
              <div className="relative z-10">
                <button className="px-10 py-5 bg-white text-[#4647d3] rounded-full font-extrabold text-lg shadow-2xl hover:bg-[#f4f6ff] transition-colors active:scale-95 transition-transform">
                  Book a Call
                </button>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Final CTA Section 2 (From your original code) */}
        <ScrollReveal direction="up">
          <section className="py-32 px-8">
            <div className="max-w-7xl mx-auto rounded-[3rem] bg-inverse-surface text-white p-12 md:p-24 relative overflow-hidden text-center">
              <div className="absolute inset-0 btn-gradient opacity-10"></div>
              <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight">Want Similar Results for Your Business?</h2>
                <p className="text-lg text-inverse-on-surface/80">
                    Let’s build systems that deliver real impact. Our team is ready to help you orchestrate your AI journey.
                </p>
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
        </ScrollReveal>

      </div>
    </div>
  );
}