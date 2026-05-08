
import React, { useRef } from 'react';

const courses = [
  {
    title: "Introducción a Python para Análisis de Datos",
    description: "Aprende los fundamentos de Python para analizar datos y potenciar tu carrera.",
    cta: "Solicitar información",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    features: [
      "Fundamentos de programación",
      "Análisis de datos básicos",
      "Ejercicios prácticos",
      "Certificado de participación"
    ]
  },
  {
    title: "Domina ChatGPT y la IA",
    description: "Aprende a crear PROMPTS AVANZADOS de forma profesional.",
    cta: "Inscribirme al curso",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    features: [
      "Creación de prompts avanzados",
      "Certificado al completar el curso",
      "Material de apoyo incluido",
      "Clases en vivo y grabadas"
    ]
  },
  {
    title: "Marketing con IA (Institucional)",
    description: "Atrae más alumnos, automatiza contenidos y optimiza campañas con analítica avanzada.",
    cta: "Solicitar temario",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    features: [
      "Creación de contenido automatizado",
      "Optimización de pauta digital",
      "Análisis de sentimiento de la comunidad",
      "Generación de leads calificados"
    ]
  },
  {
    title: "IA para Docentes",
    description: "Domina el diseño instruccional con IA, crea rúbricas al instante, y personaliza el aprendizaje.",
    cta: "Ver contenidos",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    features: [
      "Diseño instruccional asistido",
      "Generación de rúbricas y exámenes",
      "Personalización de materiales",
      "Agilización de la retroalimentación"
    ]
  },
  {
    title: "Automatiza con IA",
    description: "Crea flujos de trabajo inteligentes, gestiona comunicaciones y genera materiales didácticos.",
    cta: "Quiero automatizar",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    features: [
      "Automatización de correos y WhatsApp",
      "Gestión de calificaciones y reportes",
      "Creación de agentes de IA a medida",
      "Integración con herramientas existentes"
    ]
  }
];

const CourseCard: React.FC<{ title: string; description: string; cta: string; image: string; features: string[] }> = ({ title, description, cta, image, features }) => {
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

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="flex-shrink-0 w-[85vw] max-w-sm scroll-snap-start bg-slate-800 rounded-3xl border border-slate-700 shadow-lg flex flex-col hover:shadow-xl hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
      <div className="h-48 w-full overflow-hidden relative flex-shrink-0">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{title}</h3>
        <p className="text-slate-300 mb-8 leading-relaxed">{description}</p>
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <CheckIcon />
              <span className="text-slate-300 font-medium">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6 border-t border-slate-700">
          <a 
            href="#contacto" 
            onClick={handleNavClick} 
            className="w-full text-center block bg-slate-900 border border-slate-700 text-slate-300 font-semibold px-6 py-3.5 rounded-xl hover:bg-[#F97316] hover:border-[#F97316] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-orange-500 transition-all duration-300 shadow-sm"
          >
            {cta}
          </a>
        </div>
      </div>
    </div>
  );
}

const Courses: React.FC = () => {
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
    <section id="cursos" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Cursos Principales</span></h2>
                <p className="mt-6 text-lg text-slate-400">Programas diseñados para un impacto inmediato en tu rol. Aprende hoy, aplica mañana.</p>
            </div>
            <div className="hidden md:flex space-x-3">
                <button onClick={() => scroll('left')} aria-label="Curso anterior" className="p-4 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:shadow-md hover:border-orange-500/50 hover:text-orange-400 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={() => scroll('right')} aria-label="Siguiente curso" className="p-4 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:shadow-md hover:border-orange-500/50 hover:text-orange-400 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
        <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-8 pb-8 -mx-6 px-6 scroll-snap-x-mandatory">
          {courses.map((course, index) => (
             <CourseCard key={index} {...course} />
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

export default Courses;