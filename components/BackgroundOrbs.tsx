import React from 'react';

const BackgroundOrbs: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      {/* Fundo base escuro garantido aqui caso o body falhe */}
      <div className="absolute inset-0 bg-matte/90"></div>

      {/* Orb Dourado Superior Esquerdo - Mais intenso */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gold rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-[0.15]"></div>
      
      {/* Orb Azul Profundo Superior Direito */}
      <div className="absolute top-0 right-[-10%] w-[45vw] h-[45vw] bg-navy-light rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000 opacity-[0.25]"></div>
      
      {/* Orb Dourado Inferior Centro */}
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-gold rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000 opacity-[0.1]"></div>
      
      {/* Orb Central Pulsante (Glow sutil azul) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-navy rounded-full mix-blend-overlay filter blur-[90px] animate-pulse-slow opacity-40"></div>
    </div>
  );
};

export default BackgroundOrbs;