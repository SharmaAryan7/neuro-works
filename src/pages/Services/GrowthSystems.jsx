import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';

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
      {/* Hero Section */}
      <ScrollReveal direction="up">
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
                Systems that help you <br />
                <span style={gradientText}>attract, convert, and grow</span>
              </h1>
              <p className="text-base lg:text-lg text-[#515c70] max-w-lg font-body leading-relaxed mx-auto lg:mx-0">
                We build marketing and sales systems that bring in the right audience, convert them into customers, and help your business grow consistently.
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
      </ScrollReveal>

      {/* Services Cards / What We Do Section */}
      <section className="py-24 px-6 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-6 text-[#242f41]">What We Do</h2>
              <p className="text-lg text-[#515c70] font-body leading-relaxed">
                We combine marketing, funnels, and automation into one clear system — so your growth isn't random, but predictable and scalable. Everything is designed to work together and support your revenue goals.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#4647d3]/5 flex items-center justify-center mb-8 group-hover:bg-[#4647d3]/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#4647d3]" style={iconStyle}>ads_click</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">Digital Marketing</h3>
                <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                  We create targeted campaigns that attract the right audience and build consistent demand.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#6a37d4]/5 flex items-center justify-center mb-8 group-hover:bg-[#6a37d4]/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#6a37d4]" style={iconStyle}>filter_alt</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">Funnels</h3>
                <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                  We design simple, high-converting funnels that guide visitors from interest to action.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#4647d3]/5 flex items-center justify-center mb-8 group-hover:bg-[#4647d3]/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#4647d3]" style={iconStyle}>group_add</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">Lead Generation</h3>
                <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                  We build systems that bring in qualified leads and feed your sales pipeline automatically.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 4 */}
            <ScrollReveal direction="up" delay={0.4} className="h-full">
              <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#6a37d4]/5 flex items-center justify-center mb-8 group-hover:bg-[#6a37d4]/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#6a37d4]" style={iconStyle}>campaign</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">Paid Ads</h3>
                <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                  We run and optimize ad campaigns across platforms to improve performance and return on investment.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 5 */}
            <ScrollReveal direction="up" delay={0.5} className="h-full">
              <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#4647d3]/5 flex items-center justify-center mb-8 group-hover:bg-[#4647d3]/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#4647d3]" style={iconStyle}>search_insights</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">SEO</h3>
                <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                  We improve your visibility in search so the right people can find your business.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 6 */}
            <ScrollReveal direction="up" delay={0.6} className="h-full">
              <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#6a37d4]/5 flex items-center justify-center mb-8 group-hover:bg-[#6a37d4]/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#6a37d4]" style={iconStyle}>edit_note</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline text-slate-900">Copywriting</h3>
                <p className="text-slate-500 font-body leading-relaxed mb-8 flex-grow">
                  We write clear, persuasive content that helps turn visitors into customers.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Recent Successes Section */}
      <section className="py-24 px-6 bg-[#f4f6ff]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4 text-slate-900">Recent Work</h2>
                <p className="text-lg text-slate-500">Examples of how our growth systems drive real results.</p>
              </div>
              <Link to="/work/growth-systems" className="inline-flex items-center gap-2 font-bold text-[#4647d3] hover:text-[#6a37d4] transition-colors">
                View All Growth Projects <span className="material-symbols-outlined" style={iconStyle}>arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <Link to="/work/growth-systems" className="block group cursor-pointer h-full">
                <div className="overflow-hidden rounded-xl aspect-[16/10] mb-6 shadow-lg">
                  <img 
                    alt="Enterprise SaaS Launch" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXmwlaDPXmDks9v9QHAlr-pN1w9H4HXWS0D-KuBJiiwu0gGt6Z2uVaZnuylFMAcG1ZaGKM3C8IRgQyqqEdD2IA2smGCLMsxTdsyiFhcShDFrL76ofCq8-RFZOvum4KXksTLCTDyrDgLQ-eWwSi3i2Bja1s3sLX0FbqPk3OP0RHo8kwJmQwrtUp9SwKYWHqRCdxnZ3zPM4kWIgH1XGqCMSGeeX4Wp_wvbgrEU2TkbeXkcAKEv8U0phnmOzy889UdAfZmoeeYlHeuWgp"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-[#4647d3]/10 text-[#4647d3] text-[10px] font-extrabold uppercase tracking-widest rounded-full">Enterprise SaaS</span>
                  <span className="text-sm font-bold text-[#6a37d4]">+45% increase in conversions</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#242f41] group-hover:text-[#4647d3] transition-colors">Enterprise SaaS Launch</h3>
                <p className="text-[#515c70] text-sm font-body leading-relaxed">
                  Improved the acquisition funnel to bring in higher-quality leads and increase conversion rates.
                </p>
              </Link>
            </ScrollReveal>

            {/* Project 2 */}
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <Link to="/work/growth-systems" className="block group cursor-pointer h-full">
                <div className="overflow-hidden rounded-xl aspect-[16/10] mb-6 shadow-lg">
                  <img 
                    alt="D2C Global Expansion" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA38-KURmyNJaEK020fuHLJGyHT89Abv_NxdujNmvBNXo6lkYkkKJiTm7th0-GC4U9OsoxTlBx5eBuiuaCWuWfv-NPdnNmJM2T2dbvikE85AJ4nJqHCJrbPMZk2gVsftSSvyL0dst3yurdF1GWxDI7ZjnNJ8xLqtREs-wvzLzs0nLz3x6YcJMiCZ3Pa6_1x7SQMRocSveIXC7LxBZd8wHTay5ahFTsSyyju8GFclLvSUbYDuALINTD7DoJOjffv9fbmcieOU2OZLS6i"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-[#6a37d4]/10 text-[#6a37d4] text-[10px] font-extrabold uppercase tracking-widest rounded-full">D2C Expansion</span>
                  <span className="text-sm font-bold text-[#4647d3]">3.5x return on ad spend</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#242f41] group-hover:text-[#4647d3] transition-colors">D2C Global Expansion</h3>
                <p className="text-[#515c70] text-sm font-body leading-relaxed">
                  Scaled campaigns across multiple markets using better targeting and optimized messaging.
                </p>
              </Link>
            </ScrollReveal>

            {/* Project 3 */}
            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <Link to="/work/growth-systems" className="block group cursor-pointer h-full">
                <div className="overflow-hidden rounded-xl aspect-[16/10] mb-6 shadow-lg">
                  <img 
                    alt="B2B Omni-Channel Hub" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPyBes8zOt6WVyl0q_czBdS20bAN8uHYUEvyqnt1dZOyBUqp6ghAxVA_w2MF9XEhF2l29Z-bV24t1OPsxAZvqWOIXHOKNzEsSTT12ZrXj_7RtDHxWS5MBNT1F_z6txQTxejXVxKYSXg_Jb42N_xwE6AY3gMv6-HbcHUQr23Ikyq_bbCdLBNvrETFpym5CrqszMNtjbzc7J3ficG-__zJjKnQ2xcW2V4jY7gGEppG1SAoUfqrUqJGOG1PDJYyf3z6iX2juuPqxxM6hY"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-[#4647d3]/10 text-[#4647d3] text-[10px] font-extrabold uppercase tracking-widest rounded-full">B2B Lead System</span>
                  <span className="text-sm font-bold text-[#6a37d4]">2.5x pipeline growth</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#242f41] group-hover:text-[#4647d3] transition-colors">B2B Lead System</h3>
                <p className="text-[#515c70] text-sm font-body leading-relaxed">
                  Built an automated lead system that improved lead quality and reduced the sales cycle.
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
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight">Ready to scale your growth?</h2>
              <p className="text-lg text-inverse-on-surface/80">Let's build a system that consistently brings in leads and turns them into revenue.</p>
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