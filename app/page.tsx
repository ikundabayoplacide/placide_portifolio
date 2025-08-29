"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, ExternalLink, Calendar, Building, Download, Play } from "lucide-react"
import Image from "next/image"
import SecretaryChatbot from "@/components/secretary-chatbot"

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
      title: "Web Developer",
      company: "PAC Rwanda",
      period: "October 2023 - December 2023",
      technologies: ["HTML", "CSS", "React"],
      description: "Built responsive web applications using modern frontend technologies.",
    },
    {
      title: "Training Program",
      company: "SolveIt Africa",
      period: "June 2023 - Sep 2025",
      technologies: ["Various Technologies"],
      description: "Comprehensive software development training program.",
    },
    {
      title: "Mobile Development",
      company: "LLC CROP (Japan)",
      period: "February 2024 - Current",
      technologies: ["React Native", "Mobile Development"],
      description: "Mobile application development for international client.",
    },
  ]

  const projects = [
    {
      name: "Ticket Booking Mobile App",
      description:
        "A mobile application for booking tickets with user-friendly interface and secure payment integration.",
      technologies: ["JavaScript", "React Native"],
      github: "https://github.com/ikundabayoplacide/Ticket-Booking-Mobile-App",
    },
    {
      name: "Chatbot Application",
      description: "An intelligent chatbot built with TypeScript for automated customer service and support.",
      technologies: ["TypeScript", "Node.js"],
      github: "https://github.com/ikundabayoplacide/chatbot",
    },
    {
      name: "Node.js Projects Collection",
      description: "A collection of Node.js projects developed during training at SolveIt Africa.",
      technologies: ["TypeScript", "Node.js"],
      github: "https://github.com/ikundabayoplacide/NODEJS-PROJECTS-WITH-SOLVIT",
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
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-black text-primary">IKUNDABAYO Placide</h1>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#skills" className="text-foreground hover:text-primary transition-colors font-medium">
                Skills
              </a>
              <a href="#experience" className="text-foreground hover:text-primary transition-colors font-medium">
                Experience
              </a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors font-medium">
                Projects
              </a>
              <a href="#materials" className="text-foreground hover:text-primary transition-colors font-medium">
                Materials
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src="/images/placide-headshot.jpg"
                alt="IKUNDABAYO Placide - Full-Stack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Full-Stack Developer
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Passionate software developer with expertise in JavaScript, React, Laravel, and mobile development. I'm
            committed to learning, growing, and building innovative solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-lg"
              onClick={() => window.open("https://www.youtube.com/shorts/8rCsn5fDjcw", "_blank")}
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Introduction Video
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">About Me</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a Full-stack developer, I leverage my experience in Software Development for both web and mobile
                applications, supported by over three years of academic learning and one and a half years of practical
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
            <div className="bg-card p-6 rounded-lg shadow-md">
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
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Hard Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Teamwork", "Creativity", "Time Management", "Flexibility", "Communication", "Problem Solving"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg">{exp.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
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
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Communications Materials</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-primary" />
                  Curriculum Vitae
                </CardTitle>
                <CardDescription>
                  Complete professional CV with detailed experience, skills, and education background.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => window.open("/api/download-cv", "_blank")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV (PDF)
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-primary" />
                  Cover Letter Template
                </CardTitle>
                <CardDescription>
                  Professional cover letter template showcasing my motivation and career objectives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                  onClick={() => window.open("/api/download-cover-letter", "_blank")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Cover Letter (PDF)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Get In Touch</h3>
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
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
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

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-md">
                    <Mail className="w-4 h-4 mr-2" />
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
    </div>
  )
}
