import React from 'react';

const BackgroundOrbs: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-matte">
      {/* Orb Dourado Superior Esquerdo - Maior e mais suave */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gold rounded-full mix-blend-screen filter blur-[120px] animate-blob opacity-[0.08]"></div>
      
      {/* Orb Azul Profundo Superior Direito */}
      <div className="absolute top-0 right-[-10%] w-[35vw] h-[35vw] bg-navy-light rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 opacity-[0.15]"></div>
      
      {/* Orb Dourado Inferior Centro */}
      <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-gold rounded-full mix-blend-screen filter blur-[130px] animate-blob animation-delay-4000 opacity-[0.06]"></div>
      
      {/* Orb Central Pulsante (Glow sutil) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-navy rounded-full mix-blend-overlay filter blur-[100px] animate-pulse-slow opacity-30"></div>
    </div>
  );
};

export default BackgroundOrbs;