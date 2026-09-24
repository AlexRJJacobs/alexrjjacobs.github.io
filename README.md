# alexrjjacobs.github.io

My engineering portfolio, live at [alexrjjacobs.github.io](https://alexrjjacobs.github.io).

Alex Jacobs, Mechatronics Engineering at the University of Waterloo. The site covers my
co-op work at Field AI and the UCLA Sensing and Robotics for Infrastructure Lab, the
Panopsys airborne object tracking system, and a gallery of costume and prop builds.

## Stack

- Next.js (Pages Router), exported as a static site
- React, TypeScript, Tailwind CSS
- Deployed to GitHub Pages by `.github/workflows/nextjs.yml` on every push to `main`

## Running it

```bash
yarn install
yarn dev
```

Then open http://localhost:3000.

```bash
yarn build     # static export into ./out
```

Use yarn, not npm. `yarn.lock` is the lockfile CI installs from.

## Editing content

Nearly everything on the page comes from [`src/data/data.tsx`](src/data/data.tsx): the hero
copy, about section, skills, resume timeline, featured project carousel, and gallery. The
shapes those objects have to match are in [`src/data/dataDef.ts`](src/data/dataDef.ts).

Images live in `src/images` and are imported directly into `data.tsx`. Because the site is a
static export, `next.config.js` sets `images.unoptimized`, so whatever file you import is
served at full size. Resize images before adding them, around 2000px on the long edge.

### Keeping it in sync with the resume

The resume PDF is the source of truth. Edit it first, then copy the wording onto the site:

- **Experiences** repeats page 1 of the resume word for word, in the same order.
- **Professional Projects** repeats the portfolio pages (2 and 3), including the Goal / Design / Result labels.
- **The featured carousel** gives a short intro and links down to the matching project. Keep numbers out of it, so
  there is only one place a figure can go stale.
- **The PDF** lives at `public/assets/Alex_Jacobs_Resume.pdf`. Overwrite that file rather than adding a new name, so
  the hero button and any links you have already sent keep working. `Alex_Jacobs_Resume_2026.pdf` is an old path
  kept as a copy for links sent before September 2026. Delete it once those links no longer matter.

Optional per-item fields worth knowing about:

- `backgroundPosition` on a carousel section, for nudging the backdrop crop
- `imagePosition` on a carousel card, for nudging that card's image crop
- `href` on a carousel card, pointing at a timeline entry's `id` (e.g. `#project-usv`) for its "See the full
  write-up" link
- `note` on a timeline entry, for an extra chip such as "Co-op work term"

## Credit

Originally built from [react-resume-template](https://github.com/tbakerx/react-resume-template)
by Tim Baker, MIT licensed. See [LICENSE](LICENSE).
