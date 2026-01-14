import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Globe, Heart, Target, Trophy } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: 'Date of Birth', value: '15 August 2004' },
    { icon: User, label: 'Nationality', value: 'Indian' },
    { icon: Globe, label: 'Languages', value: 'Hindi, English' },
  ];

  const strengths = [
    'Logical Thinking',
    'Quick Learner',
    'Active Listening',
    'Overcoming Nervousness'
  ];

  const hobbies = [
    'Travelling and exploring India',
    'Listening to music'
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 dark:bg-muted/10 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
            A passionate Computer Science student dedicated to creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Career Objective */}
          <div className="space-y-8 animate-fade-in">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 border-border/20 bg-card/80 dark:bg-card/40 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold font-poppins">Career Objective</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed font-inter">
                  Use my technical skills and knowledge in software development to contribute to
                  innovative projects, while continuously growing and learning new technologies.
                </p>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 border-border/20 bg-card/80 dark:bg-card/40 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold font-poppins">Personal Information</h3>
                </div>
                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <info.icon className="w-5 h-5 text-tech-blue" />
                      <span className="text-sm text-muted-foreground font-medium min-w-0 flex-shrink-0">
                        {info.label}:
                      </span>
                      <span className="text-sm font-inter">{info.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Strengths & Interests */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold font-poppins">Key Strengths</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {strengths.map((strength, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 font-inter"
                    >
                      {strength}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold font-poppins">Hobbies & Interests</h3>
                </div>
                <div className="space-y-3">
                  {hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-tech-purple rounded-full"></div>
                      <span className="text-muted-foreground font-inter">{hobby}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
                    <span className="text-muted-foreground font-inter">
                      Learning new technologies in Artificial Intelligence
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold font-poppins">Achievements</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-tech-purple rounded-full"></div>
                    <span className="text-muted-foreground font-inter">
                      Runner-up – Mathematics Olympiad, 2020
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
                    <span className="text-muted-foreground font-inter">
                      Participated in Sparkathon Walmart Hackathon
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;