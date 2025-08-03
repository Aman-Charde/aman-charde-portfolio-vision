import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Code, Sparkles } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      // Update scroll state for navbar styling
      setIsScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/20 shadow-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative p-2 rounded-lg bg-gradient-primary">
              <Code className="w-5 h-5 text-white" />
              <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-primary-glow animate-pulse" />
            </div>
            <span className="text-xl font-bold font-poppins bg-gradient-primary bg-clip-text text-transparent">
              Aman Charde
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-primary transition-all duration-300 ${
                    activeSection === item.href.substring(1) 
                      ? 'w-6 -translate-x-1/2' 
                      : 'w-0 -translate-x-1/2 group-hover:w-6'
                  }`}></span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            {/* <Button 
              variant="outline" 
              className="border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group">
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Resume
            </Button> */}
            <a href="/resume.pdf" 
            download 
            className="border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group rounded-md px-4 py-2 flex items-center text-sm">
            <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Resume
            </a>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground p-2 rounded-lg hover:bg-muted/50 transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-xl border-t border-border/20 rounded-b-lg shadow-elegant">
              {navigationItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 border-t border-border/20">
                <a 
                  href="/resume.pdf" 
                  download 
                  className="w-full flex items-center justify-center border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 rounded-md px-4 py-2 text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;