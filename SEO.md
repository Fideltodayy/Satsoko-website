# Satsoko SEO Implementation

## What's Been Implemented

### 1. Rich HTML Metadata (`index.html`)

**Primary tags:**
- `<title>` — Keyword-rich, under 60 characters: "Satsoko — Buy Bitcoin Instantly with KES via M-Pesa"
- `<meta name="description">` — Compelling summary under 160 characters targeting core search intent
- `<meta name="keywords">` — Targeted terms: "buy bitcoin Kenya", "bitcoin M-Pesa", "KES to bitcoin", "Lightning wallet", etc.
- `<link rel="canonical">` — Points to `https://satsoko.com/` to prevent duplicate content issues

**Open Graph (Facebook, LinkedIn, WhatsApp, Telegram):**
- `og:title`, `og:description`, `og:image` — Controls how links appear when shared
- `og:locale` set to `en_KE` for Kenyan English localisation
- `og:site_name` set to "Satsoko"
- `og:image` points to `/icons/satsoko.png` so the logo appears in link previews

**Twitter/X Cards:**
- `twitter:card` set to `summary` (square logo preview)
- `twitter:site` for the brand handle
- `twitter:title`, `twitter:description`, `twitter:image` mirror the OG tags

**Geo tags:**
- `geo.region` = `KE`, `geo.placename` = `Nairobi` — Signals local relevance to search engines

**Theme color:**
- `theme-color` set to `#F7931A` (Satsoko orange) — Colours browser chrome on mobile

### 2. Structured Data (JSON-LD)

A `SoftwareApplication` schema is embedded in `index.html`:
- Tells Google this is a finance app available on Android and iOS
- Includes name, description, URL, image, and area served (Kenya)
- Can trigger rich results in Google Search (app cards, knowledge panels)

### 3. Sitemap (`public/sitemap.xml`)

Lists the homepage and all section anchors with priorities:
- `/` — priority 1.0, weekly updates
- `/#how-it-works`, `/#wallets`, `/#app-features` — priority 0.8
- `/#what-is-bitcoin`, `/#use-cases`, `/#faq` — priority 0.7
- `/#testimonials` — priority 0.6

Each section component has a matching `id` attribute so these anchors resolve.

### 4. Robots.txt (`public/robots.txt`)

- Allows all major crawlers (Googlebot, Bingbot, Twitterbot, facebookexternalhit)
- Includes `Sitemap: https://satsoko.com/sitemap.xml` directive

### 5. Section IDs for Deep Linking

Every section component has an `id` attribute:
- `#how-it-works` — HowItWorks
- `#wallets` — WalletRecommendations
- `#what-is-bitcoin` — WhatIsBitcoin
- `#use-cases` — HowToUseBitcoin
- `#faq` — FAQ
- `#app-features` — AppFeatures
- `#testimonials` — Testimonials

These enable anchor links from the sitemap, nav links, and external references.

---

## Maintaining Good SEO Practices

### Content Updates
- **Keep the sitemap `<lastmod>` dates current** — Update them whenever section content changes significantly
- **Update `<meta name="description">`** if the product positioning evolves
- **Add new pages to the sitemap** when the site grows beyond a single page (e.g., `/blog`, `/about`, `/privacy`)

### Performance (Core Web Vitals)
Google ranks pages partly on loading performance:
- **Keep images optimised** — The wallet icons use WebP format (small file sizes). Any new images should also be WebP or AVIF
- **Lazy-load below-the-fold images** — Add `loading="lazy"` to images that aren't in the initial viewport
- **Minimise JavaScript** — Vite's tree-shaking handles this. Avoid adding heavy dependencies unnecessarily
- **Test with Lighthouse** — Run `npx lighthouse https://satsoko.com --view` or use Chrome DevTools > Lighthouse tab

### Social Sharing
- **Test link previews** before sharing:
  - Facebook: https://developers.facebook.com/tools/debug/
  - Twitter/X: https://cards-dev.twitter.com/validator
  - LinkedIn: https://www.linkedin.com/post-inspector/
- **Use a dedicated OG image** — The current setup uses the logo. For better engagement, create a 1200x630px branded preview image and update `og:image` + `og:image:width`/`og:image:height`
- **Update `twitter:card` to `summary_large_image`** if you switch to a wider OG image

### Technical SEO
- **Submit the sitemap to Google Search Console** at https://search.google.com/search-console — Add the property, verify ownership, then submit `sitemap.xml`
- **Submit to Bing Webmaster Tools** at https://www.bing.com/webmasters
- **Monitor crawl errors** in Search Console and fix any reported issues
- **Add `hreflang` tags** if the site is translated into Swahili or other languages:
  ```html
  <link rel="alternate" hreflang="en" href="https://satsoko.com/" />
  <link rel="alternate" hreflang="sw" href="https://satsoko.com/sw/" />
  ```

### When Adding New Pages
1. Add the URL to `public/sitemap.xml` with appropriate `<priority>` and `<changefreq>`
2. Ensure the new page has its own `<title>` and `<meta name="description">`
3. Add JSON-LD structured data if applicable (e.g., `FAQPage` schema for a standalone FAQ page, `Article` for blog posts)
4. Use semantic HTML (`<main>`, `<section>`, `<article>`, `<h1>`–`<h6>` hierarchy)

### Structured Data Expansion
Consider adding these schemas as the site grows:
- **`FAQPage`** — Marks up the FAQ section for rich results (expandable answers directly in Google)
- **`Organization`** — Company details, logo, social profiles
- **`BreadcrumbList`** — If multi-page navigation is added
- **`HowTo`** — For the "Buy Bitcoin in 3 steps" section

### Monitoring
- **Google Search Console** — Track impressions, clicks, and ranking positions
- **Google Analytics / Plausible / Umami** — Track user behaviour (consider a privacy-respecting option given the Bitcoin audience)
- **Ahrefs / SEMrush** (optional) — Track keyword rankings and backlink profile
