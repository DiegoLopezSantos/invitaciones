import React from 'react'
import { motion } from 'framer-motion'
import { Users, Heart, Star } from 'lucide-react'

const SeatingChart: React.FC = () => {
  const tables = [
    {
      number: 1,
      name: 'Family Table',
      guests: ['Rodriguez Family', 'González Family', 'Immediate Relatives'],
      color: 'from-primary to-dusty-pink-600',
      icon: Heart
    },
    {
      number: 2,
      name: 'Best Friends',
      guests: ['School Friends', 'Close Companions', 'Childhood Friends'],
      color: 'from-accent to-yellow-600',
      icon: Star
    },
    {
      number: 3,
      name: 'Family Friends',
      guests: ['Family Friends', 'Neighbors', 'Long-time Friends'],
      color: 'from-primary to-accent',
      icon: Users
    },
    {
      number: 4,
      name: 'Extended Family',
      guests: ['Aunts & Uncles', 'Cousins', 'Extended Relatives'],
      color: 'from-dusty-pink-500 to-primary',
      icon: Heart
    },
    {
      number: 5,
      name: 'Travel Club',
      guests: ['Travel Enthusiasts', 'Adventure Seekers', 'Dream Explorers'],
      color: 'from-accent to-primary',
      icon: Star
    },
    {
      number: 6,
      name: 'Special Guests',
      guests: ['Mentors', 'Sponsors', 'Special Invitees'],
      color: 'from-primary to-dusty-pink-400',
      icon: Users
    }
  ]

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
          <div className="inline-flex items-center gap-3 mb-6">
            <Users className="text-primary" size={32} />
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              Seating Arrangement
            </h2>
            <Users className="text-accent" size={32} />
          </div>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto">
            Find your table and get ready to share wonderful moments with fellow travelers
          </p>
        </motion.div>

        {/* Table Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tables.map((table, index) => (
            <motion.div
              key={table.number}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-primary/20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${table.color} rounded-full flex items-center justify-center`}>
                  <table.icon className="text-white" size={24} />
                </div>
                <div className="text-right">
                  <span className="text-2xl font-serif font-bold text-primary">
                    Table {table.number}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl text-primary mb-3 font-semibold">
                {table.name}
              </h3>

              <div className="space-y-2">
                {table.guests.map((guest, guestIndex) => (
                  <div
                    key={guestIndex}
                    className="flex items-center gap-3 p-2 bg-gradient-to-r from-neutral to-secondary/50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-text-primary text-sm">{guest}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-primary/20">
                <p className="text-text-secondary text-xs text-center">
                  Seats 8-10 guests comfortably
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Venue Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary/30 to-primary/10 rounded-2xl p-8 border border-primary/20"
        >
          <h3 className="font-serif text-2xl text-primary text-center mb-8">
            Venue Layout
          </h3>

          <div className="relative bg-white/50 rounded-xl p-8 min-h-96">
            {/* Dance Floor */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full border-2 border-primary/30 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-2xl">''</span>
                </motion.div>
                <p className="text-xs text-primary font-medium mt-1">Dance Floor</p>
              </div>
            </div>

            {/* Tables positioned around dance floor */}
            {tables.map((table, index) => {
              const angle = (index * 60) * (Math.PI / 180)
              const radius = 120
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <motion.div
                  key={table.number}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute w-16 h-16 bg-white rounded-full shadow-lg border-2 border-primary/30 flex items-center justify-center text-primary font-bold"
                  style={{
                    left: `calc(50% + ${x}px - 2rem)`,
                    top: `calc(50% + ${y}px - 2rem)`
                  }}
                >
                  {table.number}
                </motion.div>
              )
            })}

            {/* Stage */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-gradient-to-r from-accent/40 to-primary/40 rounded-lg flex items-center justify-center border border-primary/30">
              <p className="text-xs text-primary font-medium">Stage</p>
            </div>

            {/* Entrance */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gradient-to-r from-secondary to-neutral rounded-full flex items-center justify-center border border-primary/20">
              <p className="text-xs text-primary font-medium">Entrance</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-text-secondary text-sm">
              * Seating arrangements may be adjusted based on final guest count
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SeatingChart