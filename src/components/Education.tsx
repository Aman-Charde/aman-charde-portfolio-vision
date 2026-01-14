import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science (CSE)',
      institution: 'Acropolis Institute of Technology and Research, Indore',
      university: 'RGTU Bhopal',
      duration: '2022 – 2026',
      grade: '75.5%',
      status: 'Currently Pursuing',
      icon: GraduationCap,
      color: 'tech-blue'
    },
    {
      degree: 'Higher Secondary Certificate (Class 12th)',
      institution: 'RD Public School',
      university: 'CBSE',
      duration: '2022',
      grade: '79%',
      status: 'Completed',
      icon: Award,
      color: 'tech-purple'
    },
    {
      degree: 'Secondary School Certificate (Class 10th)',
      institution: 'RD Public School',
      university: 'CBSE',
      duration: '2020',
      grade: '72.3%',
      status: 'Completed',
      icon: Award,
      color: 'primary'
    }
  ];

  const certifications = [
    {
      name: 'AWS Academy Cloud Practitioner',
      provider: 'AWS Academy Graduate',
      specialization: 'Cloud',
      organization: 'Amazon Web Services'
    },
    {
      name: 'NPTEL Certification',
      provider: 'NPTEL',
      specialization: 'Database Management Systems',
      organization: 'IIT'
    },
    {
      name: 'TechSaksham Certification Program',
      provider: 'Microsoft & SAP',
      specialization: 'MERN Development',
      organization: 'Edunate Foundation'
    }
  ];

  return (
    <section id="education" className="py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
            My academic journey and professional certifications
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold font-poppins mb-8 text-center">Academic Background</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <Card className="md:ml-16 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-${edu.color}/10`}>
                            <edu.icon className={`w-5 h-5 text-${edu.color}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg font-poppins">{edu.degree}</h4>
                            <p className="text-muted-foreground font-inter">{edu.institution}</p>
                            {edu.university && (
                              <p className="text-sm text-muted-foreground font-inter">({edu.university})</p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2">
                          <Badge 
                            variant={edu.status === 'Currently Pursuing' ? 'default' : 'secondary'}
                            className="font-inter"
                          >
                            {edu.status}
                          </Badge>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-primary font-poppins">
                          {edu.grade}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold font-poppins mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold font-poppins text-sm leading-tight mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground font-inter mb-1">
                        by {cert.provider}
                      </p>
                      {cert.organization && (
                        <p className="text-xs text-muted-foreground font-inter">
                          {cert.organization}
                        </p>
                      )}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                    {cert.specialization}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;