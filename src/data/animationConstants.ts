// src/data/animationConstants.ts
// All timing in milliseconds — adjust here only, never inline

export const ANIM = {
  // Slide engine
  SLIDE_DURATION:        3000,   // ms per slide (reduced from 6000)
  SLIDE_TRANSITION:       500,   // cross-fade duration (faster)
  BG_ZOOM_SCALE:         1.08,   // subtle zoom end value (enhanced)

  // Widget
  WIDGET_INTERVAL:       3000,   // independent of slide timer (reduced)

  // Entry animations (page load, Slide 1 only)
  EYEBROW_DELAY:          150,
  EYEBROW_DURATION:       400,
  HEADLINE_WORD_STAGGER:   50,   // per word
  HEADLINE_START:          350,
  SUBTITLE_DELAY:          750,
  SUBTITLE_DURATION:       400,
  CHIPS_DELAY:             950,
  CHIPS_STAGGER:            80,
  CTA_DELAY:              1150,
  CTA_DURATION:            350,
  WIDGET_DELAY:           1300,
  WIDGET_DURATION:         500,
  CONTROLS_DELAY:         1500,
  CONTROLS_DURATION:       400,
  COUNTUP_DELAY:          1500,
  COUNTUP_DURATION:       1500,

  // Slide transition (not load — simultaneous, no stagger)
  CONTENT_OUT:             250,  // fade out old content
  CONTENT_IN:              350,  // fade in new content
  CONTENT_IN_DELAY:        350,  // after fade out completes
};