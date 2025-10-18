import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Note: Actual audio file would be needed for production
    // For demo purposes, we'll simulate the functionality
  }, [])

  const toggleMusic = () => {
    setIsMuted(!isMuted)
    setIsPlaying(!isMuted)
    
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(console.error)
      } else {
        audioRef.current.pause()
      }
    }
  }

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleMusic}
      className="fixed bottom-6 left-6 bg-accent hover:bg-accent/90 text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center z-40 transition-all duration-300"
      title={isMuted ? "Play background music" : "Pause background music"}
    >
      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      
      {/* Audio element - would need actual audio file for production */}
      <audio
        ref={audioRef}
        loop
        preload="none"
        className="hidden"
      >
        {/* <source src="/path-to-background-music.mp3" type="audio/mpeg" /> */}
      </audio>
    </motion.button>
  )
}

export default MusicToggle