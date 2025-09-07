import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você implementaria o envio do formulário
    alert('Mensagem enviada! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail size={24} />,
      href: 'mailto:seu@email.com',
      color: 'neon-cyan'
    },
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      href: 'https://github.com/seuusuario',
      color: 'neon-purple'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      href: 'https://linkedin.com/in/seuusuario',
      color: 'neon-green'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      href: 'https://twitter.com/seuusuario',
      color: 'neon-cyan'
    }
  ];

  return (
    <section id="contato" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neon-gradient">
            Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pronto para criar algo extraordinário? Vamos conversar sobre seu próximo projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-neon-cyan/20 rounded-lg p-8 tribal-pattern">
            <h3 className="text-2xl font-bold mb-6 text-neon-gradient">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-neon-cyan/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent text-foreground placeholder-muted-foreground"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-neon-cyan/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent text-foreground placeholder-muted-foreground"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-neon-cyan/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-neon text-tribal-darker font-semibold rounded-lg hover-glow-cyan transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card border border-neon-purple/20 rounded-lg p-8 tribal-pattern">
              <h3 className="text-2xl font-bold mb-6 text-neon-gradient">
                Conecte-se
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Siga-me nas redes sociais para acompanhar meus projetos e 
                insights sobre desenvolvimento frontend e tecnologias emergentes.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 bg-${link.color}/10 border border-${link.color}/20 rounded-lg hover-glow-${link.color.split('-')[1]} transition-all duration-300 hover:scale-105`}
                  >
                    <div className={`text-${link.color}`}>
                      {link.icon}
                    </div>
                    <span className="text-foreground font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card border border-neon-green/20 rounded-lg p-8 tribal-pattern">
              <h3 className="text-xl font-bold mb-4 text-neon-gradient">
                Disponibilidade
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-foreground">Disponível para freelance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></div>
                  <span className="text-foreground">Projetos de longo prazo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse"></div>
                  <span className="text-foreground">Consultoria técnica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;