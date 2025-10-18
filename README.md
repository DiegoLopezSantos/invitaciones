# Isabella's Quinceañera - Travel Dreams Come True

A beautiful, interactive Quinceañera invitation and RSVP application with a travel-inspired theme, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

### Core Functionality
- **Hero Section** - Elegant introduction with travel-themed background and animations
- **RSVP System** - Prominent guest confirmation form with smooth animations and success feedback
- **Live Countdown Timer** - Real-time countdown to the event with animated number transitions
- **Event Details** - Complete information with integrated Google Maps
- **Gift Suggestions** - Bank details and gift ideas for the travel fund
- **Event Itinerary** - Timeline of the evening's activities with travel-themed icons
- **Photo Gallery** - Responsive gallery with lightbox and guest photo upload
- **Seating Chart** - Interactive table arrangements and venue layout

### Design & Experience
- **Travel Theme** - Passport stamps, airplanes, maps, and travel-inspired decorative elements
- **Color Palette** - Dusty pink (#D8A7B1) primary with beige, cream, muted gold, and soft gray accents
- **Typography** - Elegant Playfair Display serif font for headings with Inter for body text
- **Animations** - Smooth Framer Motion animations throughout (fade, slide, scale effects)
- **Responsive Design** - Optimized for mobile, tablet, and desktop viewing
- **Interactive Elements** - Floating RSVP button, smooth scrolling, hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   git clone [repository-url]
   cd quinceanera-invitation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The application will automatically reload when you make changes

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- **Primary**: #D8A7B1 (dusty pink)
- **Secondary**: #F5E9E2 (beige)
- **Accent**: #C9A368 (muted gold)
- **Neutral**: #F5F5F0 (cream)

### Event Details
Update event information in the respective component files:
- Date/time: `src/components/CountdownTimer.tsx` and `src/components/EventDetails.tsx`
- Location: `src/components/EventDetails.tsx`
- Names: `src/components/Hero.tsx`

### Photos
- Replace sample photos with actual images in `src/components/PhotoGallery.tsx`
- Update hero background image in `src/components/Hero.tsx`

## 📱 Components Structure

```
src/
├── components/
│   ├── Hero.tsx              # Main hero section with invitation
│   ├── RSVPSection.tsx       # RSVP form and confirmation
│   ├── CountdownTimer.tsx    # Live countdown to event
│   ├── EventDetails.tsx      # Date, time, location, map
│   ├── GiftSuggestions.tsx   # Bank details and gift ideas
│   ├── Itinerary.tsx         # Evening schedule and timeline
│   ├── PhotoGallery.tsx      # Photo display and upload
│   ├── SeatingChart.tsx      # Table arrangements
│   ├── FloatingRSVP.tsx      # Floating action buttons
│   └── MusicToggle.tsx       # Background music control
├── App.tsx                   # Main application component
├── main.tsx                  # Application entry point
└── index.css                 # Global styles and Tailwind imports
```

## 🛠 Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type safety and enhanced development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom theme
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

## 📄 License

This project is created for Isabella's Quinceañera celebration. Feel free to adapt and customize for your own events.

## 💝 Special Thanks

Created with love for Isabella María Rodriguez González and her family. May your travel dreams take you to wonderful places around the world!

---

*¡Que tengas un quinceañero mágico lleno de aventuras y recuerdos inolvidables!*