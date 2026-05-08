import React from 'react';

const Hero: React.FC = () => {
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
    <section className="relative bg-[#0F172A] overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-orange-500/20 to-transparent blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 px-3 py-1.5 rounded-full mb-6 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Nuevos cursos disponibles</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              IA para <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">enseñar, aprender</span> y <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">automatizar</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Cursos prácticos de IA y herramientas digitales para docentes y estudiantes en Tapachula, Chiapas y en línea. De cero a aplicado, con casos reales del aula.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contacto" onClick={handleNavClick} className="inline-flex justify-center items-center bg-[#F97316] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#0F172A] transition-all shadow-lg shadow-orange-500/25">
                Solicitar contacto
              </a>
              <a href="#cursos" onClick={handleNavClick} className="inline-flex justify-center items-center bg-transparent border border-slate-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-slate-800 hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-[#0F172A] transition-all">
                Ver cursos
              </a>
            </div>
          </div>
          <div className="relative lg:ml-auto w-full max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Equipo diverso de docentes y estudiantes colaborando con laptops en un espacio de aprendizaje moderno." 
              className="rounded-3xl shadow-2xl border border-slate-700 w-full h-auto object-cover"
            />
             <div className="absolute -bottom-6 -left-6 bg-slate-800 p-5 rounded-2xl shadow-xl border border-slate-700 flex items-center space-x-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-orange-500/20 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Aprende IA</p>
                  <p className="text-xs text-slate-400">Práctico y aplicable</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;