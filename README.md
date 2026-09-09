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

Two optional per-item fields worth knowing about:

- `backgroundPosition` on a carousel section, for nudging the backdrop crop
- `imagePosition` on a carousel card, for nudging that card's image crop

## Credit

Originally built from [react-resume-template](https://github.com/tbakerx/react-resume-template)
by Tim Baker, MIT licensed. See [LICENSE](LICENSE).
