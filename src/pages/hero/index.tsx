"use client"

import { Button } from "@/src/components/ui/button"
import { Play, ExternalLink, Mail, Github, Linkedin, Code2, Sparkles } from "lucide-react"
import Image from "next/image"

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-16 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(5,150,105,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.15),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black mb-4 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  Placide
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-muted-foreground mb-6">
                Full-Stack Developer
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Crafting innovative digital solutions with{" "}
              <span className="text-primary font-semibold">JavaScript</span>,{" "}
              <span className="text-primary font-semibold">React</span>, and{" "}
              <span className="text-primary font-semibold">Laravel</span>. Transforming ideas into impactful experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base px-8 py-6 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch My Story
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-base px-8 py-6 hover:scale-105 group"
              >
                <a href="#projects" className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View My Work
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground font-medium">Connect:</span>
              <a
                href="https://github.com/ikundabayoplacide"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-primary hover:text-white rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:ikundabayoplacide500@gmail.com"
                className="p-3 bg-secondary hover:bg-primary hover:text-white rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="p-3 bg-secondary hover:bg-accent hover:text-white rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/20 rounded-3xl blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-accent/20 rounded-3xl blur-3xl"></div>
              
              {/* Main Image Container */}
              <div className="relative z-10 group">
                <div className="relative w-full aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl ring-8 ring-primary/10 group-hover:scale-105 transition-all duration-500">
                  <Image
                    src="/images/final.png"
                    alt="IKUNDABAYO Placide - Full-Stack Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <span className="text-white font-bold text-xl">Let's Build Together!</span>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-card border-2 border-primary shadow-xl rounded-2xl p-4 animate-bounce">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-xs text-muted-foreground">Status</p>
                      <p className="text-sm font-bold text-primary">Available</p>
                    </div>
                  </div>
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