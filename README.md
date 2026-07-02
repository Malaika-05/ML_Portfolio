# Portfolio — AI / ML Engineer

A single-page portfolio site built to showcase AI/ML projects, technical stack, and academic background. Designed around a graphite-and-emerald visual identity with a signature "pipeline" motif (`input → embed → retrieve → generate`) that reflects the RAG systems featured in the work.

**[Live Demo](#)** <!-- replace with your deployed link -->

---

## ✦ Preview

<!-- Add a screenshot once deployed -->
<!-- ![Portfolio preview](preview.png) -->

---

## ✦ Features

- Fully responsive single-page layout (desktop → mobile)
- Custom design system: `Fraunces` (display), `Inter` (body), `JetBrains Mono` (data/labels)
- Sections: Hero, Profile stats, Tech stack, Featured builds, Education/Experience, Contact
- Scroll-reveal animations via `IntersectionObserver`
- Respects `prefers-reduced-motion` for accessibility
- No frameworks or build step — plain HTML/CSS/JS

---

## ✦ Tech Stack

| Layer      | Tools |
|------------|-------|
| Markup     | HTML5 |
| Styling    | CSS3 (custom properties / design tokens) |
| Behavior   | Vanilla JavaScript |
| Fonts      | Google Fonts (Fraunces, Inter, JetBrains Mono) |

---

## ✦ Project Structure

```
portfolio/
├── index.html      # Page structure and content
├── style.css        # Design tokens, layout, responsive rules
├── script.js         # Scroll effects and reveal animations
└── README.md
```

---

## ✦ Getting Started

No build tools or dependencies required.

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

Then simply open `index.html` in a browser, or serve it locally:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Visit `http://localhost:8000`.

---

## ✦ Customization

- **Colors / type / spacing** — all defined as CSS custom properties at the top of `style.css` under `:root`
- **Content** — edit sections directly in `index.html` (Hero, Stack, Builds, Experience, Contact)
- **Contact links** — update the placeholder email/GitHub/LinkedIn/Fiverr links in the `#contact` section

---

## ✦ Deployment

This site is static and can be deployed on any static host:

- **GitHub Pages** — enable Pages in repo settings, pointing to `main` branch, root folder
- **Vercel / Netlify** — import the repo, no build command needed
- **HuggingFace Spaces (static)** — upload files directly

---

## ✦ Author

**Your Name**
AI Undergraduate, Abdul Wali Khan University Mardan (AWKUM)
[Email](mailto:your.email@example.com) · [GitHub](https://github.com/yourusername) · [LinkedIn](https://linkedin.com/in/yourusername) · [Fiverr](https://fiverr.com/yourusername)

---

## ✦ License

This project is open for personal reference. If you reuse the design or structure, a credit link back is appreciated.
