import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Triggers the local nav for /services AND all its subpages
  const isServiceSection = currentPath.startsWith('/services');
  
  // Triggers the local nav for /work AND all its subpages
  const isWorkSection = currentPath.startsWith('/work');

  // Custom styling for the CTA button
  const ctaGradient = {
    background: 'linear-gradient(135deg, #4647d3 0%, #6a37d4 100%)'
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(255,255,255,0.7)] backdrop-blur-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-[rgba(255,255,255,0.3)] transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        
        {/* Logo always goes Home */}
        <Link to="/" className="text-xl font-bold tracking-tighter text-[#242f41] font-headline">
          Neuro Works AI
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-['Plus_Jakarta_Sans'] font-medium text-sm tracking-tight">
          
          {isServiceSection ? (
            /* LOCAL NAVIGATION: Shown on the main Services page AND all subpages */
            <>
              <Link 
                to="/services/ai-solutions" 
                className={`transition-colors duration-200 ${
                  currentPath.includes('ai-solutions') 
                    ? 'text-[#4647d3] font-semibold border-b-2 border-[#4647d3] pb-1' 
                    : 'text-[#515c70] hover:text-[#4647d3]'
                }`}
              >
                AI Solutions
              </Link>
              <Link 
                to="/services/development" 
                className={`transition-colors duration-200 ${
                  currentPath.includes('development') 
                    ? 'text-[#4647d3] font-semibold border-b-2 border-[#4647d3] pb-1' 
                    : 'text-[#515c70] hover:text-[#4647d3]'
                }`}
              >
                Development Services
              </Link>
              <Link 
                to="/services/growth-systems" 
                className={`transition-colors duration-200 ${
                  currentPath.includes('growth-systems') 
                    ? 'text-[#4647d3] font-semibold border-b-2 border-[#4647d3] pb-1' 
                    : 'text-[#515c70] hover:text-[#4647d3]'
                }`}
              >
                Growth Systems
              </Link>
            </>
          ) : isWorkSection ? (
            /* LOCAL NAVIGATION: Shown on the main Work page AND all subpages */
            <>
              <Link 
                to="/work/ai-solutions" 
                className={`transition-colors duration-200 ${
                  currentPath.includes('ai-solutions') 
                    ? 'text-[#4647d3] font-semibold border-b-2 border-[#4647d3] pb-1' 
                    : 'text-[#515c70] hover:text-[#4647d3]'
                }`}
              >
                AI Projects
              </Link>
              <Link 
                to="/work/development" 
                className={`transition-colors duration-200 ${
                  currentPath.includes('development') 
                    ? 'text-[#4647d3] font-semibold border-b-2 border-[#4647d3] pb-1' 
                    : 'text-[#515c70] hover:text-[#4647d3]'
                }`}
              >
                Development Projects
              </Link>
              <Link 
                to="/work/growth-systems" 
                className={`transition-colors duration-200 ${
                  currentPath.includes('growth-systems') 
                    ? 'text-[#4647d3] font-semibold border-b-2 border-[#4647d3] pb-1' 
                    : 'text-[#515c70] hover:text-[#4647d3]'
                }`}
              >
                Growth Projects
              </Link>
            </>
          ) : (
            /* GLOBAL NAVIGATION: Shown on Home, About, Insights */
            <>
              <Link 
                to="/" 
                className={`transition-colors duration-200 ${
                  currentPath === '/' ? 'text-[#4647d3] font-semibold' : 'text-[#515c70] hover:text-[#4647d3]'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors duration-200 ${
                  currentPath === '/services' ? 'text-[#4647d3] font-semibold' : 'text-[#515c70] hover:text-[#4647d3]'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/work" 
                className={`transition-colors duration-200 ${
                  currentPath === '/work' ? 'text-[#4647d3] font-semibold' : 'text-[#515c70] hover:text-[#4647d3]'
                }`}
              >
                Work
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors duration-200 ${
                  currentPath === '/about' ? 'text-[#4647d3] font-semibold' : 'text-[#515c70] hover:text-[#4647d3]'
                }`}
              >
                About
              </Link>
              <Link 
                to="/insights" 
                className={`transition-colors duration-200 ${
                  currentPath === '/insights' ? 'text-[#4647d3] font-semibold' : 'text-[#515c70] hover:text-[#4647d3]'
                }`}
              >
                Insights
              </Link>
            </>
          )}
        </div>

        {/* Universal CTA Button */}
        <Link 
          to="/contact"
          className="inline-block text-[#f4f1ff] px-6 py-2.5 rounded-full font-semibold text-sm active:scale-95 transition-transform shadow-lg shadow-[#4647d3]/20"
          style={ctaGradient}
        >
          Book a Call
        </Link>
      </div>
    </nav>
  );
}