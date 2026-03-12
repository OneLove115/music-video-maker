import { NextRequest, NextResponse } from "next/server";

// Photorealistic image generation using OpenAI DALL-E 3
// In production, this would use Stability AI SDXL for better photorealism

const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;

const REALISM_PROMPTS = {
  photorealistic: {
    prefix: "Ultra-realistic photograph, shot on Canon EOS R5, 85mm lens, f/1.4, natural lighting, 8K, RAW, ",
    suffix: ", photorealistic, film grain, depth of field, professional photography"
  },
  documentary: {
    prefix: "Documentary photograph, National Geographic style, raw, 35mm film, ",
    suffix: ", authentic, realistic grain, professional"
  },
  cinematic: {
    prefix: "Cinematic film still, ARRI Alexa, anamorphic lens, Hollywood quality, ",
    suffix: ", 4K, film grain, cinematic color grading"
  },
  urban: {
    prefix: "Street photography, urban, candid, natural lighting, 50mm f/2.8, ",
    suffix: ", realistic textures, authentic moment"
  },
  portrait: {
    prefix: "Professional portrait, studio lighting, realistic skin texture, 105mm, ",
    suffix: ", editorial quality, shallow DOF"
  },
  musicvideo: {
    prefix: "Music video cinematography, professional camera, volumetric lighting, ",
    suffix: ", 4K RAW, Steadicam, realistic grain"
  }
};

export async function POST(request: NextRequest) {
  try {
    const { prompt, style = 'photorealistic', count = 1 } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Missing prompt' }, { status: 400 });
    }

    if (!OPENAI_API_KEY) {
      return NextResponse.json({ 
        error: 'OpenAI API key not configured. Please add OPENAI_API_KEY to environment variables.',
        hint: 'Go to Vercel Dashboard → Settings → Environment Variables'
      }, { status: 500 });
    }

    const styleConfig = REALISM_PROMPTS[style as keyof typeof REALISM_PROMPTS] || REALISM_PROMPTS.photorealistic;
    
    const fullPrompt = `${styleConfig.prefix}${prompt}${styleConfig.suffix}`;

    // Call OpenAI DALL-E 3 API
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: fullPrompt,
        n: Math.min(count, 4), // DALL-E 3 max is 4
        size: '1792x1024', // Landscape for video frames
        quality: 'hd',
        response_format: 'url'
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error:', error);
      return NextResponse.json({ 
        error: 'Failed to generate images',
        details: error 
      }, { status: 500 });
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      images: data.data.map((img: { url: string; revised_prompt?: string }) => ({
        url: img.url,
        revisedPrompt: img.revised_prompt
      })),
      style,
      photorealistic: true
    });

  } catch (error) {
    console.error('Image generation error:', error);
    return NextResponse.json({ 
      error: `Failed to generate images: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 });
  }
}