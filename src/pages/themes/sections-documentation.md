# Noblesse Theme Sections Documentation

A comprehensive guide to all major sections in the Noblesse Shopify theme. This documentation covers features, settings, blocks, snippets, presets, and best practices for each section. Use this as a reference for theme customization, merchant onboarding, and marketing.

---

## Animated Featured Product

**Feature summary:**
Showcase a single product with up to three images in a visually dynamic, animated layout. Ideal for highlighting best sellers or new arrivals.

**Settings and customization:**
- Section size (wrapper/no-wrapper)
- Header text, size, style, fill
- Product selection
- Show/hide product details (title, price, button)
- Button text and URL
- Image priority and animation style
- Hide images on mobile, mobile image alignment
- Color scheme
- Padding (desktop/mobile)

**Blocks:**
- Up to 3 image blocks, each with:
  - Image picker
  - Aspect ratio (landscape, wide, portrait, square, original)

**Snippets used:**
- `image`: Renders product or block images with responsive and placeholder logic.
- `price`: Renders product price.
- `button`: Renders the call-to-action button.

**Presets:**
- "Best sellers" with three image blocks pre-configured.

**Usage tips:**
- Use for hero product moments on home or landing pages.
- Combine with color schemes for visual impact.
- Use the button to drive to product or collection pages.

---

## Social Gallery

**Feature summary:**
Display a grid of images, headings, and animated hashtags—perfect for social proof, UGC, or brand campaigns. Supports parallax headings and animated marquees.

**Settings and customization:**
- Container size (wrapper, no-wrapper, wrapper-images, no-wrapper-padding)
- Internal gap between images
- Mobile horizontal scroll (allow/disable)
- Animation speed for hashtags
- Pause hashtags on hover
- Hashtag and background colors
- Color scheme
- Padding (desktop/mobile)

**Blocks:**
- Heading: Customizable text, link, font size, style, fill, offset, parallax animation
- Hashtags: Text, link, direction (left/right), style
- Image: Image picker, link, open in new page

**Snippets used:**
- `image`: Renders each image block

**Presets:**
- Heading, two hashtags (left/right), six images

**Usage tips:**
- Use for Instagram feeds, brand campaigns, or partner showcases.
- Combine animated hashtags with images for dynamic visual interest.

---

## Announcement Bar

**Feature summary:**
A flexible bar for site-wide announcements, promos, or info. Supports looping, fading, or static display with multiple messages.

**Settings and customization:**
- Animation style (loop, fading, static)
- Show/hide bottom border
- Animation speed
- Background and text color

**Blocks:**
- Announcement: Text and optional link

**Snippets used:**
- None (self-contained)

**Presets:**
- Three announcement blocks

**Usage tips:**
- Use for sales, shipping info, or urgent messages.
- Looping/fading draws more attention; static is best for single messages.

---

## Collection List

**Feature summary:**
Showcase multiple collections in a grid with vertical and horizontal text, parallax effects, and optional call-to-action button.

**Settings and customization:**
- Number of collections (2–5)
- Phone display (scroll/grid)
- Aspect ratio (landscape/portrait)
- Section and text colors
- Horizontal/vertical text, font size, animation
- Show/hide button, button label/type
- Overlay color and opacity
- Padding (desktop/mobile)

**Blocks:**
- Collection: Pick collection, custom image, title replacement

**Snippets used:**
- `card-collection`: Renders each collection card
- `button`: Renders the call-to-action button

**Presets:**
- Default with five collection blocks

**Usage tips:**
- Use for category navigation or featured collections.
- Add custom images for more control over visuals.

---

## Rich Text

**Feature summary:**
Flexible text section for storytelling, brand messaging, or calls to action. Supports supratitle, title, description, and button blocks.

**Settings and customization:**
- Section size (wrapper/no-wrapper/slim)
- Content alignment (desktop/mobile)
- Color scheme
- Padding (desktop/mobile)

**Blocks:**
- Supratitle: Text, uppercase
- Title: Text, heading size, fill, style
- Description: Rich text
- Button: Label, URL, open in new tab, button type

**Snippets used:**
- `button`: Renders the call-to-action button

**Presets:**
- Supratitle, title, description, button

**Usage tips:**
- Use for brand stories, value props, or section intros.
- Combine with color schemes for emphasis.

---

## Image with Text

**Feature summary:**
A versatile section for pairing images (up to two) with rich text and a call-to-action. Supports animated circle text overlay.

**Settings and customization:**
- Section size (wrapper/no-wrapper)
- Image position (desktop/mobile)
- Image style (stacked/normal)
- Aspect ratio
- Content alignment (desktop/mobile)
- Color scheme
- Padding (desktop/mobile)

**Blocks:**
- Supratitle, title, description, button (as in Rich Text)
- Image: Up to two images
- Circle text: Animated text overlay, color, autoplay

**Snippets used:**
- `image`: Renders images
- `animated-circle-text`: Renders animated circle text
- `button`: Renders the call-to-action button

**Presets:**
- Supratitle, title, description, button, two images, circle text

**Usage tips:**
- Use for feature highlights, brand stories, or product spotlights.
- Circle text is great for promos or unique CTAs.

---

## Toasts

**Feature summary:**
Display notification popups for cookies, custom messages, or newsletter subscriptions. Supports auto-close, custom colors, and multiple types.

**Settings and customization:**
- None (all config via blocks)

