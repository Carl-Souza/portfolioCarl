import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CyberDash',
      description: 'Dashboard futurista para análise de dados blockchain com visualizações interativas em tempo real.',
      image: '🌐',
      tags: ['React', 'TypeScript', 'D3.js', 'Web3'],
      liveUrl: '#',
      githubUrl: '#',
      glowColor: 'cyan'
    },
    {
      title: 'TribalNFT',
      description: 'Marketplace de NFTs com design tribal-futurista e contratos inteligentes otimizados.',
      image: '🎨',
      tags: ['Next.js', 'Solidity', 'IPFS', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      glowColor: 'purple'
    },
    {
      title: 'NeonChat',
      description: 'Aplicação de chat em tempo real com criptografia end-to-end e interface cyberpunk.',
      image: '💬',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      glowColor: 'green'
    },
    {
      title: 'MetaVerse Portal',
      description: 'Portal 3D interativo para navegação em mundos virtuais com WebGL e Three.js.',
      image: '🌌',
      tags: ['Three.js', 'WebGL', 'React', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      glowColor: 'cyan'
    },
    {
      title: 'CryptoTracker',
      description: 'Rastreador de criptomoedas com alertas inteligentes e análise técnica avançada.',
      image: '📊',
      tags: ['Vue.js', 'Chart.js', 'Express', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      glowColor: 'purple'
    },
    {
      title: 'AI Art Generator',
      description: 'Gerador de arte com IA que combina padrões tribais com elementos futuristas.',
      image: '🤖',
      tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      glowColor: 'green'
    }
  ];

  return (
    <section id="projetos" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neon-gradient">
            Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma coleção de projetos que demonstram minha paixão por tecnologia 
            de ponta e design inovador. Cada projeto conta uma história única.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-card border border-neon-${project.glowColor}/20 rounded-lg overflow-hidden hover-glow-${project.glowColor} transform transition-all duration-500 hover:scale-105 tribal-pattern`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-tribal flex items-center justify-center overflow-hidden">
                <div className="text-6xl opacity-50">{project.image}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-tribal-darker via-transparent to-transparent"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-tribal-darker/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className={`p-3 bg-neon-${project.glowColor} text-tribal-darker rounded-full hover:scale-110 transition-transform duration-200`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className={`p-3 bg-neon-${project.glowColor} text-tribal-darker rounded-full hover:scale-110 transition-transform duration-200`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className={`p-3 bg-neon-${project.glowColor} text-tribal-darker rounded-full hover:scale-110 transition-transform duration-200`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-neon-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-xs font-medium bg-neon-${project.glowColor}/10 text-neon-${project.glowColor} border border-neon-${project.glowColor}/20 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Gostou do que viu? Vamos criar algo incrível juntos!
          </p>
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-neon text-tribal-darker font-semibold rounded-lg hover-glow-cyan transform transition-all duration-300 hover:scale-105"
          >
            Iniciar Projeto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;