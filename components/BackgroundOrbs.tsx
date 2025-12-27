import React from 'react';

const BackgroundOrbs: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Orb Dourado Superior Esquerdo */}
      <div className="absolute top-0 -left-4 w-72 h-72 md:w-96 md:h-96 bg-gold/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-50"></div>
      
      {/* Orb Azul Profundo Superior Direito */}
      <div className="absolute top-0 -right-4 w-72 h-72 md:w-96 md:h-96 bg-navy-light/40 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 opacity-60"></div>
      
      {/* Orb Dourado Inferior Centro */}
      <div className="absolute -bottom-8 left-20 w-72 h-72 md:w-96 md:h-96 bg-gold/5 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000 opacity-40"></div>
      
      {/* Orb Azul Centro (para dar profundidade) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-navy/80 rounded-full mix-blend-overlay filter blur-[120px] animate-pulse-slow"></div>
    </div>
  );
};

export default BackgroundOrbs;