# bradlet.com

Personal portfolio website for Bradley Thompson — Senior Platform Engineer.

Built with React, TypeScript, and Vite. Deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deployment

Pushes to `main` automatically deploy via GitHub Actions.

The site is served at [bradlet.com](https://www.bradlet.com) via a CNAME record pointing to `bradlet.github.io`.

### GitHub Pages Setup

1. In repo Settings > Pages, set source to **GitHub Actions**
2. Add a CNAME DNS record: `bradlet.com` → `bradlet.github.io`
3. Enable "Enforce HTTPS" once the certificate provisions
