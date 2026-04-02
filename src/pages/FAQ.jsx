import { Link, useLocation } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function FAQ() {
  // Custom inline styles for reliable rendering
  const faqGradientBg = {
    background: 'radial-gradient(circle at 50% 50%, rgba(70, 71, 211, 0.08) 0%, rgba(106, 55, 212, 0.03) 50%, transparent 100%)',
  };

  const ctaGradient = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)',
  };

  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  // FAQ Data Array - Easy to update in the future!
  const faqs = [
    {
      question: "What services does Neuro Works AI offer?",
      answer: "We offer AI automation, custom AI agents, and intelligent chatbots tailored to your business needs."
    },
    {
      question: "How do I get started with your services?",
      answer: "Simply click 'Book a Call' to schedule an initial consultation where we'll discuss your goals and how AI can help."
    },
    {
      question: "Do you work with startups or only large businesses?",
      answer: "We partner with companies of all sizes, from ambitious startups to established enterprises."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Timelines vary by complexity, but most initial implementations are completed within 4-8 weeks."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Yes, every system we build is custom-designed to fit your specific workflows and business objectives."
    },
    {
      question: "What technologies do you use?",
      answer: "We leverage the latest in Large Language Models, machine learning frameworks, and modern cloud infrastructure."
    },
    {
      question: "Can you help automate my existing business processes?",
      answer: "Absolutely. We specialize in identifying manual bottlenecks and building AI systems to automate them."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we provide continuous monitoring and optimization support to ensure your systems perform at their best."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing is project-based and reflects the scale and complexity of the solution we're building for you."
    },
    {
      question: "How can I book a call with your team?",
      answer: "You can use the 'Book a Call' button in the header or the CTA section at the bottom of this page."
    }
  ];

  return (
    <div className="bg-[#f4f6ff] font-body text-[#242f41] antialiased min-h-screen">
      <main className="pt-20">
        
        {/* Hero Section */}
        <ScrollReveal direction="up">
          <section className="relative overflow-hidden py-24 md:py-32">
            <div style={faqGradientBg} className="absolute inset-0 -z-10"></div>
            <div className="max-w-4xl mx-auto px-6 text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.05em] uppercase bg-[#dac9ff] text-[#5517bf] rounded-full font-label">
                FAQ
              </span>
              <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-[#242f41] mb-8 leading-[1.1]">
                Frequently Asked <span className="text-[#4647d3]">Questions</span>
              </h1>
              <p className="text-lg md:text-xl text-[#515c70] max-w-2xl mx-auto font-body leading-relaxed">
                Find answers to common questions about our services and process. We’re here to help you navigate the future of intelligent automation.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ List Section */}
        <section className="pb-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-4">
              
              {/* Mapping over the FAQ array */}
              {faqs.map((faq, index) => (
                <ScrollReveal direction="up" delay={index * 0.05} key={index}>
                  <details 
                    className="group bg-[#ffffff] rounded-xl shadow-sm border border-[#a2adc4]/10 overflow-hidden"
                    // Automatically open the very first FAQ item
                    open={index === 0} 
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none outline-none">
                      <h3 className="text-lg font-semibold text-[#242f41] font-headline pr-4">
                        {faq.question}
                      </h3>
                      <span 
                        className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-[#6c778c]" 
                        style={iconStyle}
                      >
                        expand_more
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-[#515c70] leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                </ScrollReveal>
              ))}

            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <ScrollReveal direction="up">
          <section className="py-32 px-8">
            <div className="max-w-7xl mx-auto rounded-[3rem] bg-inverse-surface text-white p-12 md:p-24 relative overflow-hidden text-center">
              <div className="absolute inset-0 btn-gradient opacity-10"></div>
              <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight">Still have questions?</h2>
                <p className="text-lg text-inverse-on-surface/80">If you couldn't find what you were looking for, our team is ready to provide the specific insights your business needs.</p>
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

      </main>
    </div>
  );
}