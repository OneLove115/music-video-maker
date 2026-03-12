## Visual Styles - Photorealistic Focus

All styles are optimized for maximum realism with natural imperfections.

### 1. Photorealistic (Default)
**Prompt Prefix:** "Ultra-realistic photograph, shot on Canon EOS R5, 85mm lens, f/1.4 aperture, natural lighting, shallow depth of field, 8K resolution, photorealistic, RAW sensor data, natural skin tones, realistic textures, subtle film grain"

**Imperfections:**
- Lens vignetting
- Chromatic aberration on edges
- Natural motion blur
- Film grain overlay
- Subtle lens flare
- Depth of field variations

### 2. Documentary Style
**Prompt:** "Documentary photograph, National Geographic style, raw and unedited, authentic moment, natural lighting, candid composition, photojournalism, 35mm film, realistic color grading, human imperfections visible"

### 3. Cinematic Realism
**Prompt:** "Cinematic film still, shot on ARRI Alexa, anamorphic lens, realistic lighting, Hollywood production quality, natural shadows, atmospheric haze, volumetric lighting, photorealistic CGI, movie poster quality, 4K"

### 4. Urban Street
**Prompt:** "Street photography, urban environment, authentic candid, natural lighting, realistic shadows, city atmosphere, candid human expressions, photojournalistic style, 50mm lens, f/2.8, natural bokeh"

### 5. Portrait Realism
**Prompt:** "Professional portrait photography, studio lighting with natural falloff, realistic skin texture, visible pores, natural hair strands, authentic expression, 105mm portrait lens, realistic depth, editorial quality"

### 6. Music Video Cinematic
**Prompt:** "Music video cinematography, realistic lighting, natural colors, professional grade camera, Steadicam shot, authentic atmosphere, real textures, volumetric light rays, cinematic depth of field, 4K RAW footage"

---

## AI Model Selection for Realism

### Primary: Stability AI SDXL Turbo
- Best for photorealistic human faces
- Lowest latency
- Natural imperfections built-in

### Secondary: DALL-E 3
- High detail resolution
- Natural lighting
- Good for abstract + realistic blend

### Tertiary: Midjourney v6
- Best overall photorealism
- Natural film grain
- Authentic depth of field
- Requires Discord API bridge

---

## Prompt Engineering for Realism

```javascript
const buildRealisticPrompt = (basePrompt, style) => {
  const realismPrefix = {
    photorealistic: "Ultra-realistic photograph, 8K resolution, shot on professional camera, natural lighting, authentic textures, realistic shadows, film grain, depth of field, ",
    documentary: "Authentic documentary photograph, raw unedited, natural moment, photojournalism style, 35mm film, ",
    cinematic: "Cinematic film still, professional production, ARRI camera, anamorphic lens, realistic CGI, atmospheric lighting, ",
    urban: "Street photography, candid authentic, natural urban lighting, realistic textures, 50mm lens, f/2.8 bokeh, ",
    portrait: "Professional portrait, realistic skin texture, studio lighting, natural skin tones, visible pores and imperfections, ",
    musicvideo: "Music video cinematography, professional grade, realistic atmosphere, volumetric lighting, natural depth of field, "
  };

  const realismSuffix = ", photorealistic, no artifacts, no AI distortions, natural imperfections, realistic grain, authentic colors, RAW sensor quality";

  return `${realismPrefix[style]}${basePrompt}${realismSuffix}`;
};
```

---

## Post-Processing for Realism

1. **Film Grain Overlay** - Subtle ISO noise matching real cameras
2. **Chromatic Aberration** - Natural lens imperfections on edges
3. **Lens Vignetting** - Darker corners from real lenses
4. **Motion Blur** - Natural camera movement
5. **Depth of Field** - Background blur from aperture
6. **Color Grading** - Cinematic LUTs for film look
7. **Halation** - Subtle glow on bright areas (film effect)