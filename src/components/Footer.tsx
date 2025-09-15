import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const footerLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:sharanmadhavan@gmail.com',
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sharan-madhavan-dadigela-a63b4a35b/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/SharanMadhavan',
      label: 'GitHub'
    },
   
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Sharan Madhavan Dadigela
              </h3>
              <p className="text-muted-foreground text-sm">
                Java Full Stack Developer specializing in Spring Boot, React, and Cloud deployment.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-primary text-sm text-left transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground">Email:</strong>
                <br />
                <a 
                  href="mailto:sharanmadhavan@gmail.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  sharanmadhavan@gmail.com
                </a>
              </div>
              <div>
                <strong className="text-foreground">Phone:</strong>
                <br />
                <a 
                  href="tel:+918688359854"
                  className="hover:text-primary transition-colors duration-200"
                >
                  +91 86883 59854
                </a>
              </div>
              <div>
                <strong className="text-foreground">Open to:</strong>
                <br />
                New opportunities & collaborations
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Sharan Madhavan Dadigela. All rights reserved.
            </div>
            <div className="text-muted-foreground text-sm">
              Built with React, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;