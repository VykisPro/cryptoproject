import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm">&copy; 2023 www.vykispro.lt. Visos teisės saugomos.</p>
        <div className="mt-auto">
          <p className="text-xs">Vieta papildomams linkams ir ikonoms.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
