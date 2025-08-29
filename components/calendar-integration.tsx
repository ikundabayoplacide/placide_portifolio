"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, Mail, Phone } from "lucide-react"

interface AppointmentData {
  name: string
  email: string
  phone?: string
  date: string
  time: string
  duration: string
  purpose: string
  notes?: string
}

export default function CalendarIntegration() {
  const [appointmentData, setAppointmentData] = useState<AppointmentData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    duration: "30",
    purpose: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setAppointmentData((prev) => ({ ...prev, [name]: value }))
  }

  const handleScheduleAppointment = async () => {
    setIsSubmitting(true)
    try {
      // Create calendar event URL
      const startDate = new Date(`${appointmentData.date}T${appointmentData.time}`)
      const endDate = new Date(startDate.getTime() + Number.parseInt(appointmentData.duration) * 60000)

      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        `Meeting with ${appointmentData.name}`,
      )}&dates=${startDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z/${
        endDate.toISOString().replace(/[-:]/g, "").split(".")[0]
      }Z&details=${encodeURIComponent(
        `Purpose: ${appointmentData.purpose}\nNotes: ${appointmentData.notes}\nContact: ${appointmentData.email}${
          appointmentData.phone ? `\nPhone: ${appointmentData.phone}` : ""
        }`,
      )}&location=Online%20Meeting`

      // Send appointment request to webhook
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      })

      if (response.ok) {
        // Open Google Calendar to add event
        window.open(calendarUrl, "_blank")
        alert("Appointment request sent! Please check your email for confirmation.")
        // Reset form
        setAppointmentData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          duration: "30",
          purpose: "",
          notes: "",
        })
      } else {
        throw new Error("Failed to schedule appointment")
      }
    } catch (error) {
      console.error("Error scheduling appointment:", error)
      alert("Sorry, there was an error scheduling your appointment. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split("T")[0]
  }

  const getMinTime = () => {
    const now = new Date()
    const today = new Date().toISOString().split("T")[0]
    if (appointmentData.date === today) {
      return now.toTimeString().slice(0, 5)
    }
    return "09:00"
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Schedule Appointment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              <User className="w-4 h-4 inline mr-1" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={appointmentData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              <Mail className="w-4 h-4 inline mr-1" />
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={appointmentData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              <Phone className="w-4 h-4 inline mr-1" />
              Phone (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={appointmentData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium mb-1">Date *</label>
              <input
                type="date"
                name="date"
                value={appointmentData.date}
                onChange={handleInputChange}
                min={getTodayDate()}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Time *</label>
              <input
                type="time"
                name="time"
                value={appointmentData.time}
                onChange={handleInputChange}
                min={getMinTime()}
                max="17:00"
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              <Clock className="w-4 h-4 inline mr-1" />
              Duration
            </label>
            <select
              name="duration"
              value={appointmentData.duration}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">1 hour</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Purpose of Meeting *</label>
            <input
              type="text"
              name="purpose"
              value={appointmentData.purpose}
              onChange={handleInputChange}
              placeholder="e.g., Job interview, Project discussion, Consultation"
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Additional Notes</label>
            <textarea
              name="notes"
              value={appointmentData.notes}
              onChange={handleInputChange}
              rows={3}
              placeholder="Any additional information or specific topics to discuss..."
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
        </div>

        <Button
          onClick={handleScheduleAppointment}
          disabled={
            !appointmentData.name ||
            !appointmentData.email ||
            !appointmentData.date ||
            !appointmentData.time ||
            !appointmentData.purpose ||
            isSubmitting
          }
          className="w-full"
        >
          {isSubmitting ? "Scheduling..." : "Schedule Appointment"}
        </Button>

        <div className="text-xs text-muted-foreground text-center">
          Available: Monday-Friday, 9:00 AM - 5:00 PM (CAT)
        </div>
      </CardContent>
    </Card>
  )
}
