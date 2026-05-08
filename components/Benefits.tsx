
import React from 'react';

const benefits = [
  { 
    title: "Aprendizaje Exponencial", 
    description: "Acelera tu dominio de la IA. Aplica lo aprendido desde el día uno y obtén resultados tangibles en semanas, no meses.", 
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    title: "Recursos Exclusivos", 
    description: "Accede a nuestra biblioteca de plantillas, prompts y herramientas probadas para maximizar tu eficiencia y ahorrar tiempo.", 
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    title: "Automatización Inteligente", 
    description: "Libera +8 horas semanales automatizando tareas repetitivas. Dedica más tiempo a la estrategia y al contacto humano.", 
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    title: "Soporte y Comunidad Activa", 
    description: "Nunca estarás solo. Únete a una comunidad de innovadores y recibe soporte continuo de expertos para superar cualquier desafío.", 
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" 
  },
];

const BenefitCard: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => (
    <div className="bg-slate-800 rounded-3xl border border-slate-700 shadow-lg hover:shadow-xl hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 text-left group overflow-hidden flex flex-col">
        <div className="h-48 w-full overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent z-10" />
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
        </div>
        <div className="p-8 pt-4 flex-grow">
            <h3 className="text-xl font-bold text-white mb-3 relative z-20">{title}</h3>
            <p className="text-slate-300 leading-relaxed relative z-20">{description}</p>
        </div>
    </div>
);

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Resultados, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">No solo Teoría</span></h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">Beneficios diseñados para generar un impacto real en tu productividad y la de tu institución.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} title={benefit.title} description={benefit.description} image={benefit.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;