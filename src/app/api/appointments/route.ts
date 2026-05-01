import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const appointmentData = await request.json()

    // Send appointment request to webhook
    const webhookResponse = await fetch("https://hook.us2.make.com/p24w684gvoju83jogy72j9njqtjpdy18", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "appointment_request",
        data: appointmentData,
        timestamp: new Date().toISOString(),
        source: "Portfolio Website",
      }),
    })

    if (!webhookResponse.ok) {
      throw new Error("Failed to send appointment request")
    }

    // Send confirmation email data
    const emailData = {
      to: appointmentData.email,
      subject: "Appointment Request Confirmation - Placide Ikundabayo",
      message: `Dear ${appointmentData.name},

Thank you for requesting an appointment with Placide Ikundabayo.

Appointment Details:
• Date: ${appointmentData.date}
• Time: ${appointmentData.time}
• Duration: ${appointmentData.duration} minutes
• Purpose: ${appointmentData.purpose}
${appointmentData.notes ? `• Notes: ${appointmentData.notes}` : ""}

Your appointment request has been received and Placide will confirm the meeting shortly. You will receive a calendar invitation once confirmed.

If you need to make any changes or have questions, please reply to this email.

Best regards,
Placide's AI Secretary

---
Placide Ikundabayo
Full-Stack Developer
Email: ikundabayoplacide500@gmail.com
GitHub: https://github.com/ikundabayoplacide`,
    }

    // Send email notification
    await fetch("https://hook.us2.make.com/p24w684gvoju83jogy72j9njqtjpdy18", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "send_email",
        data: emailData,
        timestamp: new Date().toISOString(),
        source: "Appointment System",
      }),
    })

    return NextResponse.json({
      success: true,
      message: "Appointment request sent successfully",
    })
  } catch (error) {
    console.error("Error processing appointment:", error)
    return NextResponse.json({ success: false, message: "Failed to process appointment request" }, { status: 500 })
  }
}
