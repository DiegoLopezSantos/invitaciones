import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Users, Music, Cake, Camera, Utensils } from 'lucide-react'

const Itinerary: React.FC = () => {
  const events = [
    {
      time: '6:00 PM',
      title: 'Welcome Reception',
      description: 'Cocktails and mingling as guests arrive',
      icon: Users,
      color: 'from-primary to-dusty-pink-600'
    },
    {
      time: '6:30 PM',
      title: 'Ceremonial Entrance',
      description: 'Isabella\'s grand entrance and blessing ceremony',
      icon: Camera,
      color: 'from-accent to-yellow-600'
    },
    {
      time: '7:00 PM',
      title: 'Dinner Service',
      description: 'Three-course gourmet dinner with international flavors',
      icon: Utensils,
      color: 'from-primary to-accent'
    },
    {
      time: '8:30 PM',
      title: 'Special Presentations',
      description: 'Traditional waltz and family speeches',
      icon: Music,
      color: 'from-dusty-pink-500 to-primary'
    },
    {
      time: '9:00 PM',
      title: 'Dancing Celebration',
      description: 'Live DJ and dancing with travel-themed music',
      icon: Music,
      color: 'from-accent to-primary'
    },
    {
      time: '11:00 PM',
      title: 'Cake Ceremony',
      description: 'Cutting of the special quinceañera cake',
      icon: Cake,
      color: 'from-primary to-dusty-pink-400'
    }
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Clock className="text-primary" size={32} />
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              Evening Itinerary
            </h2>
            <Clock className="text-accent" size={32} />
          </div>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto">
            A carefully planned journey through the evening's magical moments
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full transform md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-20 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <event.icon className="text-white" size={24} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="font-serif text-xl md:text-2xl text-primary font-semibold">
                            {event.title}
                          </h3>
                          <span className="text-accent font-medium text-lg">
                            {event.time}
                          </span>
                        </div>
                        <p className="text-text-secondary leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 rounded-2xl border border-primary/20">
            <h3 className="font-serif text-2xl text-primary mb-4">Special Notes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-text-secondary">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎵</span>
                <span>Live DJ playing international and Latin hits</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📸</span>
                <span>Professional photographer throughout the event</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍹</span>
                <span>Open bar with signature travel-themed cocktails</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎁</span>
                <span>Surprise entertainment and special moments</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Itinerary