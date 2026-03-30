import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Utilities
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop'; // <-- IMPORT THIS

// Pages
import Home from './pages/Home';
import ServicesOverview from './pages/Services/ServicesOverview';
import AISolutions from './pages/Services/AISolutions';
import Development from './pages/Services/Development';
import GrowthSystems from './pages/Services/GrowthSystems';
import WorkOverview from './pages/Work/WorkOverview';
import GrowthProjects from './pages/Work/GrowthProjects';
import AIProjects from './pages/Work/AIProjects';
import CaseStudy from './pages/Work/CaseStudy';
import DevelopmentProjects from './pages/Work/DevelopmentProjects'
import About from './pages/About';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import BlogPost from './pages/Insights/BlogPost';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import Terms from './pages/Legal/Terms';
import FAQ from './pages/FAQ';

// Modals
import EntryPopup from './components/modals/EntryPopup';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsPopupOpen(true);
        sessionStorage.setItem('hasSeenPopup', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/ai-solutions" element={<AISolutions />} />
          <Route path="/services/development" element={<Development />} />
          <Route path="/services/growth-systems" element={<GrowthSystems />} />
          <Route path="/work" element={<WorkOverview />} />
          <Route path="/work/growth-systems" element={<GrowthProjects />} />
          <Route path="/work/ai-solutions" element={<AIProjects />} />
          <Route path="/work/development" element={<DevelopmentProjects/>} />
          <Route path="/work/case-study/:id" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        
        <EntryPopup 
          isOpen={isPopupOpen} 
          onClose={() => setIsPopupOpen(false)} 
        />
      </MainLayout>
    </Router>
  );
}