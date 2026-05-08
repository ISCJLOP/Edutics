
import React from 'react';

const allies = [
  { 
    name: 'Google', 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
  },
  { 
    name: 'Microsoft', 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
  },
  { 
    name: 'IBM', 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
  },
  { 
    name: 'AWS', 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
  },
];

const Trust: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-8">
          Nuestros docentes han colaborado con líderes de la industria
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 sm:gap-x-16 opacity-70">
          {allies.map((ally) => (
            <img
              key={ally.name}
              src={ally.logoUrl}
              alt={`Logo de ${ally.name}`}
              className="h-8 sm:h-10 max-w-[150px] object-contain filter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;