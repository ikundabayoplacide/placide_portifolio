import { type NextRequest, NextResponse } from "next/server"

// Email templates
const emailTemplates = {
  "appointment-confirmation": (data: any) => ({
    subject: "Appointment Request Confirmation - IKUNDABAYO Placide",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #059669;">Appointment Request Received</h2>
        <p>Dear ${data.name},</p>
        <p>Thank you for requesting an appointment with IKUNDABAYO Placide. Your request has been received and will be reviewed shortly.</p>
        
        <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #059669;">Appointment Details:</h3>
          <p><strong>Date:</strong> ${data.date}</p>
          <p><strong>Time:</strong> ${data.time}</p>
          ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}
        </div>
        
        <p>You will receive a confirmation email once the appointment is approved.</p>
        
        <p>Best regards,<br>
        IKUNDABAYO Placide<br>
        Full-Stack Developer</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
          <p>Contact: ikundabayoplacide500@gmail.com | +250 789 897 235</p>
        </div>
      </div>
    `,
  }),

  "appointment-notification": (data: any) => ({
    subject: `New Appointment Request from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #059669;">New Appointment Request</h2>
        <p>You have received a new appointment request through your portfolio website.</p>
        
        <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #059669;">Request Details:</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Requested Date:</strong> ${data.date}</p>
          <p><strong>Requested Time:</strong> ${data.time}</p>
          ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}
        </div>
        
        <p>Please review and respond to this appointment request.</p>
      </div>
    `,
  }),

  "message-confirmation": (data: any) => ({
    subject: "Message Received - IKUNDABAYO Placide",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #059669;">Message Received</h2>
        <p>Dear ${data.name},</p>
        <p>Thank you for reaching out! Your message has been received and I will get back to you as soon as possible.</p>
        
        <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #059669;">Your Message:</h3>
          <p>${data.message}</p>
        </div>
        
        <p>I typically respond within 24-48 hours. Thank you for your patience!</p>
        
        <p>Best regards,<br>
        IKUNDABAYO Placide<br>
        Full-Stack Developer</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
          <p>Contact: ikundabayoplacide500@gmail.com | +250 789 897 235</p>
        </div>
      </div>
    `,
  }),

  "message-notification": (data: any) => ({
    subject: `New Message from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #059669;">New Message Received</h2>
        <p>You have received a new message through your portfolio website.</p>
        
        <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #059669;">Message Details:</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        </div>
        
        <p>Please respond to this message when convenient.</p>
      </div>
    `,
  }),

  "daily-itinerary": (data: any) => ({
    subject: `Daily Itinerary - ${data.date}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #059669;">Daily Itinerary - ${data.date}</h2>
        <p>Good morning! Here's your schedule for today:</p>
        
        <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
          ${
            data.events && data.events.length > 0
              ? data.events
                  .map(
                    (event: any) => `
              <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e2e8f0;">
                <h4 style="margin: 0 0 5px 0; color: #059669;">${event.title}</h4>
                <p style="margin: 0; color: #64748b;"><strong>Time:</strong> ${event.start} - ${event.end}</p>
                ${event.description ? `<p style="margin: 5px 0 0 0;">${event.description}</p>` : ""}
              </div>
            `,
                  )
                  .join("")
              : "<p>No scheduled events for today. Great time to focus on personal projects!</p>"
          }
        </div>
        
        <p>Have a productive day!</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
          <p>This is an automated daily itinerary from your AI Secretary.</p>
        </div>
      </div>
    `,
  }),
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { to, subject, template, data } = body

    if (!to || !template) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    const templateFunction = emailTemplates[template as keyof typeof emailTemplates]
    if (!templateFunction) {
      return NextResponse.json({ success: false, message: "Invalid email template" }, { status: 400 })
    }

    const emailContent = templateFunction(data)

    // In a real implementation, you would use a service like SendGrid, Nodemailer, or Resend
    // For now, we'll simulate sending the email
    console.log("[v0] Sending email:", {
      to,
      subject: subject || emailContent.subject,
      html: emailContent.html,
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      emailId: Date.now().toString(),
    })
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
