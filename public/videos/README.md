# Videos Directory

Place your hero intro video here.

## Required

- `hero-intro.mp4` — Plays once on page load, then crossfades to static image

### Specifications
- **Duration**: ~10 seconds or less
- **File size**: 1-2MB target (under 3MB max)
- **Resolution**: 1280x720 or match your aspect ratio
- **Codec**: H.264
- **Audio**: None needed (video is muted)
- **Bitrate**: 1.5 Mbps target, 3 Mbps max

### Behavior
1. Video autoplays (muted) when page loads
2. On slow connections (2G/slow-3G), video is skipped entirely
3. If video doesn't start within 3 seconds, static image is shown
4. When video ends, it crossfades to the static hero image
5. Video element is removed from DOM after transition (saves memory)
