export default function GrowthProjects() {
  // Custom inline styles for reliable gradient rendering
  const textGradient = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const bgGradientPrimary = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)',
  };

  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  return (
    <div className="bg-[#f4f6ff] text-[#242f41] font-body min-h-screen">
      <div className="pt-24">
        {/* Hero Section */}
        <header className="relative pt-32 pb-20 overflow-hidden bg-[#f4f6ff]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#4647d3]/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-[#6a37d4]/10 blur-[100px] rounded-full"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#4647d3] bg-[#4647d3]/5 px-4 py-1.5 rounded-full mb-6 font-headline uppercase">
              GROWTH PROJECTS
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#242f41] tracking-tight leading-[1.1] mb-6 font-headline">
              Revenue-Driven <span style={textGradient}>Growth Systems</span>
            </h1>
            <p className="text-lg md:text-xl text-[#515c70] max-w-2xl mx-auto mb-10 leading-relaxed font-body">
              Data-led marketing and sales systems that scale your business. We combine neuro-analytics with high-performance AI to unlock sustainable revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button style={bgGradientPrimary} className="w-full sm:w-auto text-white px-10 py-4 rounded-3xl font-bold text-lg shadow-xl shadow-[#4647d3]/20 hover:scale-105 transition-transform">
                Book a Call
              </button>
              <button className="w-full sm:w-auto bg-[#ffffff] text-[#242f41] px-10 py-4 rounded-3xl font-bold text-lg hover:bg-[#ecf1ff] transition-colors border border-[#a2adc4]/10">
                View Services
              </button>
            </div>
          </div>
        </header>

        {/* Main Grid Section */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-[#242f41] mb-2">Active Growth Portfolio</h2>
              <div className="h-1 w-12 bg-[#4647d3] rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Project Card 1 */}
              <div className="group bg-[#ffffff] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#a2adc4]/5">
                <div className="h-64 overflow-hidden">
                  <img 
                    alt="Growth Analytics" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsgPpxvsv_P2EvbEd8IIPcQeSUNvLUVLi1a3xz6moQsGWZGBStNPF-A2-HBSfZjxP6ag5_NXcq0nM0ng2T295MGDoTtDe8B7UGn22waJB0lMdODZ7clBZIlEPR8BSNuX5GiWGpVcskE2GWkjau37p6R3NOe5l8aY2FxKfjPzkzz21HHXUYSpQujciIJi0xmbkthxafUyitdKB-rQPi2tsp-SKA8cN4hey8eNGc_wObnNLIQJi9Lvdb09WQxDVDi8X-fLMehlQWwe4Z"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline text-2xl font-bold text-[#242f41]">Precision Ad-Tech Scale</h3>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">+45% Conversions</span>
                  </div>
                  <p className="font-body text-[#515c70] leading-relaxed mb-6">
                    Implementing a neuro-response engine to optimize creative asset delivery across major digital platforms, resulting in unprecedented ROI uplift.
                  </p>
                  <a className="flex items-center gap-2 text-[#4647d3] font-bold group/link hover:gap-3 transition-all" href="#">
                    Case Study <span className="material-symbols-outlined text-sm" style={iconStyle}>arrow_forward</span>
                  </a>
                </div>
              </div>
              
              {/* Project Card 2 */}
              <div className="group bg-[#ffffff] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#a2adc4]/5">
                <div className="h-64 overflow-hidden">
                  <img 
                    alt="Lead Generation" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClbPwXeEfP3sA-9AprXBuG-KnFdSbli4WwFzLVk3l5dpnPxdJFuOkxbEvLSf3UHEx89wV-9phS4h62JNe7vGGpZXzJWdPn3bUyFVH4XkhrAb2ATq7HuNcfabuC61y28T3ev-PjISObLgZZz3kKtBMJjwuueDXDW58ufR3kStAHezlZfAu_HhXCxN-2nd2LfCNPSxo-c8B8a28Iqr2jleZSnT262a88f7lCr0Vt9Fg4MbSN2AoHuj9nL4O2djarjaj9_Wgm6Rck-7j7"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline text-2xl font-bold text-[#242f41]">B2B Omni-Channel Hub</h3>
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full">3x Lead Flow</span>
                  </div>
                  <p className="font-body text-[#515c70] leading-relaxed mb-6">
                    Automated lead scoring and behavioral sequencing that nurtured cold prospects into sales-qualified meetings for a Global Fortune 500 SaaS.
                  </p>
                  <a className="flex items-center gap-2 text-[#4647d3] font-bold group/link hover:gap-3 transition-all" href="#">
                    Case Study <span className="material-symbols-outlined text-sm" style={iconStyle}>arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="group bg-[#ffffff] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#a2adc4]/5">
                <div className="h-64 overflow-hidden">
                  <img 
                    alt="Retention Strategy" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBboYLZpMIseF1SC-F3lhxG8tjWRq5urzumPCms1Mj3-vUY6_IoquOqGuw38GQ7lKhet0XUWqccjEOqe9TOsP_FHC_f4aXiU1IQOqJg6RHem7HnNT2D_UGWXZpUhUg9cPqwxNoACudXRYh7T8ghJXA-57v4L08gJA6ULuZl4XmGPuLlXoMqJkggTlivkJvoRrMEZCO6iXe11b6ueq9QlUa3vuLLPER3Cy2vaHSVoRZvsMZABRWSNtQHBz2Lcm6Bo_8SHHRYUtduaRII"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline text-2xl font-bold text-[#242f41]">Retention Engine 2.0</h3>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full">-22% Churn Rate</span>
                  </div>
                  <p className="font-body text-[#515c70] leading-relaxed mb-6">
                    Predictive analytics modeling used to identify at-risk users before they leave, triggering personalized AI-driven win-back sequences.
                  </p>
                  <a className="flex items-center gap-2 text-[#4647d3] font-bold group/link hover:gap-3 transition-all" href="#">
                    Case Study <span className="material-symbols-outlined text-sm" style={iconStyle}>arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Project Card 4 */}
              <div className="group bg-[#ffffff] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#a2adc4]/5">
                <div className="h-64 overflow-hidden">
                  <img 
                    alt="E-commerce Scale" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1osttCFwoJR9XOpi5fwgKUdoPrZWoc_wIzrkutMoT4t_F1YEhprcvquTjjBR6jlknIdl4UK65I-O-2miQMyvjp0OHu_MTXRwiXenDngiHg6_wn0txHiPFOaWQEpx3b_QhQeQtrLkf9TCc3REM5D0ANTHNgugBCUlm7cnHAbXcJ2RPbbRnr7DSkhOMETUSIvHVGl5gaXF9cF_q6HJXr5wKgMplHj18KfBdWr_re49axq6fYyBs1HRZpCHJ40a1F-_8f6HttsELesSz"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline text-2xl font-bold text-[#242f41]">Direct-to-Consumer Sprint</h3>
                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full">+112% Revenue YoY</span>
                  </div>
                  <p className="font-body text-[#515c70] leading-relaxed mb-6">
                    Holistic restructuring of the customer acquisition funnel, from high-intent search capture to multi-touch attribution modeling.
                  </p>
                  <a className="flex items-center gap-2 text-[#4647d3] font-bold group/link hover:gap-3 transition-all" href="#">
                    Case Study <span className="material-symbols-outlined text-sm" style={iconStyle}>arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-24 bg-[#EEF2FF]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-extrabold text-[#242f41] tracking-tight">Featured Growth Success Stories</h2>
              <p className="font-body text-[#515c70] mt-4 text-lg">Where advanced intelligence meets exceptional execution.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Large Featured Card 1 */}
              <div className="relative group h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaFzHbe7nv0FWofC2OdEJMgmeNfKJs0_5tJqSnP8cbL8ptl3znE8smPDgXlAqfh7KfRpFSNs8c2pS66UDbk84G54UxutdHB2wRlYCvFrELrZXpUzEuw1fsK49FzzfNSQweDVwnmTQnz3PWiRXDVzsHY3wL9w_UItrWRv2UcvJ4VmfErsIROHETCwIoaxNAKByK5UuZY_vItLNkksVMKfcwmjPO6gpW9GdPcB63S3mtIil7etIg-onPersQdWib6A2zW2vKvAYcgjzF"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-12">
                  <span className="font-headline text-indigo-400 font-bold tracking-widest text-xs mb-4">ENTERPRISE SCALE</span>
                  <h3 className="font-headline text-3xl font-bold text-white mb-4">The $100M Expansion Project</h3>
                  <p className="font-body text-slate-300 mb-8 leading-relaxed">
                    How we helped a leading fintech disruptor scale from Series B to IPO through localized growth frameworks across 12 markets.
                  </p>
                  <button className="bg-white text-indigo-900 px-8 py-3 rounded-2xl font-bold self-start hover:bg-indigo-50 transition-colors">Read Blueprint</button>
                </div>
              </div>
              
              {/* Large Featured Card 2 */}
              <div className="relative group h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  alt="Tech Solutions" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAliPttLXEI3cvDX-oZVzXvTpTlS96k6AolWc-vYGX-lbV-t3HgfwgzBjJeLpXeCyjU7j8W7qoQpw7A88S0EDbdMx3SmC_ppYbQdy8N6x0QUDcJR511_gEr6Sw0_4_Xz7qb-zL2zJeVaGtKk2s82IsM7ALjzL8En1vC1FBl84Dy_LvUasobpl-UHVpCTso7VHu1sjMqjIjTvDV1MKeOHiAT7HZ-t3HL4lgQScEUfKgUdqXlqCDLdv7lJtGgPmr-DB-U95MRJp4QqogV"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-12">
                  <span className="font-headline text-indigo-400 font-bold tracking-widest text-xs mb-4">MARKET DISRUPTION</span>
                  <h3 className="font-headline text-3xl font-bold text-white mb-4">Neuro-Marketing Revolution</h3>
                  <p className="font-body text-slate-300 mb-8 leading-relaxed">
                    Leveraging biometric feedback to craft messaging that resonates on a subconscious level, achieving 80% higher engagement.
                  </p>
                  <button className="bg-white text-indigo-900 px-8 py-3 rounded-2xl font-bold self-start hover:bg-indigo-50 transition-colors">Explore Strategy</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}

      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-inverse-surface text-white p-12 md:p-24 relative overflow-hidden text-center">
          <div className="absolute inset-0 btn-gradient opacity-10"></div>
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight">Have a Project in Mind?</h2>
            <p className="text-lg text-inverse-on-surface/80">
                Let's discuss how our growth systems can be tailored to your specific business objectives and market conditions.
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
      </div>
    </div>
  );
}