**Blocks:**
- Cookies: Color scheme, border width, button type, show after (seconds)
- Custom: Color scheme, border width, title, content, show after, auto-close, close after (seconds)
- Subscription: Color scheme, border width, title, content, auto-close, close after (seconds)

**Snippets used:**
- `button`: For cookie consent
- `icons`: For close button

**Presets:**
- Cookies, custom, and subscription toasts

**Usage tips:**
- Use for GDPR compliance, promo popups, or newsletter confirmations.
- Limit to 5 toasts per section for best UX.

---

## Shop the Look

**Feature summary:**
Interactive section for showcasing shoppable outfits or bundles. Supports standard (side-by-side) and slider layouts, with clickable hotspots and tooltips.

**Settings and customization:**
- Layout (slider/standard)
- Section size
- Main/secondary images
- Color scheme
- Heading, subheading, button text/URL/type
- Show tooltips, show pagination (slider only)
- Aspect ratio
- Padding (desktop/mobile)

**Blocks:**
- Product (Slider): Product picker, point position (x/y), color, tooltip position/text, image side (standard only)

**Snippets used:**
- `image`: Renders main/secondary images
- `product-item`: Renders product cards in slider
- `button`: Renders call-to-action
- `splide-arrows`: Renders slider arrows

**Presets:**
- Three product points pre-configured

**Usage tips:**
- Use for lookbooks, bundles, or cross-sell moments.
- Tooltips can show product info, price, and direct links.

---

## Stories

**Feature summary:**
Instagram-style stories for products, collections, product lists, and videos. Interactive, swipeable, and modal-based with progress bars and CTAs.

**Settings and customization:**
- Color scheme
- Section size
- Heading (desktop/mobile), size, fill, style
- Preview type (default/circles), circles style, title visibility, color scheme
- Slide timer, reverse button/info colors, CTA button style
- Padding (desktop/mobile)

**Blocks:**
- Product: Product picker, preview title, up to 4 images
- Collection: Collection picker, preview title, up to 4 images
- Product List: Up to 6 products, preview image/title
- Product Video: Product, video, preview image selector/title
- Collection Video: Collection, video, preview image selector/title

**Snippets used:**
- `story-preview-markup`: Renders story preview
- `story-product-action`: Renders product CTAs
- `price`: Renders product price
- `icons`: For navigation and controls

**Presets:**
- Product, collection, product list, product video, collection video blocks

**Usage tips:**
- Use for product launches, collection highlights, or UGC.
- Combine with color schemes and CTAs for engagement.

---

## Text Testimonials

**Feature summary:**
Carousel of customer testimonials with optional image/icon, parallax animation, and flexible alignment.

**Settings and customization:**
- Section title, heading size, fill, style
- Autoplay, show arrows, animation speed
- Content alignment (desktop/mobile)
- Icon/image, aspect ratio, animation, alignment/position (desktop/mobile)
- Color scheme
- Padding (desktop/mobile)

**Blocks:**
- Testimonial: Author, heading size, uppercase, testimonial text

**Snippets used:**
- `image`: For testimonial image
- `icons`: For testimonial icon
- `splide-arrows`: For carousel navigation

**Presets:**
- Three sample testimonials

**Usage tips:**
- Use for social proof, reviews, or press quotes.
- Combine with brand imagery or icons for extra impact.

---

## Coming Soon

**Feature summary:**
A visually rich banner for product launches, events, or site updates. Supports parallax image, animated text, and custom links.

**Settings and customization:**
- Desktop/mobile images
- Enable animation
- Link URL
- Top/bottom text, subtitles
- Font size (desktop/tablet/phone)
- Text offset (desktop/mobile)
- Color scheme
- Padding (desktop/mobile)

**Blocks:**
- None

**Snippets used:**
- `image`: For desktop/mobile images

**Presets:**
- Default coming soon banner

**Usage tips:**
- Use for product launches, collection drops, or site maintenance.
- Combine with parallax and animation for extra attention.

---

## Main Blog

**Feature summary:**
Blog index section with filtering, pagination, and flexible layouts. Supports tag filtering, parallax, and custom article cards.

**Settings and customization:**
- Allow main article
- Paginate by (4–20)
- Filter articles by tag (all/exclude)
- Exclude tags (comma-separated)
- Filters alignment
- Button type/style
- Section heading, size, fill, style, align
- Article aspect ratio, content alignment, show author/date/excerpt/arrow
- CTA label
- Layout (desktop/mobile)
- Color scheme
- Padding (desktop/mobile)

**Blocks:**
- None (renders blog articles)

**Snippets used:**
- `article-item`: Renders each article
- `pagination`: Renders pagination controls
- `button`: For tag filters

**Presets:**
- Main blog with default settings

**Usage tips:**
- Use for content marketing, news, or press.
- Exclude tags to control filter options.

---

## Logo List

**Feature summary:**
Display a row or grid of partner, client, or certification logos. Supports links, custom aspect ratios, and flexible alignment.

**Settings and customization:**
- Title, text align (desktop/phone), uppercase
- Color scheme
- Justify content (space-around/evenly/between)
- Section size
- Inline/vertical padding
- Images aspect ratio
- Padding (desktop/mobile)

**Blocks:**
- Logo: Image, link, open in new page

**Snippets used:**
- `image`: For each logo

**Presets:**
- Five logo blocks

**Usage tips:**
- Use for trust signals, press, or brand partners.
- Adjust aspect ratio for best logo fit.

---

# End of Documentation 