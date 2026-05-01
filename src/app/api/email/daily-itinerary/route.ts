import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const today = new Date()
    const dateString = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    // Fetch calendar events for today
    const eventsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/calendar/events`,
    )
    const eventsData = await eventsResponse.json()

    const todayEvents = eventsData.success
      ? eventsData.events.filter((event: any) => {
          const eventDate = new Date(event.start).toDateString()
          return eventDate === today.toDateString()
        })
      : []

    // Format events for email
    const formattedEvents = todayEvents.map((event: any) => ({
      title: event.title,
      start: new Date(event.start).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      end: new Date(event.end).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      description: event.description || "",
    }))

    // Send daily itinerary email
    const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/email/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "ikundabayoplacide500@gmail.com",
        template: "daily-itinerary",
        data: {
          date: dateString,
          events: formattedEvents,
        },
      }),
    })

    const emailResult = await emailResponse.json()

    console.log("[v0] Daily itinerary sent:", {
      date: dateString,
      eventsCount: formattedEvents.length,
      emailSent: emailResult.success,
    })

    return NextResponse.json({
      success: true,
      message: "Daily itinerary sent successfully",
      date: dateString,
      eventsCount: formattedEvents.length,
    })
  } catch (error) {
    console.error("[v0] Error sending daily itinerary:", error)
    return NextResponse.json({ success: false, message: "Failed to send daily itinerary" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/email/daily-itinerary`,
      {
        method: "POST",
      },
    )

    const result = await response.json()
    return NextResponse.json(result)
  } catch (error) {
    console.error("[v0] Error triggering daily itinerary:", error)
    return NextResponse.json({ success: false, message: "Failed to trigger daily itinerary" }, { status: 500 })
  }
}
