import ScrollReveal from '../components/ScrollReveal';

export default function Insights() {
  // Custom inline styles for reliable gradient and glow rendering
  const textGradient = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const primaryGradient = {
    background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
  };

  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  return (
    <div className="bg-[#f8fafc] text-[#242f41] font-body min-h-screen antialiased selection:bg-[#9396ff] selection:text-[#0a0081]">
      <main className="relative pt-20">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-[#4647d3]/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#6a37d4]/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Hero Section */}
        <ScrollReveal direction="up">
          <section className="max-w-7xl mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-48">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className="flex flex-col items-start space-y-8">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/50">
                  <span className="font-label text-[11px] font-bold tracking-widest text-indigo-600 uppercase">INSIGHTS</span>
                </div>
                <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  Insights, Ideas, and <span style={textGradient}>Strategies for Growth</span>
                </h1>
                <p className="font-body text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed">
                  Explore our thoughts on AI, development, and growth systems to help your business scale smarter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                  <button style={primaryGradient} className="text-white px-8 py-4 rounded-3xl font-headline font-bold text-base shadow-xl shadow-indigo-500/20 flex items-center justify-center group active:scale-95 transition-all">
                    Explore Articles
                    <span className="material-symbols-outlined ml-2 text-xl group-hover:translate-x-1 transition-transform" style={iconStyle}>arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Right Visual (Abstract UI/Dashboard) */}
              <div className="relative">
                {/* Main Card Preview */}
                <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/60 p-8 border border-white relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-slate-100"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-100"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-100"></div>
                    </div>
                    <div className="h-8 w-24 bg-slate-50 rounded-full"></div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-2xl bg-indigo-50 flex-shrink-0 overflow-hidden">
                        <img 
                          alt="Article Thumbnail" 
                          className="w-full h-full object-cover opacity-80" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHALIok12YuVLinBlvFLx8-Vk86TSnJCoUvtnFEExF9PeRMQl0UlIliOQNwg4h9hR-tXBWULZmb3bJBtL--1vlZrfd83-pHAwZ5EHGE0GGRKvUcXqJ5wEIz7jZcEa8dSAXVG3OIXnqTl0h7KQt0wmBA44sqXsi3-bGWqZIWs-j2OxzJ-rGgCCi3KZ2-yFBJzsCzs0GmT2ScUmW-3UnTaVfMQYays_yBqgBp4UFFbWq7SG1TtvyZVfQeXCh8h4GdAk_V7QLkOk0cWVR"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-3/4 bg-slate-100 rounded-full"></div>
                        <div className="h-4 w-1/2 bg-slate-50 rounded-full"></div>
                        <div className="pt-2 flex gap-2">
                          <div className="h-6 w-16 bg-indigo-50/50 rounded-full"></div>
                          <div className="h-6 w-12 bg-slate-50 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-[1px] bg-slate-100 w-full"></div>
                    
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-2xl bg-indigo-50 flex-shrink-0 overflow-hidden">
                        <img 
                          alt="Article Thumbnail" 
                          className="w-full h-full object-cover opacity-80" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3GYplkUgrlRQawMwE3HS4nSHLqxNGQ95iSWSTTrSgjWTDMqrEd9Xm118H9X1s5kt51LHtn6d_tJtf5VszuM049wA9-1mKog7fkIeo81oZWGqJo267sHQCQpuVV8LYgcEJCF-41p60E5-a3Yylp0hDXDMxDIx4E5IG1UxsViF3xrE9qNEMAKtFONpahdXdNvvLe1X88Z-Vfp-4p7W2oVza3p-DoOcyqEj-QiSjikDk6FCuPotwl8g2_RQthaLz_h4ZqjFhJpz2IVc8"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-5/6 bg-slate-100 rounded-full"></div>
                        <div className="h-4 w-2/3 bg-slate-50 rounded-full"></div>
                        <div className="pt-2 flex gap-2">
                          <div className="h-6 w-20 bg-indigo-50/50 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Insight Chip */}
                <div className="absolute -top-6 -right-6 bg-white/70 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-xl shadow-slate-200/40 z-20 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div style={primaryGradient} className="w-10 h-10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-xl" style={iconStyle}>auto_awesome</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">TRENDING</div>
                      <div className="text-sm font-bold text-slate-800">Future of AI Ops</div>
                    </div>
                  </div>
                </div>
                
                {/* Accent Background Layer */}
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-indigo-100/30 rounded-3xl -rotate-6 -z-10"></div>
              </div>

            </div>
          </section>
        </ScrollReveal>

        {/* Featured Section (Editorial Feed Style) */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <ScrollReveal direction="up">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-headline text-2xl font-bold text-slate-900">Latest Insights</h2>
              <div className="flex space-x-4">
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-600 transition-colors">
                  <span className="material-symbols-outlined" style={iconStyle}>chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-600 transition-colors">
                  <span className="material-symbols-outlined" style={iconStyle}>chevron_right</span>
                </button>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Bento-style Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Large Featured Card */}
            <ScrollReveal direction="up" delay={0.1} className="md:col-span-8">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-100/40 transition-shadow group cursor-pointer h-full">
                <div className="h-[400px] overflow-hidden">
                  <img 
                    alt="Featured article" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyw-Rzn8J_3B2Uq5q2S72QIt0zTSn3dGgOxSe04nyMxG3D5jXjwVzY8IQ0eOVMFT-YW6hTSpQcJMleZWkvYV-lV_Dg5pIqObZIitV-4FvKhKnJ8fKkeFnx8mkCZ5VsaNxoCOsFh1xIDu3uC2S8D3c1J9297LNPgFFw4hcO91k9WsljcgeqnEYIRI6Nb7z5_1rFBtJfQGXm643ComJDWCnKqY4pXxAvSSlVRvwtdLwaLO3fW1WfLFrbks3Qoe9qriu-NBHCfav4Y4ME"
                  />
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold font-label">ARTIFICIAL INTELLIGENCE</span>
                    <span className="text-slate-400 text-xs font-medium">8 min read</span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold text-slate-900 mb-4 leading-tight">Beyond the Hype: Building Sustainable AI Systems for Enterprise Scale</h3>
                  <p className="font-body text-slate-500 mb-6 max-w-2xl">A deep dive into the architectural requirements and ethical considerations of deploying large-scale neural networks in highly regulated industries.</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                    <span className="font-medium text-slate-700">Dr. Sarah Chen</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Secondary Cards */}
            <div className="md:col-span-4 flex flex-col gap-8">
              <ScrollReveal direction="up" delay={0.2} className="h-full">
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-100/40 transition-shadow flex flex-col h-full cursor-pointer group">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold font-label">STRATEGY</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-indigo-600 transition-colors">The 2024 Framework for Cognitive Growth Systems</h3>
                  <div className="mt-auto pt-6 flex items-center justify-between text-slate-400">
                    <span className="text-xs font-medium">May 12, 2024</span>
                    <span className="material-symbols-outlined text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" style={iconStyle}>arrow_forward</span>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.3} className="h-full">
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-100/40 transition-shadow flex flex-col h-full cursor-pointer group">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold font-label">DEVELOPMENT</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-indigo-600 transition-colors">Why Your Tech Stack is Holding Back Your AI Potential</h3>
                  <div className="mt-auto pt-6 flex items-center justify-between text-slate-400">
                    <span className="text-xs font-medium">April 28, 2024</span>
                    <span className="material-symbols-outlined text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" style={iconStyle}>arrow_forward</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}