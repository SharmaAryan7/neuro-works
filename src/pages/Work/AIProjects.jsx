export default function AIProjects() {
  // Custom inline styles for reliable gradient rendering
  const textGradient = {
    background: 'linear-gradient(to right, #4647d3, #6a37d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const bgGradientPrimary = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)',
  };

  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  return (
    <div className="bg-[#f4f6ff] text-[#242f41] font-body min-h-screen">
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Soft gradient glow behind */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#4647d3]/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#6a37d4]/20 blur-[120px] rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-8 text-center">
            <span className="inline-block py-1 px-4 mb-6 rounded-full bg-[#4647d3]/10 text-[#4647d3] text-xs font-bold tracking-widest uppercase font-label">
              AI PROJECTS
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-[#242f41] mb-8">
              Intelligent Systems <br /><span style={textGradient}>in Action</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#515c70] font-body mb-10 leading-relaxed">
              Explore how our AI automation and agents deliver measurable results across industries through deep integration and cognitive computing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button style={bgGradientPrimary} className="text-white px-8 py-4 rounded-xl text-base font-bold active:scale-95 transform transition-transform shadow-xl shadow-indigo-500/25 min-w-[180px]">
                Book a Call
              </button>
              <button className="bg-[#cdddfe]/50 backdrop-blur-sm text-[#4647d3] px-8 py-4 rounded-xl text-base font-bold hover:bg-[#cdddfe] transition-all min-w-[180px]">
                View Services
              </button>
            </div>
          </div>
        </section>

        {/* Main Grid (All Projects) */}
        <section className="py-24 bg-[#f4f6ff]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Project Card 1 */}
              <div className="group bg-[#ffffff] rounded-[20px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#a2adc4]/10">
                <div className="h-72 overflow-hidden relative">
                  <img 
                    alt="Neural Infrastructure" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8luHX4h4QQWFTjccpobNrn8UpYiQ_49hQBjDr8YnP-ZU6omEnXC8KcYYTOwDik_7Ns2o3_dQLfGwZa1PQopNXgXRwBQ7wHKzOS6ASc_O3vBatb_HMAt-PzZRKLmPddJzQ5EimQAjB5EFQRZgXs-O2FWCRAVcMuQHHlB3UGtpHkkRuQbF9VjYuM0cnkqd_kE3GXa958ELsDPDNP6BX1sKMFTibW7RNYeRKB52rOZ5-hnasWrw8YOR9_6_8ENVNqCYCmEaOcMYVCiTt"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                    <span className="text-[#4647d3] font-bold text-sm tracking-tight">95% Automation</span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-headline font-bold text-[#242f41] mb-4">Autonomous Supply Chain Orchestrator</h3>
                  <p className="text-[#515c70] mb-6 leading-relaxed">
                    Implementing predictive agentic workflows to manage global logistics, reducing manual overhead and optimizing route efficiency in real-time.
                  </p>
                  <a className="inline-flex items-center text-[#4647d3] font-semibold hover:gap-2 transition-all" href="#">
                    Read Case Study <span className="material-symbols-outlined ml-1" style={iconStyle}>arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="group bg-[#ffffff] rounded-[20px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#a2adc4]/10">
                <div className="h-72 overflow-hidden relative">
                  <img 
                    alt="Financial Analytics" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8LgdlMVcxDATpIRsAeZU8ieew_8ccb8Cs-DbZaIFjxb0_JcEWSgyEVAZNUWsqDaYlep7AeHKT3mltRLut2Am1R2ONnwqm9ZIiVisZAuxqAwA54vCBidgopJvhxjqfgtGjcfbMnysIn-LtJT4WJcnFAxj9zoNSkxArt3pasjVfHHbDTKGoEvI56pA4cZGgc-TN-cNopRtrrIxBCDVn71ExgBZdI2cQsxh6dxzsSX9iSfRoFXOHMTienD9_8Icvb3q_TwwbAPnOmd2-"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                    <span className="text-[#4647d3] font-bold text-sm tracking-tight">70% Faster</span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-headline font-bold text-[#242f41] mb-4">FinTech Risk Synthesis Agent</h3>
                  <p className="text-[#515c70] mb-6 leading-relaxed">
                    An AI-driven compliance engine that scans thousands of regulatory documents per hour to ensure enterprise-wide adherence to new laws.
                  </p>
                  <a className="inline-flex items-center text-[#4647d3] font-semibold hover:gap-2 transition-all" href="#">
                    Read Case Study <span className="material-symbols-outlined ml-1" style={iconStyle}>arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="group bg-[#ffffff] rounded-[20px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#a2adc4]/10">
                <div className="h-72 overflow-hidden relative">
                  <img 
                    alt="Healthcare AI" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsD8WR92RL_rWAeu6JC5xhM9PeLtYYGQndA11y4NUkBlSGSImErA1Ey-656eGt_8LHb31UCf4DYmMaNrwbrkjJIPCzFMBRE79JQRd_yCH_UDefFFLfVl5sm9PwXjN64C7tnyfg45LvKAi_Nrd-lie8FBVme1-5-DpyHHu2DfgYKaKM5RAEGKTixMLQyiJHBOU0NDEuCIqS3GbqQm4f0ZF0pydsLLGg1Wu4Pb65qNLJwwS1iul5OOeMSDr8WPWB-1wOk7d-tPEyQmHF"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                    <span className="text-[#4647d3] font-bold text-sm tracking-tight">88% Accuracy</span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-headline font-bold text-[#242f41] mb-4">Patient Diagnostics Copilot</h3>
                  <p className="text-[#515c70] mb-6 leading-relaxed">
                    Specialized LLM tuned for medical record parsing, assisting clinicians by highlighting potential rare-disease markers from patient history.
                  </p>
                  <a className="inline-flex items-center text-[#4647d3] font-semibold hover:gap-2 transition-all" href="#">
                    Read Case Study <span className="material-symbols-outlined ml-1" style={iconStyle}>arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Project Card 4 */}
              <div className="group bg-[#ffffff] rounded-[20px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#a2adc4]/10">
                <div className="h-72 overflow-hidden relative">
                  <img 
                    alt="SaaS Integration" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2CxK1hu0A2BZpmxkdx9ovcBz3KMyke7JkCGVIXZn3Sa8e_LpfGf7d-Y_wKJnlgrPdpvpmUV-fSjzLTyIU0z7jVVu0TxxtRXm2TlqBdff5oz783tIWBLk-1XufMGlipeYGn_m_U7HVrSbB6YqK9o68I1UNHjuwCkPenQXlc7MTwijeZzOsbB2rNW4aeywPooDkFAmKx3rsTgB9doOWD1iahObNn6Q07TsafXXd8Ic_xwpsm3ndsrpYCFOsN0w8dWv1SeXhcimiVed"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                    <span className="text-[#4647d3] font-bold text-sm tracking-tight">2.5x Growth</span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-headline font-bold text-[#242f41] mb-4">Marketing Intelligence Core</h3>
                  <p className="text-[#515c70] mb-6 leading-relaxed">
                    Full-stack automation for content generation and multi-channel distribution based on real-time market sentiment analysis.
                  </p>
                  <a className="inline-flex items-center text-[#4647d3] font-semibold hover:gap-2 transition-all" href="#">
                    Read Case Study <span className="material-symbols-outlined ml-1" style={iconStyle}>arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-24 bg-[#ecf1ff]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl font-headline font-extrabold text-[#242f41] mb-4">Featured AI Success Stories</h2>
                <p className="text-[#515c70] text-lg leading-relaxed">
                  Deep dives into the transformative power of Neuro Works' proprietary AI architectures.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-[#a2adc4]/30 flex items-center justify-center text-[#4647d3] hover:bg-white transition-all">
                  <span className="material-symbols-outlined" style={iconStyle}>chevron_left</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-[#a2adc4]/30 flex items-center justify-center text-[#4647d3] hover:bg-white transition-all">
                  <span className="material-symbols-outlined" style={iconStyle}>chevron_right</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Large Card 1 */}
              <div className="relative bg-[#ffffff] rounded-[32px] overflow-hidden p-10 flex flex-col justify-end min-h-[500px] shadow-sm">
                <img 
                  alt="Global Network" 
                  className="absolute inset-0 w-full h-full object-cover -z-10 brightness-[0.4]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQFyVq1aw3b07Di3mITMYKj-EPs8JQ_FQ9fC8NBur2h_vsRwqubmhZFhAquJUIh_o6wbk7pHYH78grjPPsa7y1FVUG2toUEkrr6PlTTFL33rHFoS6PFxIYz0cE-EmofyjknL4wE6rEn_6hfZNr2ztJg9ebZEEHxdA79ggvRPEhSh_F5FSzLsKgHPxVeVTe5UfDxWzGSMK1vYGHP5_93E850B4SRMaMIVhvbeCjGRWeFMvKV6l50Dklt7l_sN8qo-uNxHW4uLqyG4VM"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#4647d3]/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase font-label">
                      Enterprise
                    </span>
                  </div>
                  <h3 className="text-3xl font-headline font-bold text-white">Global Logistics: The 100M Transaction Challenge</h3>
                  <p className="text-white/80 max-w-lg leading-relaxed">
                    How we scaled an AI routing agent to manage over 100 million parcels monthly across four continents with zero downtime.
                  </p>
                  <button className="mt-4 bg-white text-[#4647d3] px-6 py-3 rounded-xl font-bold hover:bg-[#f4f6ff] transition-all">
                    Explore Case Study
                  </button>
                </div>
              </div>

              {/* Large Card 2 */}
              <div className="relative bg-[#ffffff] rounded-[32px] overflow-hidden p-10 flex flex-col justify-end min-h-[500px] shadow-sm">
                <img 
                  alt="Cyber Vision" 
                  className="absolute inset-0 w-full h-full object-cover -z-10 brightness-[0.4]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSiaBJt9hbd6AojxLaic2Nb_W-EHwyhcUxLkw8DNR3X31QtUzLBIE7rDE08OAOtnbN4DjbfhjHzbyvOCKza19x3gJp0UbxlNUMKt_cUojcGpv4aiRxoYRC_Z3NmekunELjZpr5FHPhjZSKRzfDr5ry2kW2n1tSmQcSMtCNBcFToK-lhuztLpg5SOfny7_eGQtYG5Q2aLUNujWyUHOz2y1xbkK6vST1xyBQ7h8Btm0vOpYUt9WKuhurOhcCAMn_UwcBLG5EpsQe-oCJ"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#6a37d4]/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase font-label">
                      Security
                    </span>
                  </div>
                  <h3 className="text-3xl font-headline font-bold text-white">Ethical Hacking: The Cognitive Firewall</h3>
                  <p className="text-white/80 max-w-lg leading-relaxed">
                    Developing a self-healing security agent that predicts vulnerabilities before they are exploited using behavioral AI modeling.
                  </p>
                  <button className="mt-4 bg-white text-[#4647d3] px-6 py-3 rounded-xl font-bold hover:bg-[#f4f6ff] transition-all">
                    Explore Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-8 bg-[#f4f6ff]">
          <div style={bgGradientPrimary} className="max-w-5xl mx-auto rounded-[40px] p-16 md:p-24 relative overflow-hidden text-center shadow-2xl shadow-indigo-500/30">
            {/* Decorative circle */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#dac9ff]/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-8">Have a Project in Mind?</h2>
              <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body leading-relaxed">
                Our team of AI architects and machine learning engineers are ready to help you build the next generation of intelligent systems.
              </p>
              <button className="bg-white text-[#4647d3] px-10 py-5 rounded-2xl text-lg font-extrabold hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
                Book a Call
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}