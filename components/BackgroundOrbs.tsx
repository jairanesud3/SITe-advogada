import React from 'react';

const BackgroundOrbs: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Fundo base escuro (Overlay) para garantir contraste */}
      <div className="absolute inset-0 bg-matte/95"></div>

      {/* Orb Dourado Superior Esquerdo */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gold rounded-full mix-blend-screen filter blur-[120px] animate-blob opacity-[0.1]"></div>
      
      {/* Orb Azul Profundo Superior Direito */}
      <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] bg-navy-light rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 opacity-[0.2]"></div>
      
      {/* Orb Dourado Inferior Centro - Mais visível */}
      <div className="absolute bottom-[-20%] left-[10%] w-[60vw] h-[60vw] bg-gold/80 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-4000 opacity-[0.08]"></div>
      
      {/* Orb Central Pulsante */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-navy rounded-full mix-blend-overlay filter blur-[100px] animate-pulse-slow opacity-30"></div>
    </div>
  );
};

export default BackgroundOrbs;