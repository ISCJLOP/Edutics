
import React, { useRef } from 'react';

// Icons for result cards
const TimeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const EngagementIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const SpeedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);


const resultsData = [
  {
    metric: "+10 hrs",
    description: "Ahorradas por semana al automatizar flujos de trabajo, reportes y tareas repetitivas.",
    icon: <TimeIcon />
  },
  {
    metric: "+40%",
    description: "De incremento en el impacto y retención mediante experiencias de aprendizaje personalizadas.",
    icon: <EngagementIcon />
  },
  {
    metric: "10x",
    description: "Más rapidez en la generación de contenidos, campañas de marketing y materiales didácticos.",
    icon: <SpeedIcon />
  }
];

const ResultCard: React.FC<{ metric: string; description: string; icon: React.ReactNode; }> = ({ metric, description, icon }) => {
  return (
    <div className="flex-shrink-0 w-[85vw] max-w-sm scroll-snap-start bg-slate-800 border border-slate-700 rounded-3xl shadow-lg p-8 flex flex-col text-center items-center hover:shadow-2xl hover:border-orange-500 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex-shrink-0 bg-slate-700 text-orange-500 p-5 rounded-2xl mb-8 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10">
        {icon}
      </div>
      <div className="flex-grow relative z-10">
        <h3 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 tracking-tight">{metric}</h3>
        <p className="text-lg text-slate-300 leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  );
}

const Results: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

  return (
    <section id="resultados" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80" 
          alt="Resultados" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0F172A]/90" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent z-10" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Resultados <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Tangibles</span></h2>
                <p className="mt-6 text-lg text-slate-400 leading-relaxed">Impacto medible en la automatización de tus procesos y el éxito de tus estrategias de enseñanza.</p>
            </div>
            <div className="hidden md:flex space-x-4">
                <button onClick={() => scroll('left')} aria-label="Resultado anterior" className="p-4 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:text-orange-400 hover:shadow-md hover:border-orange-500 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 group-hover:text-orange-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={() => scroll('right')} aria-label="Siguiente resultado" className="p-4 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:text-orange-400 hover:shadow-md hover:border-orange-500 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 group-hover:text-orange-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
        <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-8 pb-8 -mx-6 px-6 scroll-snap-x-mandatory">
          {resultsData.map((result, index) => (
             <ResultCard key={index} {...result} />
          ))}
        </div>
      </div>
       <style>{`
        .scroll-snap-x-mandatory {
          scroll-snap-type: x mandatory;
        }
        .scroll-snap-start {
          scroll-snap-align: start;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .flex.overflow-x-auto::-webkit-scrollbar {
            display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .flex.overflow-x-auto {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default Results;