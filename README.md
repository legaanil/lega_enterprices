# Lega Enterprises website

Marketing site for Lega Enterprises (Jodhpur): websites, mobile apps and 3D walkthrough videos. Built with Vite, React 18 and react-router-dom.

## Run locally
```
npm install
npm run dev        # http://localhost:5173
```

## Build and serve
```
npm run build
npm start          # serves dist/ with SPA fallback on $PORT (default 3000)
```

## Deploy (Railway)
Connect this repo in Railway. It runs `npm run build` then `npm start` automatically.
Optional variable: `VITE_GA_ID` (Google Analytics ID, set before build).

## Where to edit
- `src/data.jsx`: services, FAQs, industries, and the `site` object (email, hours, social links, team, reviews)
- `src/Home.jsx`, `src/Service.jsx`, `src/App.jsx`: pages and layout
- `src/style.css`: styling; `public/`: favicon, og image, robots.txt, sitemap.xml
