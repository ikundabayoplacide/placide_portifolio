"use client"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Mail, Phone, MapPin, Github, ExternalLink, Calendar, Building, Download, Play } from "lucide-react"
import Image from "next/image"
import SecretaryChatbot from "@/src/components/secretary-chatbot"
import Header from "../pages/header"
import Hero from "../pages/hero"

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
      <section id="about" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-serif font-black text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Me</h3>
          <p className="text-center text-muted-foreground mb-16 text-lg">Building the future, one line of code at a time</p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a Full-stack developer, I leverage my experience in Software Development for both web and mobile
                applications, supported by over three years of academic learning and practice in projects and more than two years of practical
                experience.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I actively contribute my skills and continually seek opportunities to expand my knowledge. I've gained
                diverse expertise in both frontend and backend development across platforms, including hands-on
                experience in WordPress web development.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Kigali, Rwanda</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  <span>University of Rwanda</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-card to-secondary/30 p-8 rounded-2xl shadow-xl border border-border/50 hover:shadow-2xl transition-shadow duration-300">
              <h4 className="font-serif font-bold mb-4">Education & Languages</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold">Bachelor of Science</h5>
                  <p className="text-sm text-muted-foreground">Computer & Software Engineering</p>
                  <p className="text-sm text-muted-foreground">University of Rwanda (2021-2025)</p>
                </div>
                <div>
                  <h5 className="font-semibold">Secondary Education</h5>
                  <p className="text-sm text-muted-foreground">Mathematics, Economics, Computer Science</p>
                  <p className="text-sm text-muted-foreground">Muhororo Secondary School (2016-2019)</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <h5 className="font-semibold mb-2">Languages</h5>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm">English</span>
                      <span className="text-sm text-muted-foreground">Very Good</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Kinyarwanda</span>
                      <span className="text-sm text-muted-foreground">Native</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(5,150,105,0.05),transparent_70%)]"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h3 className="text-4xl md:text-5xl font-serif font-black text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Technical Skills</h3>
          <p className="text-center text-muted-foreground mb-16 text-lg">Technologies I work with daily</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group">
              <CardHeader>
                <CardTitle className="text-2xl font-serif flex items-center gap-2">
                  <span className="text-3xl">💻</span> Hard Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <Badge
                      key={skill.name}
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 text-sm px-4 py-2 hover:scale-110 cursor-pointer"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl group">
              <CardHeader>
                <CardTitle className="text-2xl font-serif flex items-center gap-2">
                  <span className="text-3xl">🎯</span> Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {["Teamwork", "Creativity", "Time Management", "Flexibility", "Communication", "Problem Solving"].map(
                    (skill, i) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 text-sm px-4 py-2 hover:scale-110 cursor-pointer"
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group">
              <CardHeader>
                <CardTitle className="text-2xl font-serif flex items-center gap-2">
                  <span className="text-3xl">🚀</span> Deployment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {["cPanel", "Vercel", "Render"].map((platform, i) => (
                    <Badge
                      key={platform}
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 text-sm px-4 py-2 hover:scale-110 cursor-pointer"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {platform}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-serif font-black text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</h3>
          <p className="text-center text-muted-foreground mb-16 text-lg">My professional journey</p>
          <div className="space-y-6 grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">{exp.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-base">
                        <Building className="w-5 h-5 text-primary" />
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="hover:bg-primary hover:text-white transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.05),transparent_70%)]"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <h3 className="text-4xl md:text-5xl font-serif font-black text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Featured Projects</h3>
          <p className="text-center text-muted-foreground mb-16 text-lg">Showcasing my best work</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-secondary/20">
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
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl md:text-5xl font-serif font-black text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Download Materials</h3>
          <p className="text-center text-muted-foreground mb-16 text-lg">Get my professional documents</p>
          <div className="grid md:grid-cols-2 gap-8">
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h3 className="text-4xl md:text-5xl font-serif font-black text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Get In Touch</h3>
          <p className="text-center text-muted-foreground mb-16 text-lg">Let's create something amazing together</p>
          <div className="grid md:grid-cols-2 gap-8">
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
            <Card className="shadow-2xl border-2 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Send a Message</CardTitle>
                <CardDescription className="text-base">I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        placeholder="John"
                        className="w-full px-3 py-2 border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        placeholder="Doe"
                        className="w-full px-3 py-2 border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john.doe@example.com"
                      className="w-full px-3 py-2 border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="Project Collaboration"
                      className="w-full px-3 py-2 border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      placeholder="Tell me about your project or how we can work together..."
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 py-6 text-base">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
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
