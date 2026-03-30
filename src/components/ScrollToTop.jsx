import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly snap to the top of the page whenever the URL changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}