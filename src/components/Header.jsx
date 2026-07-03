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
  
 
  return (
    <>
      {/* Invisible structural layout spacer pushing elements below the floating header */}
      <div style={{ height: '100px' }} />
      
      <header className="headerStyle">
        <h1 className="titleStyle">ESL TRAVEL MANAGEMENT SYSTEM</h1>
        <p className="subtitleStyle">Welcome back to your control center.</p>
      </header>
    </>
  );
}

export default Header;