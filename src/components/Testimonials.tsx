
const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Em apenas 2 semanas já estava vendendo todos os dias! O curso é incrível e muito didático.",
      role: "Empreendedora Digital"
    },
    {
      name: "João Santos", 
      text: "Finalmente entendi como funciona o marketing digital. Meu faturamento triplicou em 30 dias!",
      role: "Consultor"
    },
    {
      name: "Ana Costa",
      text: "O melhor investimento que já fiz! Método simples e que realmente funciona.",
      role: "Coach"
    }
  ];

  return (
    <section className="py-20 bg-black relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1),transparent)] opacity-50" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-white">O que nossos </span>
          <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
            alunos dizem
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black border-2 border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] group"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              {/* Testimonial text */}
              <p className="text-gray-300 text-lg mb-6 leading-relaxed text-center">
                "{testimonial.text}"
              </p>

              {/* Name and role */}
              <div className="text-center">
                <p className="text-white font-bold text-xl mb-1">{testimonial.name}</p>
                <p className="text-emerald-400 font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
