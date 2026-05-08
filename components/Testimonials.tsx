
import React from 'react';

const testimonials = [
  {
    name: "Ana Pérez",
    role: "Docente de Secundaria",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "El curso de IA para docentes me ahorró horas en la planificación de clases. Las herramientas son increíblemente prácticas y fáciles de implementar.",
  },
  {
    name: "Carlos Mendoza",
    role: "Analista de Datos Jr.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Introducción a Python cambió mi perspectiva. Ahora puedo procesar grandes volúmenes de información en minutos en lugar de horas.",
  },
  {
    name: "Laura Jiménez",
    role: "Especialista en Marketing",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "El curso de Marketing con IA me permitió automatizar la creación de contenido y mejorar la captación de leads significativamente.",
  },
  {
    name: "Roberto Gómez",
    role: "Emprendedor",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote: "Dominar ChatGPT me ayudó a crear prompts avanzados que aceleraron el desarrollo de mi negocio. El material de apoyo es excelente.",
  },
  {
    name: "Marisol Cortés",
    role: "Coordinadora Académica",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote: "Entender cómo funciona la automatización me ha dado una ventaja competitiva. Integramos flujos de trabajo que optimizaron toda la escuela.",
  }
];

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ name, role, quote, image }) => (
  <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-lg hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 flex flex-col relative group">
    <svg className="absolute top-8 right-8 w-8 h-8 text-orange-500/10 group-hover:text-orange-500/20 transition-colors" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
    </svg>
    <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed">"{quote}"</p>
    <div className="mt-auto flex items-center space-x-4">
      <div className="w-14 h-14 rounded-full ring-2 ring-orange-500/30 bg-slate-700 flex items-center justify-center overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div>
          <p className="font-bold text-white">{name}</p>
          <p className="text-sm text-slate-400">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Lo que dicen <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">nuestros alumnos</span></h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">Historias de éxito de profesionales y estudiantes que han confiado en nosotros.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;