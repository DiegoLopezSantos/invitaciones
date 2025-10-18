import React from 'react'
import { motion } from 'framer-motion'
import { Plane, MapPin, Heart } from 'lucide-react'

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1059120/pexels-photo-1059120.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Decorative Travel Elements */}
      <div className="absolute top-20 left-10 text-primary opacity-30">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Plane size={40} />
        </motion.div>
      </div>
      
      <div className="absolute bottom-32 right-16 text-accent opacity-40">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <MapPin size={32} />
        </motion.div>
      </div>

      {/* Passport Stamps */}
      <div className="absolute top-32 right-20 w-24 h-24 rounded-full border-4 border-primary opacity-20 rotate-12" />
      <div className="absolute bottom-40 left-20 w-32 h-20 border-2 border-accent opacity-15 rotate-[-15deg] rounded-lg" />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <Heart className="text-primary" size={24} />
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Celebración de quinceaños
            </span>
            <Heart className="text-primary" size={24} />
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="font-serif text-6xl md:text-8xl font-bold text-primary mb-6 leading-tight"
        >
          Zoé Maricruz 
          <motion.div
            className="text-accent text-3xl md:text-4xl font-normal mt-2"
            variants={itemVariants}
          >
            López García
          </motion.div>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-text-primary text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
            Con gratitud y felicidad celebramos los XV años de Zoé, un hermoso comienzo en su camino hacia la juventud, lleno de sueños que la llevarán a recorrer nuevos horizontes.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-primary/20">
            <h2 className="font-serif text-3xl text-primary mb-4">Tu estás invitado!</h2>
            <div className="text-text-primary text-lg space-y-2">
              <p><strong>Sábado 15, de Noviembre del 2025</strong></p>
              <p>6:00 PM - 9:00 PM</p>
              <p>Salón de eventos edificio </p>
              <p>Guatemala City, Guatemala</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => document.getElementById('rsvp-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-dusty-pink-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
          >
            <Plane size={20} />
            Confirma tu asistencia – Acompáñanos en este gran viaje
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero