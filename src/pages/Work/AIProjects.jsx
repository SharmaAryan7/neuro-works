import { Link } from 'react-router-dom';

export default function AIProjects() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-8 py-24 md:py-32">
        {/* Glow effect matching your custom styles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(70,71,211,0.08)_0%,transparent_70%)] -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 pt-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-[0.05em] uppercase mb-6 font-label">
            AI PROJECTS
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface font-headline tracking-tight mb-8 leading-[1.1]">
            Intelligent Systems <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">in Action</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
            Explore how our AI automation and agents deliver measurable results across industries through deep integration and cognitive computing.
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
                <img alt="Neural Infrastructure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8luHX4h4QQWFTjccpobNrn8UpYiQ_49hQBjDr8YnP-ZU6omEnXC8KcYYTOwDik_7Ns2o3_dQLfGwZa1PQopNXgXRwBQ7wHKzOS6ASc_O3vBatb_HMAt-PzZRKLmPddJzQ5EimQAjB5EFQRZgXs-O2FWCRAVcMuQHHlB3UGtpHkkRuQbF9VjYuM0cnkqd_kE3GXa958ELsDPDNP6BX1sKMFTibW7RNYeRKB52rOZ5-hnasWrw8YOR9_6_8ENVNqCYCmEaOcMYVCiTt" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-on-surface font-headline">Autonomous Supply Chain Orchestrator</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold shrink-0">95% Automation</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-6 flex-grow">
                  Implementing predictive agentic workflows to manage global logistics, reducing manual overhead and optimizing route efficiency in real-time.
                </p>
                <Link to="/work/ai-solutions" className="flex items-center text-primary font-bold group/link inline-flex w-fit">
                  <span>Read Case Study</span>
                  <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10 flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img alt="Financial Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8LgdlMVcxDATpIRsAeZU8ieew_8ccb8Cs-DbZaIFjxb0_JcEWSgyEVAZNUWsqDaYlep7AeHKT3mltRLut2Am1R2ONnwqm9ZIiVisZAuxqAwA54vCBidgopJvhxjqfgtGjcfbMnysIn-LtJT4WJcnFAxj9zoNSkxArt3pasjVfHHbDTKGoEvI56pA4cZGgc-TN-cNopRtrrIxBCDVn71ExgBZdI2cQsxh6dxzsSX9iSfRoFXOHMTienD9_8Icvb3q_TwwbAPnOmd2-" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-on-surface font-headline">FinTech Risk Synthesis Agent</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold shrink-0">70% Faster</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-6 flex-grow">
                  An AI-driven compliance engine that scans thousands of regulatory documents per hour to ensure enterprise-wide adherence to new laws.
                </p>
                <Link to="/work/ai-solutions" className="flex items-center text-primary font-bold group/link inline-flex w-fit">
                  <span>Read Case Study</span>
                  <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10 flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img alt="Healthcare AI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsD8WR92RL_rWAeu6JC5xhM9PeLtYYGQndA11y4NUkBlSGSImErA1Ey-656eGt_8LHb31UCf4DYmMaNrwbrkjJIPCzFMBRE79JQRd_yCH_UDefFFLfVl5sm9PwXjN64C7tnyfg45LvKAi_Nrd-lie8FBVme1-5-DpyHHu2DfgYKaKM5RAEGKTixMLQyiJHBOU0NDEuCIqS3GbqQm4f0ZF0pydsLLGg1Wu4Pb65qNLJwwS1iul5OOeMSDr8WPWB-1wOk7d-tPEyQmHF" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-on-surface font-headline">Patient Diagnostics Copilot</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold shrink-0">88% Accuracy</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-6 flex-grow">
                  Specialized LLM tuned for medical record parsing, assisting clinicians by highlighting potential rare-disease markers from patient history.
                </p>
                <Link to="/work/ai-solutions" className="flex items-center text-primary font-bold group/link inline-flex w-fit">
                  <span>Read Case Study</span>
                  <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-surface-container-lowest rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10 flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img alt="SaaS Integration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2CxK1hu0A2BZpmxkdx9ovcBz3KMyke7JkCGVIXZn3Sa8e_LpfGf7d-Y_wKJnlgrPdpvpmUV-fSjzLTyIU0z7jVVu0TxxtRXm2TlqBdff5oz783tIWBLk-1XufMGlipeYGn_m_U7HVrSbB6YqK9o68I1UNHjuwCkPenQXlc7MTwijeZzOsbB2rNW4aeywPooDkFAmKx3rsTgB9doOWD1iahObNn6Q07TsafXXd8Ic_xwpsm3ndsrpYCFOsN0w8dWv1SeXhcimiVed" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-on-surface font-headline">Marketing Intelligence Core</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold shrink-0">2.5x Growth</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-6 flex-grow">
                  Full-stack automation for content generation and multi-channel distribution based on real-time market sentiment analysis.
                </p>
                <Link to="/work/ai-solutions" className="flex items-center text-primary font-bold group/link inline-flex w-fit">
                  <span>Read Case Study</span>
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
                Featured AI Success Stories
              </h2>
              <p className="text-on-surface-variant text-lg">
                Deep dives into the transformative power of Neuro Works' proprietary AI architectures.
              </p>
            </div>
            <Link to="/work/ai-solutions" className="flex items-center text-primary font-bold text-lg hover:underline decoration-2 underline-offset-4 shrink-0">
              View All Case Studies <span className="material-symbols-outlined ml-2">north_east</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Featured Card 1 */}
            <Link to="/work/ai-solutions" className="block bg-surface-container-lowest rounded-[24px] p-2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="rounded-[20px] overflow-hidden aspect-[16/10]">
                <img alt="Global Network" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQFyVq1aw3b07Di3mITMYKj-EPs8JQ_FQ9fC8NBur2h_vsRwqubmhZFhAquJUIh_o6wbk7pHYH78grjPPsa7y1FVUG2toUEkrr6PlTTFL33rHFoS6PFxIYz0cE-EmofyjknL4wE6rEn_6hfZNr2ztJg9ebZEEHxdA79ggvRPEhSh_F5FSzLsKgHPxVeVTe5UfDxWzGSMK1vYGHP5_93E850B4SRMaMIVhvbeCjGRWeFMvKV6l50Dklt7l_sN8qo-uNxHW4uLqyG4VM" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-sm">domain</span>
                  <span className="text-sm font-bold tracking-widest uppercase text-on-surface-variant font-label">Enterprise</span>
                </div>
                <h4 className="text-3xl font-bold text-on-surface mb-4 font-headline">Global Logistics: The 100M Transaction Challenge</h4>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  How we scaled an AI routing agent to manage over 100 million parcels monthly across four continents with zero downtime.
                </p>
              </div>
            </Link>

            {/* Featured Card 2 */}
            <Link to="/work/ai-solutions" className="block bg-surface-container-lowest rounded-[24px] p-2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="rounded-[20px] overflow-hidden aspect-[16/10]">
                <img alt="Cyber Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSiaBJt9hbd6AojxLaic2Nb_W-EHwyhcUxLkw8DNR3X31QtUzLBIE7rDE08OAOtnbN4DjbfhjHzbyvOCKza19x3gJp0UbxlNUMKt_cUojcGpv4aiRxoYRC_Z3NmekunELjZpr5FHPhjZSKRzfDr5ry2kW2n1tSmQcSMtCNBcFToK-lhuztLpg5SOfny7_eGQtYG5Q2aLUNujWyUHOz2y1xbkK6vST1xyBQ7h8Btm0vOpYUt9WKuhurOhcCAMn_UwcBLG5EpsQe-oCJ" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-sm">security</span>
                  <span className="text-sm font-bold tracking-widest uppercase text-on-surface-variant font-label">Security</span>
                </div>
                <h4 className="text-3xl font-bold text-on-surface mb-4 font-headline">Ethical Hacking: The Cognitive Firewall</h4>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  Developing a self-healing security agent that predicts vulnerabilities before they are exploited using behavioral AI modeling.
                </p>
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
              Our team of AI architects and machine learning engineers are ready to help you build the next generation of intelligent systems.
            </p>
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