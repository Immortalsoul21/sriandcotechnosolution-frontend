# Sri & Co Techno Solution – Frontend

A modern, scalable frontend application built with React, Vite, Tailwind CSS, and React Router.  
This project follows industry best practices for structure, routing, and layout management.

---

## 🚀 Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- ESLint
- Prettier

---

## 📋 Prerequisites

Ensure the following are installed before starting:

- Node.js (v18 or higher)  
  https://nodejs.org/
- npm (comes with Node.js) or yarn
- Git  
  https://git-scm.com/

Check versions:
```bash
node -v
npm -v
git --version



🛠 Getting Started

1️⃣ Clone the Repository

git clone https://github.com/Immortalsoul21/sriandcotechnosolution-frontend.git
cd sriandcotechnosolution-frontend


2️⃣ Install Dependencies
Using npm:

npm install

3️⃣ Start Development Server

npm run dev




📁 Project Structure

src/
├── assets/          # Static assets
├── components/      # Reusable UI components
├── layouts/         # Layout components (MainLayout, etc.)
├── pages/           # Page-level components
├── routes/          # Route configuration
├── App.jsx          # App layout wrapper (optional)
├── main.jsx         # Entry point
└── index.css        # Global styles (Tailwind entry)
🧭 Routing & Layout Architecture
Uses React Router v6 with nested routes

MainLayout is applied by default to all routes

Layouts render child routes using <Outlet />

New pages automatically inherit the layout

Example:

jsx
Copy code
{
  path: '/',
  element: <MainLayout />,
  children: [
    { index: true, element: <Navigate to="home" replace /> },
    { path: 'home', element: <Home /> },
  ],
}


🎨 Styling
Tailwind CSS for all styling

No inline styles or external CSS frameworks

Global styles only in index.css




🧪 Development Notes
Path alias @/ points to src/

Vite Hot Module Replacement (HMR) enabled

Restart dev server when modifying:

vite.config.js

tailwind.config.js

postcss.config.js

environment variables

🛠 Troubleshooting
Clear dependencies and reinstall:



📄 License
This project is proprietary to Sri & Co Techno Solution.
