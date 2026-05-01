import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    // Simple rule-based responses about Placide
    const responses = getResponse(message.toLowerCase())

    return NextResponse.json({ message: responses })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}

function getResponse(message: string): string {
  // Skills related questions
  if (message.includes("skill") || message.includes("technology") || message.includes("programming")) {
    return "Placide is skilled in JavaScript, Node.js, React, React Native, Laravel, HTML/CSS, PostgreSQL, MongoDB, and WordPress. He's particularly strong in full-stack development with experience in both web and mobile applications."
  }

  // Experience related questions
  if (message.includes("experience") || message.includes("work") || message.includes("job")) {
    return "Placide has diverse experience including a current internship at Silve-Rwanda Ltd working with Laravel and React Native, previous roles at Brave Tech as a WordPress Developer, PAC Rwanda as a Web Developer, and ongoing training at SolveIt Africa. He also works on mobile development for LLC CROP in Japan."
  }

  // Education related questions
  if (message.includes("education") || message.includes("university") || message.includes("study")) {
    return "Placide is currently pursuing a Bachelor of Science in Computer & Software Engineering at the University of Rwanda (2021-2025). He completed his secondary education at Muhororo Secondary School with a focus on Mathematics, Economics, and Computer Science."
  }

  // Projects related questions
  if (message.includes("project") || message.includes("github") || message.includes("code")) {
    return "Placide has worked on several interesting projects including a Ticket Booking Mobile App, a Chatbot Application, Node.js projects collection, a Task Manager CLI tool, and a Vehicle Tracking System. You can find all his projects on his GitHub at github.com/ikundabayoplacide."
  }

  // Contact related questions
  if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("phone") ||
    message.includes("reach")
  ) {
    return "You can contact Placide at ikundabayoplacide500@gmail.com or call him at +250 789 897 235. He's based in Kigali, Rwanda and is always open to new opportunities and collaborations."
  }

  // Languages
  if (message.includes("language") || message.includes("speak")) {
    return "Placide speaks English very well and Kinyarwanda as his native language. He's comfortable communicating in both languages for professional and personal interactions."
  }

  // Location
  if (message.includes("location") || message.includes("where") || message.includes("rwanda")) {
    return "Placide is based in Kigali, Nyarugenge, Rwanda. He's currently studying at the University of Rwanda and working locally while also collaborating on international projects."
  }

  // Availability/hiring
  if (message.includes("available") || message.includes("hire") || message.includes("freelance")) {
    return "Placide is always interested in new opportunities and collaborations. He's currently completing his internship and studies but is open to discussing projects. Feel free to reach out to him directly to discuss your needs."
  }

  // Default response
  return "I can help you learn more about Placide's skills, experience, projects, education, or how to contact him. What specific aspect would you like to know more about?"
}
