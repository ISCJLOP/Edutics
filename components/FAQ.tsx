
import React, { useState } from 'react';

const faqs = [
  {
    question: "¿Necesito conocimientos previos de IA?",
    answer: "No, en absoluto. Nuestros cursos están diseñados para empezar desde cero. Te guiaremos paso a paso, desde los conceptos básicos hasta las aplicaciones prácticas en el aula o tu institución."
  },
  {
    question: "¿Cómo se adaptan los contenidos a mi asignatura?",
    answer: "Te enseñamos a entrenar a la IA con tus propios materiales y contexto. Aprenderás a crear 'prompts' y plantillas específicas para tu materia, ya sea matemáticas, historia o artes."
  },
  {
    question: "¿Ofrecen constancia/certificado?",
    answer: "Sí, al completar satisfactoriamente cualquiera de nuestros cursos o talleres, recibirás una constancia de participación y habilidades adquiridas, válida para tu desarrollo profesional."
  },
  {
    question: "¿Pueden capacitar a todo mi plantel?",
    answer: "¡Claro! Ofrecemos planes de capacitación para planteles completos, adaptando el contenido a las necesidades específicas de tu institución. Contáctanos para una cotización personalizada."
  },
  {
    question: "¿Incluyen soporte post-curso?",
    answer: "Sí, todos nuestros cursos incluyen acceso a una comunidad de soporte donde puedes resolver dudas, compartir experiencias y recibir actualizaciones sobre nuevas herramientas y técnicas."
  }
];

const FaqItem: React.FC<{ faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border border-slate-700 rounded-2xl mb-4 bg-slate-800 shadow-sm hover:shadow-md hover:border-slate-600 transition-all duration-300 overflow-hidden">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left p-6 focus:outline-none">
        <span className="text-lg font-semibold text-white">{faq.question}</span>
        <span className={`transform transition-transform duration-300 flex-shrink-0 ml-4 p-2 rounded-full ${isOpen ? 'rotate-180 bg-orange-500/20 text-orange-400' : 'bg-slate-700 text-slate-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-300 pb-6 px-6 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Frecuentes</span></h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">Resolvemos tus dudas para que tomes la mejor decisión.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} isOpen={openIndex === index} onClick={() => handleClick(index)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
