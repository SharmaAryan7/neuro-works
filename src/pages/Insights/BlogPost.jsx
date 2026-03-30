export default function BlogPost() {
  // Custom inline styles for reliable rendering
  const textGradient = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  const filledIconStyle = {
    fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  return (
    <div className="bg-[#f8fafc] text-[#242f41] font-body min-h-screen antialiased selection:bg-[#9396ff] selection:text-[#ffffff] overflow-x-hidden">
      <main className="relative pt-20">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[60%] rounded-full bg-[#4647d3]/5 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] rounded-full bg-[#6a37d4]/5 blur-[100px]"></div>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Category Pill */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-label text-[10px] font-bold tracking-[0.1em] uppercase">
                Insights
              </div>
              
              {/* Main Title */}
              <h1 className="text-[#1E293B] font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                How AI Automation Can Transform Your Business
              </h1>
              
              {/* Description */}
              <p className="text-[#64748B] font-headline text-lg md:text-xl leading-relaxed max-w-2xl">
                Discover how intelligent systems are reshaping industry standards and driving operational excellence in the modern digital era.
              </p>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="material-symbols-outlined text-[20px]" style={iconStyle}>calendar_today</span>
                  <span className="font-body text-sm font-medium tracking-tight">March 15, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="material-symbols-outlined text-[20px]" style={iconStyle}>category</span>
                  <span className="font-body text-sm font-medium tracking-tight">AI Automation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="material-symbols-outlined text-[20px]" style={iconStyle}>schedule</span>
                  <span className="font-body text-sm font-medium tracking-tight">8 min read</span>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10 group">
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 to-transparent z-10"></div>
                <img 
                  alt="AI Transformation Illustration" 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-ve3VZxdq36nHFij4GLSDuKJxkh0oHFcLQzbhyPdhGcFRRaaqi7Mc5hxoZ6Zrlr2-qsUYjhxTtnMNcqkMctC0vpN1Ns5lQi609BPZ5AQmPEmYhGctCCynxtL2HbBlHzTNCRooUnpUpzivx_mEiQZjsAGzQV5Y6MTCjGUx4XTAwSTMr-8oi7udglQo6TsquaAj3pzjaI_R7ioYHi3xUjxoK-LavwYvSfTRfYbYAioVBUwP0gt3XbN02Bnmy2zE7WPb_GwPxdul6Dfy"
                />
              </div>
              
              {/* Floating Glass Card (Editorial Touch) */}
              <div className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl shadow-slate-200/50 hidden md:block max-w-[240px] z-20 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#9396ff] flex items-center justify-center text-[#0a0081]">
                    <span className="material-symbols-outlined" style={filledIconStyle}>bolt</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest font-label">Impact</div>
                    <div className="text-[#1E293B] font-headline font-bold text-lg">40% Efficiency</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Post Body (Whitespace/Structure Reference) */}
        <section className="max-w-4xl mx-auto px-6 py-24 space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-headline font-bold text-[#1E293B]">The Shift Toward Cognitive Labor</h2>
            <p className="text-[#64748B] font-body text-lg leading-relaxed">
              The integration of AI isn't just about replacing manual tasks; it's about augmenting human capability. As we navigate the complexities of the 21st-century marketplace, businesses that embrace autonomous workflows are finding themselves at a significant competitive advantage.
            </p>
            
            <div className="bg-[#ecf1ff] p-8 rounded-2xl border-l-4 border-[#4647d3]">
              <p className="italic text-[#515c70] font-body text-xl">
                "Automation is no longer a luxury for tech giants—it is the foundational infrastructure for every enterprise aiming for growth."
              </p>
            </div>
            
            {/* You can continue adding your markdown/HTML content for the blog post below this line */}
            
          </div>
        </section>

      </main>
    </div>
  );
}