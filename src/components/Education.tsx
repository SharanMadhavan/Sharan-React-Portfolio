import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="education" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'fade-in visible' : 'fade-in'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strong engineering foundation with comprehensive technical education from a premier institution.
            </p>
          </div>

          {/* Education Card */}
          <div className={`professional-card p-8 transition-all duration-700 delay-200 ${
            isVisible ? 'slide-in-left visible' : 'slide-in-left'
          }`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              {/* Education Details */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Bachelor of Technology (B.Tech)
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      Mechanical Engineering
                    </p>
                  </div>
                </div>
                
                <div className="ml-14">
                  <h4 className="text-lg font-medium text-foreground mb-3">
                    Rajiv Gandhi University of Knowledge Technologies (RGUKT)
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground space-y-2 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Basar, Telangana
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      2019 – 2023
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-6 lg:mt-0 lg:ml-8">
                <div className="text-center professional-card p-4 bg-primary/5">
                  <div className="text-lg font-semibold text-primary mb-1">4 Years</div>
                  <div className="text-sm text-muted-foreground">Engineering Degree</div>
                </div>
              </div>
            </div>

            {/* Educational Highlights */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Academic Background:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-foreground mb-2">Core Engineering Skills</h5>
                  <p className="text-muted-foreground text-sm">
                    Strong foundation in engineering principles, problem-solving methodologies, 
                    and analytical thinking that translates effectively to software development.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-2">Technical Transition</h5>
                  <p className="text-muted-foreground text-sm">
                    Successfully transitioned from mechanical engineering to software development, 
                    leveraging engineering discipline and systematic approach in programming.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Institution Highlight */}
          <div className={`mt-8 text-center transition-all duration-700 delay-400 ${
            isVisible ? 'fade-in visible' : 'fade-in'
          }`}>
            <div className="professional-card p-6 bg-primary/5">
              <h4 className="font-semibold text-foreground mb-2">About RGUKT</h4>
              <p className="text-muted-foreground">
                Rajiv Gandhi University of Knowledge Technologies is a premier institution in Telangana, 
                known for its integrated education model and focus on producing skilled engineers for 
                various industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;