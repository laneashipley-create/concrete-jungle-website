# Concrete Jungle SF

Website for **Concrete Jungle** — an outdoor workout group in San Francisco. Forged in the fog since May 2020.

- **Repo:** [github.com/laneashipley-create/concrete-jungle-website](https://github.com/laneashipley-create/concrete-jungle-website)
- **Hosting:** Vercel (static site)

## What’s in the site

- **Home** — Hero image, logo, tagline, quick links
- **Our Story** — Origin and history (placeholder text; edit `story.html`)
- **Schedule** — Embedded Google Doc (update the doc; ensure it’s published to web for embed)
- **Location** — “Open in Google Maps” button (your link) + optional map embed
- **Photos** — Gallery from repo + “See more on Instagram”
- **Join Us** — Mailto form → `lane.a.shipley@gmail.com`

## Running locally

No build step. Open `index.html` in a browser, or use a simple local server:

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying to Vercel

1. Push this repo to GitHub: `https://github.com/laneashipley-create/concrete-jungle-website`
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import the repo.
3. Leave **Build Command** and **Output Directory** empty (static HTML).
4. Deploy. Vercel will serve the root and your `index.html` as the homepage.

## Updating content

- **Hero image:** Replace `Assets/hero-image.jpeg`.
- **Story:** Edit the `<p>` blocks in `story.html`.
- **Schedule:** Edit the Google Doc. If the embed stops working, in the Doc use **File → Share → Publish to web** and keep “Anyone with the link” / published.
- **Location:** The “Open in Google Maps” button uses your link. To change the embedded map, get the embed code from Google Maps (Share → Embed a map) and replace the `iframe` in `location.html`.
- **Photos:**  
  - Add image files (e.g. `1.jpg`, `2.jpg`) into `Assets/photos/`.  
  - In `js/main.js`, add their filenames to the `CONCRETE_JUNGLE_PHOTOS` array, e.g. `['1.jpg', '2.jpg']`.
- **Join form email:** Change the `action="mailto:..."` in `join.html` if you use a different address.

## Logo and assets

- **Transparent (used on site):** `Assets/Concrete Jungle - Main Logo - Transparent.svg` — no white background; used in hero, header, and footer.
- **With white background:** `Assets/Concrete Jungle - Main Logo.svg` — original for print or light backgrounds.
- Other colorways in `Assets/` (Red, Gray, White) for use where needed.

---

Concrete Jungle SF · Forged in the fog
