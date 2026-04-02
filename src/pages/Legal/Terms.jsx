import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  // State to track which section is currently visible on screen
  const [activeSection, setActiveSection] = useState('introduction');

  // Set up the Intersection Observer to watch the sections as you scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' } 
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Custom inline styles for reliable rendering
  const primaryGradient = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)',
  };

  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  // Helper function to dynamically assign classes based on the active state
  const getSidebarLinkClass = (sectionId) => {
    const baseClass = "px-4 py-3 rounded-xl text-sm transition-all block";
    
    if (activeSection === sectionId) {
      // ACTIVE STATE
      return `${baseClass} font-semibold text-[#4647d3] bg-[#4647d3]/10`;
    }
    // INACTIVE STATE
    return `${baseClass} font-medium text-[#515c70] hover:bg-[#ecf1ff] hover:text-[#4647d3]`;
  };

  return (
    <div className="bg-[#f4f6ff] text-[#515c70] font-body min-h-screen antialiased selection:bg-[#9396ff]/30 scroll-smooth">
      
      {/* Hero Section */}
      <header className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4647d3]/5 to-transparent -z-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block font-label text-[0.6875rem] font-bold tracking-[0.2em] text-[#4647d3] uppercase mb-6 bg-[#4647d3]/10 px-4 py-1.5 rounded-full">
            TERMS & CONDITIONS
          </span>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-[#242f41] mb-8 leading-[1.1]">
            Terms & Conditions
          </h1>
          <p className="font-body text-lg md:text-xl text-[#515c70] leading-relaxed max-w-2xl mx-auto">
            Understand the terms that govern the use of our services.
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
                <a href="#introduction" className={getSidebarLinkClass('introduction')}>
                  1. Introduction
                </a>
                <a href="#use-of-services" className={getSidebarLinkClass('use-of-services')}>
                  2. Use of services
                </a>
                <a href="#responsibilities" className={getSidebarLinkClass('responsibilities')}>
                  3. Responsibilities
                </a>
                <a href="#limitations" className={getSidebarLinkClass('limitations')}>
                  4. Limitations
                </a>
                <a href="#intellectual-property" className={getSidebarLinkClass('intellectual-property')}>
                  5. Intellectual property
                </a>
                <a href="#termination" className={getSidebarLinkClass('termination')}>
                  6. Termination
                </a>
                <a href="#contact-info" className={getSidebarLinkClass('contact-info')}>
                  7. Contact info
                </a>
              </nav>
            </div>
          </aside>

          {/* Policy Content */}
          <article className="lg:w-3/4 max-w-3xl space-y-16">
            
            <section id="introduction" className="scroll-mt-32">
              <h2 className="font-headline text-2xl font-bold text-[#242f41] mb-6">1. Introduction</h2>
              <div className="space-y-4 text-[#515c70] leading-7">
                <p>Welcome to Neuro Works AI. These Terms & Conditions govern your use of our website and our professional services. By accessing or using our services, you agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our services.</p>
                <p>Neuro Works AI provides advanced artificial intelligence consulting, deployment, and strategic development services designed to enhance operational efficiency and innovation within enterprise environments.</p>
              </div>
            </section>

            <section id="use-of-services" className="scroll-mt-32">
              <h2 className="font-headline text-2xl font-bold text-[#242f41] mb-6">2. Use of services</h2>
              <div className="space-y-4 text-[#515c70] leading-7">
                <p>Our services are provided on an "as-is" and "as-available" basis. We grant you a non-exclusive, non-transferable right to access the specified platforms and insights provided during the term of our engagement.</p>
                <p>You agree to use the services only for lawful purposes and in accordance with the specifications provided in your service agreement. Any unauthorized use, including but not limited to reverse engineering or attempting to circumvent security measures, is strictly prohibited.</p>
              </div>
            </section>

            <section id="responsibilities" className="scroll-mt-32">
              <h2 className="font-headline text-2xl font-bold text-[#242f41] mb-6">3. Responsibilities</h2>
              <div className="space-y-4 text-[#515c70] leading-7">
                <p>You are responsible for maintaining the confidentiality of any account credentials provided to you. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
                <p>Furthermore, it is the client's responsibility to provide accurate data and timely feedback required for the successful implementation of AI models. Neuro Works AI is not liable for delays caused by incomplete or inaccurate client-provided information.</p>
              </div>
            </section>

            <section id="limitations" className="scroll-mt-32">
              <h2 className="font-headline text-2xl font-bold text-[#242f41] mb-6">4. Limitations</h2>
              <div className="space-y-4 text-[#515c70] leading-7">
                <p>In no event shall Neuro Works AI, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of the services.</p>
                <p>We do not warrant that the results obtained from the use of the services will be accurate or reliable at all times, as AI outputs are inherently probabilistic.</p>
              </div>
            </section>

            <section id="intellectual-property" className="scroll-mt-32">
              <h2 className="font-headline text-2xl font-bold text-[#242f41] mb-6">5. Intellectual property</h2>
              <div className="space-y-4 text-[#515c70] leading-7">
                <p>The service and its original content, features, and functionality are and will remain the exclusive property of Neuro Works AI and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Neuro Works AI.</p>
                <p>Ownership of any custom AI models or datasets developed specifically for a client will be governed by the specific Service Level Agreement (SLA) executed between the parties.</p>
              </div>
            </section>

            <section id="termination" className="scroll-mt-32">
              <h2 className="font-headline text-2xl font-bold text-[#242f41] mb-6">6. Termination</h2>
              <div className="space-y-4 text-[#515c70] leading-7">
                <p>We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                <p>Upon termination, your right to use the services will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
              </div>
            </section>

            <section id="contact-info" className="scroll-mt-32">
              <h2 className="font-headline text-2xl font-bold text-[#242f41] mb-6">7. Contact info</h2>
              <p className="text-[#515c70] leading-7 mb-8">If you have any questions about these Terms, please contact our legal department at <strong>legal@neuroworks.ai</strong> or by post to:</p>
              <div className="p-8 rounded-[1.5rem] bg-[#040e1f] text-[#f4f1ff]">
                <p className="font-headline text-lg font-bold mb-2">Neuro Works AI Legal Dept.</p>
                <p className="opacity-80">123 Innovation Way, Suite 400</p>
                <p className="opacity-80">San Francisco, CA 94105</p>
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
              Our team is here to help clarify any details regarding our operational frameworks and legal terms.
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

    </div>
  );
}