export default function ServicesOverview() {
  // Converted your custom CSS classes to inline objects for guaranteed rendering
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
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-8 py-24 md:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#4647d3]/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#6a37d4]/20 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl tracking-tight text-[#242f41] mb-8 leading-[1.1]">
            Services Designed to <span style={gradientText}>Scale Your Business</span>
          </h1>
          <p className="text-[#515c70] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            From AI automation to development and growth systems — we build everything you need to grow efficiently in the age of intelligence.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              style={primaryGradientBg} 
              className="text-[#f4f1ff] px-8 py-4 rounded-xl font-headline font-bold text-base active:scale-95 transition-transform shadow-xl shadow-[#4647d3]/25"
            >
              Get Started
            </button>
            <button className="bg-[#cdddfe] text-[#242f41] px-8 py-4 rounded-xl font-headline font-bold text-base hover:bg-[#d5e3ff] transition-colors">
              Explore Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-8 py-24 bg-[#ecf1ff]">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* AI SOLUTIONS */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#9396ff]/20 text-[#4647d3] font-bold rounded-full text-xs tracking-widest uppercase">
                <span className="material-symbols-outlined text-sm" style={iconStyle}>smart_toy</span>
                AI SOLUTIONS
              </div>
              <h2 className="font-headline font-bold text-4xl text-[#242f41] leading-tight">
                We build intelligent systems that automate workflows and reduce manual work.
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 bg-[#ffffff] text-[#515c70] rounded-full text-sm font-medium border border-[#a2adc4]/10">AI Automation</span>
                <span className="px-4 py-1.5 bg-[#ffffff] text-[#515c70] rounded-full text-sm font-medium border border-[#a2adc4]/10">AI Agents</span>
                <span className="px-4 py-1.5 bg-[#ffffff] text-[#515c70] rounded-full text-sm font-medium border border-[#a2adc4]/10">Chatbots</span>
              </div>
              <p className="text-[#515c70] text-lg leading-relaxed">
                Our AI practice focuses on tangible ROI. We integrate custom neural architectures into your existing stack to eliminate bottlenecks and empower your team.
              </p>
              <button 
                style={primaryGradientBg} 
                className="text-[#f4f1ff] px-8 py-3 rounded-xl font-headline font-bold text-sm active:scale-95 transition-transform shadow-lg shadow-[#4647d3]/20 w-fit"
              >
                Learn More
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#ffffff] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDldkgguAJRBYAsIfVjZ5IvXfqmhi78fnlE7pni3B4wph12ZjLkeH9ULdQsz6cDclpJrDo-Q1xUVDTb28Q3R0_LmWhTLDTJway1zGIVFEMryAhvAaM7wFo8gu_vUT58c9_SNMfzPlTSf_aPByGAtwLzdGExHx8CmszyEO2Btu5-c2apwvkldi4EUN2wEfFFRFaMUtbCpbU3qwK6bCemf_vkdVkINAgjHPr3F6KrovNyFOcdZ1CvNKxSRInIM97cX3nITQhyHdGmDQT-" alt="Support Automation" />
                <h4 className="font-headline font-bold text-[#242f41] mb-2">Support Automation</h4>
                <p className="text-sm text-[#4647d3] font-semibold">Reduced response time by 70%</p>
              </div>
              <div className="bg-[#ffffff] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEzY_ku_Tdl24RFaQIV7om3e-1gCCtnmC3h5qq9PudY3RbvDsEo3lqmqXF_ViZ0Ja8ufTumECuvwpZ0hOH6785sKMezUZY9uUp_ydPnMKiaaeXcprLTM49n1PC-sBOGhfq96poKyVKZKzmWA8W5gTmQkrZ4BzU6Zf82bEX7tcg9FiNZXxrpkw60TnGw_1HKEv4S4Alt_IAJKr6_ppv-8yuOyAysLl5bMD-SxZnqfQ4AJmZek0eR8z-_G7qf5guzE0AgwzRShxapyfK" alt="Data Intelligence" />
                <h4 className="font-headline font-bold text-[#242f41] mb-2">Data Intelligence</h4>
                <p className="text-sm text-[#4647d3] font-semibold">99% accuracy in predictions</p>
              </div>
            </div>
          </div>

          {/* DEVELOPMENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 grid md:grid-cols-2 gap-6">
              <div className="bg-[#ffffff] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvXh1kwzQ63X4THE0oCmkKqJj9t_mZwv3ApoH1FocuiiEgcW3A1zvPSta-yU4NBpbgyxQ_7fS1-1-uXIrPWZ8fca4kchdZdlIQlWVv5q1mlf-DYHnklzKh53BbnGC3RizbuRwrkXS0N_Ti8s4MihMXcDRD4meiyohhKujgRzDH9IiBmlAAE-0fnSLoJTtzQ12YzOs1HYlT6yZgR0p0UFXU-s1xiQOARimnvyAzEWn4Loy9CaBghkze2MbePacFMwFCvbbwHzM8ADTe" alt="FinTech SaaS" />
                <h4 className="font-headline font-bold text-[#242f41] mb-2">FinTech SaaS</h4>
                <p className="text-sm text-[#4647d3] font-semibold">Scaled to 100k+ users</p>
              </div>
              <div className="bg-[#ffffff] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWCyoagO2H1v5xmE_WM9ejn3TxLDXY0ZhTVGwru1oJxhnm6NL1UIJ3ekmVM7JRNvGP0IZ37ZouPQQKNFYnGSX4gxpK9nL_adpzir9B_mBN_6WMalYduQaFTXQdmR41gEIt_wlD2U9egD41mJO2oKSpMy05Kc3yYvwnKT3rXW82DAo5mqumXQnYPcGaAHE97SjNgTpRuHOB764ikRyf8aphTZ3YJGznXcNpfK3vZ43N3lPUNoW9c60ySrqqqOEyzeigYw1RSdMObdgH" alt="Custom CRM" />
                <h4 className="font-headline font-bold text-[#242f41] mb-2">Custom CRM</h4>
                <p className="text-sm text-[#4647d3] font-semibold">Infrastructure cost cut by 40%</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#dac9ff]/20 text-[#6a37d4] font-bold rounded-full text-xs tracking-widest uppercase">
                <span className="material-symbols-outlined text-sm" style={iconStyle}>terminal</span>
                DEVELOPMENT
              </div>
              <h2 className="font-headline font-bold text-4xl text-[#242f41] leading-tight">
                We design and build high-performance websites and scalable platforms.
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 bg-[#ffffff] text-[#515c70] rounded-full text-sm font-medium border border-[#a2adc4]/10">Web Development</span>
                <span className="px-4 py-1.5 bg-[#ffffff] text-[#515c70] rounded-full text-sm font-medium border border-[#a2adc4]/10">SaaS Development</span>
              </div>
              <p className="text-[#515c70] text-lg leading-relaxed">
                Engineering excellence meets world-class design. We build secure, robust, and lightning-fast digital products that stand the test of time and scale.
              </p>
              <button 
                style={primaryGradientBg} 
                className="text-[#f4f1ff] px-8 py-3 rounded-xl font-headline font-bold text-sm active:scale-95 transition-transform shadow-lg shadow-[#4647d3]/20 w-fit"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* GROWTH SYSTEMS */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff909d]/20 text-[#a53046] font-bold rounded-full text-xs tracking-widest uppercase">
                <span className="material-symbols-outlined text-sm" style={iconStyle}>trending_up</span>
                GROWTH SYSTEMS
              </div>
              <h2 className="font-headline font-bold text-4xl text-[#242f41] leading-tight">
                We create systems that attract, convert, and scale your customer base.
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 bg-[#ffffff] text-[#515c70] rounded-full text-sm font-medium border border-[#a2adc4]/10">Sales</span>
                <span className="px-4 py-1.5 bg-[#ffffff] text-[#515c70] rounded-full text-sm font-medium border border-[#a2adc4]/10">Ads</span>
                <span className="px-4 py-1.5 bg-[#ffffff] text-[#515c70] rounded-full text-sm font-medium border border-[#a2adc4]/10">SEO</span>
                <span className="px-4 py-1.5 bg-[#ffffff] text-[#515c70] rounded-full text-sm font-medium border border-[#a2adc4]/10">Funnels</span>
              </div>
              <p className="text-[#515c70] text-lg leading-relaxed">
                Growth isn't an accident. We engineer conversion-focused ecosystems that turn attention into revenue through data-driven strategies and persuasive copy.
              </p>
              <button 
                style={primaryGradientBg} 
                className="text-[#f4f1ff] px-8 py-3 rounded-xl font-headline font-bold text-sm active:scale-95 transition-transform shadow-lg shadow-[#4647d3]/20 w-fit"
              >
                Learn More
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#ffffff] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKMQJuX3_rl3x3gKnoWizfs6OP2P8gtkGUTn73nqsq1EWZ-gpq3O3MRvEUFKeR5bIJK0LTw96Gw9TK432hJvuphoPJMnNQCt2l8v7f7ego4LVHfKFWobgH_lqoeodZ2ljL28byfLR8G9wDPixkPEzEYWTSAc7R121flaQ5X-kSpaqe3KY7qUaJENzzPLgjRhk27aU-ZTEFETUAzng1Nq_eJwar3LrQpTABfMTZDDvy2ynGYrxYKRoEw99ZVBETRDsbZsSLB1GicSsg" alt="E-commerce Scale" />
                <h4 className="font-headline font-bold text-[#242f41] mb-2">E-commerce Scale</h4>
                <p className="text-sm text-[#4647d3] font-semibold">3.5x ROAS in 90 days</p>
              </div>
              <div className="bg-[#ffffff] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img className="w-full h-40 object-cover rounded-lg mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0psJ4h9H55idaSVDMhZss2K2wQM7vFEGQiJ9D8qb3yfZCx5t0aYSzkqLtg6VWJItg9XUa7fmtimDYzcaPj1MBesG68uv1lfP-CFTsiIGWsaPs6E63Rp799YZ5qKV22-3ZKXu0Ppk6ujEe0RgH8AWdAtWyPT5r-G3CxUwiWsj0U9yyWkQxhKUEdWzTHr8m-cm5By8y3JPGNXlhjmqTaWOEHaD2mnm3Rjai2Ub5pawH8BOFP4v_z-7KkzumZ4SXAchmQnZlNCdoD_Tp" alt="B2B Funnel" />
                <h4 className="font-headline font-bold text-[#242f41] mb-2">B2B Funnel</h4>
                <p className="text-sm text-[#4647d3] font-semibold">200% Lead Gen Increase</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* How We Work */}
      <section className="px-8 py-24 bg-[#f4f6ff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline font-bold text-4xl text-[#242f41] mb-4">How We Work</h2>
            <p className="text-[#515c70] max-w-xl mx-auto">A streamlined process designed for speed and clarity.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="relative z-10 space-y-6 text-center">
              <div 
                style={primaryGradientBg} 
                className="w-16 h-16 rounded-full flex items-center justify-center text-[#f4f1ff] mx-auto shadow-lg shadow-[#4647d3]/20"
              >
                <span className="material-symbols-outlined text-3xl" style={iconStyle}>lightbulb</span>
              </div>
              <h3 className="font-headline font-bold text-xl text-[#242f41]">1. Understand your goals</h3>
              <p className="text-[#515c70] leading-relaxed">We dive deep into your business metrics and challenges to define the perfect roadmap.</p>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 space-y-6 text-center">
              <div 
                style={primaryGradientBg} 
                className="w-16 h-16 rounded-full flex items-center justify-center text-[#f4f1ff] mx-auto shadow-lg shadow-[#4647d3]/20"
              >
                <span className="material-symbols-outlined text-3xl" style={iconStyle}>construction</span>
              </div>
              <h3 className="font-headline font-bold text-xl text-[#242f41]">2. Build tailored solutions</h3>
              <p className="text-[#515c70] leading-relaxed">Our experts develop your systems using cutting-edge AI and engineering best practices.</p>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 space-y-6 text-center">
              <div 
                style={primaryGradientBg} 
                className="w-16 h-16 rounded-full flex items-center justify-center text-[#f4f1ff] mx-auto shadow-lg shadow-[#4647d3]/20"
              >
                <span className="material-symbols-outlined text-3xl" style={iconStyle}>rocket_launch</span>
              </div>
              <h3 className="font-headline font-bold text-xl text-[#242f41]">3. Launch and optimize</h3>
              <p className="text-[#515c70] leading-relaxed">We go live, monitor results, and continuously refine to ensure maximum performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-24 mb-24">
        <div 
          style={primaryGradientBg} 
          className="max-w-5xl mx-auto relative overflow-hidden rounded-[2.5rem] p-12 md:p-24 text-center text-[#f4f1ff] shadow-2xl shadow-[#4647d3]/30"
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#6a37d4]/30 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#9396ff]/30 blur-[100px] rounded-full"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="font-headline font-extrabold text-4xl md:text-6xl tracking-tight leading-tight">
              Let’s Build Your <br className="hidden md:block" /> Growth System
            </h2>
            <p className="text-[#f4f1ff]/80 text-lg md:text-xl max-w-xl mx-auto">
              Start your journey with AI-powered systems today. Join the companies scaling with Neuro Works.
            </p>
            <button className="bg-white text-[#4647d3] px-10 py-4 rounded-full font-headline font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl">
              Book a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}