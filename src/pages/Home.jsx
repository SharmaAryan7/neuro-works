import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How long does a project take?",
      answer: "Most projects take between 4-8 weeks, depending on complexity."
    },
    {
      question: "Do we need a technical team?",
      answer: "No. We handle everything from planning to deployment."
    },
    {
      question: "How secure is our data?",
      answer: "We follow best practices to ensure your data stays secure and private."
    },
    {
      question: "What kind of results can we expect?",
      answer: "Our systems are designed to improve efficiency, reduce manual work, and support growth - with measurable impact."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <ScrollReveal direction="up">
        <section className="relative pt-44 pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-glow -z-10"></div>
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-[1.1] tracking-tight text-on-surface">
                Build smarter systems. <span className="text-gradient">Scale faster.</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                We design AI-powered systems and automation that simplify your operations and help your business grow without adding complexity.
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
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Trust Section */}
      <ScrollReveal direction="up" delay={0.1}>
        <section className="py-20 border-y border-outline-variant/10 bg-surface-container-low/30">
          <div className="max-w-7xl mx-auto px-8">
            <p className="text-center text-label-sm font-bold text-on-surface-variant mb-12 uppercase tracking-[0.2em]">Trusted by startups and growing businesses</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
              <div className="text-2xl font-bold font-headline">VOLTA</div>
              <div className="text-2xl font-bold font-headline">PRISM.IO</div>
              <div className="text-2xl font-bold font-headline">KINETIC</div>
              <div className="text-2xl font-bold font-headline">QUANTUM</div>
              <div className="text-2xl font-bold font-headline">NEBULA</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Preview */}
      <section className="py-32" id="expertise">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal direction="up">
            <div className="flex justify-between items-end mb-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">Our Expertise</h2>
                <p className="text-on-surface-variant text-lg">We design and build systems that make businesses run better combining AI, automation, and solid engineering.</p>
              </div>
              <Link className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all" to="/services">
                View All Services <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <ScrollReveal direction="up" delay={0.1}>
              <Link to="/services/ai-solutions" className="block group p-10 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 text-left h-full">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4 text-on-surface">AI Solutions</h3>
                <p className="text-on-surface-variant mb-8 line-clamp-3">We build AI systems that handle repetitive and decision-based tasks, so your team can focus on what matters.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">AI Automation</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">AI Agents</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">Chatbots</span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal direction="up" delay={0.2}>
              <Link to="/services/development" className="block group p-10 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 text-left h-full">
                <div className="h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4 text-on-surface">Development</h3>
                <p className="text-on-surface-variant mb-8 line-clamp-3">We develop fast, scalable products that are built to grow with your business.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">Web Development</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">SaaS Platforms</span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal direction="up" delay={0.3}>
              <Link to="/services/growth-systems" className="block group p-10 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 text-left h-full">
                <div className="h-14 w-14 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4 text-on-surface">Growth Systems</h3>
                <p className="text-on-surface-variant mb-8 line-clamp-3">We create systems that bring in leads, qualify them, and help turn them into customers.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">Marketing Systems</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">Funnels</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">Lead Generation</span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="up">
            <div className="mt-12 md:hidden">
              <Link className="flex items-center justify-center gap-2 text-primary font-bold py-4 rounded-xl bg-surface-container" to="/services">
                View All Services <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-surface-container-low/50">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-24">
              <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">Our Process</h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">A simple, practical approach to building systems that work.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-16 relative">
            {/* Connectors for Desktop */}
            <div className="hidden md:block absolute top-12 left-1/3 right-1/4 h-[2px] bg-gradient-to-r from-primary/20 via-secondary/20 to-transparent -z-10"></div>
            
            <ScrollReveal direction="up" delay={0.1}>
              <div className="text-center space-y-6">
                <div className="h-24 w-24 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto text-primary border-4 border-surface">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>search_check</span>
                </div>
                <h3 className="text-xl font-bold font-headline">Understand</h3>
                <p className="text-on-surface-variant leading-relaxed">We look at how your business works today and find where things can be improved or automated.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="text-center space-y-6">
                <div className="h-24 w-24 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto text-secondary border-4 border-surface">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>construction</span>
                </div>
                <h3 className="text-xl font-bold font-headline">Build</h3>
                <p className="text-on-surface-variant leading-relaxed">We design and develop systems that fit your workflows and integrate with your existing tools.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="text-center space-y-6">
                <div className="h-24 w-24 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto text-tertiary border-4 border-surface">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
                </div>
                <h3 className="text-xl font-bold font-headline">Launch & Improve</h3>
                <p className="text-on-surface-variant leading-relaxed">We launch, monitor, and keep improving your systems as your business grows.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal direction="up">
            <div className="flex justify-between items-end mb-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">Work</h2>
                <p className="text-on-surface-variant text-lg">Real results from real projects.</p>
              </div>
              <Link className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all" to="/work">
                View All Work <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Work 1 */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="group space-y-6 cursor-pointer">
                <div className="overflow-hidden rounded-[2rem] bg-surface-container-high aspect-[4/3] relative">
                  <img alt="AI Dashboard Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGBYltWU_SwxDEU8FcoWUdJXft9g3NV1huT4Exz67rHrKjsjQpJZkKRenKtvJJEqmLjUL3xvk41e7ngjUIxoTFKiqjcGl20CJIlfZzKIIvM2MrZtDZQNVK6zj3OZJDkg-hBb0E7jXrqOXm7i_40-gSRGV4hD4GfeZ7KMydV_OJfvpOKaarFabtgY6-pZnTT8zV71Wgv1IMYZyg8dQtTBJ5BxiWgGF0yzXcRg7CmWig7ezn4agHnwpd_TNyB1cSqqTlD79HGqGjMY-F" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-panel p-6 rounded-2xl flex items-center justify-between border-white/20">
                      <div>
                        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">AI Solution</div>
                        <div className="text-xl font-bold font-headline">AI Dashboard Project</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-extrabold text-primary">-70%</div>
                        <div className="text-[10px] font-bold text-on-surface-variant uppercase">Response Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Work 2 */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="group space-y-6 cursor-pointer">
                <div className="overflow-hidden rounded-[2rem] bg-surface-container-high aspect-[4/3] relative">
                  <img alt="FinTech AI Solution" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtjIOJbCUkwvXR6Fik1kWytx2z8qsYwFEZCGCO434jNm4KwGMmjDbKDSHg9dihQVcFRfA9cPiJrasjuh-CXnTPuD1Ra-88_KCYkjCQwqS-DC1RoSD9iNjUXCYlpFLaOVxdaedo7hsaM0JvjaxA-XWpm2GVFNMpQ-_ppJVYQnCDJzjfwktznwB_y4NHpatxsTiKtzoyUNKE5-TbSMS5KqW7sd-UeOu2NNuI5slOVwMsVkpHxQyi5xlV05jFQwxTy2yHL7_b_pMAiuqg" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-panel p-6 rounded-2xl flex items-center justify-between border-white/20">
                      <div>
                        <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">FinTech AI</div>
                        <div className="text-xl font-bold font-headline">FinTech AI Solution</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-extrabold text-secondary">99.8%</div>
                        <div className="text-[10px] font-bold text-on-surface-variant uppercase">Accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Work 3 */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="group space-y-6 cursor-pointer">
                <div className="overflow-hidden rounded-[2rem] bg-surface-container-high aspect-[4/3] relative">
                  <img alt="Growth Systems Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEJU9kcUVa2xQIRbniL9Z-aE2UN7_qzTkx2dyQLScspf3957_r4W2h40Erp83-bMIqOFuD22h7Dgemjtfih8nJTDhzs0VjtDdhdUyFkFI6RohVNWI3HqGDsOvwC-hvxLc3qW3fJ4kEtI-Mi-3H_wIBd7UOzk6zMwjdG0hk8lLCsNl-WfktUelIo7twT6oqThFLRm6PXgf_h4WaMbtebAMWG4VlyL27-QW2QtHfN5ga_Ho3BP3bL4IjLbRTXeEwxJSB4z2a11Ll8Qi82" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-panel p-6 rounded-2xl flex items-center justify-between border-white/20">
                      <div>
                        <div className="text-xs font-bold text-tertiary uppercase tracking-widest mb-1">Growth Systems</div>
                        <div className="text-xl font-bold font-headline">Growth Systems Project</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-extrabold text-tertiary">2.5M</div>
                        <div className="text-[10px] font-bold text-on-surface-variant uppercase">Users Scaled</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-extrabold font-headline mb-16 text-center tracking-tight">Success Stories</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="p-10 rounded-xl bg-white border border-outline-variant/5 shadow-sm space-y-6 h-full">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface text-lg leading-relaxed">"Neuro Works AI completely changed how we handle customer support. The automation feels natural and seamless."</p>
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
            </ScrollReveal>

            {/* Testimonial 2 */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="p-10 rounded-xl bg-white border border-outline-variant/5 shadow-sm space-y-6 h-full">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface text-lg leading-relaxed">"They don't just build software — they build real advantages for your business."</p>
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
            </ScrollReveal>

            {/* Testimonial 3 */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="p-10 rounded-xl bg-white border border-outline-variant/5 shadow-sm space-y-6 h-full">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface text-lg leading-relaxed">"Our revenue increased by 30% after implementing their AI systems."</p>
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-32 bg-surface-container-low/30" id="faq">
        <div className="max-w-3xl mx-auto px-8">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-extrabold font-headline mb-12 text-center tracking-tight">Common Questions</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal direction="up" delay={index * 0.1} key={index}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-outline-variant/5">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex justify-between items-center text-left font-bold font-headline"
                  >
                    {faq.question}
                    <span className={`material-symbols-outlined text-on-surface-variant transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  <div className={`mt-4 text-on-surface-variant text-sm leading-relaxed transition-all duration-300 ${openFaq === index ? 'block' : 'hidden'}`}>
                    {faq.answer}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <ScrollReveal direction="up">
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto rounded-[3rem] bg-inverse-surface text-white p-12 md:p-24 relative overflow-hidden text-center">
            <div className="absolute inset-0 btn-gradient opacity-10"></div>
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight">Ready to build smarter systems?</h2>
              <p className="text-lg text-inverse-on-surface/80">Work with a team that focuses on practical, scalable solutions — not just ideas.</p>
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
      </ScrollReveal>
    </>
  );
}