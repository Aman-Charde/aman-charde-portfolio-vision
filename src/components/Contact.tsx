import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download, User } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'amancharde8989@gmail.com',
      href: 'mailto:amancharde8989@gmail.com',
      color: 'tech-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 939-957-8113',
      href: 'tel:+919399578113',
      color: 'tech-purple'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Indore, Madhya Pradesh',
      href: '#',
      color: 'primary'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Aman-Charde',
      color: 'tech-blue'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aman-charde-727303258/',
      color: 'tech-purple'
    }
  ];

  const references = [
    {
      name: 'Mr. Atul Bharat',
      title: 'Group Director, CDC',
      organization: 'Acropolis Group of Institutions',
      email: 'atul@acropolis.in'
    },
    {
      name: 'Mr. Kamal Kumar Sethi',
      title: 'Head of CSE',
      organization: 'AITR',
      email: 'kamalsethi@acropolis.in'
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const response = await fetch('https://formspree.io/f/movlnkpy', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });
    

    if (response.ok) {
      alert("✅ Message sent successfully!");
      e.currentTarget.reset();
    } else {
      alert("❌ Failed to send message.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30 dark:bg-muted/10 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8 animate-fade-in">
            <Card className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold font-poppins mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                    >
                      <div className={`p-3 rounded-full bg-${contact.color}/10 group-hover:bg-${contact.color}/20 transition-colors`}>
                        <contact.icon className={`w-5 h-5 text-${contact.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-inter">{contact.label}</p>
                        <p className="font-medium font-inter">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold font-poppins mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-full bg-${social.color}/10 hover:bg-${social.color}/20 transition-all duration-200 hover:scale-110 group`}
                    >
                      <social.icon className={`w-6 h-6 text-${social.color} group-hover:scale-110 transition-transform`} />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold font-poppins mb-4">Resume</h3>
                <p className="text-muted-foreground font-inter mb-6">
                  Download my complete resume for detailed information about my experience and skills.
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow transition-all duration-300">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-8 animate-slide-in-right">
            <Card className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold font-poppins mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium font-inter mb-2 block">Name</label>
                      <Input name="name" placeholder="Your full name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium font-inter mb-2 block">Email</label>
                      <Input type="email" name="email" placeholder="your.email@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium font-inter mb-2 block">Subject</label>
                    <Input name="subject" placeholder="What's this about?" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium font-inter mb-2 block">Message</label>
                    <Textarea name="message" rows={6} placeholder="Tell me about your project or opportunity..." required />
                  </div>
                  <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow">
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold font-poppins mb-6">Professional References</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {references.map((reference, index) => (
                    <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border/20">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold font-poppins">{reference.name}</h4>
                          <p className="text-sm text-muted-foreground font-inter">{reference.title}</p>
                          <p className="text-sm text-muted-foreground font-inter">{reference.organization}</p>
                          <a href={`mailto:${reference.email}`} className="text-sm text-primary hover:text-primary/80 font-inter mt-1 inline-block">
                            {reference.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground font-inter mt-4 text-center">
                  References available upon request for serious inquiries
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
