# 🦷 Amir Dental Care — Clinic Website

A modern, fully responsive dental clinic website built with **React 19** and **Vite**, deployed on **Vercel**. Designed to provide patients with a seamless experience — from learning about services to booking appointments online.

---

## 🌐 Live Demo

👉 **[View Live Site](https://www.dramirdentalsurgery.com/)** ← *(dramirdentalsurgery.com)*

---

## ✨ Features

- **Hero Section** — Eye-catching landing with smooth scroll CTA buttons
- **About Section** — Clinic introduction and values
- **Services** — Showcases all dental treatments offered
- **Achievements** — Stats: 18+ years experience, 15K+ patients, 99% success rate
- **Meet the Team** — Doctor profiles and specializations
- **Book an Appointment** — Inline appointment request form
- **Contact Form** — Direct contact with the clinic
- **Floating Buttons** — Quick WhatsApp & phone access from any page
- **Smooth Scrolling** — Section-based navigation with anchor links
- **Fully Responsive** — Mobile, tablet, and desktop ready

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite 8](https://vitejs.dev/) | Build tool & dev server |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React Icons](https://react-icons.github.io/react-icons/) | Extended icon set |
| CSS Modules / Custom CSS | Styling |
| [Vercel](https://vercel.com/) | Deployment & hosting |

---

## 📁 Project Structure

```
amir-dental/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/           # Images and media
│   ├── components/       # React components
│   │   ├── Navabar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Achievements.jsx
│   │   ├── Team.jsx
│   │   ├── Appointment.jsx
│   │   ├── Contact.jsx
│   │   ├── FloatingButtons.jsx
│   │   └── Footer.jsx
│   ├── data/             # Centralized content data
│   │   ├── clinicInfo.js
│   │   ├── services.js
│   │   ├── team.js
│   │   └── achievements.js
│   ├── Styles/           # Per-component CSS files
│   ├── utils/
│   │   └── scrollToSection.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/------/amir-dental.git

# 2. Navigate into the project
cd amir-dental

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

---

## ☁️ Deployment

This project is deployed on **Vercel** with automatic deployments from the main branch.

To deploy your own copy:

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Vite — no configuration needed
4. Your site is live 🎉

---

## ⚙️ Customization

All clinic content is centralized in `src/data/` for easy editing:

- **`clinicInfo.js`** — Clinic name, phone, email, address, WhatsApp number
- **`services.js`** — List of dental services offered
- **`team.js`** — Doctor names and roles
- **`achievements.js`** — Stats and milestone numbers

---

## 🦷 Services Offered

- Dental Implants
- Root Canal Treatment
- Teeth Whitening
- Braces & Orthodontics
- Cosmetic Dentistry
- Smile Designing

---

## 📄 License

This project is private and built for **Amir Dental Care**. All rights reserved.

---

## 👨‍💻 Author

Built with ❤️ by **[Mavia Ahmad Khan](https://github.com/your-username)**

> Feel free to reach out if you have questions or want a similar project built!
