import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const mockEvents = [
      {
        id: "1",
        title: "Client Meeting - Project Discussion",
        start: new Date(today.setHours(9, 0, 0, 0)).toISOString(),
        end: new Date(today.setHours(10, 0, 0, 0)).toISOString(),
        description: "Discuss new web development project requirements",
      },
      {
        id: "2",
        title: "Code Review Session",
        start: new Date(today.setHours(14, 30, 0, 0)).toISOString(),
        end: new Date(today.setHours(15, 30, 0, 0)).toISOString(),
        description: "Review React Native mobile app code",
      },
      {
        id: "3",
        title: "Portfolio Update",
        start: new Date(tomorrow.setHours(10, 0, 0, 0)).toISOString(),
        end: new Date(tomorrow.setHours(11, 0, 0, 0)).toISOString(),
        description: "Update portfolio with latest projects",
      },
    ]

    return NextResponse.json({
      success: true,
      events: mockEvents,
    })
  } catch (error) {
    console.error("[v0] Error fetching calendar events:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch calendar events" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, start, end, description, attendeeEmail } = body

    const newEvent = {
      id: Date.now().toString(),
      title,
      start,
      end,
      description: description || "",
      createdAt: new Date().toISOString(),
      attendees: attendeeEmail ? [attendeeEmail] : [],
    }

    console.log("[v0] New calendar event created:", newEvent)

    return NextResponse.json({
      success: true,
      message: "Event created successfully",
      event: newEvent,
    })
  } catch (error) {
    console.error("[v0] Error creating calendar event:", error)
    return NextResponse.json({ success: false, message: "Failed to create calendar event" }, { status: 500 })
  }
}
