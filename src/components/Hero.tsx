
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-emerald-900/20" />
      
      {/* Neon grid background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Main title with glow effect */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-emerald-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
            🔥 Domine o Marketing Digital
          </span>
          <br />
          <span className="text-white drop-shadow-[0_0_30px_rgba(0,255,0,0.5)]">
            e Comece a Vender 
            <span className="text-emerald-400 font-extrabold"> HOJE!</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Um curso direto ao ponto, com tudo o que você precisa pra vender online por um preço que cabe no seu bolso.
        </p>

        {/* Red Neon Arrow pointing down */}
        <div className="flex justify-center">
          <div className="animate-bounce">
            <ArrowDown 
              size={60} 
              className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] hover:drop-shadow-[0_0_30px_rgba(239,68,68,1)] transition-all duration-300 cursor-pointer"
              style={{
                filter: 'drop-shadow(0 0 10px #ef4444) drop-shadow(0 0 20px #ef4444) drop-shadow(0 0 30px #ef4444)'
              }}
            />
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-emerald-400 rounded-full animate-pulse opacity-80" />
      </div>
    </section>
  );
};

export default Hero;
