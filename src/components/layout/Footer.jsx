import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine which page we are on to render the correct footer variant
  const isHome = currentPath === '/';
  const isServicesOverview = currentPath === '/services';
  // If it's not Home and not the main Services page, it's a subpage (AI, Dev, Growth)
  const isServiceSubpage = currentPath.startsWith('/services/');

  // -----------------------------------------------------------------
  // VARIANT 1: The Massive Grid Footer (Only shown on the Home Page)
  // -----------------------------------------------------------------
  if (isHome) {
    return (
      <footer className="bg-slate-50 w-full py-16 border-t border-slate-100 mt-20 z-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto px-8 font-body text-sm text-slate-500">
          <div className="col-span-2">
            <div className="text-lg font-bold text-slate-900 font-headline mb-4">Neuro Works AI</div>
            <p className="max-w-xs leading-relaxed">Architecting the intelligence of tomorrow, today. Premium AI systems for elite businesses.</p>
          </div>
          <div>
            <div className="text-slate-900 font-bold mb-4">Platform</div>
            <ul className="space-y-3">
              <li><Link className="hover:text-[#4647d3] transition-colors" to="/services">Services</Link></li>
              <li><Link className="hover:text-[#4647d3] transition-colors" to="/work">Work</Link></li>
              <li><Link className="hover:text-[#4647d3] transition-colors" to="/insights">Insights</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-slate-900 font-bold mb-4">Company</div>
            <ul className="space-y-3">
              <li><Link className="hover:text-[#4647d3] transition-colors" to="/about">About Us</Link></li>
              <li><Link className="hover:text-[#4647d3] transition-colors" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-slate-900 font-bold mb-4">Support</div>
            <ul className="space-y-3">
              <li><Link className="hover:text-[#4647d3] transition-colors" to="/faq">FAQ</Link></li>
              <li><Link className="hover:text-[#4647d3] transition-colors" to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="hover:text-[#4647d3] transition-colors" to="/terms">Terms</Link></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-4 lg:col-span-6 border-t border-slate-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500">© 2024 Neuro Works AI. All rights reserved.</div>
            <div className="flex gap-6 text-xl">
              <a className="opacity-80 hover:opacity-100 hover:text-[#4647d3] transition-all" href="#">𝕏</a>
              <a className="opacity-80 hover:opacity-100 hover:text-[#4647d3] transition-all" href="#">in</a>
              <a className="opacity-80 hover:opacity-100 hover:text-[#4647d3] transition-all" href="#">GH</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // -----------------------------------------------------------------
  // VARIANT 2: The Sleek Minimal Footer (Shown on Services & Subpages)
  // -----------------------------------------------------------------
  return (
    <footer className="w-full bg-[#F8FAFC] border-t border-slate-100 z-10 relative">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto">
        
        {/* Left Side: Brand & Copyright */}
        <div className="mb-8 md:mb-0 space-y-4 text-center md:text-left">
          <div className="text-lg font-bold text-[#1E293B] font-headline">Neuro Works AI</div>
          <p className="font-body text-sm text-slate-500 max-w-xs">Building the future of business intelligence through custom AI and development.</p>
          <p className="font-body text-sm text-slate-500">© 2024 Neuro Works AI. All rights reserved.</p>
        </div>

        {/* Right Side: Dynamic Links based on Subpage vs Main Service Page */}
        <div className="flex flex-wrap justify-center gap-8">
          
          {isServicesOverview ? (
            /* Links for the main /services overview page */
            <>
              <Link className="text-slate-500 hover:text-[#4647d3] transition-colors font-medium text-sm font-body hover:underline decoration-[#4647d3]/30 underline-offset-4" to="/">Home</Link>
              <Link className="text-slate-500 hover:text-[#4647d3] transition-colors font-medium text-sm font-body hover:underline decoration-[#4647d3]/30 underline-offset-4" to="/services">Services</Link>
              <Link className="text-slate-500 hover:text-[#4647d3] transition-colors font-medium text-sm font-body hover:underline decoration-[#4647d3]/30 underline-offset-4" to="/work">Work</Link>
              <Link className="text-slate-500 hover:text-[#4647d3] transition-colors font-medium text-sm font-body hover:underline decoration-[#4647d3]/30 underline-offset-4" to="/about">About</Link>
              <Link className="text-slate-500 hover:text-[#4647d3] transition-colors font-medium text-sm font-body hover:underline decoration-[#4647d3]/30 underline-offset-4" to="/insights">Insights</Link>
            </>
          ) : (
            /* Links for the deeper service subpages (AI, Dev, Growth) */
            <>
              <Link className="text-slate-500 hover:text-[#4647d3] transition-colors font-medium text-sm font-body hover:underline decoration-[#4647d3]/30 underline-offset-4" to="/services">Services</Link>
              <Link className="text-slate-500 hover:text-[#4647d3] transition-colors font-medium text-sm font-body hover:underline decoration-[#4647d3]/30 underline-offset-4" to="/work">Work</Link>
              <Link className="text-slate-500 hover:text-[#4647d3] transition-colors font-medium text-sm font-body hover:underline decoration-[#4647d3]/30 underline-offset-4" to="/insights">Insights</Link>
              <Link className="text-slate-500 hover:text-[#4647d3] transition-colors font-medium text-sm font-body hover:underline decoration-[#4647d3]/30 underline-offset-4" to="/#faq">FAQ</Link>
              <Link className="text-slate-500 hover:text-[#4647d3] transition-colors font-medium text-sm font-body hover:underline decoration-[#4647d3]/30 underline-offset-4" to="/privacy-policy">Privacy Policy</Link>
              <Link className="text-slate-500 hover:text-[#4647d3] transition-colors font-medium text-sm font-body hover:underline decoration-[#4647d3]/30 underline-offset-4" to="/terms">Terms</Link>
            </>
          )}

        </div>
      </div>
    </footer>
  );
}