export default function GrowthSystems() {
  // Custom inline styles to guarantee pixel-perfect rendering
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
    <div className="bg-[#F8FAFC] text-[#242f41] font-body min-h-screen">
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-8 py-20 lg:py-32 max-w-7xl mx-auto">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[120px] mix-blend-multiply opacity-70"></div>
          <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-bold text-[10px] uppercase tracking-widest font-label">
                GROWTH SYSTEMS
              </span>
              <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-[#1E293B]">
                Growth Systems That <span style={textGradient}>Drive and Scale Revenue</span>
              </h1>
              <p className="text-lg text-[#64748B] max-w-xl leading-relaxed font-body">
                We build marketing and sales systems that attract, convert, and grow your customer base efficiently through AI-powered optimization and strategic funnels.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button style={ctaGradient} className="text-white px-8 py-4 rounded-xl text-md font-bold shadow-lg shadow-indigo-500/25 hover:opacity-90 active:scale-95 transition-all">
                  Start Growing
                </button>
                <button className="bg-[#cdddfe] text-[#4647d3] px-8 py-4 rounded-xl text-md font-bold hover:bg-[#d5e3ff] transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                <img 
                  alt="Modern sleek digital marketing analytics dashboard" 
                  className="w-full h-full object-cover aspect-[4/3]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg2sMqn4gTZWtW55EWsa7oiK3Acp0qXlRseOQSb3D8cOhLepcP21vtZFpX-RAY4trwr5QOqgaePcOa-_Mf9XYqo5iqZYFRtfMl3MRZDkIz2VJP_kz6GFZn5rOeEXMtj-YV5rrvPsWvsNDpTGQLdyjAS64RwRBGVvYzCYvEYezbx_xobE0sgb1cVKWF2_JZiSUQaCWJDksly9TAqQZBs8ygcOZuGXQUPklp42pBNpS1WU97BH6FXzFfgsnBeI0PXmqvfr_XPYv4oLN5"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 bg-[#ecf1ff]">
          <div className="max-w-4xl mx-auto text-center px-8">
            <h2 className="text-sm font-bold text-[#4647d3] uppercase tracking-[0.2em] mb-4 font-label">What We Do</h2>
            <p className="text-3xl lg:text-4xl font-bold font-headline text-[#1E293B] leading-tight mb-8">
              How growth systems combine marketing, funnels, and automation to generate leads and scale revenue.
            </p>
            <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Services Cards */}
        <section className="py-24 bg-[#EEF2FF] px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-[#ffffff] p-11 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl" style={iconStyle}>ads_click</span>
                </div>
                <h3 className="text-xl font-bold font-headline text-[#1E293B] mb-4">Digital Marketing</h3>
                <p className="text-[#64748B] leading-relaxed font-body">Strategic campaigns to attract and engage your audience through precision targeting and brand storytelling.</p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-[#ffffff] p-11 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl" style={iconStyle}>filter_alt</span>
                </div>
                <h3 className="text-xl font-bold font-headline text-[#1E293B] mb-4">Funnels</h3>
                <p className="text-[#64748B] leading-relaxed font-body">High-converting funnels designed to turn anonymous visitors into loyal customers through optimized pathways.</p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-[#ffffff] p-11 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl" style={iconStyle}>group_add</span>
                </div>
                <h3 className="text-xl font-bold font-headline text-[#1E293B] mb-4">Lead Generation</h3>
                <p className="text-[#64748B] leading-relaxed font-body">Automated systems that consistently bring high-quality, qualified leads directly into your sales pipeline.</p>
              </div>
              
              {/* Card 4 */}
              <div className="bg-[#ffffff] p-11 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl" style={iconStyle}>campaign</span>
                </div>
                <h3 className="text-xl font-bold font-headline text-[#1E293B] mb-4">Paid Ads</h3>
                <p className="text-[#64748B] leading-relaxed font-body">Highly optimized advertising campaigns across Google and Meta platforms for maximum ROI and visibility.</p>
              </div>
              
              {/* Card 5 */}
              <div className="bg-[#ffffff] p-11 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl" style={iconStyle}>search_insights</span>
                </div>
                <h3 className="text-xl font-bold font-headline text-[#1E293B] mb-4">SEO</h3>
                <p className="text-[#64748B] leading-relaxed font-body">Data-driven search engine optimization to improve visibility and rank higher for the keywords that matter most.</p>
              </div>
              
              {/* Card 6 */}
              <div className="bg-[#ffffff] p-11 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl" style={iconStyle}>edit_note</span>
                </div>
                <h3 className="text-xl font-bold font-headline text-[#1E293B] mb-4">Copywriting</h3>
                <p className="text-[#64748B] leading-relaxed font-body">Persuasive, psychologically-informed content and sales copy that drives meaningful conversions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Successes */}
        <section className="py-24 px-8 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-[#4647d3] uppercase tracking-[0.2em] font-label">Recent Successes</h2>
                <p className="text-4xl font-bold font-headline text-[#1E293B]">Real growth delivered through optimized systems</p>
              </div>
              <a className="text-indigo-600 font-bold hover:gap-3 flex items-center gap-2 transition-all" href="#">
                View All Growth Projects <span className="material-symbols-outlined" style={iconStyle}>arrow_forward</span>
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Project 1 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-6 bg-[#dee8ff]">
                  <img 
                    className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXmwlaDPXmDks9v9QHAlr-pN1w9H4HXWS0D-KuBJiiwu0gGt6Z2uVaZnuylFMAcG1ZaGKM3C8IRgQyqqEdD2IA2smGCLMsxTdsyiFhcShDFrL76ofCq8-RFZOvum4KXksTLCTDyrDgLQ-eWwSi3i2Bja1s3sLX0FbqPk3OP0RHo8kwJmQwrtUp9SwKYWHqRCdxnZ3zPM4kWIgH1XGqCMSGeeX4Wp_wvbgrEU2TkbeXkcAKEv8U0phnmOzy889UdAfZmoeeYlHeuWgp" 
                    alt="Enterprise SaaS Launch" 
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-lg text-indigo-600 font-bold text-sm shadow-sm">
                    +45% Conversions
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-headline text-[#1E293B] mb-2 group-hover:text-indigo-600 transition-colors">Enterprise SaaS Launch</h3>
                <p className="text-[#64748B] font-body">Revamped the entire acquisition funnel for a Series B startup, resulting in a significant uplift in high-value lead quality.</p>
              </div>
              
              {/* Project 2 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-6 bg-[#dee8ff]">
                  <img 
                    className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA38-KURmyNJaEK020fuHLJGyHT89Abv_NxdujNmvBNXo6lkYkkKJiTm7th0-GC4U9OsoxTlBx5eBuiuaCWuWfv-NPdnNmJM2T2dbvikE85AJ4nJqHCJrbPMZk2gVsftSSvyL0dst3yurdF1GWxDI7ZjnNJ8xLqtREs-wvzLzs0nLz3x6YcJMiCZ3Pa6_1x7SQMRocSveIXC7LxBZd8wHTay5ahFTsSyyju8GFclLvSUbYDuALINTD7DoJOjffv9fbmcieOU2OZLS6i" 
                    alt="D2C Global Expansion" 
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-lg text-indigo-600 font-bold text-sm shadow-sm">
                    3.5x ROI Increase
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-headline text-[#1E293B] mb-2 group-hover:text-indigo-600 transition-colors">D2C Global Expansion</h3>
                <p className="text-[#64748B] font-body">Integrated AI-driven ad optimization and personalized copy sequences to scale revenue across three international markets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto px-8 py-20">
          <div style={ctaGradient} className="rounded-[2.5rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-500/20">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter font-headline">Ready to Scale Your Growth?</h2>
              <p className="text-lg text-indigo-100/90 leading-relaxed font-body">Let’s build systems that attract, convert, and grow your business with scientific precision and creative excellence.</p>
              <button className="bg-white text-indigo-600 px-10 py-5 rounded-xl text-lg font-extrabold hover:bg-indigo-50 active:scale-95 transition-all shadow-xl">
                Book a Call
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}