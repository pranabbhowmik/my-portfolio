import React from 'react';

const Footer = ({ mode }) => {
  return (
    <footer
      id="footer"
      className={`flex flex-col -mt-12 items-center justify-center py-6 ${
        mode === 'light' ? 'bg-white text-black' : 'bg-black text-white'
      }`}
    >
      <p className="text-center font-robotoMono text-sm">
       <span className='text-xl'>&copy;</span> 2024 Pranab Bhowmik. <br />
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
