import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink, Calendar, Shield } from 'lucide-react';

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="certifications" 
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
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications validating expertise in cloud technologies and industry best practices.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="space-y-8">
            {/* AWS Certification */}
            <div className={`professional-card p-8 transition-all duration-700 delay-200 ${
              isVisible ? 'slide-in-left visible' : 'slide-in-left'
            }`}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-orange-100 rounded-lg mr-4">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        AWS Certified Cloud Practitioner
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        Amazon Web Services (AWS)
                      </p>
                    </div>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Issued: May 2025</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-success" />
                      <span className="text-success font-medium">Verified Credential</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        Cloud Computing
                      </Badge>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        AWS Services
                      </Badge>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        Cloud Security
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:ml-8">
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a
                      href="https://www.credly.com/badges/4fe46c3b-6a76-40b2-94bc-99df3334057d/linked_in_profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Credential
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Google Cloud Generative AI Certification */}
            <div className={`professional-card p-8 transition-all duration-700 delay-300 ${
              isVisible ? 'slide-in-left visible' : 'slide-in-left'
            }`}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Generative AI Leader Certification
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        Google Cloud
                      </p>
                    </div>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Issued: July 2025</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-success" />
                      <span className="text-success font-medium">Verified Credential</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Generative AI
                      </Badge>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Machine Learning
                      </Badge>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        AI Strategy
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:ml-8">
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a
                      href="https://www.credly.com/badges/e2aa3ecf-dc82-45b6-ad92-53b48e868166/linked_in_profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Credential
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Microsoft GitHub Copilot Certification */}
            <div className={`professional-card p-8 transition-all duration-700 delay-400 ${
              isVisible ? 'slide-in-left visible' : 'slide-in-left'
            }`}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-100 rounded-lg mr-4">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        GitHub Copilot
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        Microsoft
                      </p>
                    </div>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Issued: August 2025</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-success" />
                      <span className="text-success font-medium">Verified Credential</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        AI-Powered Development
                      </Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        GitHub
                      </Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Developer Tools
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:ml-8">
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a
                      href="https://learn.microsoft.com/en-us/users/sharanmadhavandadigela-9030/credentials/28e5285007f7eb69"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Credential
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Future Certifications */}
          <div className={`mt-8 text-center transition-all duration-700 delay-400 ${
            isVisible ? 'fade-in visible' : 'fade-in'
          }`}>
            <div className="professional-card p-6 bg-primary/5">
              <h4 className="font-semibold text-foreground mb-2">Continuous Learning</h4>
              <p className="text-muted-foreground">
                Committed to staying current with industry trends and expanding certification portfolio 
                in cloud technologies, DevOps practices, and advanced development frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;