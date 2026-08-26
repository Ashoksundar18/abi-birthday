# ✨ Surprise Friendship Website for Abirami (Perciyal)

A beautiful, romantic-but-not-overly-romantic personal digital scrapbook & memory journey built especially for your best friend.

---

## 🌟 Features Included

- **Personalized Configuration (`src/config/friendData.js`)**: Edit names, captions, quotes, timeline chapters, handwritten letter, and colors in one simple file.
- **Photos & Graceful Fallbacks (`/public/images/`)**: Automatically displays photos or renders stylized fallback badges if an image file is missing.
- **Lightbox Gallery**: Full-screen photo view with caption display, smooth zoom, and keyboard navigation (`Esc` to exit, `Arrow Left` / `Arrow Right`).
- **Animated Quote Cards**: Scroll-revealed messages ("You are more amazing than you probably realize", etc.).
- **Interactive Vertical Timeline**: Chapters 01 to 04 recounting memories and shared moments.
- **Handwritten Personal Letter**: "One Last Thing..." handwritten card design with warm paper styling.
- **Hidden Easter Egg**: Clicking the subtle star `✦` 5 times triggers a full-screen confetti explosion and secret message overlay.
- **Floating Music Player**: Probes `/public/music/song.mp3` and offers play/pause vinyl controls. Automatically hides if audio is missing.

---

## 🛠️ How to Customize

### 1. Swapping Photos
Drop your photos into `public/images/`:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`
- `photo5.jpg`
- `photo6.jpg`
- `photo7.jpg`
- `photo8.jpg`

*(Photos 1 through 5 have already been configured with your uploaded pictures!)*

### 2. Adding Background Music
Drop your favorite `.mp3` song into:
`public/music/song.mp3`

### 3. Personalizing Text & Quotes
Open `src/config/friendData.js` and edit any text, captions, or names!

---

## 🚀 Running & Deploying

### Run Locally
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Deploying Publicly
- **Vercel**: Import your repository on [Vercel](https://vercel.com) — zero configuration needed (uses `vercel.json`).
- **Netlify**: Drag and drop the `dist/` directory into [Netlify](https://netlify.com) or connect GitHub (uses `netlify.toml`).
- **GitHub Pages**: Build the app using `npm run build` and publish the `dist/` directory.
