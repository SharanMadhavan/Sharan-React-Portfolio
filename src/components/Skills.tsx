import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Palette } from 'lucide-react';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Java', 'JavaScript'],
      color: 'text-blue-600'
    },
    {
      title: 'Backend Technologies',
      icon: Database,
      skills: ['Spring Framework', 'Spring Boot', 'REST APIs', 'Hibernate', 'JPA', 'MySQL', 'PostgreSQL'],
      color: 'text-green-600'
    },
    {
      title: 'Frontend Technologies',
      icon: Palette,
      skills: ['React.js', 'Redux', 'HTML', 'CSS', 'Bootstrap', 'JSP'],
      color: 'text-purple-600'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['Azure App Services', 'AWS (EC2, S3, RDS)', 'Git', 'GitHub'],
      color: 'text-orange-600'
    }
  ];

  return (
    <section 
      id="skills" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'fade-in visible' : 'fade-in'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & Tech Stack
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across the full development stack, from backend services to frontend interfaces and cloud deployment.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`professional-card p-8 transition-all duration-700 ${
                  isVisible ? 'fade-in visible' : 'fade-in'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-primary/10 mr-4`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 bg-accent hover:bg-primary hover:text-primary-foreground transition-colors duration-200 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Technical Highlights */}
          <div className={`mt-16 text-center transition-all duration-700 delay-600 ${
            isVisible ? 'slide-in-left visible' : 'slide-in-left'
          }`}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="professional-card p-6">
                <div className="text-2xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Test Coverage</p>
              </div>
              <div className="professional-card p-6">
                <div className="text-2xl font-bold text-primary mb-2">30%</div>
                <p className="text-muted-foreground">Performance Improvement</p>
              </div>
              <div className="professional-card p-6">
                <div className="text-2xl font-bold text-primary mb-2">WCAG 2.1</div>
                <p className="text-muted-foreground">Accessibility Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;