import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  // State to manage which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How long does an AI integration project usually take?",
      answer: "Typically, initial projects range from 4-8 weeks depending on the complexity of the systems being automated."
    },
    {
      question: "Do we need to have a technical team in-house?",
      answer: "No, we can act as your fully outsourced AI partner or work alongside your existing team to upskill them."
    },
    {
      question: "How secure is our data with your AI solutions?",
      answer: "Security is our top priority. We implement enterprise-grade encryption and ensure all AI implementations comply with GDPR and SOC2 standards."
    },
    {
      question: "What kind of ROI can I expect?",
      answer: "While results vary, our clients typically see a 40-60% increase in operational efficiency within the first 6 months."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-glow -z-10"></div>
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/10 text-primary font-medium text-xs tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              The Future of Efficiency
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-[1.1] tracking-tight text-on-surface">
              Build Smarter Systems. <span className="text-gradient">Scale Faster</span> with AI.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              We design AI-powered systems, automation, and digital products that help businesses grow efficiently. Transform your operations with the digital muse of intelligence.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/services" className="inline-block btn-gradient text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition-all">
                Get Started
              </Link>
              <Link to="/work" className="inline-block bg-surface-container-highest text-primary px-8 py-4 rounded-xl font-bold text-base hover:bg-surface-container-high transition-colors">
                View Work
              </Link>
            </div>
          </div>
          {/* Dashboard Mockup */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="glass-panel w-full aspect-square md:aspect-video rounded-[2.5rem] shadow-2xl p-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10"></div>
              {/* UI Elements Simulation */}
              <div className="grid grid-cols-12 gap-4 h-full">
                <div className="col-span-3 space-y-4">
                  <div className="h-8 w-8 rounded-lg bg-primary/20"></div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-outline-variant/20 rounded"></div>
                    <div className="h-2 w-3/4 bg-outline-variant/20 rounded"></div>
                    <div className="h-2 w-1/2 bg-outline-variant/20 rounded"></div>
                  </div>
                </div>
                <div className="col-span-9 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="h-4 w-32 bg-primary/20 rounded"></div>
                    <div className="h-8 w-8 rounded-full bg-secondary/20"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 rounded-xl bg-white/50 border border-white/40 shadow-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
                    </div>
                    <div className="h-32 rounded-xl bg-white/50 border border-white/40 shadow-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                    </div>
                  </div>
                  <div className="h-40 rounded-xl bg-white/80 shadow-inner border border-white/40 overflow-hidden">
                    <div className="h-full w-full flex items-end p-4 gap-2">
                      <div className="w-full bg-primary/30 rounded-t h-[40%]"></div>
                      <div className="w-full bg-primary/40 rounded-t h-[70%]"></div>
                      <div className="w-full bg-primary/20 rounded-t h-[30%]"></div>
                      <div className="w-full bg-primary/60 rounded-t h-[90%]"></div>
                      <div className="w-full bg-primary/40 rounded-t h-[50%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Insight Chip */}
            <div className="absolute -bottom-6 -left-6 glass-panel px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 border-tertiary/10">
              <div className="h-10 w-10 rounded-full bg-tertiary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <div>
                <div className="text-[10px] font-bold text-tertiary tracking-widest uppercase">AI Suggestion</div>
                <div className="text-sm font-semibold">Workflow optimized by 42%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-y border-outline-variant/10 bg-surface-container-low/30">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-label-sm font-bold text-on-surface-variant mb-12 uppercase tracking-[0.2em]">Trusted by startups & growing businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            <div className="text-2xl font-bold font-headline">VOLTA</div>
            <div className="text-2xl font-bold font-headline">PRISM.IO</div>
            <div className="text-2xl font-bold font-headline">KINETIC</div>
            <div className="text-2xl font-bold font-headline">QUANTUM</div>
            <div className="text-2xl font-bold font-headline">NEBULA</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32" id="expertise">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">Our Expertise</h2>
              <p className="text-on-surface-variant text-lg">We combine deep technical engineering with creative AI strategies to build tools that feel like magic.</p>
            </div>
            <Link className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all" to="/services">
              View All Services <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link to="/services/ai-solutions" className="block group p-10 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 text-left">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4 text-on-surface">AI Solutions</h3>
              <p className="text-on-surface-variant mb-8 line-clamp-3">Leverage the power of Large Language Models and custom agents to automate complex cognitive tasks.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">AI Automation</span>
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">AI Agents</span>
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">Chatbots</span>
              </div>
            </Link>
            {/* Card 2 */}
            <Link to="/services/development" className="block group p-10 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 text-left">
              <div className="h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4 text-on-surface">Development</h3>
              <p className="text-on-surface-variant mb-8 line-clamp-3">Full-stack engineering for modern SaaS platforms and digital products built with scalability in mind.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">Web Development</span>
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">SaaS</span>
              </div>
            </Link>
            {/* Card 3 */}
            <Link to="/services/growth-systems" className="block group p-10 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 text-left">
              <div className="h-14 w-14 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4 text-on-surface">Growth Systems</h3>
              <p className="text-on-surface-variant mb-8 line-clamp-3">Custom growth engines that combine automated marketing funnels with intelligent lead qualification.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">Marketing</span>
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">Funnels</span>
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">Lead Gen</span>
              </div>
            </Link>
          </div>
          <div className="mt-12 md:hidden">
            <Link className="flex items-center justify-center gap-2 text-primary font-bold py-4 rounded-xl bg-surface-container" to="/services">
              View All Services <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-surface-container-low/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">Our Process</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">A streamlined approach to taking your ideas from concept to a high-performing reality.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16 relative">
            {/* Connectors for Desktop */}
            <div className="hidden md:block absolute top-12 left-1/3 right-1/4 h-[2px] bg-gradient-to-r from-primary/20 via-secondary/20 to-transparent -z-10"></div>
            <div className="text-center space-y-6">
              <div className="h-24 w-24 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto text-primary border-4 border-surface">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>search_check</span>
              </div>
              <h3 className="text-xl font-bold font-headline">Understand Your Needs</h3>
              <p className="text-on-surface-variant leading-relaxed">We dive deep into your existing workflows to identify where AI and automation can have the highest impact.</p>
            </div>
            <div className="text-center space-y-6">
              <div className="h-24 w-24 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto text-secondary border-4 border-surface">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>construction</span>
              </div>
              <h3 className="text-xl font-bold font-headline">Build Smart Systems</h3>
              <p className="text-on-surface-variant leading-relaxed">Our engineers craft bespoke digital solutions, integrating seamlessly with your tech stack for maximum efficiency.</p>
            </div>
            <div className="text-center space-y-6">
              <div className="h-24 w-24 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto text-tertiary border-4 border-surface">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
              </div>
              <h3 className="text-xl font-bold font-headline">Launch & Scale</h3>
              <p className="text-on-surface-variant leading-relaxed">Deployment is just the start. We provide ongoing support to ensure your systems evolve as your business grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
{/* Featured Work */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">Work</h2>
              <p className="text-on-surface-variant text-lg">Real results for real businesses through tactical AI integration.</p>
            </div>
            <Link className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all" to="/work">
              View All Work <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          {/* Changed md:grid-cols-2 to md:grid-cols-3 and adjusted gap to 8 for better spacing */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Work 1 */}
            <div className="group space-y-6 cursor-pointer">
              <div className="overflow-hidden rounded-[2rem] bg-surface-container-high aspect-[4/3] relative">
                <img alt="AI Dashboard Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGBYltWU_SwxDEU8FcoWUdJXft9g3NV1huT4Exz67rHrKjsjQpJZkKRenKtvJJEqmLjUL3xvk41e7ngjUIxoTFKiqjcGl20CJIlfZzKIIvM2MrZtDZQNVK6zj3OZJDkg-hBb0E7jXrqOXm7i_40-gSRGV4hD4GfeZ7KMydV_OJfvpOKaarFabtgY6-pZnTT8zV71Wgv1IMYZyg8dQtTBJ5BxiWgGF0yzXcRg7CmWig7ezn4agHnwpd_TNyB1cSqqTlD79HGqGjMY-F" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-panel p-6 rounded-2xl flex items-center justify-between border-white/20">
                    <div>
                      <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">E-commerce Automation</div>
                      <div className="text-xl font-bold font-headline">Smart Logistics Engine</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-extrabold text-primary">-70%</div>
                      <div className="text-[10px] font-bold text-on-surface-variant uppercase">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Work 2 */}
            <div className="group space-y-6 cursor-pointer">
              <div className="overflow-hidden rounded-[2rem] bg-surface-container-high aspect-[4/3] relative">
                <img alt="FinTech AI Solution" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtjIOJbCUkwvXR6Fik1kWytx2z8qsYwFEZCGCO434jNm4KwGMmjDbKDSHg9dihQVcFRfA9cPiJrasjuh-CXnTPuD1Ra-88_KCYkjCQwqS-DC1RoSD9iNjUXCYlpFLaOVxdaedo7hsaM0JvjaxA-XWpm2GVFNMpQ-_ppJVYQnCDJzjfwktznwB_y4NHpatxsTiKtzoyUNKE5-TbSMS5KqW7sd-UeOu2NNuI5slOVwMsVkpHxQyi5xlV05jFQwxTy2yHL7_b_pMAiuqg" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-panel p-6 rounded-2xl flex items-center justify-between border-white/20">
                    <div>
                      <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">FinTech AI</div>
                      <div className="text-xl font-bold font-headline">Lumina Fraud Detection</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-extrabold text-secondary">99.8%</div>
                      <div className="text-[10px] font-bold text-on-surface-variant uppercase">Accuracy Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Work 3 (New) */}
            <div className="group space-y-6 cursor-pointer">
              <div className="overflow-hidden rounded-[2rem] bg-surface-container-high aspect-[4/3] relative">
                <img alt="Growth Systems Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="http://googleusercontent.com/profile/picture/9" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-panel p-6 rounded-2xl flex items-center justify-between border-white/20">
                    <div>
                      <div className="text-xs font-bold text-tertiary uppercase tracking-widest mb-1">Growth Systems</div>
                      <div className="text-xl font-bold font-headline">Nexus Analytics Platform</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-extrabold text-tertiary">2.5M</div>
                      <div className="text-[10px] font-bold text-on-surface-variant uppercase">Active Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-extrabold font-headline mb-16 text-center tracking-tight">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-10 rounded-xl bg-white border border-outline-variant/5 shadow-sm space-y-6">
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface text-lg leading-relaxed">"Neuro Works AI completely revolutionized how we handle customer support. The automation was seamless and felt human."</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-surface-container overflow-hidden">
                  <img alt="Client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAUsUjGZZAv_bimOTK5zxmoZzRD5PvsjcHH0GF4A20U72hJKzr65AqurCfNdeIPXKE-VQpGQjIozwzG4attzJdDyFq6J6MiMZ93ua5z0ZFLVcRU2e-WY0EHLCeKEm1-fVM9VF1QP0Zi7pLBNcpU5a8gC9Z7ufwmz4bfa5Gxy2VzhaDr7yXYZSVI9iuBZ1IKY_qUSsk2WUCJo4RuGaOBwX7CrQoigLgSWyDySnCoG8Xulpy5Bn1paF8SyuZhJahrn4v3io8bbGNH1yl" />
                </div>
                <div>
                  <div className="font-bold font-headline">Sarah Jenkins</div>
                  <div className="text-xs text-on-surface-variant">COO at Prism.io</div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="p-10 rounded-xl bg-white border border-outline-variant/5 shadow-sm space-y-6">
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface text-lg leading-relaxed">"The level of technical expertise is unmatched. They don't just build software; they build competitive advantages."</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-surface-container overflow-hidden">
                  <img alt="Client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPyBes8zOt6WVyl0q_czBdS20bAN8uHYUEvyqnt1dZOyBUqp6ghAxVA_w2MF9XEhF2l29Z-bV24t1OPsxAZvqWOIXHOKNzEsSTT12ZrXj_7RtDHxWS5MBNT1F_z6txQTxejXVxKYSXg_Jb42N_xwE6AY3gMv6-HbcHUQr23Ikyq_bbCdLBNvrETFpym5CrqszMNtjbzc7J3ficG-__zJjKnQ2xcW2V4jY7gGEppG1SAoUfqrUqJGOG1PDJYyf3z6iX2juuPqxxM6hY" />
                </div>
                <div>
                  <div className="font-bold font-headline">Mark Thompson</div>
                  <div className="text-xs text-on-surface-variant">Founder of Volta</div>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="p-10 rounded-xl bg-white border border-outline-variant/5 shadow-sm space-y-6">
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface text-lg leading-relaxed">"The insights we've gained from our custom AI dashboard have directly led to a 30% increase in our monthly revenue."</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-surface-container overflow-hidden">
                  <img alt="Client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPtQgAcRIgT2zqodh9GZNIZ1iDFSUxK05gySWDhmvgZjOBl9JyOE9k-QJQ2uFopAh5ju-Us9IvQmXTHTkSYBQ0voIGRq2Q2a_h4g5vyXROjGfXEusOFD7uYjFCCnaBK5zuZ8-eDnSjDM52tsdWjVsVZrtSRMtPmSCEQg-WsrpqXE4jl9onLZhXHFhCOVVw_VDSQcQ6XZvobZVq5GfMvSJph1oGNyETv8SPMU9voKQd3lwhRMv1uXrXqJ7ZgsbhVrl0SILCnwRMiGxL" />
                </div>
                <div>
                  <div className="font-bold font-headline">Elena Rodriguez</div>
                  <div className="text-xs text-on-surface-variant">VP Growth at Kinetic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-32 bg-surface-container-low/30" id="faq">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-4xl font-extrabold font-headline mb-12 text-center tracking-tight">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-outline-variant/5">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left font-bold font-headline"
                >
                  {faq.question}
                  <span className={`material-symbols-outlined text-on-surface-variant transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div className={`mt-4 text-on-surface-variant text-sm leading-relaxed ${openFaq === index ? 'block' : 'hidden'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-inverse-surface text-white p-12 md:p-24 relative overflow-hidden text-center">
          <div className="absolute inset-0 btn-gradient opacity-10"></div>
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight">Ready to Scale Your Business with AI?</h2>
            <p className="text-lg text-inverse-on-surface/80">Join forward-thinking companies using Neuro Works to drive intelligent growth. Let's build your future today.</p>
            <div className="pt-8">
              <Link to="/contact" className="inline-block btn-gradient text-white px-12 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all">
                Book a Call
              </Link>
            </div>
          </div>
          {/* Background Decorative Elements */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-secondary rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        </div>
      </section>
    </>
  );
}