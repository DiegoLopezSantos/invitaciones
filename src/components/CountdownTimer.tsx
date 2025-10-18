import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Calendar } from 'lucide-react'

const CountdownTimer: React.FC = () => {
  const eventDate = new Date('2025-11-15T18:00:00')
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary/10 via-secondary/30 to-accent/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Clock className="text-primary" size={32} />
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              Cuenta regresiva
            </h2>
            <Calendar className="text-accent" size={32} />
          </div>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto">
            ¡Ya casi llega la gran celebración! Falta muy poco para vivir junto a Zoé este día tan especial.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/20 text-center"
            >
              <motion.div
                key={unit.value}
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="font-serif text-4xl md:text-6xl font-bold text-primary mb-2"
              >
                {unit.value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-text-secondary font-medium text-sm md:text-base uppercase tracking-wide">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary to-accent text-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
            <h3 className="font-serif text-2xl mb-2">Save the Date</h3>
            <p className="text-lg font-medium">Noviembre 15, 2025 • 6:00 PM</p>
            <p className="text-sm opacity-90 mt-1">Guatemala City, Guatemala</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CountdownTimer