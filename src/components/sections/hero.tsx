"use client"

import { Button } from "@/src/components/ui/button"
import { ArrowRight, Code2, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(5,150,105,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.08),transparent_50%)]"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wider">Full-Stack Developer</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
                Hi, I'm <span className="text-primary">Placide</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I build modern web and mobile applications using React, Node.js, and Laravel. 
                Passionate about creating clean, efficient, and user-friendly solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 hover:bg-secondary transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#projects" className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  View Projects
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 hover:bg-secondary transition-all duration-300 hover:scale-105"
                onClick={() => window.open("/api/download-cv", "_blank")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://github.com/ikundabayoplacide"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-card border border-border hover:border-primary hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:ikundabayoplacide500@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-card border border-border hover:border-primary hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="w-10 h-10 flex items-center justify-center bg-card border border-border hover:border-primary hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Image Container with Partial Arc Borders */}
              <div className="relative aspect-square">
                {/* Circular Image */}
                <div className="absolute inset-[12%] rounded-full overflow-hidden bg-[#111827]">
                  <Image
                    src="/images/final.png"
                    alt="IKUNDABAYO Placide - Full-Stack Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* SVG Arcs Container */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  {/* Top-left arc */}
                  <circle
                    cx="50"
                    cy="50"
                    r="43"
                    fill="none"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeDasharray="72 198"
                    transform="rotate(140 50 50)"
                  />

                  {/* Bottom-right arc */}
                  <circle
                    cx="50"
                    cy="50"
                    r="43"
                    fill="none"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeDasharray="72 198"
                    transform="rotate(320 50 50)"
                  />
                </svg>
              </div>
              
              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg hover:scale-110 transition-all duration-300 animate-float-slow" style={{ animationDelay: '1.2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">4+</p>
                    <p className="text-xs text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg hover:scale-110 transition-all duration-300 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-foreground">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
