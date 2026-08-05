# Future Issues & Design Notes

This file tracks known trade-offs, deferred improvements, and areas to revisit on the portfolio site.

## Implemented but with caveats

### Mobile swipe navigation (`swipe.js`)
- Swipe left/right to move through pages in nav order.
- **Risks**: accidental swipes during diagonal scrolling, conflicts with any future carousels/maps/image galleries, and system edge-gestures on iOS/Android may overlap.
- **Revisit if**: adding horizontal-scrolling content, touch-enabled carousels, or if analytics show unexpected page jumps.

### Work experience expand/collapse toggle
- Icon-only `+`/`−` button (`w-4 h-4`) for showing/hiding job details.
- **Touch target concern**: 16px is below the typical 24–48px mobile accessibility minimum. Verify on real devices; bump to `w-5 h-5` or `w-6 h-6` if mis-taps occur.

## Deferred from earlier review

### Resume/CV PDF download
- Not implemented; only Formspree + LinkedIn exist. Add a PDF if applying through channels that expect one.

### Direct email fallback on `contact.html`
- Currently form-only. A `mailto:` link could be a useful fallback if Formspree is unavailable.

### Per-project GitHub links on `projects.html`
- All cards currently link to the generic `github.com/Arjun-NA` profile. Replace with real per-project repo URLs if the code is public; otherwise consider removing the "Repository →" links.

## Maintenance notes

- `sitemap.xml` and `robots.txt` are static. Remember to update `sitemap.xml` if any new pages are added.
- Meta descriptions and Open Graph tags are hardcoded per page; update when major content changes.
- Favicon is `favicon.svg`. Regenerate or replace with an ICO/PNG if cross-browser SVG support becomes an issue.
