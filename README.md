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
yarn build     # type-check, then static export into ./out
```

Use yarn, not npm. `yarn.lock` is the lockfile CI installs from, with `--frozen-lockfile`, so commit it whenever
dependencies change.

## Editing content

Nearly everything on the page comes from [`src/data/data.tsx`](src/data/data.tsx): the hero, about section, featured
project carousel, experience, project write-ups, skills, personal builds gallery, and contact details. The shapes those
objects have to match are in [`src/data/dataDef.ts`](src/data/dataDef.ts).

The page runs top to bottom as: Hero, About, Featured (carousel), Experience, Projects, Skills, Personal builds, Contact.

### Keeping it in sync with the resume

The resume PDF is the source of truth. Edit it first, then copy the wording onto the site:

- **Experience** repeats page 1 of the resume word for word.
- **Projects** repeats the portfolio pages (2 and 3), including the Goal / Design / Result labels. Figure captions use
  the PDF's captions where it has one.
- **The featured carousel** gives a short intro and links down to the matching project. Keep numbers out of it, so
  there is only one place a figure can go stale.
- **The PDF** lives at `public/assets/Alex_Jacobs_Resume.pdf`. Overwrite that file rather than adding a new name, so
  the hero button and any links you have already sent keep working. `Alex_Jacobs_Resume_2026.pdf` is an old path
  kept as a copy for links sent before September 2026. Delete it once those links no longer matter.

### Fields worth knowing about

- `availability` on the hero: the co-op term you are applying for. It shows under the summary when set.
- `figures` on a project: photos, renders, or CAD videos with captions, shown under the write-up. Photos open full size
  when clicked. Use `fit: 'contain'` plus `background` (the render's own background colour) for renders that must not
  be cropped, `position` to nudge a photo's crop, and `wide: true` for a diagram that should span the full row at its
  own aspect ratio (it also scrolls sideways at full size on phones instead of shrinking).
- `summary` on a carousel group: the line of context under its title.
- `href` on a carousel card, pointing at a project's `id` (e.g. `#project-usv`) for its "Full write-up" link.
- `backgroundPosition` on a carousel group and `imagePosition` on a card, for nudging crops.
- `note` on an experience or project, for an extra chip such as "Co-op work term".
- Every image needs `alt` text describing what is in it; captions say why it matters.

### Images and videos

Images live in `src/images` and are imported into `data.tsx`. The site is a static export with no image server, so
every file is served exactly as committed. Export WebP at these sizes (longest edge) before adding anything:

| Used as                          | Size    | Quality |
| -------------------------------- | ------- | ------- |
| Carousel and section backdrops   | 1600 px | ~60–70  |
| Hero photo                       | 1440 px | ~78     |
| Project figures, carousel cards  | 1200 px | ~76     |
| Gallery photos                   | 1000 px | ~70     |

Most photos come out between 30 and 200 KB. Originals stay on disk but are listed in `.gitignore`, so re-export from
them rather than committing them.

Animated CAD turntables ship as muted MP4s in `public/media`, with the first frame as a WebP poster in `src/images`.
They play only while on screen, have a pause button, and stay on the poster for visitors who have reduced motion
turned on. To make one from a screen recording or image sequence:

```bash
ffmpeg -i turntable.mov -vf "scale=800:-2,fps=10" -c:v libx264 -crf 24 -preset veryslow -pix_fmt yuv420p \
  -movflags +faststart -an public/media/part-name.mp4
```

### Link previews and icons

`public/og-image.jpg` (1200 × 630) is the image shown when the site is shared on LinkedIn, Slack, or iMessage. Replace
it if the hero changes. The app icons in `public/` are the "AJ" monogram from `favicon.ico`, redrawn in `icon.svg`.

## Credit and license

Originally built from [react-resume-template](https://github.com/tbakerx/react-resume-template)
by Tim Baker. The code is MIT licensed; see [LICENSE](LICENSE). The content (text, photographs, CAD renders, and the
resume) is © Alex Jacobs, all rights reserved, and is not covered by the MIT license.
