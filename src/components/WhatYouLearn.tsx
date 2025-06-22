
import { Zap, Target, Instagram, PenTool } from "lucide-react";

const WhatYouLearn = () => {
  const learningItems = [
    {
      icon: Target,
      title: "Criação de ofertas",
      description: "Aprenda a criar ofertas irresistíveis que convertem"
    },
    {
      icon: Zap,
      title: "Estratégia para tráfego",
      description: "Domine as técnicas para atrair clientes qualificados"
    },
    {
      icon: Instagram,
      title: "Vendas no Instagram",
      description: "Transforme seu Instagram em uma máquina de vendas"
    },
    {
      icon: PenTool,
      title: "Copywriting simples",
      description: "Escreva textos que vendem de forma natural"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
            O que você vai aprender
          </span>
        </h2>
        
        <p className="text-emerald-400 text-xl text-center mb-16 font-semibold">
          Conteúdo prático e direto ao ponto
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {learningItems.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-900/60 border border-emerald-500/20 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] group hover:transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                {item.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
