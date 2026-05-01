import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { date } = await request.json()
    const targetDate = date || new Date().toISOString().split("T")[0]

    // This would typically fetch from Google Calendar API
    // For now, we'll create a mock itinerary structure
    const itinerary = await generateDailyItinerary(targetDate)

    // Send itinerary email to Placide
    const emailData = {
      to: "ikundabayoplacide500@gmail.com",
      subject: `Daily Itinerary - ${new Date(targetDate).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`,
      message: itinerary,
    }

    // Send email via webhook
    const webhookResponse = await fetch("https://hook.us2.make.com/p24w684gvoju83jogy72j9njqtjpdy18", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "daily_itinerary",
        data: emailData,
        timestamp: new Date().toISOString(),
        source: "Daily Itinerary System",
      }),
    })

    if (!webhookResponse.ok) {
      throw new Error("Failed to send daily itinerary")
    }

    return NextResponse.json({
      success: true,
      message: "Daily itinerary sent successfully",
      itinerary,
    })
  } catch (error) {
    console.error("Error generating daily itinerary:", error)
    return NextResponse.json({ success: false, message: "Failed to generate daily itinerary" }, { status: 500 })
  }
}

async function generateDailyItinerary(date: string): Promise<string> {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // <CHANGE> Fixed the corrupted template literal and created a clean, professional itinerary format
  const itinerary = `Good morning, Placide!

Here's your daily itinerary for ${formattedDate}:

1. 8:00 AM - 9:00 AM: Morning Routine
   - Wake up, freshen up, and have a healthy breakfast.

2. 9:00 AM - 10:30 AM: Project Work
   - Focus on coding tasks for your current project. Prioritize any critical bugs or features.

3. 10:30 AM - 11:00 AM: Break
   - Take a short walk, stretch, or do a quick meditation session to recharge.

4. 11:00 AM - 12:30 PM: Meetings
   - Attend scheduled meetings with the team or clients. Prepare any necessary materials beforehand.

5. 12:30 PM - 1:30 PM: Lunch
   - Enjoy a nutritious lunch and take some time to relax.

6. 1:30 PM - 3:00 PM: Learning & Development
   - Spend time learning new technologies, frameworks, or improving your skills through online courses or reading technical articles.

7. 3:00 PM - 3:30 PM: Break
   - Take another short break to clear your mind and stay productive.

8. 3:30 PM - 5:00 PM: Project Work
   - Continue working on your projects, focusing on any remaining tasks or new features.

9. 5:00 PM - 6:00 PM: Exercise
   - Engage in physical activity, whether it's a workout, yoga, or a walk outside to stay healthy.

10. 6:00 PM - 7:00 PM: Dinner
    - Have a relaxing dinner and unwind from the day's work.

11. 7:00 PM - 9:00 PM: Personal Time
    - Spend time on hobbies, with family, or simply relax and enjoy some downtime.

12. 9:00 PM - 10:00 PM: Wind Down
    - Prepare for bed by disconnecting from screens, reading a book, or practicing mindfulness to ensure a good night's sleep.

Have a productive and fulfilling day, Placide!`;

  return itinerary
}