# getsideeye.com

Static single-page site for [Side Eye](https://getsideeye.com) — the Chrome extension for local AI chat in the side panel (on-device LiteRT-LM / Gemma 4, plus LM Studio and Ollama).

No build step. Deploy the repo root as-is.

## Local preview

```bash
# Python
python -m http.server 8080

# Node (if you have npx)
npx serve .
```

Open http://localhost:8080

## Deploy (free)

### Cloudflare Pages (recommended for getsideeye.com)

1. Push this folder to a GitHub repo (e.g. `getsideeye-website`).
2. In [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repo. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
4. Deploy. Then **Custom domains** → add `getsideeye.com` and `www.getsideeye.com`.
5. In your domain registrar, point nameservers to Cloudflare (or add the CNAME records Cloudflare shows).

Cloudflare Pages free tier includes unlimited static bandwidth and custom domains.

### GitHub Pages

1. Push to GitHub.
2. Repo **Settings** → **Pages** → Source: **Deploy from branch** → `main` / `/ (root)`.
3. Add a `CNAME` file containing `getsideeye.com` if using a custom domain.
4. At your registrar, create DNS records per GitHub’s custom-domain docs.

### Netlify

Drag-and-drop this folder at [app.netlify.com/drop](https://app.netlify.com/drop), or connect the Git repo with no build command.

## Customize

| File | Purpose |
|------|---------|
| `index.html` | Landing page |
| `privacy-policy.html` | Privacy policy (required for Chrome Web Store) |
| `terms.html` | Terms of service |
| `support.html` | Support / contact page |
| `styles.css` | Shared styles |
| `main.js` | Chrome Web Store URL for Add to Chrome buttons |
| `assets/` | Icons and Open Graph image |

**Chrome Web Store:** Privacy policy URL must be `https://getsideeye.com/privacy-policy.html`. See `CHROME_WEB_STORE.md` in the extension repo for the full submission checklist.

Chrome Web Store listing: https://chromewebstore.google.com/detail/side-eye/mjlmbddfgplihcadmpaeggdeneljklnh

## Related

The Side Eye extension is distributed via the Chrome Web Store. Extension source is private.
