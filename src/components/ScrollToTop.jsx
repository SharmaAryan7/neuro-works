import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Only scroll to the top if the user is navigating to a NEW page.
    // If navType is "POP", it means the user clicked the browser's "Back" or "Forward" button, 
    // so we skip scrolling to the top and let the browser restore their previous position.
    if (navType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  return null;
}