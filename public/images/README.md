# Images Directory

Place your images here. Required for launch:

## Hero Assets (in parent directories)
- `hero-bg.jpg` — Static hero background (shows after video ends or on slow connections)
  - Recommended: 1920×1080 minimum, atmospheric/dreamy aesthetic
  - Located at: `/public/images/hero-bg.jpg`

- `hero-intro.mp4` — Hero intro video (~10 sec, 1-2MB, H.264)
  - Located at: `/public/videos/hero-intro.mp4`
  - Optional: site works without it, falls back to static image

## Featured Section
- `featured-placeholder.jpg` — Image for featured stories section
  - Pink/warm tones work well with the accent color
  - Located at: `/public/images/featured-placeholder.jpg`

## Journal Images
- `journal/` — Folder for journal post images
  - Referenced in frontmatter: `image.src: "/images/journal/your-image.jpg"`
  - Gradient placeholders display when no image specified

## Story Covers (optional)
- `stories/` — Folder for story cover images
  - Referenced in frontmatter: `coverImage.src: "/images/stories/your-cover.jpg"`
