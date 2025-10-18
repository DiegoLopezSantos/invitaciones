import React from 'react'
import { motion } from 'framer-motion'
import { Gift, CreditCard, Heart, MapPin } from 'lucide-react'

const GiftSuggestions: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-secondary/30 via-neutral to-primary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Gift className="text-primary" size={32} />
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              Gift Suggestions
            </h2>
            <Heart className="text-accent" size={32} />
          </div>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto">
            Your presence is the greatest gift, but if you wish to contribute to Isabella's travel dreams...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Travel Fund */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/20"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-2">Travel Dreams Fund</h3>
              <p className="text-text-secondary">
                Help Isabella explore the world and create unforgettable memories
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl">
              <h4 className="font-medium text-primary mb-4">Bank Transfer Details:</h4>
              <div className="space-y-2 text-text-primary">
                <p><span className="font-medium">Bank:</span> Banco Industrial</p>
                <p><span className="font-medium">Account:</span> Isabella M. Rodriguez</p>
                <p><span className="font-medium">Number:</span> 123-456789-0</p>
                <p><span className="font-medium">Type:</span> Savings Account</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-accent/10 rounded-lg">
              <p className="text-accent text-sm font-medium text-center">
                💝 Every contribution, big or small, helps Isabella's travel dreams take flight!
              </p>
            </div>
          </motion.div>

          {/* Gift Ideas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-accent/20"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-2">Alternative Gift Ideas</h3>
              <p className="text-text-secondary">
                Thoughtful gifts for the aspiring world traveler
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: '✈️', text: 'Travel accessories (luggage, passport holder, travel pillow)' },
                { icon: '📸', text: 'Camera or photography equipment for capturing memories' },
                { icon: '📚', text: 'Travel guides and language learning books' },
                { icon: '🗺️', text: 'Scratch-off world map or travel journal' },
                { icon: '💄', text: 'Beauty and skincare products for travel' },
                { icon: '👗', text: 'Elegant clothing for special occasions abroad' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-3 bg-gradient-to-r from-neutral to-secondary/50 rounded-lg"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-text-primary">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/20 max-w-2xl mx-auto">
            <p className="text-text-primary font-medium text-lg mb-2">
              "The best gift is your presence at this special celebration"
            </p>
            <p className="text-text-secondary">
              - The Rodriguez González Family
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GiftSuggestions