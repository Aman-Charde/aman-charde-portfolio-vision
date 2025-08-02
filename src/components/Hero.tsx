import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/aman-hero.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-tech-blue/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-tech-purple/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-tech-blue font-medium font-inter tracking-wide uppercase text-sm">
                Computer Science Student
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Aman Charde
                </span>
              </h1>
              <p className="text-xl text-muted-foreground font-inter max-w-lg mx-auto lg:mx-0">
                Passionate about creating innovative solutions through code and technology
              </p>
            </div>

            {/* Location & Contact */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-tech-blue" />
                <span>Indore, Madhya Pradesh</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-tech-purple" />
                <span>amancharde8989@gmail.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium shadow-glow"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:bg-primary/10"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/Aman-Charde" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors duration-200 group shadow-elegant"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aman-charde-727303258/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors duration-200 group shadow-elegant"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:amancharde8989@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors duration-200 group shadow-elegant"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                <img 
                  src={heroImage} 
                  alt="Aman Charde" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-tech-blue/20 rounded-full animate-glow-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-tech-purple/20 rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-card/50 hover:bg-card transition-colors duration-200"
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;