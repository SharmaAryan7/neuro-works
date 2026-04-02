import { Link } from 'react-router-dom';

export default function GrowthProjects() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-8 py-16 md:py-20">
        {/* Glow effect matching your custom styles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(70,71,211,0.08)_0%,transparent_70%)] -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 pt-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold tracking-[0.05em] uppercase mb-6 font-label">
            GROWTH PROJECTS
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface font-headline tracking-tight mb-6 leading-[1.2]">
            Revenue-Driven <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Growth Systems</span>
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            Data-led marketing and sales systems that scale your business. We combine neuro-analytics with high-performance AI to unlock sustainable revenue growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-base shadow-xl shadow-primary/25 hover:opacity-90 transition-all active:scale-95 text-center"
            >
              Book a Call
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3.5 bg-[#ecf1ff] text-[#4647d3] rounded-xl font-bold text-base transition-all hover:bg-[#d5e3ff]"
            >
              View Services
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* Main Grid (3 Columns) */}
      <section className="bg-surface px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10 flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img alt="Growth Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsgPpxvsv_P2EvbEd8IIPcQeSUNvLUVLi1a3xz6moQsGWZGBStNPF-A2-HBSfZjxP6ag5_NXcq0nM0ng2T295MGDoTtDe8B7UGn22waJB0lMdODZ7clBZIlEPR8BSNuX5GiWGpVcskE2GWkjau37p6R3NOe5l8aY2FxKfjPzkzz21HHXUYSpQujciIJi0xmbkthxafUyitdKB-rQPi2tsp-SKA8cN4hey8eNGc_wObnNLIQJi9Lvdb09WQxDVDi8X-fLMehlQWwe4Z" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-2 flex-wrap">
                  <h3 className="text-xl font-bold text-on-surface font-headline">Precision Ad-Tech Scale</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold shrink-0">+45% Conversions</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                  Implementing a neuro-response engine to optimize creative asset delivery across major digital platforms, resulting in unprecedented ROI uplift.
                </p>
                <Link to="/work/growth-systems" className="flex items-center text-primary font-bold text-sm group/link inline-flex w-fit">
                  <span>Explore Project</span>
                  <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform text-base">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10 flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img alt="Lead Generation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClbPwXeEfP3sA-9AprXBuG-KnFdSbli4WwFzLVk3l5dpnPxdJFuOkxbEvLSf3UHEx89wV-9phS4h62JNe7vGGpZXzJWdPn3bUyFVH4XkhrAb2ATq7HuNcfabuC61y28T3ev-PjISObLgZZz3kKtBMJjwuueDXDW58ufR3kStAHezlZfAu_HhXCxN-2nd2LfCNPSxo-c8B8a28Iqr2jleZSnT262a88f7lCr0Vt9Fg4MbSN2AoHuj9nL4O2djarjaj9_Wgm6Rck-7j7" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-2 flex-wrap">
                  <h3 className="text-xl font-bold text-on-surface font-headline">B2B Omni-Channel Hub</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold shrink-0">3x Lead Flow</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                  Automated lead scoring and behavioral sequencing that nurtured cold prospects into sales-qualified meetings for a Global Fortune 500 SaaS.
                </p>
                <Link to="/work/growth-systems" className="flex items-center text-primary font-bold text-sm group/link inline-flex w-fit">
                  <span>Explore Project</span>
                  <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform text-base">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10 flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img alt="Retention Strategy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBboYLZpMIseF1SC-F3lhxG8tjWRq5urzumPCms1Mj3-vUY6_IoquOqGuw38GQ7lKhet0XUWqccjEOqe9TOsP_FHC_f4aXiU1IQOqJg6RHem7HnNT2D_UGWXZpUhUg9cPqwxNoACudXRYh7T8ghJXA-57v4L08gJA6ULuZl4XmGPuLlXoMqJkggTlivkJvoRrMEZCO6iXe11b6ueq9QlUa3vuLLPER3Cy2vaHSVoRZvsMZABRWSNtQHBz2Lcm6Bo_8SHHRYUtduaRII" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-2 flex-wrap">
                  <h3 className="text-xl font-bold text-on-surface font-headline">Retention Engine 2.0</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold shrink-0">-22% Churn Rate</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                  Predictive analytics modeling used to identify at-risk users before they leave, triggering personalized AI-driven win-back sequences.
                </p>
                <Link to="/work/growth-systems" className="flex items-center text-primary font-bold text-sm group/link inline-flex w-fit">
                  <span>Explore Project</span>
                  <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform text-base">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section (3 Columns) */}
      <section className="bg-surface-container-low px-8 py-24 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface font-headline tracking-tight mb-4">
                Featured Growth Success Stories
              </h2>
              <p className="text-on-surface-variant text-lg">
                Where advanced intelligence meets exceptional execution. Deep dives into our transformative growth models.
              </p>
            </div>
            <Link to="/work/growth-systems" className="flex items-center text-primary font-bold hover:underline decoration-2 underline-offset-4 shrink-0">
              View All Case Studies <span className="material-symbols-outlined ml-2">north_east</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Card 1 */}
            <Link to="/work/growth-systems" className="block bg-surface-container-lowest rounded-[24px] p-2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="rounded-[20px] overflow-hidden aspect-[16/10]">
                <img alt="Team Collaboration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaFzHbe7nv0FWofC2OdEJMgmeNfKJs0_5tJqSnP8cbL8ptl3znE8smPDgXlAqfh7KfRpFSNs8c2pS66UDbk84G54UxutdHB2wRlYCvFrELrZXpUzEuw1fsK49FzzfNSQweDVwnmTQnz3PWiRXDVzsHY3wL9w_UItrWRv2UcvJ4VmfErsIROHETCwIoaxNAKByK5UuZY_vItLNkksVMKfcwmjPO6gpW9GdPcB63S3mtIil7etIg-onPersQdWib6A2zW2vKvAYcgjzF" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant font-label">Enterprise Scale</span>
                </div>
                <h4 className="text-2xl font-bold text-on-surface mb-3 font-headline">The $100M Expansion Project</h4>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  How we helped a leading fintech disruptor scale from Series B to IPO through localized growth frameworks across 12 markets.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-surface text-on-surface-variant text-[10px] font-semibold rounded-lg">FinTech</span>
                  <span className="px-3 py-1.5 bg-surface text-on-surface-variant text-[10px] font-semibold rounded-lg">Global</span>
                  <span className="px-3 py-1.5 bg-surface text-on-surface-variant text-[10px] font-semibold rounded-lg">Strategy</span>
                </div>
              </div>
            </Link>

            {/* Featured Card 2 */}
            <Link to="/work/growth-systems" className="block bg-surface-container-lowest rounded-[24px] p-2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="rounded-[20px] overflow-hidden aspect-[16/10]">
                <img alt="Tech Solutions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAliPttLXEI3cvDX-oZVzXvTpTlS96k6AolWc-vYGX-lbV-t3HgfwgzBjJeLpXeCyjU7j8W7qoQpw7A88S0EDbdMx3SmC_ppYbQdy8N6x0QUDcJR511_gEr6Sw0_4_Xz7qb-zL2zJeVaGtKk2s82IsM7ALjzL8En1vC1FBl84Dy_LvUasobpl-UHVpCTso7VHu1sjMqjIjTvDV1MKeOHiAT7HZ-t3HL4lgQScEUfKgUdqXlqCDLdv7lJtGgPmr-DB-U95MRJp4QqogV" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-sm">campaign</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant font-label">Market Disruption</span>
                </div>
                <h4 className="text-2xl font-bold text-on-surface mb-3 font-headline">Neuro-Marketing Revolution</h4>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  Leveraging biometric feedback to craft messaging that resonates on a subconscious level, achieving 80% higher engagement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-surface text-on-surface-variant text-[10px] font-semibold rounded-lg">Neuro-analytics</span>
                  <span className="px-3 py-1.5 bg-surface text-on-surface-variant text-[10px] font-semibold rounded-lg">Biometrics</span>
                  <span className="px-3 py-1.5 bg-surface text-on-surface-variant text-[10px] font-semibold rounded-lg">Engagement</span>
                </div>
              </div>
            </Link>

            {/* Featured Card 3 (New) */}
            <Link to="/work/growth-systems" className="block bg-surface-container-lowest rounded-[24px] p-2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="rounded-[20px] overflow-hidden aspect-[16/10]">
                <img alt="B2B SaaS Growth" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXmwlaDPXmDks9v9QHAlr-pN1w9H4HXWS0D-KuBJiiwu0gGt6Z2uVaZnuylFMAcG1ZaGKM3C8IRgQyqqEdD2IA2smGCLMsxTdsyiFhcShDFrL76ofCq8-RFZOvum4KXksTLCTDyrDgLQ-eWwSi3i2Bja1s3sLX0FbqPk3OP0RHo8kwJmQwrtUp9SwKYWHqRCdxnZ3zPM4kWIgH1XGqCMSGeeX4Wp_wvbgrEU2TkbeXkcAKEv8U0phnmOzy889UdAfZmoeeYlHeuWgp" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-sm">add_task</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant font-label">Product-Led Growth</span>
                </div>
                <h4 className="text-2xl font-bold text-on-surface mb-3 font-headline">B2B SaaS Domination</h4>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  Re-engineered the free-trial onboarding flow, resulting in a 300% increase in paid conversions within 90 days.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-surface text-on-surface-variant text-[10px] font-semibold rounded-lg">SaaS</span>
                  <span className="px-3 py-1.5 bg-surface text-on-surface-variant text-[10px] font-semibold rounded-lg">Onboarding</span>
                  <span className="px-3 py-1.5 bg-surface text-on-surface-variant text-[10px] font-semibold rounded-lg">Conversion</span>
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
            <p className="text-lg text-inverse-on-surface/80">
              Let's discuss how our growth systems can be tailored to your specific business objectives and market conditions.
            </p>
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
    </>
  );
}