import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'fade-in visible' : 'fade-in'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 delay-200 ${
            isVisible ? 'slide-in-left visible' : 'slide-in-left'
          }`}>
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Motivated Java Full Stack Developer with a strong background in designing and developing 
                scalable web applications using Spring Boot, REST APIs, MySQL, and React.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proficient in deploying and managing applications on Azure and AWS with a focus on 
                performance, security, and scalability. Currently contributing to impactful solutions 
                at Tata Consultancy Services for global clients including Mars Wrigley and 
                Improvement Services Scotland.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seeking dynamic, product-based opportunities to deepen technical expertise, 
                contribute to innovative solutions, and drive excellence in cloud-native 
                development environments.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-card border border-card-border rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card border border-card-border rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">2+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
              </div>
            </div>

            {/* Professional Highlights */}
            <div className={`space-y-4 transition-all duration-700 delay-400 ${
              isVisible ? 'slide-in-right visible' : 'slide-in-right'
            }`}>
              <div className="professional-card p-6">
                <h3 className="font-semibold text-foreground mb-3">Current Role</h3>
                <p className="text-muted-foreground mb-2">Assistant System Engineer at TCS</p>
                <p className="text-sm text-muted-foreground">
                  Working with global clients on enterprise-level applications using Java, Spring Boot, and React
                </p>
              </div>

              <div className="professional-card p-6">
                <h3 className="font-semibold text-foreground mb-3">Specialization</h3>
                <p className="text-muted-foreground mb-2">Full Stack Development</p>
                <p className="text-sm text-muted-foreground">
                  Backend with Spring Boot, Frontend with React, Cloud deployment on Azure & AWS
                </p>
              </div>

              <div className="professional-card p-6">
                <h3 className="font-semibold text-foreground mb-3">Focus Areas</h3>
                <p className="text-muted-foreground mb-2">Performance & Scalability</p>
                <p className="text-sm text-muted-foreground">
                  Building secure, high-performance applications with 98% test coverage and optimized queries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;