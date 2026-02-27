import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import FloatingCTA from '../components/FloatingCTA';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <ScrollToTop />
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar />
      <main
        id="main-content"
        className="bg-white min-h-screen overflow-x-hidden"
        style={{ paddingTop: isHome ? 0 : 'var(--nav-height)' }}
      >
        <Outlet />
      </main>
      <FloatingCTA />
    </>
  );
}
