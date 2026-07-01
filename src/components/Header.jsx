import React, { useState, useEffect } from 'react';

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Logic: Reveal header when scrolling down, hide when scrolling up
      if (currentScrollY > scrollY && currentScrollY > 50) {
        setVisible(true);
      } else if (currentScrollY < scrollY) {
        setVisible(false);
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  // Internal Styles
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: '260px', // Perfectly aligns past the new 260px sidebar layout
    right: 0,
    height: '80px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Modern translucent background
    backdropFilter: 'blur(12px)', // Frosted glass premium visual finish
    WebkitBackdropFilter: 'blur(12px)',
    padding: '0 40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottom: '1px solid #e2e8f0',
    zIndex: 1000,
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
  };

  const titleStyle = {
    margin: 0,
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: '-0.5px',
    color: '#0f172a'
  };

  const subtitleStyle = {
    margin: '4px 0 0 0',
    color: '#64748b',
    fontSize: '13px',
    fontWeight: '400'
  };

  return (
    <>
      {/* Invisible structural layout spacer pushing elements below the floating header */}
      <div style={{ height: '100px' }} />
      
      <header style={headerStyle}>
        <h1 style={titleStyle}>ESL TRAVEL MANAGEMENT SYSTEM</h1>
        <p style={subtitleStyle}>Welcome back to your control center.</p>
      </header>
    </>
  );
}

export default Header;