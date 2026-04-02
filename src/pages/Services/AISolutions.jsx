import { Link } from 'react-router-dom';

export default function AISolutions() {
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
      <section className="relative overflow-hidden py-16 lg:py-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4647d3]/40 to-[#6a37d4]/40 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#4647d3]/10 text-[#4647d3] text-[11px] font-bold tracking-[0.05em] uppercase font-label">
              AI SOLUTIONS
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold font-headline tracking-tight leading-[1.2] text-[#242f41]">
              AI Solutions That <br />
              <span style={gradientText}>Automate and Scale</span>
            </h1>
            <p className="text-base lg:text-lg text-[#515c70] max-w-lg font-body leading-relaxed mx-auto lg:mx-0">
              We build intelligent systems that streamline workflows, reduce manual work, and help your business operate efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link 
                style={primaryGradientBg}
                className="inline-block text-center text-white px-8 py-3.5 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-[#4647d3]/30 transition-all active:scale-[0.98]"
              >
                Start Automating
              </Link>
              <Link 
                to="/work/ai-solutions"
                className="px-8 py-3.5 bg-[#ecf1ff] text-[#4647d3] rounded-xl font-bold text-base transition-all hover:bg-[#d5e3ff] text-center"
              >
                View Case Studies
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative bg-[#ffffff] rounded-xl p-3 shadow-2xl shadow-[#242f41]/5 border border-[#a2adc4]/10 max-w-lg mx-auto">
              <img 
                alt="AI Visualization" 
                className="rounded-lg w-full h-[350px] lg:h-[400px] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYsr2zo_WSdCoIZO0eNuxD_Z4JfOodEsSfd_u8ZbF5vDG77QPp1w8_9IgUnQRSNy7FkoFA8tipE-eMTkbl3I39f1oGb-hfNdxW6_Y9UKHysb1oT-SlsPvu8vCL_tNyhtLD0jzT_OXHnUBY-JjSMf2S6bxKpHE5DaUvQBvVV0Je6AF8NTRMCmnPXBOaWdvEi4XPGwIOAc7OG7UA-HCHQfpPVa6Fe1YvJDfTfxvI8Hl7ilQQPHav3pNh-Oa3S9Vn2N3Ua7e4ZBs5y9ed"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-xl shadow-xl border border-[#a2adc4]/10 max-w-[220px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#4647d3]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#4647d3] text-sm" style={iconStyle}>psychology</span>
                  </div>
                  <span className="font-bold text-sm text-[#242f41]">Active Insights</span>
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

      {/* What We Do Section */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-6 text-slate-900">What We Do</h2>
            <p className="text-lg text-slate-500 font-body leading-relaxed">
              In an era of rapid digital transformation, we help organizations harness the power of artificial intelligence to redefine their operational boundaries. Our approach integrates cognitive automation directly into your core business logic, transforming bottlenecks into growth engines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#9396ff]/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#4647d3]" style={iconStyle}>auto_mode</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-[#242f41]">Workflow Orchestration</h4>
                  <p className="text-[#515c70] leading-relaxed">End-to-end automation of complex business processes, reducing cycle times by up to 60%.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#9396ff]/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#4647d3]" style={iconStyle}>monitoring</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-[#242f41]">Efficiency Optimization</h4>
                  <p className="text-[#515c70] leading-relaxed">Continuous monitoring and self-adjusting systems that improve resource allocation in real-time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Capabilities Cards */}
      <section className="py-24 px-6 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4 text-[#242f41]">Core AI Capabilities</h2>
            <p className="text-[#515c70]">Specialized intelligent systems designed for modern enterprise needs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5">
              <div className="w-16 h-16 rounded-2xl bg-[#4647d3]/5 flex items-center justify-center mb-8 group-hover:bg-[#4647d3]/10 transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#4647d3]" style={iconStyle}>automation</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">AI Automation</h3>
              <p className="text-slate-500 font-body leading-relaxed mb-8">
                Deploy custom LLM-powered pipelines that handle document processing, data extraction, and repetitive decision-making tasks.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5">
              <div className="w-16 h-16 rounded-2xl bg-[#6a37d4]/5 flex items-center justify-center mb-8 group-hover:bg-[#6a37d4]/10 transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#6a37d4]" style={iconStyle}>smart_toy</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">AI Agents</h3>
              <p className="text-slate-500 font-body leading-relaxed mb-8">
                Autonomous digital workers that navigate your existing software stack to complete complex, multi-step business objectives.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5">
              <div className="w-16 h-16 rounded-2xl bg-[#4647d3]/5 flex items-center justify-center mb-8 group-hover:bg-[#4647d3]/10 transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#4647d3]" style={iconStyle}>chat_bubble</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">Chatbots</h3>
              <p className="text-slate-500 font-body leading-relaxed mb-8">
                Enterprise-grade conversational interfaces that provide instant support and lead generation with human-like understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Successes Section */}
      {/* Recent Successes Section */}
      <section className="py-24 px-6 bg-[#f4f6ff]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4 text-slate-900">Recent Successes</h2>
              <p className="text-lg text-slate-500">Real impact delivered through intelligent systems</p>
            </div>
            <Link to="/work/ai-solutions" className="inline-flex items-center gap-2 font-bold text-[#4647d3] hover:text-[#6a37d4] transition-colors">
              View All AI Projects <span className="material-symbols-outlined" style={iconStyle}>arrow_forward</span>
            </Link>
          </div>
          
          {/* Changed to md:grid-cols-3 and gap-8 for a smaller, 3-column layout */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Link to="/work/ai-solutions" className="block group cursor-pointer">
              <div className="overflow-hidden rounded-xl aspect-[16/10] mb-6 shadow-lg">
                <img 
                  alt="FinTech Dashboard" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQRH2YRiHh1q9-W9vGb1dFBTGerGTJpKF3N2TNXjUjpama0Q2cOYc3sHr43sA3hrG7EOoaBcdH7Wi4GyUzShm0brHISEyxPhs1dVFVhWO4nRkMF5f_wEVap_oPKhok2PvScTisTL_L1l92PM1rN207rV9s4Yd3T144LlYmjk3ouNGgS4VPyH8UvRndxrI-gEV-zLG64y_x6CQUNoYSvhlE7fpjyIwkYPMQ7-2UWHIhgvlyW09BTmWM3CAKoEZxbsC71pRzLuf4Iwkv"
                />
              </div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="px-3 py-1 bg-[#4647d3]/10 text-[#4647d3] text-[10px] font-extrabold uppercase tracking-widest rounded-full">Automation</span>
                <span className="text-sm font-bold text-[#6a37d4]">85% Efficiency Boost</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#242f41] group-hover:text-[#4647d3] transition-colors">FinTech Transaction Intelligence</h3>
              <p className="text-[#515c70] text-sm font-body leading-relaxed">
                Implemented an AI agent layer that automates 90% of manual transaction reconciliation, saving over 40 hours per week for the finance team.
              </p>
            </Link>

            {/* Project 2 */}
            <Link to="/work/ai-solutions" className="block group cursor-pointer">
              <div className="overflow-hidden rounded-xl aspect-[16/10] mb-6 shadow-lg">
                <img 
                  alt="Support Team" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVzq1tYmCrRL3R4TgQBxC1MddFeghmkLT-9OSEiE-RQvUV3A0NC86wgJOwX1dx7HqVa9dI9s0Fe7sxHEgdDz8NiatnTM_lX86tq2mSj5VARxXBhslgk8AaPBILk2ouc12ODagxzrgeROZgzxADZkzk1TLBdHVL36CP7QDL1QZsG-p4w6UoB61VI0PUx3kX0JYJY_vu2K1y1df1phLpDYOZM6yEGm4uJ_F8rm9qzUXNjZqh3YCFk6CGl-CuS_Ea-MMxvPrYEqwSBHR9"
                />
              </div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="px-3 py-1 bg-[#6a37d4]/10 text-[#6a37d4] text-[10px] font-extrabold uppercase tracking-widest rounded-full">Chatbots</span>
                <span className="text-sm font-bold text-[#4647d3]">Instant Response</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#242f41] group-hover:text-[#4647d3] transition-colors">SaaS Support Scale-up</h3>
              <p className="text-[#515c70] text-sm font-body leading-relaxed">
                Deployed a custom-trained chatbot that resolved 65% of customer inquiries without human intervention, maintaining a 98% CSAT score.
              </p>
            </Link>

            {/* Project 3 (New) */}
            <Link to="/work/ai-solutions" className="block group cursor-pointer">
              <div className="overflow-hidden rounded-xl aspect-[16/10] mb-6 shadow-lg">
                <img 
                  alt="Supply Chain Orchestration" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGBYltWU_SwxDEU8FcoWUdJXft9g3NV1huT4Exz67rHrKjsjQpJZkKRenKtvJJEqmLjUL3xvk41e7ngjUIxoTFKiqjcGl20CJIlfZzKIIvM2MrZtDZQNVK6zj3OZJDkg-hBb0E7jXrqOXm7i_40-gSRGV4hD4GfeZ7KMydV_OJfvpOKaarFabtgY6-pZnTT8zV71Wgv1IMYZyg8dQtTBJ5BxiWgGF0yzXcRg7CmWig7ezn4agHnwpd_TNyB1cSqqTlD79HGqGjMY-F"
                />
              </div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="px-3 py-1 bg-[#4647d3]/10 text-[#4647d3] text-[10px] font-extrabold uppercase tracking-widest rounded-full">AI Agents</span>
                <span className="text-sm font-bold text-[#6a37d4]">24/7 Operation</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#242f41] group-hover:text-[#4647d3] transition-colors">Autonomous Supply Chain</h3>
              <p className="text-[#515c70] text-sm font-body leading-relaxed">
                Engineered a multi-agent system that autonomously routes logistics and manages inventory, predicting bottlenecks before they occur.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-inverse-surface text-white p-12 md:p-24 relative overflow-hidden text-center">
          <div className="absolute inset-0 btn-gradient opacity-10"></div>
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight">Ready to Automate Your Business?</h2>
            <p className="text-lg text-inverse-on-surface/80">Let’s build intelligent systems tailored to your needs. Our team is ready to help you scale through smart automation.</p>
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
    </div>
  );
}