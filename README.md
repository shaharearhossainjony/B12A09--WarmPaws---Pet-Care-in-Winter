# WarmPaws — Pet Care in Winter

## 📌 Project Category

**Assignment-09_category_rose**

## 🔎 Project Purpose

WarmPaws is a cozy winter companion platform built for pet owners to help keep their furry friends warm, safe, and healthy during cold months. The app lets users explore local winter pet-care services, browse winter clothing and grooming options, learn expert tips, and book services — all with a friendly, responsive single-page interface.

## 🌐 Live URL

`https://your-live-url-here`  
_(Replace with your Netlify / Firebase / Surge deployment link.)_

## 📁 Repository

`https://github.com/your-username/your-repo`  
_(Replace with your GitHub repo link.)_

---

## ✨ Key Features (implements assignment requirements)

- **Responsive Layout** — Mobile, tablet and desktop friendly (Tailwind + DaisyUI).
- **Navbar & Footer** — Persistent across routes. Navbar shows Login/Register or user avatar + logout when authenticated; avatar hover shows displayName.
- **Authentication** — Firebase Email/Password + Google Sign-In. Login, Register, Forget Password pages. Protected routes redirect to login and then back after successful auth.
- **Services JSON** — Local `services.json` with ≥ 6 winter pet-care service objects (image URLs hosted via PostImage/ImgBB).
- **Home Page**:
  - Swiper.js hero slider showcasing winter-themed pet images.
  - Popular Winter Care Services grid (image, name, rating, price, view details).
  - Winter Care Tips section (static JSON or inline data).
  - Meet Our Expert Vets (static 3–4 experts).
  - Extra section: "Winter Clothing Collections" (or similar relevant addition).
- **Service Details (Protected)** — Full service data display + "Book Service" form (Name & Email). On submit shows toast success and clears form.
- **Profile & Update** — My Profile page shows name, email, image; Update Profile page uses `updateProfile()` to change name/photo.
- **Forget Password Flow** — Pre-fills email if provided from login page; reset button sends reset email and opens Gmail.
- **Password Requirements & Toggle** — Register enforces password rules (min 6, uppercase, lowercase) and shows inline errors. Login/Register password fields include eye toggle.
- **SPA Behavior** — Proper routing to avoid reload errors (React Router + hosting rewrite settings).
- **Toasts & Animations** — Uses `react-hot-toast` for notifications and `AOS` / `swiper` / `framer-motion` for subtle animations.

---

## 📦 NPM Packages Used

- `react`
- `react-dom`
- `react-router-dom`
- `firebase`
- `axios` (if used for any fetch)
- `tailwindcss`
- `daisyui`
- `swiper`
- `react-hot-toast`
- `aos` (or `framer-motion` for animations)
- `react-icons`
- `lottie-react` (optional)
- `ldrs` (or similar loader package) — optional for loader component
- `eslint`, `prettier` (dev)

---
