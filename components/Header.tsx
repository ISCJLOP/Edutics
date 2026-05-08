
import React from 'react';

const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-[#0F172A]/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold tracking-tight text-white">Edu<span className="text-[#F97316]">T</span>ics</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#cursos" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-[#F97316] transition-colors">Cursos</a>
          <a href="#testimonios" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-[#F97316] transition-colors">Testimonios</a>
          <a href="#faq" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-[#F97316] transition-colors">FAQ</a>
        </nav>
        <a href="#contacto" onClick={handleNavClick} className="hidden md:inline-flex items-center justify-center bg-white text-[#0F172A] text-sm font-bold px-6 py-2.5 rounded-full hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-[#0F172A] transition-all">
          Contacto
        </a>
      </div>
    </header>
  );
};

export default Header;