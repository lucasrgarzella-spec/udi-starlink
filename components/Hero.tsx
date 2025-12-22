import React from 'react';
import { ArrowRight, Wifi } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          /* TODO: Substitua a URL abaixo pela imagem de fundo desejada */
          src="https://picsum.photos/seed/starlinkspace/1920/1080"
          alt="Space Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-1.5 mb-8 border border-slate-700 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 text-xs font-semibold uppercase tracking-wider">Disponível no Brasil</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Internet de Alta Velocidade<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Onde Quer Que Você Esteja
            </span>
          </h1>

          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Conecte-se com o mundo através da constelação de satélites mais avançada do planeta. 
            Streaming, jogos online e videochamadas em locais remotos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection(SectionId.PRODUCTS)}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded font-bold hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Ver Equipamentos
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scrollToSection(SectionId.FEATURES)}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded font-bold hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <Wifi className="h-5 w-5" />
              Testar Velocidade
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};