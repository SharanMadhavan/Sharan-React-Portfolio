import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github, ExternalLink, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real implementation, you would send this to your backend
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sharanmadhavan@gmail.com',
      href: 'mailto:sharanmadhavan@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 86883 59854',
      href: 'tel:+918688359854'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sharan-madhavan-dadigela-a63b4a35b',
      href: 'https://www.linkedin.com/in/sharan-madhavan-dadigela-a63b4a35b/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/SharanMadhavan',
      href: 'https://github.com/SharanMadhavan'
    },
   
  ];

  return (
    <section 
      id="contact" 
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
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to new opportunities and exciting projects. Let's discuss how we can work together 
              to create something amazing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-700 delay-200 ${
              isVisible ? 'slide-in-left visible' : 'slide-in-left'
            }`}>
              <Card className="professional-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Send a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full min-h-[150px]"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:opacity-90 font-semibold py-3"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className={`transition-all duration-700 delay-400 ${
              isVisible ? 'slide-in-right visible' : 'slide-in-right'
            }`}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Get In Touch
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    I'm always interested in hearing about new opportunities, 
                    especially in product-based companies where I can contribute 
                    to innovative solutions and continue growing as a developer.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="professional-card p-4 block hover:bg-primary/5 transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <div className="p-2 bg-primary/10 rounded-lg mr-4">
                          <contact.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">
                            {contact.label}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="professional-card p-6 bg-primary/5">
                  <h4 className="font-semibold text-foreground mb-2">
                    Ready to work together?
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Let's discuss your project requirements and how my expertise 
                    in Java Full Stack development can contribute to your team's success.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      size="sm"
                      className="bg-gradient-primary hover:opacity-90"
                    >
                      <a href="mailto:sharanmadhavan@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Me
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a 
                        href="https://www.linkedin.com/in/sharan-madhavan-dadigela-a63b4a35b/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;