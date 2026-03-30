import { useState, useEffect } from 'react';

export default function PrivacyPolicy() {
  // State to track which section is currently visible on screen
  const [activeSection, setActiveSection] = useState('intro');

  // Set up the Intersection Observer to watch the sections as you scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is intersecting (visible on screen), set it as active
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // This margin triggers the active state when the section is near the top 20% of the screen
      { rootMargin: '-20% 0px -60% 0px' } 
    );

    // Find all sections that have an ID and observe them
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  // Custom inline styles for reliable rendering

  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  // Helper function to dynamically assign classes based on the active state
  const getSidebarLinkClass = (sectionId) => {
    const baseClass = "px-4 py-3 rounded-xl text-sm transition-all block";
    
    if (activeSection === sectionId) {
      // ACTIVE STATE: Bold, Primary Color, Light Background
      return `${baseClass} font-semibold text-[#4647d3] bg-[#4647d3]/10`;
    }
    // INACTIVE STATE: Standard Gray, Hover effects
    return `${baseClass} font-medium text-[#515c70] hover:bg-[#ecf1ff] hover:text-[#4647d3]`;
  };

  return (
    <div className="bg-[#f4f6ff] text-[#515c70] font-body min-h-screen antialiased selection:bg-[#9396ff]/30">
      
      {/* Hero Section */}
      <header className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4647d3]/5 to-transparent -z-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block font-label text-[0.6875rem] font-bold tracking-[0.2em] text-[#4647d3] uppercase mb-6 bg-[#4647d3]/10 px-4 py-1.5 rounded-full">
            PRIVACY POLICY
          </span>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-[#242f41] mb-8 leading-[1.1]">
            Your Privacy Matters to Us
          </h1>
          <p className="font-body text-lg md:text-xl text-[#515c70] leading-relaxed max-w-2xl mx-auto">
            Learn how we collect, use, and protect your information as we build the next generation of ethereal intelligence together.
          </p>
        </div>
        
        {/* Abstract Decoration */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#4647d3]/10 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/4 right-0 -translate-y-1/2 w-96 h-96 bg-[#6a37d4]/10 blur-[120px] rounded-full"></div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar Navigation (Sticky) */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32 space-y-2">
              <nav className="flex flex-col gap-1">
                <a href="#intro" className={getSidebarLinkClass('intro')}>
                  1. Introduction
                </a>
                <a href="#collect" className={getSidebarLinkClass('collect')}>
                  2. Information we collect
                </a>
                <a href="#usage" className={getSidebarLinkClass('usage')}>
                  3. How we use data
                </a>
                <a href="#protection" className={getSidebarLinkClass('protection')}>
                  4. Data protection
                </a>
                <a href="#third-party" className={getSidebarLinkClass('third-party')}>
                  5. Third-party services
                </a>
                <a href="#contact" className={getSidebarLinkClass('contact')}>
                  6. Contact info
                </a>
              </nav>
            </div>
          </aside>

          {/* Policy Content */}
          <article className="lg:w-3/4 max-w-3xl space-y-16">
            
            <section id="intro" className="scroll-mt-32">
              <h2 className="font-headline text-2xl font-bold text-[#242f41] mb-6">1. Introduction</h2>
              <div className="space-y-4 text-[#515c70] leading-7">
                <p>Welcome to Neuro Works AI. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or use our services. We are committed to protecting your personal data and your right to privacy.</p>
                <p>If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <strong>privacy@neuroworks.ai</strong>.</p>
              </div>
            </section>

            <section id="collect" className="scroll-mt-32">
              <h2 className="font-headline text-2xl font-bold text-[#242f41] mb-6">2. Information we collect</h2>
              <div className="space-y-6 text-[#515c70] leading-7">
                <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information we collect depends on the context of your interactions with us and the choices you make.</p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ecf1ff] flex items-center justify-center text-[#4647d3] text-xs font-bold">A</span>
                    <span><strong className="text-[#242f41]">Personal Data:</strong> Name, email address, job title, and company details provided during consultation bookings.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ecf1ff] flex items-center justify-center text-[#4647d3] text-xs font-bold">B</span>
                    <span><strong className="text-[#242f41]">Usage Data:</strong> Information about how you use our website, including your IP address, browser type, and navigation patterns.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="usage" className="scroll-mt-32">
              <h2 className="font-headline text-2xl font-bold text-[#242f41] mb-6">3. How we use data</h2>
              <div className="space-y-4 text-[#515c70] leading-7">
                <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="p-6 rounded-2xl bg-[#ffffff] shadow-sm border border-[#a2adc4]/10">
                    <span className="material-symbols-outlined text-[#4647d3] mb-4" style={iconStyle}>hub</span>
                    <h4 className="font-headline font-semibold text-[#242f41] mb-2">Service Optimization</h4>
                    <p className="text-sm">Using data to train and refine our neural networks for better performance.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#ffffff] shadow-sm border border-[#a2adc4]/10">
                    <span className="material-symbols-outlined text-[#4647d3] mb-4" style={iconStyle}>mark_email_read</span>
                    <h4 className="font-headline font-semibold text-[#242f41] mb-2">Communication</h4>
                    <p className="text-sm">To send you administrative information and respond to your inquiries.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="protection" className="scroll-mt-32">
              <h2 className="font-headline text-2xl font-bold text-[#242f41] mb-6">4. Data protection</h2>
              <div className="space-y-4 text-[#515c70] leading-7">
                <p>We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate internal security measures designed to protect the security of any personal information we process.</p>
                <p>However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our services is at your own risk.</p>
              </div>
            </section>

            <section id="third-party" className="scroll-mt-32">
              <h2 className="font-headline text-2xl font-bold text-[#242f41] mb-6">5. Third-party services</h2>
              <p className="text-[#515c70] leading-7 mb-6">We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
              <div className="bg-[#ffffff] p-8 rounded-[1.5rem] shadow-sm border border-[#a2adc4]/10">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-[#ecf1ff] text-xs font-medium text-[#4647d3]">Cloud Hosting Partners</span>
                  <span className="px-4 py-2 rounded-full bg-[#ecf1ff] text-xs font-medium text-[#4647d3]">Analytics Providers</span>
                  <span className="px-4 py-2 rounded-full bg-[#ecf1ff] text-xs font-medium text-[#4647d3]">Payment Processors</span>
                  <span className="px-4 py-2 rounded-full bg-[#ecf1ff] text-xs font-medium text-[#4647d3]">CRM Systems</span>
                </div>
              </div>
            </section>

            <section id="contact" className="scroll-mt-32">
              <h2 className="font-headline text-2xl font-bold text-[#242f41] mb-6">6. Contact info</h2>
              <p className="text-[#515c70] leading-7 mb-8">If you have questions or comments about this notice, you may email us at <strong>privacy@neuroworks.ai</strong> or by post to:</p>
              <div className="p-8 rounded-[1.5rem] bg-[#040e1f] text-[#f4f1ff]">
                <p className="font-headline text-lg font-bold mb-2">Neuro Works AI Legal Dept.</p>
                <p className="opacity-80">1200 Innovation Drive</p>
                <p className="opacity-80">Tech District, CA 94105</p>
                <p className="opacity-80">United States</p>
              </div>
            </section>

          </article>
        </div>
      </main>

      {/* Final CTA Block */}

      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-inverse-surface text-white p-12 md:p-24 relative overflow-hidden text-center">
          <div className="absolute inset-0 btn-gradient opacity-10"></div>
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight">Have questions?</h2>
            <p className="text-lg text-inverse-on-surface/80">
                Our legal and data privacy teams are here to help you understand how we handle your digital footprints.
            </p>
            <div className="pt-8">
              <button className="btn-gradient text-white px-12 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all">
                Book a Call
              </button>
            </div>
          </div>
          {/* Background Decorative Elements */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-secondary rounded-full blur-[120px] opacity-20"></div>
        </div>
      </section>

    </div>
  );
}