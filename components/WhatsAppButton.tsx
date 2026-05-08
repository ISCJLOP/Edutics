import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5219991423080"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.77.46 3.45 1.28 4.95L2 22l5.25-1.38c1.45.77 3.09 1.19 4.79 1.19h.01c5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.9-9.91-9.9zM12.04 20.15h-.01c-1.5 0-2.95-.4-4.23-1.12l-.3-.18-3.12.82.83-3.04-.2-.31c-.8-1.32-1.23-2.84-1.23-4.42 0-4.34 3.53-7.87 7.88-7.87 2.11 0 4.08.82 5.57 2.31s2.31 3.46 2.31 5.57c-.01 4.34-3.54 7.87-7.89 7.87zm4.43-6.52c-.24-.12-1.45-.72-1.67-.8s-.39-.12-.55.12c-.16.24-.63.8-.78.96-.14.16-.29.18-.54.06s-1.05-.39-2-1.23c-.74-.66-1.23-1.48-1.38-1.72s-.02-.37.11-.48c.11-.11.24-.29.37-.43.12-.14.16-.24.24-.4s.12-.3-.06-.55c-.18-.24-.55-1.32-.75-1.81s-.4-.41-.55-.41h-.48c-.16 0-.43.06-.66.3s-.89.87-.89 2.12.91 2.46 1.04 2.64c.12.18 1.79 2.74 4.34 3.83.6.26 1.07.42 1.44.53.6.19 1.14.16 1.56.1.48-.07 1.45-.59 1.65-1.16s.2-1.07.14-1.18c-.06-.11-.24-.18-.48-.3z" />
      </svg>
      {/* Optional tooltip */}
      <span className="absolute right-full mr-4 bg-slate-800 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        ¡Escríbenos!
      </span>
    </a>
  );
};

export default WhatsAppButton;
