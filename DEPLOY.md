# Deploying this portfolio

## Build

From the project root:

```bash
npm install
npm run build
```

Static files are output to `dist/`. Point your web server document root at `dist`, or upload that folder to a static host.

## EmailJS (contact form)

The contact form reads these Vite environment variables at build time:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Copy `.env.example` to `.env`, fill in values from [EmailJS](https://www.emailjs.com/), then rebuild. On hosting platforms, add the same variables in the project settings (names must match the `VITE_*` names above).

## Suggested hosts

### Vercel

Works well with the existing `@vercel/analytics` usage in `src/App.jsx`. Connect the Git repo or deploy the `dist` output, set the `VITE_EMAILJS_*` env vars, and redeploy.

### Netlify / Cloudflare Pages

Build command: `npm run build`. Publish directory: `dist`. Set the same `VITE_EMAILJS_*` variables. If you use a host other than Vercel, you may remove the `Analytics` import from `src/App.jsx` if you do not need analytics.

### Apache / nginx

After `npm run build`, configure the virtual host to serve `dist/` as the document root, or serve `dist` behind a reverse proxy.
