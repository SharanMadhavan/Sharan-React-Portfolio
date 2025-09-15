import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: 'Assistant System Engineer - Java Developer',
      company: 'Tata Consultancy Services',
      client: 'Mars Wrigley (Aprimo DAM)',
      location: 'Hyderabad, India',
      period: 'March 2025 – Present',
      responsibilities: [
        'Configured and managed user groups and permissions in Aprimo DAM for a global food and snacking client, ensuring secure and role-based access to digital assets',
        'Implemented access control strategies that improved governance and reduced content management errors',
        'Developed unit tests and maintained high-quality code with 98% test coverage, supporting long-term maintainability',
        'Deployed Spring Boot JARs on Azure App Services and managed testing across dev, test, and prod environments',
        'Monitored performance and resolved issues using advanced diagnostics and logging tools available in Azure'
      ],
      technologies: ['Java', 'Spring Boot', 'Azure App Services', 'Aprimo DAM', 'Unit Testing']
    },
    {
      title: 'Assistant System Engineer - Java Full Stack Developer',
      company: 'Tata Consultancy Services',
      client: 'Improvement Services, Scotland',
      location: 'Ahmedabad, India',
      period: 'Nov 2023 – Feb 2025',
      responsibilities: [
        'Worked on backend modules using Java and Spring Boot to build secure and reliable services',
        'Developed frontend components with React.js, ensuring smooth and responsive user interactions while maintaining WCAG 2.1 accessibility standards',
        'Created and maintained REST APIs, focusing on making them efficient and easy to use',
        'Automated data retention tasks with scheduled jobs, which helped improve MySQL query performance by about 30%',
        'Collaborated closely with QA to validate functionality and ensure regulatory compliance'
      ],
      technologies: ['Java', 'Spring Boot', 'React.js', 'REST APIs', 'MySQL', 'WCAG 2.1']
    }
  ];

  return (
    <section 
      id="experience" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'fade-in visible' : 'fade-in'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering high-quality solutions for global clients at Tata Consultancy Services with expertise in full-stack development and cloud deployment.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`professional-card p-8 transition-all duration-700 ${
                  isVisible ? 'slide-in-left visible' : 'slide-in-left'
                }`}
                style={{ transitionDelay: `${200 + index * 200}ms` }}
              >
                {/* Experience Header */}
                <div className="mb-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-primary font-medium mb-2">
                        <Building2 className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="text-muted-foreground font-medium mb-2">
                        Client: {exp.client}
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end text-sm text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Key Achievements & Responsibilities:</h4>
                  <div className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Summary Stats */}
          <div className={`mt-16 transition-all duration-700 delay-600 ${
            isVisible ? 'fade-in visible' : 'fade-in'
          }`}>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center professional-card p-6">
                <div className="text-2xl font-bold text-primary mb-1">2+</div>
                <div className="text-sm text-muted-foreground">Years at TCS</div>
              </div>
              <div className="text-center professional-card p-6">
                <div className="text-2xl font-bold text-primary mb-1">Global</div>
                <div className="text-sm text-muted-foreground">Client Portfolio</div>
              </div>
              <div className="text-center professional-card p-6">
                <div className="text-2xl font-bold text-primary mb-1">Full Stack</div>
                <div className="text-sm text-muted-foreground">Development</div>
              </div>
              <div className="text-center professional-card p-6">
                <div className="text-2xl font-bold text-primary mb-1">Cloud</div>
                <div className="text-sm text-muted-foreground">Deployment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;