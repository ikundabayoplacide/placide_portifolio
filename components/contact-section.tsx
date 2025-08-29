"use client"

import { useState } from "react"

const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 left-6 bg-cyan-700 text-white p-4 rounded-full shadow-lg 
            hover:scale-110 transform transition duration-300 "
      >
        📅
      </button>

      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>}

      <div
        className={`fixed bottom-0 left-0 w-full md:w-1/2 lg:w-1/3 h-[90%] bg-white shadow-2xl rounded-t-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 overflow-y-auto h-full">
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 float-right">
            ✖
          </button>

          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

          <div className="bg-gray-50 p-4 rounded-lg shadow mb-6">
            <h3 className="text-xl font-semibold mb-4">📩 Leave Me a Message</h3>
            <form action="p24w684gvoju83jogy72j9njqtjpdy18@hook.us2.make.com" method="POST" className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full border rounded-lg p-3 h-24"
                required
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">🗓️ Book an Appointment</h3>
            <p className="mb-4 text-gray-600">Choose a time that works best for you.</p>
            <a
              href="https://calendar.google.com/calendar/embed?src=ikundabayoplacide500%40gmail.com&ctz=Africa%2FMaputo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700"
            >
              Book a Meeting
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSection
