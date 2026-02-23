# 207 Kustomz - Premium Website

A premium, professional website for 207 Kustomz vehicle customization business in Auburn, Maine.

## 🚀 Features

- **Premium Design**: Modern, dark-themed UI with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Lazy loading, optimized assets, and fast load times
- **SEO Ready**: Complete meta tags, Open Graph, and structured data
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Premium Interactions**: Scroll reveals, parallax effects, lightbox gallery

## 📁 Project Structure

```
207kustomz/
├── index.html              # Main HTML file
├── css/
│   ├── main.css           # All styles (organized by section)
│   └── responsive.css     # Mobile and tablet optimizations
├── js/
│   ├── main.js            # Core functionality (navbar, menu, scroll)
│   └── animations.js      # Visual effects (particles, reveals, lightbox)
├── assets/
│   └── images/
│       ├── logo.png       # Logo image (to be added)
│       ├── favicon.png    # Favicon (to be added)
│       └── gallery/       # Gallery images from Instagram
│           ├── starlight-1.jpg
│           ├── ambient-1.jpg
│           ├── carplay-1.jpg
│           ├── audio-1.jpg
│           └── headliner-1.jpg
└── README.md              # This file
```

## 🛠️ Setup Instructions

### 1. Add Logo Image
- Place your logo file (`IMG_2564.jpeg` or converted to PNG) in `assets/images/logo.png`
- Recommended size: 200x200px or larger (will be scaled down)
- Format: PNG with transparent background preferred

### 2. Add Favicon
- Create a favicon (16x16 or 32x32px) and save as `assets/images/favicon.png`
- Or use an online favicon generator

### 3. Add Gallery Images
- Download images from your Instagram profile: https://www.instagram.com/207kustomz/
- Optimize images for web (recommended: 1200x800px, WebP or JPG)
- Place in `assets/images/gallery/` directory:
  - `starlight-1.jpg` - Starlight headliner showcase
  - `ambient-1.jpg` - Ambient lighting showcase
  - `carplay-1.jpg` - CarPlay installation
  - `audio-1.jpg` - Audio system build
  - `headliner-1.jpg` - Headliner wrap example

### 4. Update Gallery HTML (Optional)
If you add real images, update the gallery section in `index.html`:

```html
<div class="gallery-item">
  <img src="assets/images/gallery/starlight-1.jpg" alt="Starlight Headliner" loading="lazy">
  <div class="gallery-overlay">
    <div class="gallery-label">Starlight Headliner</div>
    <div class="gallery-sub">1000 Piece Installation</div>
  </div>
</div>
```

### 5. Deploy
- Upload all files to your web server
- Ensure `index.html` is in the root directory
- Test all links and images

## 🎨 Customization

### Colors
Edit CSS variables in `css/main.css`:
```css
:root {
  --accent: #1da1f2;        /* Primary accent color */
  --accent-bright: #4dc3ff; /* Bright accent */
  --accent-dim: #0d7cc4;    /* Dim accent */
}
```

### Fonts
Fonts are loaded from Google Fonts:
- **Bebas Neue**: Headings
- **Outfit**: Body text
- **JetBrains Mono**: Tags and labels

To change fonts, update the Google Fonts link in `index.html` and CSS font-family declarations.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Performance Tips

1. **Optimize Images**: Use WebP format when possible, compress images
2. **CDN**: Consider using a CDN for faster asset delivery
3. **Caching**: Enable browser caching for CSS/JS files
4. **Minification**: Minify CSS/JS files for production

## 📞 Contact Information

- **Phone**: (978) 309-6751
- **Email**: 207.kustomz@gmail.com
- **Location**: 95 Davis Ave, Auburn, ME 04101
- **Booking**: https://207kustomz.setmore.com/book

## 🌐 Social Media

- **Instagram**: https://www.instagram.com/207kustomz/
- **Facebook**: https://www.facebook.com/207kustomz
- **TikTok**: https://www.tiktok.com/@207kustomz

## 📝 License

© 2025 207 Kustomz. All rights reserved.

## 🚀 Future Enhancements

- [ ] Contact form with validation
- [ ] Instagram feed integration
- [ ] Blog section for project showcases
- [ ] Online quote calculator
- [ ] Customer portal
- [ ] Google Analytics integration

---

Built with ❤️ for 207 Kustomz
