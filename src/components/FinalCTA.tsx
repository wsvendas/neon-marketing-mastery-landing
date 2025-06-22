
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-black to-emerald-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Main CTA text */}
        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="bg-gradient-to-r from-emerald-400 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            GARANTA AGORA
          </span>
          <br />
          <span className="text-white">POR APENAS </span>
          <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]">
            R$30
          </span>
        </h2>

        {/* Urgency text */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Oferta por tempo limitado! Não perca a oportunidade de transformar sua vida financeira.
        </p>

        {/* Large CTA Button */}
        <div className="flex justify-center mb-8">
          <a href="https://kiwify.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700 text-white font-bold text-2xl px-16 py-8 rounded-full shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:shadow-[0_0_60px_rgba(16,185,129,0.8)] transition-all duration-300 transform hover:scale-105 border-2 border-emerald-400/50">
              QUERO O CURSO AGORA
            </Button>
          </a>
        </div>

        {/* Security badges */}
        <div className="flex justify-center items-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full" />
            <span>Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full" />
            <span>Garantia de 7 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full" />
            <span>Suporte Incluso</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
