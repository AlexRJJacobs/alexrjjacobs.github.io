// Image imports resolve to StaticImageData (src, width, height, blurDataURL). tsconfig only includes src/, so
// next-env.d.ts is not picked up by `yarn compile`; reference the same declarations here instead.
/// <reference types="next/image-types/global" />
