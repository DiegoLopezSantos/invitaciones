import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Navigation, ExternalLink } from 'lucide-react'

const EventDetails: React.FC = () => {
  const openDirections = () => {
    const address = "Salón de Eventos Tikal Futura, Guatemala City, Guatemala"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/${encodedAddress}`, '_blank')
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
            Event Details
          </h2>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto">
            All the essential information for our magical celebration journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Event Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-primary mb-2">When</h3>
                  <div className="text-text-primary space-y-1">
                    <p className="text-lg font-medium">Saturday, March 15th, 2025</p>
                    <p className="text-base">6:00 PM - 12:00 AM</p>
                    <p className="text-sm text-text-secondary">Please arrive by 5:45 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-secondary/20 p-8 rounded-2xl border border-accent/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-primary mb-2">Where</h3>
                  <div className="text-text-primary space-y-1">
                    <p className="text-lg font-medium">Salón de Eventos "Tikal Futura"</p>
                    <p className="text-base">Zona 10, Guatemala City</p>
                    <p className="text-base">Guatemala, C.A.</p>
                  </div>
                </div>
              </div>
              
              <motion.button
                onClick={openDirections}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Navigation size={18} />
                Get Directions
                <ExternalLink size={16} />
              </motion.button>
            </div>

            <div className="bg-gradient-to-r from-secondary/20 to-primary/10 p-8 rounded-2xl border border-primary/20">
              <h3 className="font-serif text-2xl text-primary mb-4">Dress Code</h3>
              <div className="text-text-primary space-y-2">
                <p className="text-lg font-medium">Formal / Semi-Formal</p>
                <p className="text-base">Think elegant evening wear with travel-inspired touches</p>
                <div className="flex gap-2 mt-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                    Dusty Pink
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                    Gold
                  </span>
                  <span className="px-3 py-1 bg-secondary text-text-primary rounded-full text-sm">
                    Beige
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-96 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-primary/20"
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.2645783405555!2d-90.55838298815713!3d14.64091697602693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1cf3201d1e3%3A0x7f52b012c7385ba4!2sVistas%20de%20la%20Floresta!5e0!3m2!1ses!2sgt!4v1759020711394!5m2!1ses!2sgt"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            title="Event Location" 
            className="w-full h-full" />
          </motion.div>
        </div> 

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-b from-primary/10 to-transparent rounded-xl">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🅿️</span>
            </div>
            <h4 className="font-serif text-xl text-primary mb-2">Parking</h4>
            <p className="text-text-secondary">Free valet parking available for all guests</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-b from-accent/10 to-transparent rounded-xl">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🍽️</span>
            </div>
            <h4 className="font-serif text-xl text-primary mb-2">Dinner</h4>
            <p className="text-text-secondary">Three-course dinner with vegetarian options available</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-b from-secondary/20 to-transparent rounded-xl">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📸</span>
            </div>
            <h4 className="font-serif text-xl text-primary mb-2">Photography</h4>
            <p className="text-text-secondary">Professional photographer and photo booth available</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventDetails