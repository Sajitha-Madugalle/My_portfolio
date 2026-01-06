# Portfolio - React Version

This is the React version of the portfolio website, converted from the original HTML/CSS/JavaScript implementation.

## 🚀 Tech Stack

- **React 18+** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **CSS** - Styling (preserved from original)

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Footer with social links
│   │   ├── Hero.jsx         # Hero section with profile
│   │   ├── Experience.jsx   # Professional experience
│   │   ├── Projects.jsx     # Projects grid
│   │   ├── Awards.jsx       # Honors and awards
│   │   ├── Volunteering.jsx # Volunteering experience
│   │   ├── GalleryPreview.jsx # Gallery preview section
│   │   └── Contact.jsx      # Contact form
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Main home page
│   │   └── Gallery.jsx      # Gallery page
│   ├── data/                # Data files
│   │   └── galleryData.json # Gallery images list
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
│   ├── media/               # Images and media files
│   ├── gallery/             # Gallery images
│   └── assets/              # CV and other assets
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── index-react.html         # HTML entry point
```

## 🛠️ Prerequisites

Before running this project, you need to install **Node.js** (which includes npm).

### Installing Node.js

1. **Download Node.js**:
   - Visit [https://nodejs.org/](https://nodejs.org/)
   - Download the **LTS (Long Term Support)** version for Windows
   - Run the installer and follow the installation wizard

2. **Verify Installation**:
   ```bash
   node --version
   npm --version
   ```

## 📦 Installation

Once Node.js is installed, run the following commands in the Portfolio directory:

```bash
# Install dependencies
npm install
```

## 🏃 Running the Development Server

```bash
# Start the development server
npm run dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is busy).

## 🏗️ Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

The production files will be in the `dist/` directory.

## ✨ Features

All features from the original HTML version are preserved:

- ✅ **Smooth Scrolling** - Navigation links scroll smoothly to sections
- ✅ **Scroll Animations** - Sections fade in as you scroll
- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **Project Toggle** - "See More" button to show/hide projects
- ✅ **Gallery** - Masonry grid layout with lazy loading
- ✅ **Hover Effects** - Interactive cards and images
- ✅ **Contact Form** - Email contact form
- ✅ **Dark Theme** - Modern dark theme with gradients

## 🎨 Styling

The original `styles.css` has been preserved as `src/index.css`. All CSS variables, animations, and responsive breakpoints remain the same.

## 🔄 Differences from HTML Version

### Improvements:
- **Component-Based Architecture** - Easier to maintain and update
- **React Router** - Client-side routing for faster navigation
- **State Management** - React hooks for interactive features
- **Better Performance** - Vite's fast HMR (Hot Module Replacement)
- **Modern Tooling** - ESLint, better dev experience

### File Changes:
- Original files (`index.html`, `gallery.html`, `script.js`) are preserved
- New React files are in the `src/` directory
- Assets are copied to `public/` for Vite to serve

## 📝 Notes

- To update gallery images, run `python update_gallery.py` to regenerate `src/data/galleryData.json`
- CV file should be placed in `public/assets/CV.pdf`

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

### Images Not Loading
Make sure all images are in the `public/` directory:
- `/public/media/` - Profile and project images
- `/public/gallery/` - Gallery images
- `/public/assets/` - CV and other documents

### Build Errors
Clear the cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📧 Contact

For any questions or issues, contact: sajithamadugalle@gmail.com

---

**Developed with ❤️ using React + Vite**
