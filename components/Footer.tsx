import React, { useState } from 'react';
import { Instagram, MapPin, Phone, Share2, X, Scale } from 'lucide-react';

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  
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
    <>
      <footer id="contato" className="bg-navy-dark pt-20 pb-10 border-t border-gold/10 relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl bg-gold/5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Brand */}
            <div className="text-center md:text-left space-y-6" data-aos="fade-right">
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
                  <div className="p-2 border border-gold/30 rounded-full group-hover:bg-gold group-hover:text-navy transition-all duration-300 transform group-hover:rotate-12">
                      <Instagram size={18} />
                  </div>
                  <span className="font-medium text-sm">@jairanesousamendes</span>
                  </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left" data-aos="fade-up" data-aos-delay="200">
               <h3 className="text-white font-bold uppercase tracking-[0.2em] mb-8 text-xs border-b border-gold/20 pb-2 inline-block md:block">Canais de Atendimento</h3>
               <ul className="space-y-6">
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-gray-300 group hover:translate-x-1 transition-transform">
                      <div className="p-2 bg-navy border border-white/10 rounded-full text-gold group-hover:border-gold/50 transition-colors">
                          <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-center md:text-left">
                          <span className="block font-medium text-white">Escritório Brusque</span>
                          <span className="text-sm font-light text-gray-400">Atendimento em todo o estado de SC</span>
                      </div>
                  </li>
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-gray-300 group hover:translate-x-1 transition-transform">
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
            <div className="text-center md:text-right flex flex-col items-center md:items-end justify-center gap-6" data-aos="fade-left" data-aos-delay="400">
              <div>
                  <p className="text-gold text-sm mb-2 font-medium tracking-wide">Precisa de ajuda imediata?</p>
                  <a 
                  href="https://api.whatsapp.com/send?phone=5588994737814&text=Ol%C3%A1%2C%20Dra.%20Jairane.%20Preciso%20de%20atendimento%20criminal%20urgente."
                  target="_blank"
                  rel="noopener noreferrer"
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
            <p className="hover:text-gray-400 transition-colors cursor-default">
                &copy; 2026 Dra. Jairane Santos De Sousa. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0 items-center">
               <span className="flex items-center gap-1 cursor-help hover:text-gold transition-colors" title="Inscrição na Ordem dos Advogados do Brasil">
                   <Scale size={12} /> OAB/SC sob sigilo de ética
               </span>
               <span>|</span>
               <button 
                   onClick={() => setShowPrivacy(true)}
                   className="hover:text-gold transition-colors underline decoration-gold/30 hover:decoration-gold underline-offset-4 cursor-pointer"
               >
                   Política de Privacidade
               </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal de Política de Privacidade */}
      {showPrivacy && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/90 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setShowPrivacy(false)}>
              <div 
                  className="bg-[#0a192f] border border-gold/20 p-8 max-w-lg w-full rounded-sm relative shadow-2xl animate-in zoom-in-95 duration-300"
                  onClick={e => e.stopPropagation()}
              >
                  <button onClick={() => setShowPrivacy(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                      <X size={24} />
                  </button>
                  
                  <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                       <Scale className="text-gold w-6 h-6" />
                       <h3 className="text-xl font-serif font-bold text-white">Política de Privacidade</h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-300 text-sm font-light leading-relaxed max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                      <p>
                          <strong>1. Compromisso com o Sigilo:</strong> A Dra. Jairane Sousa preza pela absoluta confidencialidade dos dados de seus clientes, em estrita observância ao Código de Ética e Disciplina da OAB.
                      </p>
                      <p>
                          <strong>2. Tratamento de Dados (LGPD):</strong> Este site coleta apenas dados fornecidos voluntariamente através de links de contato (WhatsApp/E-mail) para fins exclusivos de atendimento jurídico. Nenhuma informação é vendida ou compartilhada com terceiros para fins comerciais.
                      </p>
                      <p>
                          <strong>3. Segurança:</strong> Utilizamos protocolos de segurança padrão para proteger sua navegação. No entanto, o envio de informações via internet sempre envolve riscos, sendo recomendável não compartilhar detalhes sensíveis de processos em redes abertas.
                      </p>
                      <p>
                          <strong>4. Direitos Autorais:</strong> Todo o conteúdo visual e textual deste site é de propriedade exclusiva do escritório, protegido pela Lei de Direitos Autorais.
                      </p>
                  </div>

                  <button 
                      onClick={() => setShowPrivacy(false)} 
                      className="mt-8 w-full bg-gold text-navy font-bold py-3 rounded-sm hover:bg-white transition-all duration-300 uppercase tracking-widest text-xs"
                  >
                      Compreendido
                  </button>
              </div>
          </div>
      )}
    </>
  );
};

export default Footer;