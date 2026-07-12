# Wedding Invitation Website

A premium, cinematic, single-page wedding invitation. No build step, no framework to install: just static files you can host free on GitHub Pages. Everything a couple needs to change lives in one file, `config.js`.

Live example: **Michael & Miyalanni · December 19, 2026 · Lipa City, Batangas**

---

## What's in this repo

| File | What it is |
|------|------------|
| `index.html` | The whole site: layout, styling, and animations. You normally never touch this. |
| `config.js` | **The only file you edit.** All names, dates, venues, links, story, colors, and photos. |
| `images/` | Put your photos and bank QR codes here. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is. Leave it. |
| `LICENSE` | MIT license. |

---

## Quick start: publish your own copy

You do not need to know how to code. You need a free GitHub account.

### 1. Create the repository
1. Sign in at [github.com](https://github.com) (create a free account if you don't have one).
2. Click the **+** in the top-right → **New repository**.
3. Name it. If you name it exactly `YOUR-USERNAME.github.io`, the site lives at `https://YOUR-USERNAME.github.io`. Any other name works too (the URL just gets the repo name on the end).
4. Set it to **Public** and click **Create repository**.

### 2. Upload the files
1. On the new repo page, click **uploading an existing file**.
2. Drag in `index.html`, `config.js`, `.nojekyll`, `README.md`, `LICENSE`, and the `images` folder.
3. Click **Commit changes**.

### 3. Turn on GitHub Pages
1. In the repo, go to **Settings → Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Pick branch **main** and folder **/ (root)**, then **Save**.
4. Wait 1–2 minutes. Refresh the page and GitHub shows your live link at the top.

That link is your invitation. Share it with your guests.

---

## Make it yours: editing `config.js`

Open `config.js` (on GitHub, click the file then the pencil icon ✏️). Change the text **between the quotation marks**. Do not delete the quotes or the commas.

```js
couple: {
  shortNames: "Michael & Miyalanni",   // <- change this
  heroFirst:  "Michael",               // <- and this
  heroSecond: "Miyalanni",             // <- and this
  ...
}
```

After editing, scroll down and click **Commit changes**. Your live site updates in about a minute.

### Common edits
- **Names, date, venues, map & Facebook links** — top sections of `config.js`.
- **Your love story & timeline** — the `story` section.
- **Entourage** (families, sponsors, bearers, readers) — the `entourage` section. Fill in each `names` field, or leave it `""` to show "To be announced". Use `\n` to list several names on separate lines.
- **Dress code** — the `dressCode` section. Add inspiration photos by setting a `photo` path on the `women`/`men` blocks (e.g. `photo: "images/gown-inspo.jpg"`); leave `""` for a placeholder box.
- **FAQ questions** — the `faq` section.
- **Colors / theme** — the `theme` section at the bottom. Change the hex codes to restyle the whole site.

### Adding your photos
1. Put image files into the `images/` folder (upload them the same way).
2. In `config.js`, point to them. For example:
   ```js
   backgrounds: {
     hero: "images/hero.jpg",
     footer: "images/sunset.jpg",
   },
   ```
3. For the gallery, set the `image` field on each frame:
   ```js
   { cls: "g1", tint: "tint-a", label: "Portrait", image: "images/gallery-1.jpg" },
   ```
Any photo left as `""` (empty) shows an elegant gradient placeholder instead. Keep images under ~500KB each so the page loads fast.

### Opening screen photo (the envelope)
For a photorealistic opening screen, save a **transparent PNG** of the envelope-with-flowers (no text) as `images/envelope.png`. It's already wired via `landing.heroImage` in `config.js`, so it appears automatically once the file exists. Until then, the built-in vector envelope shows instead. The script names sit above it, and the cream paper, lighting, gold-foil shimmer, dust, and open animation are added on top. To use a different filename, change `landing.heroImage`.

### Bank QR codes (gifts section)
Upload your QR images to `images/`, then in `config.js`:
```js
qrCodes: [
  { caption: "Account One", image: "images/qr-bank1.png" },
  { caption: "Account Two", image: "images/qr-bank2.png" },
],
```

---

## Collecting RSVP responses (optional)

By default the RSVP form shows a lovely thank-you message but **does not store anything**. To actually collect replies:

1. Create a free form endpoint at [formspree.io](https://formspree.io) (or use a Google Apps Script web app).
2. Copy the endpoint URL it gives you.
3. Paste it into `config.js`:
   ```js
   rsvp: {
     endpoint: "https://formspree.io/f/xxxxxxx",
   }
   ```
Responses will then arrive in your Formspree inbox / email.

---

## Notes
- Works on all modern browsers (Chrome, Safari, Firefox, Edge) and on phones and tablets.
- Fonts and animation libraries load from public CDNs, so an internet connection is needed to view it (normal for a website).
- **Music:** a song plays automatically the moment a guest taps open the envelope (that tap satisfies the browser rule that audio can only start after a user interaction). Set the song in `config.js` under `music`: paste the YouTube video id into `youtubeId` and the start time into `startSeconds`. A floating button lets guests mute/unmute. Leave `youtubeId: ""` to play a soft generated tone instead, or set `music.enabled: false` to remove music entirely.

Made with love. Congratulations! 🤍
