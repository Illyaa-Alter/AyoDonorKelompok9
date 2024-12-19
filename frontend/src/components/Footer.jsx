import React from 'react';
import logo from './assets/logo.png';

function Footer() {


  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container d-flex flex-column align-items-center">
        <img src={logo} alt="Logo" className="footer-logo mb-3" />
        <p>&copy; My Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;