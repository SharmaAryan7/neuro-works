export default function EntryPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Background Overlay Context */}
      <div 
        className="fixed inset-0 flex items-center justify-center p-6 z-50"
        style={{
          backgroundImage: `
            radial-gradient(at 0% 0%, rgba(70, 71, 211, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(106, 55, 212, 0.1) 0px, transparent 50%)
          `
        }}
      >
        {/* Subtle Radial Glow Behind Modal */}
        <div className="absolute w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
        
        {/* Modal Backdrop Blur */}
        <div 
          className="fixed inset-0 bg-[#242f41]/5 backdrop-blur-md" 
          onClick={onClose} // Clicking the background closes the modal
        ></div>

        {/* Main Modal Container */}
        <div className="relative w-full max-w-2xl bg-[#ffffff] rounded-xl shadow-[0_32px_64px_-16px_rgba(36,47,65,0.08)] overflow-hidden border border-[#cdddfe]/30 z-50">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-8 text-[#515c70] hover:text-[#4647d3] p-2 rounded-full hover:bg-[#ecf1ff] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>close</span>
          </button>

          {/* Decorative Visual Aspect (Asymmetric Top Accent) */}
          <div className="h-2 w-full bg-gradient-to-r from-[#4647d3] via-[#6a37d4] to-[#9396ff] opacity-80"></div>
          
          <div className="p-8 md:p-12">
            {/* Header Pill */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#9396ff]/20 text-[#0a0081] text-xs font-semibold tracking-wide rounded-full border border-[#9396ff]/30 uppercase">
                🚀 Let’s Build Something Smart
              </span>
            </div>

            {/* Hero Section Inside Modal */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-6">
                <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-[#242f41] tracking-tight leading-[1.1]">
                  Scale Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4647d3] to-[#6a37d4]">with AI</span>
                </h1>
                
                <p className="text-[#515c70] text-lg leading-relaxed max-w-md">
                  We design AI systems, automation, and digital products to help you grow faster and smarter.
                </p>

                {/* Action Cluster */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-xl shadow-lg shadow-[#4647d3]/20 hover:shadow-xl hover:shadow-[#4647d3]/30 active:scale-95 transition-all duration-300">
                    Book a Call
                  </button>
                  <button className="w-full sm:w-auto px-8 py-4 bg-[#ffffff] border-2 border-[#d5e3ff] text-[#242f41] font-semibold rounded-xl hover:bg-[#ecf1ff] hover:border-[#cdddfe] transition-all duration-300 active:scale-95">
                    Explore Services
                  </button>
                </div>
              </div>

              {/* Side Illustration/Visual */}
              <div className="hidden lg:block w-48 shrink-0">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#ecf1ff] border border-[#a2adc4]/10">
                  <img 
                    alt="AI Visualization" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBINWFyiNN_8-i3olm454JeVhnS4wJup-bamEuJgy63XDv2s3FLoY65YED49sJ4dmYxSpW1PlxFLHgmMRjzcBYzf35xCtKRhOh6pZ_LMqcvOeTghTywGP42X_qPhsWEr6WsXMoy2xEvnxdcMTWv4462AgzvkTIRSWoGJK3sdWJHBrrIGbHAXPbw0L0KO5MtubQLnjFfN-0rmam_EnwVw5BhJV5zq-ct6d9qQ1TNwpUeoEa05N0GAvVyfdv7TTB48bq3tUl-w46Pao9F"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ecf1ff]/80 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Subtle Insight Chip for Context */}
            <div className="mt-12 pt-8 border-t border-[#d5e3ff]/50">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-[#ffffff]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEJU9kcUVa2xQIRbniL9Z-aE2UN7_qzTkx2dyQLScspf3957_r4W2h40Erp83-bMIqOFuD22h7Dgemjtfih8nJTDhzs0VjtDdhdUyFkFI6RohVNWI3HqGDsOvwC-hvxLc3qW3fJ4kEtI-Mi-3H_wIBd7UOzk6zMwjdG0hk8lLCsNl-WfktUelIo7twT6oqThFLRm6PXgf_h4WaMbtebAMWG4VlyL27-QW2QtHfN5ga_Ho3BP3bL4IjLbRTXeEwxJSB4z2a11Ll8Qi8" alt="Client 1" />
                  <img className="w-8 h-8 rounded-full border-2 border-[#ffffff]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA48Y5Sw5NFt4nu13_NOnCA2qGDgunGbFSZpV0FT8q8FcFVvg9uuOFCRN_eD9hcga83V1nktmDkFNsWCJUXbSayAFswC6R7i4Zsh9m3bUKp4leAYKZbp7pwLtLozmOWOjdXMaSgO8twW8G7PIT9faHZ47b4CMkaqR5o1iuhexv0dFiGXel26JtbJNgtL8Xs-wd88T43XFV8XgmonolX9foN-M56u6OyDEUHxrRxS5BR4ryfPLZDxqomi47N7fFouRX3WCoAwrdYa2LH" alt="Client 2" />
                </div>
                <p className="text-[#515c70] text-sm font-medium">
                  Joined by <span className="text-[#242f41] font-bold">500+</span> industry leaders this month.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Hidden Footer as per context of Modal focusing */}
      <footer className="fixed bottom-0 w-full py-6 px-8 flex justify-between items-center text-[10px] uppercase tracking-widest text-[#515c70]/50 pointer-events-none opacity-40 z-50">
        <p>© 2024 LUMINA NEURO AI AGENCY</p>
        <div className="flex gap-6">
          <span>PRIVACY</span>
          <span>TERMS</span>
        </div>
      </footer>
    </>
  );
}