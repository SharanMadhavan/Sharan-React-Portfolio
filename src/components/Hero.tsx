import { Button } from '@/components/ui/button';
import { Github, Linkedin, ExternalLink, Download } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = () => {
    // In a real implementation, you would host the PDF file
    window.open('/Sharan_Madhavan_Resume.pdf', '_blank');
  };

  return (
    <section 
      id="hero" 
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden pt-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 delay-200 ${
          isVisible ? 'fade-in visible' : 'fade-in'
        }`}>
          {/* Professional Title */}
          <div className="mb-6">
            <p className="text-primary font-medium text-lg mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Sharan Madhavan Dadigela
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient mb-6">
              Java Full Stack Developer
            </h2>
          </div>

          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Designing and building scalable applications with Spring Boot, React, and Cloud deployment expertise. 
            Experienced in delivering high-quality solutions for global clients at TCS.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-400 ${
            isVisible ? 'slide-in-left visible' : 'slide-in-left'
          }`}>
            <Button 
              size="lg"
              onClick={() => scrollToSection('experience')}
              className="bg-gradient-primary hover:opacity-90 font-semibold px-8 py-3 text-base"
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleDownloadResume}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 text-base"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center space-x-6 transition-all duration-700 delay-600 ${
            isVisible ? 'slide-in-right visible' : 'slide-in-right'
          }`}>
            <a
              href="https://www.linkedin.com/in/sharan-madhavan-dadigela-a63b4a35b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-card-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover-lift"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/SharanMadhavan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-card-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover-lift"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
           
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;