import { Link } from 'react-router-dom';

export default function DevelopmentProjects() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-8 py-24 md:py-32">
        {/* Glow effect matching your custom styles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(70,71,211,0.08)_0%,transparent_70%)] -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 pt-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-[0.05em] uppercase mb-6 font-label">
            DEVELOPMENT PROJECTS
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface font-headline tracking-tight mb-8 leading-[1.1]">
            Building Robust <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Foundations</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
            High-performance websites and SaaS platforms built for scale. We engineer solutions that define the next generation of intelligence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/25 hover:opacity-90 transition-all active:scale-95 text-center"
            >
              Book a Call
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-[#ecf1ff] text-[#4647d3] rounded-xl font-bold transition-all hover:bg-[#d5e3ff]"
            >
              View Services
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* Main Grid (All Projects) */}
      <section className="bg-surface px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="group bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10 flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img alt="SaaS Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUCVfWzCN09WhPwWpXIyqUyvdAaHukYKWAoqkkuYbHQLmFNgRMz4NqKqBw1DFsKQ_mffpi2x1nQwnInHOenGEMrmpUISxASNr3VAaGb7DjMcxrulrN630GUQOMLbtepuEl2pFjje95vs9Phmuu0szKzOY-qngWPv0K58sc4I1gRx1PtjZzeTqSVfIL8wKdk54AYO6ueIzjml3w19CbukykGxD92FlIcLvucmlFGSYIqfknSI7ydsrk4C5dv6b2_EilUtRLGrHCovAy" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-on-surface font-headline">Lumina Analytics Platform</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold shrink-0">99.9% Uptime</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-6 flex-grow">
                  A high-performance data processing engine for real-time market insights, featuring a reactive dashboard built with Next.js and Rust.
                </p>
                <Link to="/work" className="flex items-center text-primary font-bold group/link inline-flex w-fit">
                  <span>Explore Project</span>
                  <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10 flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img alt="Code Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7CplufaF8BlL9ZRf4OcktaJe-0QdsK2-9f_EUN46EbVTPw1Hx_Sss3XiH7GKInlZZBpRPYCLYnS0FK20x_QgIDwR-Txok9u7pHJAiszeoHNOfgbqLamCTN1lN02uUQcdeCF7ohD3NhTGfH9yaS6jwB5dhpdlJMxp1oJuGy8GAf9tF_TCAu5OfxGciuhkCDBguqUnpMYcl12KbkMZb0v2qfBIMRzf-FVcVw22A4l_XD75VulNwUcFHZEWa-uKkWPaFb4SOKQw16Cq" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-on-surface font-headline">Apex CRM Core</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold shrink-0">60% Boost</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-6 flex-grow">
                  Overhauling legacy enterprise architecture into a microservices-based system that handles millions of concurrent requests.
                </p>
                <Link to="/work" className="flex items-center text-primary font-bold group/link inline-flex w-fit">
                  <span>Explore Project</span>
                  <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10 flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img alt="Cloud Infrastructure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGqHGrx8i8Smpf_mKIBhQX6dJ6HBlvc21ozQXTCU5Ex3oVchv86XkW0pIYsNe6S8pSGAMp5E50e38NwYNom7Q6xWJZGamd1K0yeIYkum7ele4p7RQM58ngDUX1mzwAHN91PXnyUeUpPGLwAtdS_sx2h8NQx7lq-029gzaYZ43sR53NxcIhyERsSEmra580l_79MwIYg-nw3DpDkWXk2MNBLmY_typmjZF80iIh_NlFoM8Vf8B-4BY9o9gRJpduNvTtXeaYjzLetyRq" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-on-surface font-headline">CloudStream Engine</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold shrink-0">40ms Latency</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-6 flex-grow">
                  Custom edge-computing layer optimized for video delivery across global nodes with automated failover systems.
                </p>
                <Link to="/work" className="flex items-center text-primary font-bold group/link inline-flex w-fit">
                  <span>Explore Project</span>
                  <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10 flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img alt="Mobile UI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDokPKzWl9-hMHkQ4UYf5UkVk6UaWDOvYgzMwKdEm1e7N7dLEDo4odJG_LFyJQO55WUcZNZSDKjJdiTSg-5V0Sj20NKVDt5IOiKUBGOXjubrIhU1FLqq9XUjdsxHZ57JmLKwqExQBZ30oPQzgYEnMXXkRa8WAqHQRyPgOOg8bDNU7DjR82d_vcDk8V1CuFkt_EH-gV8Lejs5zytY8gu0ZWfEwZFzW3h3xHOFW2rFe8fx9MnoaWa3QoJVujVMHMcyEv7DULu1O7nXC8Y" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-on-surface font-headline">Vanguard FinTech App</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold shrink-0">Top 1% Security</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-6 flex-grow">
                  A cross-platform mobile experience featuring biometric authentication and real-time transaction processing.
                </p>
                <Link to="/work" className="flex items-center text-primary font-bold group/link inline-flex w-fit">
                  <span>Explore Project</span>
                  <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-surface-container-low px-8 py-24 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-on-surface font-headline tracking-tight mb-4">
                Featured Development Success Stories
              </h2>
              <p className="text-on-surface-variant text-lg">
                Deep dives into the technical challenges and transformative outcomes of our most ambitious projects.
              </p>
            </div>
            <Link to="/work" className="flex items-center text-primary font-bold text-lg hover:underline decoration-2 underline-offset-4 shrink-0">
              View All Case Studies <span className="material-symbols-outlined ml-2">north_east</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Featured Card 1 */}
            <Link to="/work" className="block bg-surface-container-lowest rounded-[24px] p-2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="rounded-[20px] overflow-hidden aspect-[16/10]">
                <img alt="Development Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6lYBfZG7YHkL3Atl0nVHNeGeqs0LMS3a8kYXwPRbNbw5GcUwdpWNVxGZ3FL4Q-rWDj1GVnby0cdK7WalGzKzytqWp3UGtenJTxF13CTmmSqoDQtHAqv-wBy8vOHrkL2paODGtNiVninlNYUfmgfznPmwlpJxpEjULkXixwZpNkoU_8AMjgAXEjeE4n5wEjvvGJ5lNTRi8eTUBB4FWFWdoGG7mueCVVMJ3Og-hsBevmksoLoVfrtORamvsQg3kLh7-jJLpu728Rjix" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-sm">terminal</span>
                  <span className="text-sm font-bold tracking-widest uppercase text-on-surface-variant font-label">Enterprise Solutions</span>
                </div>
                <h4 className="text-3xl font-bold text-on-surface mb-4 font-headline">Modernizing Global Logistics</h4>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  How we helped a Fortune 500 company reduce operational overhead by 35% through a custom-built AI routing engine and unified platform.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-surface text-on-surface-variant text-xs font-semibold rounded-lg">React</span>
                  <span className="px-4 py-2 bg-surface text-on-surface-variant text-xs font-semibold rounded-lg">Node.js</span>
                  <span className="px-4 py-2 bg-surface text-on-surface-variant text-xs font-semibold rounded-lg">AWS Lambda</span>
                  <span className="px-4 py-2 bg-surface text-on-surface-variant text-xs font-semibold rounded-lg">Python AI</span>
                </div>
              </div>
            </Link>

            {/* Featured Card 2 */}
            <Link to="/work" className="block bg-surface-container-lowest rounded-[24px] p-2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="rounded-[20px] overflow-hidden aspect-[16/10]">
                <img alt="Creative Lab" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc0Q_B22JjEtOS61BBk545VK4f6apNtgdHe41ipmxVF73_9bTYA76KPDZw-GuYPhKmsnhsNeBt_nbx0AqHWyiA804rEyr9rGaJNubUg8vvW41zhRvMCoO8hEYPhy7R1S8g340f-Cf2sIo4Zb9NmDM7DSxU3AOj4N5eh-1k9Z14KVhRemuq4P91ssUS5gjPcM7EqwYgzLW93vAIOb6zmx2PSkYglL5_g42foN2qqXZbEHtelJtAQIcatfV5EXUqKACnrWQuJsaV7WI9" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-sm">rocket_launch</span>
                  <span className="text-sm font-bold tracking-widest uppercase text-on-surface-variant font-label">Startup Accelerator</span>
                </div>
                <h4 className="text-3xl font-bold text-on-surface mb-4 font-headline">Zero to MVP in 8 Weeks</h4>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  Accelerating the launch of a social commerce startup, taking them from a conceptual sketch to a live platform with 50k users in two months.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-surface text-on-surface-variant text-xs font-semibold rounded-lg">Flutter</span>
                  <span className="px-4 py-2 bg-surface text-on-surface-variant text-xs font-semibold rounded-lg">Firebase</span>
                  <span className="px-4 py-2 bg-surface text-on-surface-variant text-xs font-semibold rounded-lg">TypeScript</span>
                  <span className="px-4 py-2 bg-surface text-on-surface-variant text-xs font-semibold rounded-lg">PostgreSQL</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
    <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-inverse-surface text-white p-12 md:p-24 relative overflow-hidden text-center">
          <div className="absolute inset-0 btn-gradient opacity-10"></div>
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight">Have a Project in Mind?</h2>
            <p className="text-lg text-inverse-on-surface/80">Let's discuss how our development expertise can transform your vision into a scalable, high-performance digital reality.</p>
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