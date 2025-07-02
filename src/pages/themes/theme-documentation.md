# Noblesse v1 - Shopify Theme Documentation

**Version:** 1.0.0  
**Developer:** Vevol Media  
**Type:** Premium Shopify Theme

---

## Table of Contents

1. [Theme Overview](#theme-overview)
2. [Technical Architecture](#technical-architecture)
3. [Core Components](#core-components)
4. [Section Documentation](#section-documentation)
5. [Style System](#style-system)
6. [JavaScript Features](#javascript-features)
7. [Template Structure](#template-structure)
8. [Configuration Options](#configuration-options)
9. [Code Examples](#code-examples)
10. [Customization Guide](#customization-guide)

---

## Theme Overview

Noblesse v1 is a premium Shopify theme designed for modern e-commerce stores with a focus on visual storytelling and user engagement. The theme combines elegant design with powerful functionality to create compelling shopping experiences.

### Key Features

- **Video-First Design:** Full video banner support with overlay text and CTAs
- **Interactive Shop-the-Look:** Clickable hotspots on lifestyle images
- **Animated Components:** Smooth animations and transitions throughout
- **Testimonial Carousel:** Customer review showcase with image galleries
- **Advanced Typography:** Custom font support with Google Fonts integration
- **Responsive Design:** Mobile-first approach with adaptive layouts
- **Performance Optimized:** Lazy loading and efficient asset management

---

## Technical Architecture

### Build System

The theme uses a modern build pipeline:

```javascript
// gulpfile.js - SASS compilation and asset management
const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
    return gulp
        .src('styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('build/assets'));
});
```

### Directory Structure

```
noblesse-v1/
├── styles/                 # SCSS source files
│   ├── theme.scss         # Main stylesheet entry
│   ├── _globals.scss      # Global styles and utilities
│   ├── _buttons.scss      # Button components
│   ├── _footer.scss       # Footer styling
│   └── component-*.scss   # Individual component styles
├── build/                 # Compiled Shopify theme
│   ├── assets/           # Compiled CSS, JS, and media
│   ├── sections/         # Theme sections
│   ├── snippets/         # Reusable code snippets
│   ├── templates/        # Page templates
│   ├── layout/           # Theme layout files
│   └── config/           # Theme configuration
└── gulpfile.js           # Build configuration
```

---

## Core Components

### 1. Video Banner Component

**Purpose:** Hero sections with full-screen video backgrounds and overlay content.

**Features:**
- Auto-playing, looped, muted videos
- Customizable overlay opacity and color
- Flexible content positioning (9 positions)
- Responsive height controls
- Fallback image support

**Usage Example:**
```liquid
<!-- build/sections/video-banner.liquid -->
<video-banner class="video-banner-wrapper content-position--center-center">
    {{ section.settings.video_id | video_tag: autoplay: true, loop: true, muted: true }}
    <div class="video-banner-wrapper--overlay"></div>
    <div class="video-banner-wrapper--text">
        <h1>{{ section.settings.heading }}</h1>
        <p>{{ section.settings.subheading }}</p>
        <a href="{{ section.settings.button_url }}" class="primary-link">
            {{ section.settings.button_text }}
        </a>
    </div>
</video-banner>
```

**Customization Options:**
- Video file upload
- Banner height (700px, 800px, or full screen)
- Overlay opacity (10-90%)
- Content position and alignment
- Custom button styling

### 2. Shop-the-Look Component

**Purpose:** Interactive product showcases with clickable hotspots on lifestyle images.

**Features:**
- Two layout modes: Standard (dual image) and Slider
- Drag-and-drop hotspot positioning
- Product tooltip with pricing
- Responsive product carousel
- Multiple image support

**Implementation:**
```liquid
<!-- build/sections/shop-the-look-v1.liquid -->
<shop-the-look-standard class="wrapper">
    <div class="shop-the-look-standard__images--left">
        <img src="{{ section.settings.image | img_url: '1920x' }}">
        {% for block in section.blocks %}
            <div class="shop-the-look-standard__images--left-point"
                 style="bottom: {{ block.settings.point_y_position }}%; 
                        left: {{ block.settings.point_x_position }}%;">
                <div class="tooltip-content">
                    <a href="{{ block.settings.slider_item.url }}">
                        <span>{{ block.settings.slider_item.title }}</span>
                        <span>{{ block.settings.slider_item.price | money }}</span>
                    </a>
                </div>
            </div>
        {% endfor %}
    </div>
</shop-the-look-standard>
```

### 3. Animated Featured Product

**Purpose:** Showcase products with sophisticated image animations and layouts.

**Features:**
- Three-image animated layout
- Customizable animation timing
- Product details overlay
- Responsive image priorities
- Custom color schemes

**SCSS Animation System:**
```scss
// styles/component-animated-featured-product.scss
.animated-featured-product {
    .grid__image-wrapper {
        transform: translate3d(0, 0, 0);
        transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

        &:hover {
            transform: translate3d(var(--animation-x), var(--animation-y), 0);
        }
    }
}
```

### 4. Testimonials Carousel

**Purpose:** Customer review showcase with image carousel and animated pagination.

**Features:**
- Automatic image rotation
- Custom pagination display
- Animated circle text elements
- Responsive layout
- Color scheme variations

**JavaScript Implementation:**
```javascript
// component-testimonials.js
class TestimonialsCarousel extends HTMLElement {
    constructor() {
        super();
        this.currentSlide = 0;
        this.slides = this.querySelectorAll('.track__slide');
        this.initializeCarousel();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateCarousel();
    }

    updateCarousel() {
        // Update image positions and content
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('track__slide--main', index === this.currentSlide);
        });
    }
}
customElements.define('testimonials-carousel', TestimonialsCarousel);
```

---

## Section Documentation

### Homepage Template Structure

The homepage template demonstrates the theme's flexibility with multiple section types:

```json
{
  "sections": {
    "video-banner": {
      "type": "video-banner",
      "settings": {
        "banner_height": "700",
        "heading": "Step Into Style",
        "content_position": "top-left"
      }
    },
    "shop-the-look": {
      "type": "shop-the-look-v1",
      "blocks": [
        {
          "type": "Slider",
          "settings": {
            "slider_item": "product-handle",
            "point_x_position": 22,
            "point_y_position": 75
          }
        }
      ]
    }
  }
}
```

### Available Sections

1. **Video Banner** - Hero sections with video backgrounds
2. **Shop-the-Look** - Interactive product showcases
3. **Animated Featured Product** - Dynamic product displays
4. **Testimonials** - Customer review carousels
5. **Rich Text** - Content blocks with typography controls
6. **Running Text** - Animated text banners
7. **Simple Slideshow Banner** - Image carousel with overlays
8. **Generic Hero Banner** - Text-focused hero sections
9. **Latest Posts** - Blog content integration
10. **FAQ** - Accordion-style Q&A sections
11. **Contact Form** - Customer inquiry forms
12. **Coming Soon** - Maintenance page layouts

---

## Style System

### Global CSS Variables

The theme uses a robust CSS custom property system:

```scss
// styles/_globals.scss
:root {
    --font-heading-family: var(--font-heading);
    --font-body-family: var(--font-body);
    --color-text: #121212;
    --color-background: #ffffff;
    --color-button: #121212;
    --color-button-text: #ffffff;
    --page-width: 1200px;
    --page-width-padding: 40px;
}
```

### Component-Based Architecture

Each component has its own SCSS file with modular styling:

```scss
// styles/component-video-banner.scss
.video-banner-wrapper {
    position: relative;
    overflow: hidden;

    &.desktop-height-700 { height: 700px; }
    &.desktop-height-800 { height: 800px; }
    &.desktop-height-full_screen { height: 100vh; }

    video {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
    }
}
```

### Button System

The theme includes a comprehensive button system:

```scss
// styles/_buttons.scss
.primary-link {
    font-size: 2rem;
    line-height: 3.4rem;
    text-decoration: none;
    position: relative;

    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: var(--color-text);
        transition: all 0.2s ease-in;
    }

    &:hover::after {
        width: 0;
        left: 50%;
    }
}

.button {
    padding: 2.2rem 5rem;
    background-color: var(--color-button);
    border: 2px solid var(--color-button);
    transition: all 0.2s ease-in-out;

    &--transparent {
        background-color: transparent;
        color: var(--color-button);
    }
}
```

### Responsive Utilities

Built-in responsive classes for content positioning:

```scss
.content-position {
    &--center-center { justify-content: center; align-items: center; }
    &--top-left { justify-content: flex-start; align-items: flex-start; }
    &--bottom-right { justify-content: flex-end; align-items: flex-end; }

    @include small-screen {
        // Mobile overrides
        &--center-right,
        &--center-left {
            justify-content: center;
            align-items: center;
        }
    }
}
```

---

## JavaScript Features

### Component Registration System

The theme uses modern JavaScript with custom elements:

```javascript
// global.js - Component registration
class VideoTextComponent extends HTMLElement {
    constructor() {
        super();
        this.videoElement = this.querySelector('video');
        this.playButton = this.querySelector('.play-button');
        this.initializeVideo();
    }

    initializeVideo() {
        if (this.playButton) {
            this.playButton.addEventListener('click', () => {
                this.toggleVideo();
            });
        }
    }
}

customElements.define('video-text-component', VideoTextComponent);
```

### Animation Framework

Smooth animations using CSS transforms and JavaScript:

```javascript
// component-animated-featured-product.js
class AnimatedFeaturedProduct extends HTMLElement {
    constructor() {
        super();
        this.animationProperty = this.dataset.animation;
        this.images = this.querySelectorAll('.grid__image-wrapper');
        this.setupAnimations();
    }

    setupAnimations() {
        this.images.forEach((image, index) => {
            const delay = index * 0.1;
            image.style.animationDelay = `${delay}s`;
        });
    }
}
```

### Carousel Implementation

Advanced carousel functionality with smooth transitions:

```javascript
// component-testimonials.js
class TestimonialsCarousel extends HTMLElement {
    nextSlide() {
        const track = this.querySelector('.carousel__track');
        const currentSlide = this.querySelector('.track__slide--main');
        const nextSlide = currentSlide.nextElementSibling || 
                         this.querySelector('.track__slide:first-child');

        // Smooth transition animation
        track.style.transform = `translateX(-${nextSlide.offsetLeft}px)`;

        // Update active states
        currentSlide.classList.remove('track__slide--main');
        nextSlide.classList.add('track__slide--main');
    }
}
```

---

## Template Structure

### Product Card Component

Reusable product display component:

```liquid
<!-- snippets/card-product.liquid -->
<div class="card-wrapper product-card-wrapper">
    <div class="card card--{{ settings.card_style }}">
        <div class="card__media">
            <img srcset="
                {{ card_product.featured_media | image_url: width: 165 }} 165w,
                {{ card_product.featured_media | image_url: width: 360 }} 360w,
                {{ card_product.featured_media | image_url: width: 533 }} 533w
            " alt="{{ card_product.featured_media.alt | escape }}">
        </div>
        <div class="card__content">
            <h3 class="card__heading">
                <a href="{{ card_product.url }}">{{ card_product.title | escape }}</a>
            </h3>
            {% render 'price', product: card_product %}
        </div>
    </div>
</div>
```

### Header Component

Advanced navigation with mega menu support:

```liquid
<!-- sections/header.liquid -->
<sticky-header class="header-wrapper">
    <header class="header page-width">
        <header-drawer data-breakpoint="tablet">
            <!-- Mobile menu implementation -->
        </header-drawer>
        
        <nav class="header__inline-menu">
            {% for link in section.settings.menu.links %}
                <header-menu>
                    <details class="mega-menu">
                        <summary>{{ link.title | escape }}</summary>
                        <div class="mega-menu__content">
                            <!-- Mega menu content -->
                        </div>
                    </details>
                </header-menu>
            {% endfor %}
        </nav>
    </header>
</sticky-header>
```

---

## Configuration Options

### Theme Settings Schema

The theme includes extensive customization options:

```json
{
  "name": "Noblesse",
  "theme_version": "1.0.0",
  "theme_author": "Vevol Media",
  "settings": [
    {
      "name": "Typography",
      "settings": [
        {
          "type": "font_picker",
          "id": "type_header_font",
          "label": "Heading font"
        },
        {
          "type": "range",
          "id": "heading_scale",
          "min": 100,
          "max": 150,
          "label": "Heading scale"
        }
      ]
    },
    {
      "name": "Colors",
      "settings": [
        {
          "type": "color_scheme_group",
          "id": "color_schemes"
        }
      ]
    }
  ]
}
```

### Section Settings

Each section includes comprehensive configuration:

```json
{
  "name": "Video banner",
  "settings": [
    {
      "type": "video",
      "id": "video_id",
      "label": "Video File"
    },
    {
      "type": "select",
      "id": "banner_height",
      "options": [
        { "value": "700", "label": "700px" },
        { "value": "800", "label": "800px" },
        { "value": "full_screen", "label": "Full screen" }
      ]
    },
    {
      "type": "range",
      "id": "overlay_opacity",
      "min": 10,
      "max": 90,
      "unit": "%"
    }
  ]
}
```

---

## Code Examples

### Creating a Custom Section

```liquid
<!-- custom-section.liquid -->
{{ 'component-custom.css' | asset_url | stylesheet_tag }}
<script src="{{ 'component-custom.js' | asset_url }}" defer></script>
<custom-section class="wrapper">
    {% if section.settings.heading != blank %}
        <h2>{{ section.settings.heading }}</h2>
    {% endif %}
    
    <div class="custom-content">
        {{ section.settings.content }}
    </div>
</custom-section>
{% schema %}
{
    "name": "Custom Section",
    "settings": [
        {
            "type": "text",
            "id": "heading",
            "label": "Section Heading"
        },
        {
            "type": "richtext",
            "id": "content",
            "label": "Section Content"
        }
    ],
    "presets": [
        {
            "name": "Custom Section",
            "category": "Custom"
        }
    ]
}
{% endschema %}
```

### Custom JavaScript Component

```javascript
// component-custom.js
class CustomSection extends HTMLElement {
    constructor() {
        super();
        this.heading = this.querySelector('h2');
        this.content = this.querySelector('.custom-content');
        this.initializeComponent();
    }

    initializeComponent() {
        // Add scroll-triggered animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        });

        observer.observe(this);
    }
}

customElements.define('custom-section', CustomSection);
```

### Adding Custom Styles

```scss
// component-custom.scss
.custom-section {
    padding: 4rem 0;

    h2 {
        font-size: clamp(2rem, 5vw, 4rem);
        margin-bottom: 2rem;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
    }

    .custom-content {
        max-width: 800px;
        margin: 0 auto;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out 0.2s;
    }

    &.animate-in {
        h2,
        .custom-content {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
```

---

## Customization Guide

### Adding Custom Fonts

1. **Google Fonts Integration:**
```scss
@import url('https://fonts.googleapis.com/css2?family=Custom+Font:wght@400;700&display=swap');

:root {
    --font-custom: 'Custom Font', sans-serif;
}
```

2. **Custom Font Upload:**
```scss
@font-face {
    font-family: 'CustomFont';
    src: url('{{ "custom-font.woff2" | asset_url }}') format('woff2'),
         url('{{ "custom-font.woff" | asset_url }}') format('woff');
    font-display: swap;
}
```

### Color Scheme Customization

```scss
// Custom color schemes
.color-scheme-custom {
    --color-background: #f8f9fa;
    --color-text: #2d3748;
    --color-button: #4299e1;
    --color-button-text: #ffffff;
}
```

### Adding Animation Effects

```scss
// Custom animations
@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-up {
    animation: slideInUp 0.6s ease-out forwards;
}
```

---

## Performance Features

### Lazy Loading Implementation

```liquid
<!-- Optimized image loading -->
<img src="{{ image | image_url: width: 50 }}"
     data-src="{{ image | image_url: width: 800 }}"
     loading="lazy"
     class="lazyload">
```

### Asset Optimization

```scss
// Optimized CSS delivery
<link rel="preload" href="{{ 'theme.css' | asset_url }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="{{ 'theme.css' | asset_url }}"></noscript>
```

### JavaScript Performance

```javascript
// Efficient event handling
const debouncedHandler = debounce((event) => {
    // Handle scroll or resize events
}, 100);

window.addEventListener('scroll', debouncedHandler);
```

---

## Browser Support

- **Modern Browsers:** Chrome 70+, Firefox 65+, Safari 12+, Edge 79+
- **Mobile:** iOS Safari 12+, Chrome Mobile 70+
- **Progressive Enhancement:** Graceful degradation for older browsers
- **Accessibility:** WCAG 2.1 AA compliant

---

## Conclusion

Noblesse v1 represents a premium Shopify theme that combines modern web technologies with elegant design principles. Its modular architecture, comprehensive customization options, and performance-focused implementation make it ideal for businesses looking to create sophisticated e-commerce experiences.

The theme's strength lies in its video-first approach, interactive components, and smooth animations that engage users while maintaining fast loading times and responsive design across all devices.

For additional support or custom development needs, contact Vevol Media through the official Shopify Theme Store or the theme documentation portal.