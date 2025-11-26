# WarmPaws ❄️🐾

**A cozy winter care platform for pets** – Keep your furry friends warm, healthy, and happy during the cold seasons.

**Live Demo:** https://warmpaws-pet-winter-care.netlify.app  
*(Deployed on Netlify – fully responsive & live)*

### Purpose
WarmPaws is a beautiful, user-friendly React application designed to help pet owners discover winter-specific pet care services, expert veterinarians, useful winter tips, and adorable pet outfits. It includes user authentication (Email/Password + Google), private routes, profile management, service booking simulation, and a modern UI with animations.

### Key Features
- **Hero Slider** with stunning winter pet images (Swiper.js)
- **Popular Winter Services** – Browse & view detailed service pages
- **Expert Vets Section** with animated hover cards
- **Winter Care Tips** with emoji icons and motion animations
- **User Authentication** (Firebase):
  - Login / Register
  - Google Sign-In
  - Forgot Password (sends reset link)
  - Update Profile (Name + Photo URL)
- **Private Routes** – Services & Service Details are protected
- **Responsive Design** – Works perfectly on mobile, tablet, and desktop
- **404 Error Page** with navigation options
- **Booking Simulation** – Fill name/email → success toast
- **Modern Animations** using Framer Motion (`motion/react-client`)
- **Tailwind CSS + DaisyUI** for fast, beautiful styling

### Tech Stack & NPM Packages Used

| Package                     | Purpose                                      |
|----------------------------|-----------------------------------------------|
| `react`                    | Core library                                  |
| `react-router-dom`         | Client-side routing                           |
| `react-router`             | Navigation & protected routes                 |
| `firebase`                 | Authentication (Email, Google, Reset Password)|
| `swiper`                   | Hero image carousel                           |
| `framer-motion` (`motion/react-client`) | Smooth hover & scale animations       |
| `ldrs`                      | Cute loading spinner (TailChase)              |
| `@fortawesome/react-fontawesome` + icons | Eye icons for password toggle         |
| `lucide-react`             | Icons in profile section                      |
| `daisyui` + `tailwindcss`  | Beautiful components & utility-first styling  |

### Project Structure (Key Folders)