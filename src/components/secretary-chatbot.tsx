"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/src/components/ui/button"
import { Card } from "@/src/components/ui/card"
import { MessageCircle, X, Send, Calendar, Mail, User } from "lucide-react"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
  type?: "text" | "appointment" | "message"
}

export default function SecretaryChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [contactSuccess, setContactSuccess] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Placide's AI Secretary. I can help you learn about his portfolio, schedule appointments, or take messages. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showAppointmentForm, setShowAppointmentForm] = useState(false)
  const [showMessageForm, setShowMessageForm] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addMessage = (text: string, isUser: boolean, type: "text" | "appointment" | "message" = "text") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date(),
      type,
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const getAIResponse = async (userMessage: string) => {
    setIsTyping(true)

    const responses = {
      greeting: [
        "Hello! I'm here to help you learn about Placide's work and schedule meetings with him.",
        "Hi there! I can tell you about Placide's skills, projects, or help you get in touch with him.",
        "Welcome! I'm Placide's AI assistant. How can I help you today?",
      ],
      skills: [
        "Placide is a Full-Stack Developer with expertise in JavaScript, React, Node.js, Laravel, PHP, and mobile development with React Native. He's also experienced with databases like PostgreSQL and MongoDB.",
        "His technical skills include: Frontend (React, HTML, CSS, JavaScript), Backend (Node.js, Laravel, PHP), Mobile (React Native), Databases (PostgreSQL, MongoDB), and version control with Git.",
        "Placide specializes in full-stack web development, mobile app development, and has experience with both SQL and NoSQL databases.",
      ],
      experience: [
        "Placide has internship experience at Silve-Rwanda Ltd as a Full-Stack Developer, Brave Tech as a Software Developer, and PAC Rwanda. He's also completed training at SolveIt Africa.",
        "He's currently studying Computer & Software Engineering at University of Rwanda and has hands-on experience from multiple internships in software development.",
        "His professional experience includes working on real-world projects during internships at various tech companies in Rwanda.",
      ],
      projects: [
        "Placide has several impressive projects on GitHub including a Ticket Booking Mobile App, an AI Chatbot, Node.js projects with SolveIt, a CLI Task Manager, and a Vehicle Tracking system.",
        "His portfolio includes mobile applications, web development projects, AI implementations, and system management tools. You can view his work on GitHub at github.com/ikundabayoplacide.",
        "Some notable projects include mobile app development, chatbot implementation, and full-stack web applications showcasing his diverse technical skills.",
      ],
      contact: [
        "You can reach Placide through this portfolio website, or I can help you schedule a meeting with him. Would you like me to help you book an appointment?",
        "I can help you send a message to Placide or schedule a meeting. What would you prefer?",
        "Placide is available for consultations and project discussions. I can help you get in touch with him right away.",
      ],
      appointment: [
        "I'd be happy to help you schedule an appointment with Placide. Let me open the booking form for you.",
        "Great! I can help you book a meeting with Placide. Please provide your preferred date and time.",
        "Perfect! Let me help you schedule a meeting. I'll open the appointment booking system.",
      ],
      message: [
        "I can help you send a message to Placide. Let me open the message form for you.",
        "Of course! I'll help you send a message to Placide. What would you like to tell him?",
        "I'd be happy to take a message for Placide. Let me set that up for you.",
      ],
    }

    const message = userMessage.toLowerCase()
    let responseCategory = "greeting"

    if (message.includes("skill") || message.includes("technology") || message.includes("programming")) {
      responseCategory = "skills"
    } else if (message.includes("experience") || message.includes("work") || message.includes("job")) {
      responseCategory = "experience"
    } else if (message.includes("project") || message.includes("github") || message.includes("portfolio")) {
      responseCategory = "projects"
    } else if (message.includes("contact") || message.includes("reach") || message.includes("email")) {
      responseCategory = "contact"
    } else if (
      message.includes("appointment") ||
      message.includes("meeting") ||
      message.includes("schedule") ||
      message.includes("book")
    ) {
      responseCategory = "appointment"
      setTimeout(() => setShowAppointmentForm(true), 1000)
    } else if (message.includes("message") || message.includes("tell") || message.includes("send")) {
      responseCategory = "message"
      setTimeout(() => setShowMessageForm(true), 1000)
    }

    setTimeout(() => {
      const responseArray = responses[responseCategory as keyof typeof responses]
      const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)]
      addMessage(randomResponse, false)
      setIsTyping(false)
    }, 1500)
  }

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      addMessage(inputValue, true)
      getAIResponse(inputValue)
      setInputValue("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    try {
      await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          date: formData.get("date"),
          time: formData.get("time"),
          message: formData.get("message"),
        }),
      })

      addMessage(
        "✅ Your appointment request has been sent to Placide! He'll confirm the meeting details via email.",
        false,
        "appointment",
      )
      setShowAppointmentForm(false)
    } catch (error) {
      addMessage("❌ Sorry, there was an error scheduling your appointment. Please try again.", false)
    }
  }

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    try {
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      })

      addMessage("✅ Your message has been sent to Placide! He'll get back to you soon.", false, "message")
      setShowMessageForm(false)
    } catch (error) {
      addMessage("❌ Sorry, there was an error sending your message. Please try again.", false)
    }
  }

  const handleContactMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    try {
      const response = await fetch("https://hook.us2.make.com/p24w684gvoju83jogy72j9njqtjpdy18", {
        method: "POST",
        body: formData,
      })

      setContactSuccess(true)
      ;(e.target as HTMLFormElement).reset()

      setTimeout(() => {
        setContactSuccess(false)
        setIsContactOpen(false)
      }, 2000)
    } catch (error) {
      console.error("Error sending message:", error)
    }
  }

  return (
    <>
      <Button
        onClick={() => setIsContactOpen(true)}
        className="fixed bottom-6 left-6 h-14 w-14 rounded-full bg-cyan-600 hover:bg-cyan-700 shadow-lg z-[90]"
        size="icon"
        title="Contact & Calendar"
      >
        <Calendar className="h-6 w-6" />
      </Button>

      {isContactOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[91]" onClick={() => setIsContactOpen(false)} />
          <Card className="fixed bottom-6 left-6 w-96 h-[500px] z-[92] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Contact & Calendar</h3>
                  <p className="text-xs text-muted-foreground">Get in Touch</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsContactOpen(false)} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {contactSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <div className="text-green-600 font-semibold">✅ Message sent successfully!</div>
                  <div className="text-green-500 text-sm mt-1">Thank you for reaching out!</div>
                </div>
              )}

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Send Message
                </h4>
                <form onSubmit={handleContactMessageSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-2 border rounded text-sm"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-2 border rounded text-sm"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-2 border rounded text-sm h-20"
                    required
                  />
                  <Button type="submit" size="sm" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </h4>
                <p className="text-sm text-muted-foreground mb-3">Choose a time that works best for you.</p>
                <a
                  href="https://calendar.google.com/calendar/embed?src=ikundabayoplacide500%40gmail.com&ctz=Africa%2FMaputo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-cyan-600 text-white px-4 py-2 rounded text-sm hover:bg-cyan-700 transition-colors"
                >
                  Open Calendar
                </a>
              </div>
            </div>
          </Card>
        </>
      )}

      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg z-[90]"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[91]" onClick={() => setIsOpen(false)} />
          <Card className="fixed bottom-6 right-6 w-96 h-[500px] z-[92] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Secretary</h3>
                  <p className="text-xs text-muted-foreground">Placide's Assistant</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              {showAppointmentForm && (
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Appointment
                  </h4>
                  <form onSubmit={handleAppointmentSubmit} className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full p-2 border rounded text-sm"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full p-2 border rounded text-sm"
                      required
                    />
                    <input type="date" name="date" className="w-full p-2 border rounded text-sm" required />
                    <input type="time" name="time" className="w-full p-2 border rounded text-sm" required />
                    <textarea
                      name="message"
                      placeholder="Meeting purpose (optional)"
                      className="w-full p-2 border rounded text-sm h-16"
                    />
                    <div className="flex gap-2">
                      <Button type="submit" size="sm" className="flex-1">
                        Book Meeting
                      </Button>
                      <Button type="button" variant="outline" size="sm" onClick={() => setShowAppointmentForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {showMessageForm && (
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Send Message
                  </h4>
                  <form onSubmit={handleMessageSubmit} className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full p-2 border rounded text-sm"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full p-2 border rounded text-sm"
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      className="w-full p-2 border rounded text-sm h-20"
                      required
                    />
                    <div className="flex gap-2">
                      <Button type="submit" size="sm" className="flex-1">
                        Send Message
                      </Button>
                      <Button type="button" variant="outline" size="sm" onClick={() => setShowMessageForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Placide's portfolio..."
                  className="flex-1 p-2 border rounded-lg text-sm"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  size="icon"
                  className="h-10 w-10"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </>
      )}
    </>
  )
}
