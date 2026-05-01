"use client"

import { useTheme } from "@/src/components/theme-provider"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useEffect, useState } from "react"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { theme, setTheme } = useTheme()

  const navLinks = [
    { href:"#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#materials", label: "Materials" },
    { href: "#contact", label: "Contact" },
  ]

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-4 py-5">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex gap-6">
            <img src="/images/profile-removebg.png" alt="Logo" className="w-12 h-10 rounded-full" />
          <a href="/" className="group">
            <h1 className="text-3xl font-serif font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              IKUNDABAYO Placide
            </h1>
          </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-all duration-300 !font-extrabold relative group ${
                  activeSection === link.href
                    ? "text-primary px-4 py-2 rounded-lg"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-primary/10 rounded-lg transition-all duration-300 border border-border hover:border-primary"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
              ) : (
                <Sun className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-primary" />
              ) : (
                <Sun className="w-5 h-5 text-primary" />
              )}
            </button>
            <button
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-all duration-300 font-medium text-base py-3 px-4 rounded-lg border-b-2 ${
                    activeSection === link.href
                      ? "text-white bg-primary border-primary"
                      : "text-foreground hover:text-primary hover:bg-primary/10 border-transparent"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
