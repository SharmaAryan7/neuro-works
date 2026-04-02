import { Link } from 'react-router-dom';

export default function GrowthSystems() {
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
              GROWTH SYSTEMS
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold font-headline tracking-tight leading-[1.2] text-[#242f41]">
              Growth Systems That <br />
              <span style={gradientText}>Drive and Scale Revenue</span>
            </h1>
            <p className="text-base lg:text-lg text-[#515c70] max-w-lg font-body leading-relaxed mx-auto lg:mx-0">
              We build marketing and sales systems that attract, convert, and grow your customer base efficiently through AI-powered optimization and strategic funnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link 
                style={primaryGradientBg}
                className="inline-block text-center text-white px-8 py-3.5 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-[#4647d3]/30 transition-all active:scale-[0.98]"
              >
                Start Growing
              </Link>
              <Link 
                to="/work/growth-systems"
                className="px-8 py-3.5 bg-[#ecf1ff] text-[#4647d3] rounded-xl font-bold text-base transition-all hover:bg-[#d5e3ff] text-center"
              >
                View Case Studies
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative bg-[#ffffff] rounded-xl p-3 shadow-2xl shadow-[#242f41]/5 border border-[#a2adc4]/10 max-w-lg mx-auto">
              <img 
                alt="Modern sleek digital marketing analytics dashboard" 
                className="rounded-lg w-full h-[350px] lg:h-[400px] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg2sMqn4gTZWtW55EWsa7oiK3Acp0qXlRseOQSb3D8cOhLepcP21vtZFpX-RAY4trwr5QOqgaePcOa-_Mf9XYqo5iqZYFRtfMl3MRZDkIz2VJP_kz6GFZn5rOeEXMtj-YV5rrvPsWvsNDpTGQLdyjAS64RwRBGVvYzCYvEYezbx_xobE0sgb1cVKWF2_JZiSUQaCWJDksly9TAqQZBs8ygcOZuGXQUPklp42pBNpS1WU97BH6FXzFfgsnBeI0PXmqvfr_XPYv4oLN5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards / What We Do Section */}
      <section className="py-24 px-6 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-6 text-[#242f41]">What We Do</h2>
            <p className="text-lg text-[#515c70] font-body leading-relaxed">
              How growth systems combine marketing, funnels, and automation to generate leads and scale revenue.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#4647d3]/5 flex items-center justify-center mb-8 group-hover:bg-[#4647d3]/10 transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#4647d3]" style={iconStyle}>ads_click</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">Digital Marketing</h3>
              <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                Strategic campaigns to attract and engage your audience through precision targeting and brand storytelling.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#6a37d4]/5 flex items-center justify-center mb-8 group-hover:bg-[#6a37d4]/10 transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#6a37d4]" style={iconStyle}>filter_alt</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">Funnels</h3>
              <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                High-converting funnels designed to turn anonymous visitors into loyal customers through optimized pathways.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#4647d3]/5 flex items-center justify-center mb-8 group-hover:bg-[#4647d3]/10 transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#4647d3]" style={iconStyle}>group_add</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">Lead Generation</h3>
              <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                Automated systems that consistently bring high-quality, qualified leads directly into your sales pipeline.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#6a37d4]/5 flex items-center justify-center mb-8 group-hover:bg-[#6a37d4]/10 transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#6a37d4]" style={iconStyle}>campaign</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">Paid Ads</h3>
              <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                Highly optimized advertising campaigns across Google and Meta platforms for maximum ROI and visibility.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#4647d3]/5 flex items-center justify-center mb-8 group-hover:bg-[#4647d3]/10 transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#4647d3]" style={iconStyle}>search_insights</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">SEO</h3>
              <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                Data-driven search engine optimization to improve visibility and rank higher for the keywords that matter most.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#6a37d4]/5 flex items-center justify-center mb-8 group-hover:bg-[#6a37d4]/10 transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#6a37d4]" style={iconStyle}>edit_note</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">Copywriting</h3>
              <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                Persuasive, psychologically-informed content and sales copy that drives meaningful conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Successes Section (Updated to 3 Columns) */}
      <section className="py-24 px-6 bg-[#f4f6ff]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4 text-slate-900">Recent Successes</h2>
              <p className="text-lg text-slate-500">Real growth delivered through optimized systems</p>
            </div>
            <Link to="/work/growth-systems" className="inline-flex items-center gap-2 font-bold text-[#4647d3] hover:text-[#6a37d4] transition-colors">
              View All Growth Projects <span className="material-symbols-outlined" style={iconStyle}>arrow_forward</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Link to="/work/growth-systems" className="block group cursor-pointer">
              <div className="overflow-hidden rounded-xl aspect-[16/10] mb-6 shadow-lg">
                <img 
                  alt="Enterprise SaaS Launch" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXmwlaDPXmDks9v9QHAlr-pN1w9H4HXWS0D-KuBJiiwu0gGt6Z2uVaZnuylFMAcG1ZaGKM3C8IRgQyqqEdD2IA2smGCLMsxTdsyiFhcShDFrL76ofCq8-RFZOvum4KXksTLCTDyrDgLQ-eWwSi3i2Bja1s3sLX0FbqPk3OP0RHo8kwJmQwrtUp9SwKYWHqRCdxnZ3zPM4kWIgH1XGqCMSGeeX4Wp_wvbgrEU2TkbeXkcAKEv8U0phnmOzy889UdAfZmoeeYlHeuWgp"
                />
              </div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="px-3 py-1 bg-[#4647d3]/10 text-[#4647d3] text-[10px] font-extrabold uppercase tracking-widest rounded-full">SaaS Launch</span>
                <span className="text-sm font-bold text-[#6a37d4]">+45% Conversions</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#242f41] group-hover:text-[#4647d3] transition-colors">Enterprise SaaS Launch</h3>
              <p className="text-[#515c70] text-sm font-body leading-relaxed">
                Revamped the entire acquisition funnel for a Series B startup, resulting in a significant uplift in high-value lead quality.
              </p>
            </Link>

            {/* Project 2 */}
            <Link to="/work/growth-systems" className="block group cursor-pointer">
              <div className="overflow-hidden rounded-xl aspect-[16/10] mb-6 shadow-lg">
                <img 
                  alt="D2C Global Expansion" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA38-KURmyNJaEK020fuHLJGyHT89Abv_NxdujNmvBNXo6lkYkkKJiTm7th0-GC4U9OsoxTlBx5eBuiuaCWuWfv-NPdnNmJM2T2dbvikE85AJ4nJqHCJrbPMZk2gVsftSSvyL0dst3yurdF1GWxDI7ZjnNJ8xLqtREs-wvzLzs0nLz3x6YcJMiCZ3Pa6_1x7SQMRocSveIXC7LxBZd8wHTay5ahFTsSyyju8GFclLvSUbYDuALINTD7DoJOjffv9fbmcieOU2OZLS6i"
                />
              </div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="px-3 py-1 bg-[#6a37d4]/10 text-[#6a37d4] text-[10px] font-extrabold uppercase tracking-widest rounded-full">D2C Expansion</span>
                <span className="text-sm font-bold text-[#4647d3]">3.5x ROI Increase</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#242f41] group-hover:text-[#4647d3] transition-colors">D2C Global Expansion</h3>
              <p className="text-[#515c70] text-sm font-body leading-relaxed">
                Integrated AI-driven ad optimization and personalized copy sequences to scale revenue across three international markets.
              </p>
            </Link>

            {/* Project 3 (New) */}
            <Link to="/work/growth-systems" className="block group cursor-pointer">
              <div className="overflow-hidden rounded-xl aspect-[16/10] mb-6 shadow-lg">
                <img 
                  alt="B2B Omni-Channel Hub" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPyBes8zOt6WVyl0q_czBdS20bAN8uHYUEvyqnt1dZOyBUqp6ghAxVA_w2MF9XEhF2l29Z-bV24t1OPsxAZvqWOIXHOKNzEsSTT12ZrXj_7RtDHxWS5MBNT1F_z6txQTxejXVxKYSXg_Jb42N_xwE6AY3gMv6-HbcHUQr23Ikyq_bbCdLBNvrETFpym5CrqszMNtjbzc7J3ficG-__zJjKnQ2xcW2V4jY7gGEppG1SAoUfqrUqJGOG1PDJYyf3z6iX2juuPqxxM6hY"
                />
              </div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="px-3 py-1 bg-[#4647d3]/10 text-[#4647d3] text-[10px] font-extrabold uppercase tracking-widest rounded-full">Lead Gen</span>
                <span className="text-sm font-bold text-[#6a37d4]">2.5x Pipeline</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#242f41] group-hover:text-[#4647d3] transition-colors">B2B Omni-Channel Hub</h3>
              <p className="text-[#515c70] text-sm font-body leading-relaxed">
                Automated lead scoring and lifecycle nurturing that reduced sales cycles by 40% for a global enterprise.
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
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight">Ready to Scale Your Growth?</h2>
            <p className="text-lg text-inverse-on-surface/80">Let’s build systems that attract, convert, and grow your business with scientific precision and creative excellence.</p>
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