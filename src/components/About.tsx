import { Code, Palette, Zap, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desenvolvimento',
      description: 'React, TypeScript, Next.js e tecnologias modernas',
      color: 'neon-cyan'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design',
      description: 'UI/UX com foco em experiências únicas',
      color: 'neon-purple'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Otimização e best practices',
      color: 'neon-green'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web3',
      description: 'Blockchain e tecnologias descentralizadas',
      color: 'neon-cyan'
    }
  ];

  return (
    <section id="sobre" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neon-gradient">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sou um desenvolvedor apaixonado por criar experiências digitais que 
            transcendem o comum. Combino código limpo com design inovador para 
            construir o futuro da web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-card border border-${skill.color}/20 rounded-lg p-6 hover-glow-${skill.color.split('-')[1]} transform transition-all duration-300 hover:scale-105 tribal-pattern`}
            >
              <div className={`text-${skill.color} mb-4`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bio Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-card border border-neon-purple/20 rounded-lg p-8 tribal-pattern">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-neon-gradient">
                  Minha Jornada
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Começei minha jornada no desenvolvimento há mais de 5 anos, 
                  sempre fascinado pela intersecção entre tecnologia e arte. 
                  Especializo-me em criar interfaces que não apenas funcionam 
                  perfeitamente, mas também contam uma história.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Minha paixão por culturas ancestrais e tecnologia futurista 
                  se reflete em cada projeto, criando uma assinatura visual 
                  única que chamo de "cybertribal".
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-tribal rounded-lg flex items-center justify-center">
                  <div className="text-6xl text-neon-cyan/50">🔮</div>
                </div>
                <div className="absolute inset-0 border-2 border-neon-cyan/30 rounded-lg transform rotate-3"></div>
                <div className="absolute inset-0 border-2 border-neon-purple/30 rounded-lg transform -rotate-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;