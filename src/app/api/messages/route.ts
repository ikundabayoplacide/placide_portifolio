import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const messageData = await request.json()

    // Send message to webhook
    const webhookResponse = await fetch("https://hook.us2.make.com/p24w684gvoju83jogy72j9njqtjpdy18", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "contact_message",
        data: messageData,
        timestamp: new Date().toISOString(),
        source: "Portfolio Contact Form",
      }),
    })

    if (!webhookResponse.ok) {
      throw new Error("Failed to send message")
    }

    // Send auto-reply to sender
    const autoReplyData = {
      to: messageData.email,
      subject: "Message Received - Placide Ikundabayo",
      message: `Dear ${messageData.name},

Thank you for reaching out! I have received your message and will get back to you within 24 hours.

Your Message:
"${messageData.message}"

I appreciate your interest and look forward to connecting with you soon.

Best regards,
Placide Ikundabayo
Full-Stack Developer
Email: ikundabayoplacide500@gmail.com
GitHub: https://github.com/ikundabayoplacide`,
    }

    // Send auto-reply email
    await fetch("https://hook.us2.make.com/p24w684gvoju83jogy72j9njqtjpdy18", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "send_email",
        data: autoReplyData,
        timestamp: new Date().toISOString(),
        source: "Auto Reply System",
      }),
    })

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
