# WarmPaws

**A cozy winter care platform for pets** – Keep your one-stop solution to keep furry friends warm, safe, and happy during the cold season.

**Live Demo:** https://warmpaws---pet-care-in-winter.web.app/  
**GitHub Repository:** https://github.com/shaharearhossainjony/B12A09--WarmPaws---Pet-Care-in-Winter

### Purpose
WarmPaws is a responsive React single-page application built for Assignment-09. It provides winter pet care services, expert vet profiles, useful care tips, and a complete user authentication system with private routes.

### Key Features
- Hero slider with beautiful winter pet images (Swiper)
- Popular Winter Services section (6+ cards from `services.json`)
- Expert Vets showcase with animated hover cards (`expertsData.json`)
- Winter Care Tips section with icons (`WinterTips.json`)
- Firebase Authentication
  - Email/Password login & registration (with validation)
  - Google Sign-In
  - Forgot Password (email reset link)
  - Update Profile (name + photo URL)
- Private Routes – `/services` and `/services/:id` require login
- Service booking simulation with success message
- Fully responsive design (mobile, tablet, desktop)
- Modern animations using Framer Motion (`motion/react-client`)
- Custom 404 page and loading spinner
- Tailwind CSS + DaisyUI styling with purple gradient theme

### Tech Stack & NPM Packages
| Package                              | Purpose                              |
|--------------------------------------|--------------------------------------|
| `react`                              | Core library                         |
| `react-router-dom`                   | Routing & navigation                 |
| `firebase`                           | Authentication & hosting             |
| `swiper` + `swiper/react`            | Hero carousel                        |
| `framer-motion` (`motion/react-client`) | Animations                        |
| `ldrs`                               | TailChase loader                     |
| `@fortawesome/react-fontawesome`     | Password toggle icons                |
| `@fortawesome/free-solid-svg-icons`  | Eye icons                            |
| `lucide-react`                       | Profile & UI icons                   |
| `daisyui` + `tailwindcss`            | Styling & components                 |

