import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Server, Globe, Brain, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'tech-blue',
      skills: [
        { name: 'C++', level: 85, description: 'Object-oriented programming and algorithms' },
        { name: 'JavaScript', level: 80, description: 'ES6+, DOM manipulation, async programming' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'tech-purple',
      skills: [
        { name: 'HTML5', level: 90, description: 'Semantic markup and accessibility' },
        { name: 'CSS3', level: 85, description: 'Flexbox, Grid, animations, responsive design' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'primary',
      skills: [
        { name: 'Node.js', level: 75, description: 'Server-side JavaScript and APIs' },
        { name: 'Express.js', level: 80, description: 'RESTful APIs and middleware' }
      ]
    },
    {
      title: 'Database Management',
      icon: Database,
      color: 'tech-blue',
      skills: [
        { name: 'MongoDB', level: 75, description: 'NoSQL database and aggregation' },
        { name: 'MySQL', level: 70, description: 'Relational database design and queries' }
      ]
    }
  ];

  const additionalSkills = [
    'Git & Version Control',
    'RESTful API Design',
    'Problem Solving',
    'Data Structures & Algorithms',
    'Responsive Web Design',
    'Agile Development',
    'Team Collaboration',
    'Technical Documentation'
  ];

  const areasOfInterest = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Machine Learning, Deep Learning, Neural Networks'
    },
    {
      icon: Globe,
      title: 'Full Stack Development',
      description: 'End-to-end web application development'
    },
    {
      icon: Settings,
      title: 'Software Engineering',
      description: 'Best practices, design patterns, clean code'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
            My expertise in various technologies and programming languages
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color}/10`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold font-poppins">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium font-inter">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-sm text-muted-foreground font-inter">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-semibold font-poppins mb-8 text-center">Additional Skills</h3>
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {additionalSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-inter"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Areas of Interest */}
        <div className="animate-slide-in-right">
          <h3 className="text-2xl font-semibold font-poppins mb-8 text-center">Areas of Interest</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areasOfInterest.map((area, index) => (
              <Card 
                key={index} 
                className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <area.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold font-poppins mb-2">{area.title}</h4>
                  <p className="text-sm text-muted-foreground font-inter">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;