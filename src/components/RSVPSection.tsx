import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Users, User } from 'lucide-react'

interface RSVPSectionProps {
  onRSVPSubmit: (data: { guestName: string; numberOfGuests: number; confirmed: boolean }) => void
  isModal?: boolean
}

const RSVPSection: React.FC<RSVPSectionProps> = ({ onRSVPSubmit, isModal = false }) => {
  const [guestName, setGuestName] = useState('')
  const [numberOfGuests, setNumberOfGuests] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!guestName.trim()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const rsvpData = {
      guestName: guestName.trim(),
      numberOfGuests,
      confirmed: true
    }
    
    onRSVPSubmit(rsvpData)
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Show success for 3 seconds, then reset if modal
    setTimeout(() => {
      if (isModal) {
        setIsSubmitted(false)
        setGuestName('')
        setNumberOfGuests(1)
      }
    }, 3000)
  }

  const containerClass = isModal 
    ? "p-0" 
    : "min-h-screen flex items-center justify-center py-20 px-6"

  return (
    <section id="rsvp-section" className={containerClass}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`max-w-2xl mx-auto ${!isModal ? 'bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-10' : ''}`}
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6"
          >
            <Send className="text-white" size={32} />
          </motion.div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Confirma tu asistencia
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Tu confirmación nos ayudará a preparar una celebración inolvidable.
Tu presencia hará que este sueño de Zoé sea aún más especial.
          </p>
        </div>

        {!isSubmitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="guestName" className="block text-text-primary font-medium mb-2">
                <User size={18} className="inline mr-2" />
                Your Full Name *
              </label>
              <input
                type="text"
                id="guestName"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-lg"
                placeholder="Zoé López"
              />
            </div>

            <div>
              <label htmlFor="numberOfGuests" className="block text-text-primary font-medium mb-2">
                <Users size={18} className="inline mr-2" />
                Numero de invitados (Incluyendote a ti)
              </label>
              <select
                id="numberOfGuests"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-lg"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <motion.button
              type="submit"
              disabled={!guestName.trim() || isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary hover:bg-dusty-pink-600 disabled:bg-gray-300 text-white py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Confirmando...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Confirmar mi asistencia
                </>
              )}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="text-green-600" size={40} />
            </div>
            
            <h3 className="font-serif text-3xl text-primary mb-4">¡Gracias, {guestName}!</h3>
            <p className="text-text-secondary text-lg mb-4">
              Tu asistencia {numberOfGuests} {numberOfGuests === 1 ? 'guest' : 'guests'} ha sido confirmada!
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">
                🎉 Será un honor tenerte con nosotros en este mágico viaje que marca el inicio de una nueva etapa.
              </p>
            </div>
          </motion.div>
        )}

        {!isModal && (
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-text-secondary text-sm">
              ¿Preguntas? Contactanos al {' '}
              <a href="tel:+50212345678" className="text-primary font-medium">
                +502 3996-0813
              </a>
              {' '}or{' '}
              <a href="mailto:diegolopezsantos@gmail.com" className="text-primary font-medium">
                diegolopezsantos@gmail.com
              </a>
            </p>
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default RSVPSection