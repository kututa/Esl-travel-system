function Footer() {
  // Define the internal style object
  const footerStyle = {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #ccc'
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2026 ESL Travel Management System. All rights reserved.</p>
    </footer>
  );
}

export default Footer;