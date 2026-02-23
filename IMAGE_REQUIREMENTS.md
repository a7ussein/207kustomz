# 📸 Image Requirements for 207 Kustomz Website

## Required Images & Locations

### 1. **Logo Image** (REQUIRED)
**Location:** `assets/images/logo.png`  
**Used in:**
- Navigation bar (top left)
- About section (large display)
- Footer (small version)

**Specifications:**
- **Format:** PNG (with transparent background preferred) or JPG
- **Size:** Minimum 200x200px (will be scaled automatically)
- **File:** Your existing `IMG_2564.jpeg` - convert to PNG or rename to `.png`
- **Action:** Copy `IMG_2564.jpeg` → Rename to `logo.png` → Place in `assets/images/`

---

### 2. **Favicon** (OPTIONAL but recommended)
**Location:** `assets/images/favicon.png`  
**Used in:** Browser tab icon

**Specifications:**
- **Format:** PNG or ICO
- **Size:** 16x16px, 32x32px, or 64x64px
- **Action:** Create a simple icon version of your logo or use a favicon generator

---

### 3. **Gallery Images** (RECOMMENDED - from Instagram)
**Location:** `assets/images/gallery/`  
**Used in:** Gallery/Showcase section (5 images)

Download your best work photos from Instagram: https://www.instagram.com/207kustomz/

#### Image 1: Starlight Headliner
- **File:** `starlight-1.jpg`
- **Content:** Photo of a starlight headliner installation
- **Size:** 1200x800px recommended (or similar aspect ratio)
- **Format:** JPG or WebP

#### Image 2: Ambient Lighting
- **File:** `ambient-1.jpg`
- **Content:** Photo showing ambient/RGB lighting installation
- **Size:** 1200x800px recommended
- **Format:** JPG or WebP

#### Image 3: CarPlay Installation
- **File:** `carplay-1.jpg`
- **Content:** Photo of CarPlay screen installation
- **Size:** 1200x800px recommended
- **Format:** JPG or WebP

#### Image 4: Audio System
- **File:** `audio-1.jpg`
- **Content:** Photo of subwoofer/audio system installation
- **Size:** 1200x800px recommended
- **Format:** JPG or WebP

#### Image 5: Headliner Wrap
- **File:** `headliner-1.jpg`
- **Content:** Photo of headliner wrap/suede work
- **Size:** 1200x800px recommended
- **Format:** JPG or WebP

---

## 📁 Complete File Structure

```
assets/
└── images/
    ├── logo.png              ← REQUIRED (your IMG_2564.jpeg)
    ├── favicon.png           ← OPTIONAL (browser icon)
    └── gallery/
        ├── starlight-1.jpg   ← RECOMMENDED (from Instagram)
        ├── ambient-1.jpg      ← RECOMMENDED (from Instagram)
        ├── carplay-1.jpg      ← RECOMMENDED (from Instagram)
        ├── audio-1.jpg        ← RECOMMENDED (from Instagram)
        └── headliner-1.jpg    ← RECOMMENDED (from Instagram)
```

---

## 🚀 Quick Setup Steps

### Step 1: Add Logo (REQUIRED)
```bash
# Copy your existing logo
Copy-Item "IMG_2564.jpeg" "assets/images/logo.png"
# OR if you have it elsewhere:
# Copy-Item "C:\path\to\IMG_2564.jpeg" "assets/images/logo.png"
```

### Step 2: Add Gallery Images (RECOMMENDED)
1. Go to https://www.instagram.com/207kustomz/
2. Download your best 5 work photos
3. Rename them according to the list above
4. Place them in `assets/images/gallery/` folder

### Step 3: Optimize Images (OPTIONAL but recommended)
- Use an image optimizer like TinyPNG or Squoosh
- Compress images to reduce file size
- Keep quality high but file size low

---

## 📝 Notes

- **Logo:** The site will work without gallery images (shows placeholder gradients), but the logo is essential
- **Gallery:** If you don't add gallery images, the site will show beautiful gradient placeholders
- **Format:** JPG is fine for photos, PNG preferred for logo (transparent background)
- **Size:** Images will be automatically resized by CSS, but optimized sizes load faster

---

## ✅ Priority Order

1. **HIGH PRIORITY:** `logo.png` - Site needs this to look professional
2. **MEDIUM PRIORITY:** Gallery images - Makes the showcase section impressive
3. **LOW PRIORITY:** Favicon - Nice to have but not critical

---

## 🔗 Where Images Are Used

- **Logo:** Navigation (44px height), About section (380px max width), Footer (50px height)
- **Gallery:** Gallery section - clickable lightbox images
- **Favicon:** Browser tab icon

---

**Current Status:** 
- ✅ Directory structure created
- ⏳ Waiting for logo.png
- ⏳ Waiting for gallery images
- ⏳ Waiting for favicon.png
