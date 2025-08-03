import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/aman-hero.jpg';

import lightImage from '@/assets/aman-light.png';
import darkImage from '@/assets/aman-dark.png';


const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-hero transition-colors duration-300"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-tech-blue/10 dark:bg-tech-blue/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-tech-purple/10 dark:bg-tech-purple/5 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary/5 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content - Left Side */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/5 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <p className="text-primary font-medium font-inter tracking-wide text-sm">
                  Computer Science Student
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent inline-block">
                  Aman Charde
                </span>
              </h1>
              <div className="space-y-3">
                <p className="text-xl sm:text-2xl text-muted-foreground font-inter max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Passionate about creating innovative solutions through{' '}
                  <span className="text-primary font-semibold">code</span> and{' '}
                  <span className="text-primary font-semibold">technology</span>
                </p>
              </div>
            </div>

            {/* Location & Contact */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/50 dark:bg-card/20 border border-border/20">
                <MapPin className="w-4 h-4 text-tech-blue" />
                <span className="text-muted-foreground">Indore, Madhya Pradesh</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/50 dark:bg-card/20 border border-border/20">
                <Mail className="w-4 h-4 text-tech-purple" />
                <span className="text-muted-foreground">Available for opportunities</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium shadow-glow hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm"
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
                className="p-3 rounded-full bg-card/80 dark:bg-card/20 hover:bg-primary/10 border border-border/20 hover:border-primary/40 transition-all duration-300 group shadow-elegant hover:shadow-glow"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aman-charde-727303258/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/80 dark:bg-card/20 hover:bg-primary/10 border border-border/20 hover:border-primary/40 transition-all duration-300 group shadow-elegant hover:shadow-glow"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:amancharde8989@gmail.com"
                className="p-3 rounded-full bg-card/80 dark:bg-card/20 hover:bg-primary/10 border border-border/20 hover:border-primary/40 transition-all duration-300 group shadow-elegant hover:shadow-glow"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right order-first lg:order-last">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-glow border-4 border-primary/20 dark:border-primary/10 bg-gradient-primary p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-background dark:bg-card">
                  <>
                  {/* Light Mode Image */}
                    <img
                      src={lightImage}
                      alt="Aman Charde - Light Mode"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 dark:hidden"
                    />

                    {/* Dark Mode Image */}
                    <img
                      src={darkImage}
                      alt="Aman Charde - Dark Mode"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 hidden dark:block"
                    />
                  </>

                </div>
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-tech-blue/20 dark:bg-tech-blue/10 rounded-2xl animate-glow-pulse backdrop-blur-sm border border-tech-blue/30"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-tech-purple/20 dark:bg-tech-purple/10 rounded-xl animate-glow-pulse backdrop-blur-sm border border-tech-purple/30" style={{ animationDelay: '1s' }}></div>
              
              {/* Status Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background dark:bg-card border border-border/20 rounded-full px-4 py-2 shadow-elegant">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-muted-foreground">Available for work</span>
                </div>
              </div>
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