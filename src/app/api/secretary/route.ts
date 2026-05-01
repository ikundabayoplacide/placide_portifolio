import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, messages, mode } = await request.json()

    let response = ""
    let action = null
    let type = "text"

    // Enhanced secretary responses based on mode and content
    if (mode === "appointment") {
      if (
        message.toLowerCase().includes("schedule") ||
        message.toLowerCase().includes("meeting") ||
        message.toLowerCase().includes("appointment")
      ) {
        response =
          "I'd be happy to help you schedule an appointment with Placide! Let me open his calendar for you to select an available time slot."
        action = "schedule_appointment"
        type = "appointment"
      } else if (message.toLowerCase().includes("available") || message.toLowerCase().includes("when")) {
        response =
          "Placide is generally available Monday through Friday, 9:00 AM to 5:00 PM (CAT). Would you like me to open his calendar so you can see specific available slots and book a meeting?"
        action = "schedule_appointment"
      } else {
        response =
          "I can help you schedule an appointment with Placide. Please let me know when you'd like to meet, and I'll check his availability for you."
      }
    } else if (mode === "message") {
      response =
        "Thank you for your message! I'll make sure Placide receives it promptly. He typically responds to messages within 24 hours. Is there anything specific you'd like me to include in the message to him?"
      type = "message"

      // Send message to webhook
      try {
        await fetch("https://hook.us2.make.com/p24w684gvoju83jogy72j9njqtjpdy18", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "secretary_message",
            message: message,
            timestamp: new Date().toISOString(),
            source: "AI Secretary",
          }),
        })
      } catch (error) {
        console.error("Error sending message to webhook:", error)
      }
    } else {
      // Chat mode - enhanced responses about Placide
      const lowerMessage = message.toLowerCase()

      if (
        lowerMessage.includes("skills") ||
        lowerMessage.includes("technology") ||
        lowerMessage.includes("programming")
      ) {
        response =
          "Placide is a skilled Full-Stack Developer with expertise in:\n\n• Frontend: React, React Native, JavaScript, HTML/CSS\n• Backend: Node.js, Laravel, PHP\n• Databases: PostgreSQL, MongoDB\n• Mobile Development: React Native\n• Version Control: Git\n\nHe's currently studying Computer & Software Engineering at the University of Rwanda and has hands-on experience from internships at Silve-Rwanda Ltd and training at SolveIt Africa."
      } else if (
        lowerMessage.includes("experience") ||
        lowerMessage.includes("work") ||
        lowerMessage.includes("internship")
      ) {
        response =
          "Placide has valuable professional experience including:\n\n• Current Internship at Silve-Rwanda Ltd (Full-Stack Developer)\n• Training at SolveIt Africa (Software Development)\n• Internship at Brave Tech (Web Development)\n• Internship at PAC Rwanda (IT Support)\n\nHe's gained hands-on experience in web development, mobile app development, and IT support across different organizations."
      } else if (
        lowerMessage.includes("projects") ||
        lowerMessage.includes("github") ||
        lowerMessage.includes("portfolio")
      ) {
        response =
          "Placide has worked on several impressive projects:\n\n• Ticket Booking Mobile App (React Native)\n• Chatbot Development\n• Node.js Projects with SolveIt\n• Task Manager with CLI\n• Vehicle Tracking System\n\nYou can view his complete portfolio and source code on his GitHub: https://github.com/ikundabayoplacide"
      } else if (
        lowerMessage.includes("education") ||
        lowerMessage.includes("university") ||
        lowerMessage.includes("study")
      ) {
        response =
          "Placide is currently pursuing Computer & Software Engineering at the University of Rwanda. He combines his academic studies with practical experience through internships and training programs, giving him both theoretical knowledge and real-world application skills."
      } else if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("email")) {
        response =
          "You can reach Placide through:\n\n• Email: ikundabayoplacide500@gmail.com\n• GitHub: https://github.com/ikundabayoplacide\n• Or schedule a meeting through his calendar\n\nWould you like me to help you schedule an appointment or take a message for him?"
      } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
        response =
          "Hello! I'm Placide's AI Secretary. I'm here to help you learn about his skills, experience, and projects, or assist you with scheduling appointments and taking messages. What would you like to know about Placide?"
      } else {
        response =
          "I'd be happy to help you learn more about Placide! You can ask me about:\n\n• His technical skills and expertise\n• Professional experience and internships\n• Projects and GitHub portfolio\n• Education background\n• How to contact him or schedule a meeting\n\nWhat specific information would you like to know?"
      }
    }

    return NextResponse.json({
      message: response,
      action,
      type,
    })
  } catch (error) {
    console.error("Error in secretary API:", error)
    return NextResponse.json(
      {
        message:
          "I apologize, but I'm having trouble processing your request right now. Please try again or contact Placide directly.",
      },
      { status: 500 },
    )
  }
}
