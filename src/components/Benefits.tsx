
import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Aprenda a criar Funil de Vendas",
    "Descubra como vender todos os dias", 
    "Acesso imediato e vitalício"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.1),transparent)] opacity-50" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Por que escolher nosso curso?
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 border border-emerald-500/30 rounded-2xl p-8 text-center hover:border-emerald-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-8 h-8 text-white" />
                </div>
              </div>
              <p className="text-xl text-white font-semibold leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
