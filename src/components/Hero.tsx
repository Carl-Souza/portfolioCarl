import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Desenvolvedor Frontend';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative tribal-pattern">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neon-gradient">
            Seu Nome
          </h1>
          
          {/* Animated Subtitle */}
          <div className="text-xl md:text-2xl mb-8 h-8 flex items-center justify-center">
            <span className="text-foreground/80 font-mono">
              {displayText}
              <span className="animate-pulse text-neon-cyan">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Criando experiências digitais únicas que fusionam tecnologia avançada 
            com design inovador. Especializado em desenvolvimento frontend moderno 
            e interfaces cybertribais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-neon text-tribal-darker font-semibold rounded-lg hover-glow-cyan transform transition-all duration-300 hover:scale-105"
            >
              Ver Projetos
            </button>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-tribal-darker font-semibold rounded-lg transition-all duration-300"
            >
              Contato
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-neon-cyan" size={32} />
          </div>
        </div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-neon-cyan/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-neon-purple/20 rotate-12 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-neon-green/20 rotate-45 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;