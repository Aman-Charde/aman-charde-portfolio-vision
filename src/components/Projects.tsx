import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, User, Building, Clock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Swasth Bazaar',
      subtitle: 'Trusted Supply Chain for Street Food Vendors',
      role: 'Backend Developer',
      duration: '3 Months',
      organization: 'Personal Project',
      description: 'A comprehensive digital platform that connects street food vendors with verified suppliers. The system includes AI-powered price predictions, multilingual support for accessibility, and a community review system to ensure quality and trust.',
      features: [
        'AI-powered price prediction system',
        'Multilingual support for vendors',
        'Community review and rating system',
        'Verified supplier network',
        'Real-time inventory management',
        'Digital payment integration'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Machine Learning', 'RESTful APIs'],
      highlights: [
        'Implemented secure authentication system',
        'Designed scalable database architecture',
        'Built AI model for price predictions',
        'Created comprehensive API documentation'
      ],
      type: 'Full Stack',
      status: 'Completed'
    },
    {
      title: 'Parking Management System',
      subtitle: 'Smart Parking Solution with Real-time Monitoring',
      role: 'Frontend Developer',
      duration: '25 Days (120 hours)',
      organization: 'Acropolis Institute of Technology and Research',
      description: 'An automated parking management system that provides real-time monitoring of parking spaces, digital payment processing, and user-friendly interface for both administrators and customers.',
      features: [
        'Real-time parking space monitoring',
        'Digital payment integration',
        'User registration and authentication',
        'Admin dashboard for management',
        'Automated entry/exit system',
        'Mobile-responsive design'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage', 'Responsive Design'],
      highlights: [
        'Designed intuitive user interface',
        'Implemented responsive design',
        'Created interactive dashboard',
        'Optimized for mobile devices'
      ],
      type: 'Frontend',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
            Showcasing my development skills through real-world applications
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Project Info */}
                <div className="lg:col-span-2">
                  <CardHeader className="pb-4">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <CardTitle className="text-2xl font-poppins mb-2">{project.title}</CardTitle>
                        <p className="text-lg text-muted-foreground font-inter">{project.subtitle}</p>
                      </div>
                      <Badge 
                        variant="outline" 
                        className="border-primary/20 text-primary bg-primary/10"
                      >
                        {project.type}
                      </Badge>
                    </div>
                    
                    {/* Project Metadata */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-tech-blue" />
                        <span className="text-muted-foreground">Role:</span>
                        <span className="font-medium">{project.role}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-tech-purple" />
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <Building className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Organization:</span>
                        <span className="font-medium">{project.organization}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold font-poppins mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground font-inter">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold font-poppins mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="bg-muted/50 text-foreground font-inter"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>

                {/* Project Highlights & Actions */}
                <div className="lg:col-span-1 bg-muted/30 p-8">
                  <div className="space-y-6">
                    {/* Project Highlights */}
                    <div>
                      <h4 className="font-semibold font-poppins mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Project Highlights
                      </h4>
                      <div className="space-y-3">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground font-inter leading-relaxed">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Status */}
                    <div>
                      <h4 className="font-semibold font-poppins mb-2">Status</h4>
                      <Badge 
                        variant={project.status === 'Completed' ? 'default' : 'secondary'}
                        className="font-inter"
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-4">
                      <Button 
                        variant="outline" 
                        className="w-full border-primary/20 hover:bg-primary/10"
                        disabled
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-primary/20 hover:bg-primary/10"
                        disabled
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <p className="text-xs text-muted-foreground text-center font-inter">
                        Repository access available upon request
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="shadow-elegant bg-gradient-hero border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold font-poppins mb-4">
                Interested in my work?
              </h3>
              <p className="text-muted-foreground font-inter mb-6">
                I'm always excited to discuss new opportunities and collaborate on innovative projects.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;