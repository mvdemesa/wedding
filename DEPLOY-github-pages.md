# Publishing the wedding site with GitHub Pages

A free, permanent public link — done entirely in your web browser, no software to install.
Final URL will look like: **https://YOURNAME.github.io/wedding/**

---

## 1. Get the files ready (on your computer)
Make sure these are together in one folder:
- `index.html`
- a `photos` folder containing your images (`hero.jpg`, `gallery-1.jpg` … `gallery-6.jpg`, `reception.jpg`, `gift-1.jpg` …)

If you don't have photos yet, that's fine — the site shows soft placeholders until you add them.

## 2. Make a GitHub account (skip if you have one)
1. Go to **https://github.com** → **Sign up**.
2. Pick a username — this becomes part of your link (e.g. `mikeandmiya` → `mikeandmiya.github.io`).
3. Verify your email.

## 3. Create a repository ("repo" = a project folder online)
1. Click the **+** (top-right) → **New repository**.
2. **Repository name:** `wedding`
3. Set it to **Public**.
4. Click **Create repository**.

## 4. Upload your files
1. On the new repo page, click **uploading an existing file** (the link in the middle), or **Add file → Upload files**.
2. Drag your `index.html` **and** the `photos` folder into the upload area.
   - ⚠️ Upload the **folder too**, not just the HTML — otherwise the photos won't appear.
3. Scroll down → click **Commit changes**.

## 5. Turn on GitHub Pages
1. In the repo, click **Settings** (top menu).
2. Left sidebar → **Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. **Branch:** select `main`, folder `/ (root)` → click **Save**.
5. Wait 1–2 minutes, then refresh. A green box appears with your live link:
   **https://YOURNAME.github.io/wedding/**

That link is what you send to people. 🎉

## 6. Updating the site later
Whenever you change `index.html` or add photos:
1. Open the repo → click the file (or **Add file → Upload files** to add new ones).
2. Make your change / upload → **Commit changes**.
3. The live site refreshes automatically within a minute or two.

---

## Tips
- **Custom domain** (e.g. `mikeandmiya.com`): buy one (~$10–15/yr from Namecheap, Google Domains, etc.), then add it under Settings → Pages → Custom domain.
- **Keep it private-ish:** Pages sites are public to anyone with the link, but not listed anywhere — only people you send the link to will find it.
- **RSVP & countdown** work automatically once live — no extra setup. The RSVP opens the guest's email app addressed to you.
