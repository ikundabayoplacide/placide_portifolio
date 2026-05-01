"use client"

import SecretaryChatbot from "@/src/components/secretary-chatbot"
import ScrollReveal from "@/src/components/scroll-reveal"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Building, Code2, Download, ExternalLink, Github, Globe, GraduationCap, Mail, MapPin, Phone, Rocket } from "lucide-react"
import Header from "@/src/components/sections/header"
import Hero from "@/src/components/sections/hero"

export default function Portfolio() {
  const skills = [
    { name: "JavaScript", category: "Programming" },
    { name: "Node.js", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "React Native", category: "Mobile" },
    { name: "Laravel", category: "Backend" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "WordPress", category: "CMS" },
  ]

  const experiences = [
       {
      title: "Full Stack Developer",
      company: "SAN TECH",
      period: "October 2024 - February 2025",
      technologies: ["React.Js", "Node.Js"],
      description:
        "Developed full-stack applications using Node Js for backend and React Js for frontend development.",
    },
      {
      title: "Professional Training Full Stack Developer",
      company: "Solvit Africa",
      period: "July 2025 - October 2025",
      technologies: ["React Js", "Node Js"],
      description:
        "Code2Connect Fellowship on NODE.JS and REACT.JS, where I developed full-stack applications using Node Js for backend and React Js for frontend development.",
    },
    {
      title: "Internship - Full Stack Development",
      company: "Silve-Rwanda Ltd",
      period: "June 2024 - Feb 2025",
      technologies: ["Laravel", "React Native"],
      description:
        "Developed full-stack applications using Laravel for backend and React Native for mobile development.",
    },
    {
      title: "WordPress Developer",
      company: "Brave Tech",
      period: "Feb 2024 - April 2024",
      technologies: ["WordPress", "PHP", "CSS"],
      description: "Created and customized WordPress websites for various clients.",
    },
      {
      title: "Mobile Development",
      company: "LLC CROP (Japan)",
      period: "February 2024 - Current",
      technologies: ["React Native", "Mobile Development"],
      description: "Mobile application development for international client.",
    },
    {
      title: "Web Developer",
      company: "PAC Rwanda",
      period: "October 2023 - December 2023",
      technologies: ["HTML", "CSS", "React"],
      description: "Built responsive web applications using modern frontend technologies.",
    }
  
  ]

  const projects = [
    {
      name: "Community Listening System and Management Information (CLSMI)",
      description:
        "A web-based system for collecting and managing community feedback, built with React for the frontend and Node.js for the backend.",
      technologies: ["React", "Node.js","Mysql","Tailwind CSS"],
      github: "https://github.com/ikundabayoplacide/rich.git",
      live:"https://richubuzima.rw/"
    },
    {
      name: "Ticket Booking Mobile App",
      description:
        "A mobile application for booking tickets with user-friendly interface and secure payment integration.",
      technologies: ["JavaScript", "React Native"],
      github: "https://github.com/ikundabayoplacide/Ticket-Booking-Mobile-App",
    },
    {
      name: "Bloker: Empowering Communities to Join capital Markets",
      description: "A web application that empowers communities to participate in capital markets, built with Next.js and Mysql database.",
      technologies: ["Next.js", "Mysql"],
      github: "https://github.com/ikundabayoplacide/broker.git",
      live:"https://eac-se.com/"
    },
    {
      name: "Chatbot Application",
      description: "An intelligent chatbot built with TypeScript for automated customer service and support.",
      technologies: ["TypeScript", "Node.js"],
      github: "https://github.com/ikundabayoplacide/chatbot"
    },
    
    {
      name: "Task Manager CLI",
      description: "A command-line interface tool for managing tasks and improving productivity.",
      technologies: ["JavaScript", "Node.js"],
      github: "https://github.com/ikundabayoplacide/TaskManager-With-CLI",
    },
    {
      name: "Vehicle Tracking System",
      description: "A comprehensive vehicle tracking system with real-time location monitoring.",
      technologies: ["TypeScript", "React"],
      github: "https://github.com/ikundabayoplacide/VehicleTracking",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
    
     <Header/>
    <Hero/>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(5,150,105,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.08),transparent_50%)]"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <ScrollReveal>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Me</h3>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="text-center text-muted-foreground mb-16 text-lg">Building the future, one line of code at a time</p>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Main Content - Takes 3 columns */}
            <ScrollReveal direction="left" className="lg:col-span-3 space-y-6">
              <Card className="border-2 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-2xl bg-gradient-to-br from-card via-card to-primary/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-serif font-bold mb-3 text-foreground">Full-Stack Developer</h4>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        As a Full-stack developer, I leverage my experience in Software Development for both web and mobile
                        applications, supported by over <span className="text-primary font-semibold">three years of academic learning</span> and practice in projects and more than <span className="text-primary font-semibold">two years of practical experience</span>.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-bold mb-3 text-foreground">Continuous Growth</h4>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        I actively contribute my skills and continually seek opportunities to expand my knowledge. I've gained
                        diverse expertise in both <span className="text-accent font-semibold">frontend and backend development</span> across platforms, including hands-on
                        experience in WordPress web development.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location & University Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-semibold text-foreground">Kigali, Rwanda</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent/30 transition-all duration-300 hover:shadow-xl group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Building className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">University</p>
                        <p className="font-semibold text-foreground">University of Rwanda</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>

            {/* Education & Languages - Takes 2 columns */}
            <ScrollReveal direction="right" delay={120} className="lg:col-span-2 space-y-6">
              <Card className="border-2 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-2xl bg-gradient-to-br from-card to-primary/5 sticky top-4">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-serif flex items-center gap-2">
                    <GraduationCap className="w-7 h-7 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background"></div>
                    <div className="pb-6">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">2021-2025</Badge>
                      </div>
                      <h5 className="font-bold text-lg mb-1">Bachelor of Science</h5>
                      <p className="text-sm text-muted-foreground mb-1">Computer & Software Engineering</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Building className="w-3 h-3" />
                        University of Rwanda
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/50 border-2 border-background"></div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="border-primary/30 text-primary text-xs">2016-2019</Badge>
                      </div>
                      <h5 className="font-bold text-base mb-1">Secondary Education</h5>
                      <p className="text-sm text-muted-foreground mb-1">Mathematics, Economics, Computer Science</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Building className="w-3 h-3" />
                        Muhororo Secondary School
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-2xl bg-gradient-to-br from-card to-accent/5">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-serif flex items-center gap-2">
                    <Globe className="w-7 h-7 text-accent" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                          <Globe className="w-4 h-4 text-accent" />
                        </div>
                        <span className="font-semibold">English</span>
                      </div>
                      <Badge className="bg-accent/20 text-accent border-accent/30">Very Good</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Globe className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-semibold">Kinyarwanda</span>
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30">Native</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl relative z-10">
          <ScrollReveal>
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Skills</h3>
          </ScrollReveal>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* Frontend */}
            <ScrollReveal className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
              <h4 className="text-xl font-bold text-foreground mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {["HTML/CSS", "JavaScript", "React", "Next.js"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-primary/10 text-primary border border-primary/30 rounded-md font-medium hover:bg-primary/20 transition-colors duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Backend */}
            <ScrollReveal delay={120} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
              <h4 className="text-xl font-bold text-foreground mb-4">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Laravel", "PostgreSQL", "MongoDB", "RESTful APIs"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-primary/10 text-primary border border-primary/30 rounded-md font-medium hover:bg-primary/20 transition-colors duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Mobile */}
            <ScrollReveal delay={240} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
              <h4 className="text-xl font-bold text-foreground mb-4">Mobile</h4>
              <div className="flex flex-wrap gap-2">
                {["React Native", "Mobile UI/UX"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-primary/10 text-primary border border-primary/30 rounded-md font-medium hover:bg-primary/20 transition-colors duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Tools & Platforms */}
            <ScrollReveal delay={360} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
              <h4 className="text-xl font-bold text-foreground mb-4">Tools & Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "WordPress", "cPanel", "Vercel", "Render"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-primary/10 text-primary border border-primary/30 rounded-md font-medium hover:bg-primary/20 transition-colors duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Soft Skills Section */}
          <div className="mt-8">
            <ScrollReveal delay={120}>
              <h4 className="text-xl font-bold text-foreground mb-4">Professional Skills</h4>
            </ScrollReveal>
            <ScrollReveal delay={220} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300">
              <div className="flex flex-wrap gap-2">
                {["Teamwork", "Creativity", "Time Management", "Communication", "Problem Solving", "Flexibility"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-accent/10 text-accent border border-accent/30 rounded-md font-medium hover:bg-accent/20 transition-colors duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Experience</h3>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {experiences.map((exp, index) => (
              <ScrollReveal
                key={index}
                delay={index * 90}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-3">
                  <h4 className="text-base font-bold text-foreground mb-1">{exp.title}</h4>
                  <p className="text-sm text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground">{exp.period}</p>
                </div>
                
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary border border-primary/30 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.05),transparent_70%)]"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <ScrollReveal>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Featured Projects</h3>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="text-center text-muted-foreground mb-16 text-lg">Showcasing my best work</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="scale">
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-secondary/20">
                <CardHeader>
                  <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">{project.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="group-hover:bg-primary group-hover:text-white transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-primary hover:bg-primary/90 flex-1" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 flex-1" asChild>
                      <a
                        href={project.live} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Download Materials</h3>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="text-center text-muted-foreground mb-16 text-lg">Get my professional documents</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left" className="h-full">
              <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-serif">
                  <Download className="w-6 h-6 text-primary" />
                  Curriculum Vitae
                </CardTitle>
                <CardDescription className="text-base">
                  Complete professional CV with detailed experience, skills, and education background.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all py-6 text-base"
                  onClick={() => window.open("/api/download-cv", "_blank")}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV (PDF)
                </Button>
              </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120} className="h-full">
              <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-accent/50 bg-gradient-to-br from-card to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-serif">
                  <Download className="w-6 h-6 text-accent" />
                  Cover Letter
                </CardTitle>
                <CardDescription className="text-base">
                  Professional cover letter showcasing my motivation and career objectives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all py-6 text-base"
                  onClick={() => window.open("/api/download-cover-letter", "_blank")}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Cover Letter (PDF)
                </Button>
              </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <ScrollReveal>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Get In Touch</h3>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="text-center text-muted-foreground mb-16 text-lg">Let's create something amazing together</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div>
              <h4 className="text-xl font-serif font-bold mb-6">Let's Connect</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind or
                just want to chat about technology, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a
                    href="mailto:ikundabayoplacide500@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    ikundabayoplacide500@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+250789897235" className="text-foreground hover:text-primary transition-colors">
                    +250 789 897 235
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-primary" />
                  <a
                    href="https://github.com/ikundabayoplacide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    github.com/ikundabayoplacide
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Kigali, Nyarugenge, Rwanda</span>
                </div>
              </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={120}>
              <Card className="shadow-2xl border-2 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Send a Message</CardTitle>
                <CardDescription className="text-base">I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-foreground">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        placeholder="John"
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1 text-foreground">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        placeholder="Doe"
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john.doe@example.com"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1 text-foreground">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="Project Collaboration"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      placeholder="Tell me about your project or how we can work together..."
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 py-6 text-base">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Chatbot Component */}
      <SecretaryChatbot />
      
      {/* Footer */}
      <footer className="bg-gradient-to-br from-secondary/50 to-background border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-serif font-bold mb-4 text-primary">IKUNDABAYO Placide</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full-Stack Developer passionate about creating innovative solutions and building impactful digital experiences.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">About</a>
                <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Skills</a>
                <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Experience</a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Projects</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="mailto:ikundabayoplacide500@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Email</a>
                <a href="https://github.com/ikundabayoplacide" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors text-sm">GitHub</a>
                <a href="tel:+250789897235" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Phone</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} IKUNDABAYO Placide. Built with <span className="text-primary">Next.js</span> & <span className="text-accent">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
