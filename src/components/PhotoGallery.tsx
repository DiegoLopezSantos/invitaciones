import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, Plus, Download } from 'lucide-react'

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [guestPhotos, setGuestPhotos] = useState<string[]>([])

  // Sample photos from Pexels
  const photos = [
    'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    'https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    ...guestPhotos
  ]

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setGuestPhotos(prev => [...prev, e.target.result as string])
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-neutral via-secondary/20 to-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Camera className="text-primary" size={32} />
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              Photo Gallery
            </h2>
            <Camera className="text-accent" size={32} />
          </div>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-8">
            Capturing precious moments and travel memories. Share your photos with us!
          </p>

          {/* Upload Button */}
          <div className="flex justify-center">
            <label className="bg-primary hover:bg-dusty-pink-600 text-white px-6 py-3 rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
              <Plus size={20} />
              Add Your Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <div className="aspect-square overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={photo}
                  alt={`Gallery photo ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
                <div className="p-4 text-white">
                  <Camera size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/20 max-w-md mx-auto">
            <p className="text-text-primary font-medium text-lg">
              📸 {photos.length} Photos • 💝 {guestPhotos.length} Guest Contributions
            </p>
            <p className="text-text-secondary text-sm mt-2">
              Thank you for sharing these beautiful memories!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery photo"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <X size={24} />
              </button>

              {/* Download Button */}
              <a
                href={selectedImage}
                download="isabella-quinceanera-photo.jpg"
                className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <Download size={20} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PhotoGallery