import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    role: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const courseOptions = ["Introducción a Python", "Domina ChatGPT y la IA", "Marketing con IA", "IA para Docentes", "Automatiza con IA"];
  const roleOptions = ["Docente", "Directivo/Administrativo", "Estudiante", "Otro"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePicklistChange = (field: 'interest' | 'role', value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
     if (error && formData.interest && formData.role) {
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.interest || !formData.role) {
      setError('Por favor, selecciona tu rol y el curso de interés.');
      return;
    }
    
    setError('');
    setIsLoading(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxkNsPzJ-tVxzcIytH0401HmwPU_966cMMDQgdenH0zV0nDOeJO34BnDO8Wz_ou9RHK/exec';
    
    const formBody = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      formBody.append(key, String(value));
    });

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors',
      });
      
      setSubmitted(true);

    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Hubo un problema al enviar el formulario. Por favor, revisa tu conexión e inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };
  
  if (submitted) {
    return (
        <section id="contacto" className="py-20 bg-[#0F172A]">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-md mx-auto bg-slate-800 p-10 rounded-3xl shadow-xl border border-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#F97316] mx-auto mb-4" fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-white">¡Gracias!</h3>
                    <p className="text-slate-300 mt-2">Hemos recibido tu mensaje. Te contactaremos en menos de 24 horas.</p>
                </div>
            </div>
        </section>
    )
  }

  return (
    <section id="contacto" className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-b from-orange-500/10 to-transparent blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Da el Siguiente Paso en tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Carrera Profesional</span></h2>
              <p className="mt-6 text-lg text-slate-400">Llena el formulario y un asesor se pondrá en contacto contigo para resolver tus dudas y darte la información que necesitas.</p>
            </div>
          <div className="bg-slate-800 border border-slate-700 p-8 sm:p-12 rounded-3xl shadow-2xl shadow-black/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full -z-10" />
            <h3 className="text-2xl font-bold text-white text-center mb-8">Solicita más información</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Nombre completo</label>
                  <input type="text" name="name" id="name" required className="block w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder:text-slate-500 transition-colors" placeholder="Tu nombre completo" onChange={handleChange} value={formData.name} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                  <input type="email" name="email" id="email" required className="block w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder:text-slate-500 transition-colors" placeholder="ejemplo@correo.com" onChange={handleChange} value={formData.email} />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">Número de Teléfono</label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  required 
                  className="block w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder:text-slate-500 transition-colors" 
                  placeholder="Tu número a 10 dígitos" 
                  onChange={handleChange} 
                  value={formData.phone} 
                  pattern="[0-9]{10}"
                  title="Ingresa un número de 10 dígitos sin espacios ni guiones."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">Curso de interés</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {courseOptions.map(option => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => handlePicklistChange('interest', option)}
                      className={`w-full h-full min-h-[3.5rem] flex items-center justify-center text-center py-2 px-3 rounded-xl transition-all duration-300 text-sm font-medium border leading-tight text-balance ${
                        formData.interest === option
                          ? 'bg-orange-500/20 border-orange-500 text-orange-400 shadow-sm'
                          : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-orange-500/50 hover:bg-slate-800'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">¿Cuál es tu rol?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {roleOptions.map(option => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => handlePicklistChange('role', option)}
                      className={`w-full h-full min-h-[3.5rem] flex items-center justify-center text-center py-2 px-3 rounded-xl transition-all duration-300 text-sm font-medium border leading-tight text-balance ${
                        formData.role === option
                          ? 'bg-orange-500/20 border-orange-500 text-orange-400 shadow-sm'
                          : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-orange-500/50 hover:bg-slate-800'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Mensaje</label>
                <textarea id="message" name="message" rows={4} required className="block w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder:text-slate-500 transition-colors resize-none" placeholder="¿Cómo podemos ayudarte?" onChange={handleChange} value={formData.message}></textarea>
              </div>
              
              {error && <p className="mt-2 text-sm text-red-400 text-center font-medium bg-red-900/20 p-3 rounded-xl border border-red-900/50">{error}</p>}
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-[#F97316] text-white font-bold py-4 px-6 rounded-xl hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-orange-500 transition-all shadow-lg shadow-orange-500/25 disabled:bg-orange-500/50 disabled:shadow-none disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Enviando...' : 'Solicitar Información'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;