const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tribal-darker border-t border-neon-cyan/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-neon-gradient font-bold text-xl mb-4 md:mb-0">
            Portfolio Cybertribal
          </div>
          
          <div className="text-muted-foreground text-sm">
            © {currentYear} Todos os direitos reservados. Feito com 
            <span className="text-neon-cyan mx-1">❤️</span>
            e muito <span className="text-neon-purple">código</span>.
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-neon-purple/20 text-center">
          <p className="text-xs text-muted-foreground">
            "O futuro pertence àqueles que veem possibilidades antes delas se tornarem óbvias."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;