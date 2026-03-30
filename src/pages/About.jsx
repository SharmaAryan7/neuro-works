export default function About() {
  // Custom inline styles for reliable gradient rendering
  const gradientText = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const gradientBg = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)',
  };

  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  return (
    <div className="bg-[#f4f6ff] text-[#242f41] font-body min-h-screen">
      <div className="pt-20">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#f4f6ff] py-24 md:py-32">
          {/* Signature soft purple-blue gradient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#4647d3]/10 blur-[120px] rounded-full -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#9396ff]/30 border border-[#4647d3]/10 text-[#4647d3] font-label text-xs font-bold tracking-[0.1em] mb-8 uppercase">
              ABOUT US
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-[#242f41] mb-8 max-w-4xl mx-auto leading-[1.1]">
              Building Intelligent Systems for <span style={gradientText}>Modern Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-[#515c70] max-w-2xl mx-auto leading-relaxed mb-12">
              We bridge the gap between human intuition and machine intelligence, crafting bespoke AI solutions that transform how global enterprises operate, scale, and innovate.
            </p>
            
            <div className="relative w-full aspect-[21/9] mt-16 rounded-3xl overflow-hidden shadow-2xl border border-[#a2adc4]/10">
              <img 
                className="w-full h-full object-cover" 
                alt="High-tech laboratory" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ9B3fJ7OLtafzc3_vqJTiaLh-PIwwmbUtQ_gDkF3Qi2rsnJb5L3pP-X_YN_0nMUaF3Co0SswDlM2S-okWqhydvzTz5exeOujOmK_AxQa8Ef9_LpdpznzsH6o1nzwhpoRDheiQ1MdiDZS4NK8uyXxW30nnkIM-gTxPD8pbMSfCuB1Rc5VzMKz8RFJwwVV1M14hH1bdjDaFp1pbZR4qSgWJ7b_VzVqLdYoGcOaH7-IWJQWeOzTT0d7JKJ-8Un8DoleWXAjHzfinUYNs"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f4f6ff]/40 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Our Story & Vision */}
        <section className="py-24 bg-[#ecf1ff]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
              {/* Our Story */}
              <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold text-[#242f41]">Our Story</h2>
                <div style={gradientBg} className="w-12 h-1.5 rounded-full"></div>
                <p className="text-lg leading-relaxed text-[#515c70]">
                  Founded at the intersection of neuroscience and computational engineering, Neuro Works AI began with a singular mission: to make advanced artificial intelligence accessible and actionable. We saw companies struggling with fragmented data and rigid software, so we built a laboratory for the future.
                </p>
              </div>
              {/* Our Vision */}
              <div className="space-y-6 md:mt-12">
                <h2 className="font-headline text-3xl font-bold text-[#242f41]">Our Vision</h2>
                <div style={gradientBg} className="w-12 h-1.5 rounded-full"></div>
                <p className="text-lg leading-relaxed text-[#515c70]">
                  We envision a world where AI doesn't replace human creativity but amplifies it. Our goal is to set the global standard for ethical, high-performance intelligence systems that solve the most complex challenges of the 21st century.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-[#f4f6ff]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-bold text-[#242f41] mb-4">Why Choose Us</h2>
              <p className="text-[#515c70]">Excellence through precision and purpose-built technology.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {/* Smart Systems */}
              <div className="bg-[#ffffff] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5">
                <div className="w-14 h-14 rounded-2xl bg-[#4647d3]/10 flex items-center justify-center text-[#4647d3] mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl" style={iconStyle}>neurology</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-[#242f41] mb-3">Smart Systems</h3>
                <p className="text-sm leading-relaxed text-[#515c70]">Advanced neural architectures designed to think beyond simple automation.</p>
              </div>
              {/* Scalable Solutions */}
              <div className="bg-[#ffffff] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5">
                <div className="w-14 h-14 rounded-2xl bg-[#4647d3]/10 flex items-center justify-center text-[#4647d3] mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl" style={iconStyle}>cloud_done</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-[#242f41] mb-3">Scalable Solutions</h3>
                <p className="text-sm leading-relaxed text-[#515c70]">Cloud-native infrastructure that grows seamlessly alongside your enterprise.</p>
              </div>
              {/* Results-Driven */}
              <div className="bg-[#ffffff] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5">
                <div className="w-14 h-14 rounded-2xl bg-[#4647d3]/10 flex items-center justify-center text-[#4647d3] mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl" style={iconStyle}>trending_up</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-[#242f41] mb-3">Results-Driven</h3>
                <p className="text-sm leading-relaxed text-[#515c70]">Measurable ROI and concrete efficiency gains through intelligent analytics.</p>
              </div>
              {/* Modern Approach */}
              <div className="bg-[#ffffff] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#a2adc4]/5">
                <div className="w-14 h-14 rounded-2xl bg-[#4647d3]/10 flex items-center justify-center text-[#4647d3] mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl" style={iconStyle}>auto_awesome</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-[#242f41] mb-3">Modern Approach</h3>
                <p className="text-sm leading-relaxed text-[#515c70]">User-centric design meeting cutting-edge AI for an intuitive experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div style={gradientBg} className="relative overflow-hidden rounded-[2.5rem] py-20 px-8 text-center shadow-2xl">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6">Let’s Build Something Great Together</h2>
                <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                  Join the ranks of forward-thinking enterprises that have redefined their industry with our intelligent systems.
                </p>
                <button className="bg-white text-[#4647d3] px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
                  Book a Call
                </button>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}