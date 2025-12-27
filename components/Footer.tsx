import React from 'react';
import { Instagram, MapPin, Phone, Share2 } from 'lucide-react';

const Footer: React.FC = () => {
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Dra. Jairane Sousa - Advocacia Criminal',
          text: 'Advogada Criminalista especialista. Atendimento 24h em Brusque e região.',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link do site copiado para a área de transferência!');
    }
  };

  return (
    <footer id="contato" className="bg-navy-dark pt-20 pb-10 border-t border-gold/10 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl bg-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">
              JAIRANE SOUSA
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-light">
              Advocacia criminal artesanal, comprometida com a liberdade, a ética e a justiça. Atuação combativa em Brusque e todo o estado de Santa Catarina.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
                <a 
                href="https://instagram.com/jairanesousamendes" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-2 text-gold hover:text-white transition-colors duration-300"
                >
                <div className="p-2 border border-gold/30 rounded-full group-hover:bg-gold group-hover:text-navy transition-all">
                    <Instagram size={18} />
                </div>
                <span className="font-medium text-sm">@jairanesousamendes</span>
                </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
             <h3 className="text-white font-bold uppercase tracking-[0.2em] mb-8 text-xs border-b border-gold/20 pb-2 inline-block md:block">Canais de Atendimento</h3>
             <ul className="space-y-6">
                <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-gray-300 group">
                    <div className="p-2 bg-navy border border-white/10 rounded-full text-gold group-hover:border-gold/50 transition-colors">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div className="text-center md:text-left">
                        <span className="block font-medium text-white">Escritório Brusque</span>
                        <span className="text-sm font-light text-gray-400">Atendimento em todo o estado de SC</span>
                    </div>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-gray-300 group">
                    <div className="p-2 bg-navy border border-white/10 rounded-full text-gold group-hover:border-gold/50 transition-colors">
                         <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-center md:text-left">
                        <span className="block font-medium text-white">Plantão 24 Horas</span>
                        <span className="text-sm font-light text-gray-400">(88) 99473-7814</span>
                    </div>
                </li>
             </ul>
          </div>

          {/* CTAs & Share */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end justify-center gap-6">
            <div>
                <p className="text-gold text-sm mb-2 font-medium tracking-wide">Precisa de ajuda imediata?</p>
                <a 
                href="https://wa.me/5588994737814?text=Olá,%20Dra.%20Jairane.%20Preciso%20de%20atendimento%20criminal%20urgente."
                className="inline-block bg-gold hover:bg-white text-navy font-bold py-3 px-8 rounded-sm transition-all duration-300 shadow-lg hover:shadow-gold/20 text-sm tracking-wider uppercase transform hover:-translate-y-1"
                >
                    Chamar no WhatsApp
                </a>
            </div>

            <button 
                onClick={handleShare}
                className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm border border-white/10 hover:border-gold/30 px-4 py-2 rounded-sm"
            >
                <Share2 size={16} />
                <span>Compartilhar Contato</span>
            </button>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-light">
          <p>&copy; 2024 Dra. Jairane Santos De Sousa. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>OAB/SC sob sigilo de ética</span>
             <span>|</span>
             <span>Política de Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;