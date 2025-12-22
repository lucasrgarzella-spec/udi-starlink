import React from 'react';
import { Wifi, CloudLightning, ShieldCheck, Globe2, Gamepad2, Settings } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Wifi className="h-8 w-8 text-cyan-400" />,
      title: "Baixa Latência",
      description: "Latência em torno de 20ms, ideal para chamadas de vídeo e jogos online em tempo real."
    },
    {
      icon: <CloudLightning className="h-8 w-8 text-cyan-400" />,
      title: "Fácil Instalação",
      description: "O kit chega pronto para uso. Basta apontar para o céu e conectar na tomada. Configuração via App."
    },
    {
      icon: <Globe2 className="h-8 w-8 text-cyan-400" />,
      title: "Cobertura Global",
      description: "Disponível em áreas rurais e remotas onde a infraestrutura tradicional não chega."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-cyan-400" />,
      title: "Resistente ao Clima",
      description: "Projetado para suportar frio extremo, calor, chuva, neve e ventos fortes."
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-cyan-400" />,
      title: "Streaming e Jogos",
      description: "Largura de banda suficiente para streaming em 4K e jogos competitivos sem lag."
    },
    {
      icon: <Settings className="h-8 w-8 text-cyan-400" />,
      title: "Gerenciamento Total",
      description: "Controle sua rede, veja dispositivos conectados e verifique a velocidade pelo aplicativo."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Engenharia Espacial na sua Casa</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tecnologia desenvolvida para o espaço, otimizada para o seu dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <div className="bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};