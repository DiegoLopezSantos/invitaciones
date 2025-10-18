import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import RSVPSection from './components/RSVPSection'
import CountdownTimer from './components/CountdownTimer'
import EventDetails from './components/EventDetails'
import GiftSuggestions from './components/GiftSuggestions'
import Itinerary from './components/Itinerary'
import PhotoGallery from './components/PhotoGallery'
import SeatingChart from './components/SeatingChart'
import FloatingRSVP from './components/FloatingRSVP'
import MusicToggle from './components/MusicToggle'

function App() {
  const [showRSVPModal, setShowRSVPModal] = useState(false)
  const [rsvpData, setRsvpData] = useState({
    guestName: '',
    numberOfGuests: 1,
    confirmed: false
  })

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  const handleRSVPSubmit = (data: typeof rsvpData) => {
    setRsvpData(data)
    console.log('RSVP Data:', data)
  }

  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById('rsvp-section')
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral via-secondary to-neutral">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30 bg-map-texture pointer-events-none" />
      <div className="fixed inset-0 opacity-20 bg-passport-stamps pointer-events-none" />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <RSVPSection onRSVPSubmit={handleRSVPSubmit} />
        <CountdownTimer />
        <EventDetails />
        <GiftSuggestions />
        <Itinerary />
        <PhotoGallery />
        <SeatingChart />
      </div>

      {/* Floating Elements */}
      <FloatingRSVP onClick={scrollToRSVP} />
      <MusicToggle />

      {/* RSVP Modal */}
      <AnimatePresence>
        {showRSVPModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowRSVPModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-8 m-4 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <RSVPSection onRSVPSubmit={handleRSVPSubmit} isModal />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App