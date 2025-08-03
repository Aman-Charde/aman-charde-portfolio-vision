import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Aman-Charde',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aman-charde-727303258/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:amancharde8989@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border/20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-poppins mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Aman Charde
            </h3>
            <p className="text-muted-foreground font-inter">
              Computer Science Student & Aspiring Full Stack Developer
            </p>
          </div>

          

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold font-poppins mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <button
              onClick={scrollToTop}
              className="text-primary hover:text-primary/80 transition-colors font-inter text-sm">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;