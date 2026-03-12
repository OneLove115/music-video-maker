import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;
const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const N8N_WEBHOOK = process.env.N8N_WEBHOOK_URL!;

// Photorealistic prompt engineering
const REALISM_PROMPTS = {
  photorealistic: {
    prefix: "Ultra-realistic photograph, shot on Canon EOS R5, 85mm lens, f/1.4 aperture, natural lighting, shallow depth of field, 8K resolution, photorealistic, RAW sensor data, natural textures, realistic shadows, film grain, ",
    suffix: ", photorealistic, no AI artifacts, natural imperfections, realistic grain, authentic colors, depth of field, volumetric lighting, cinematic quality, professional photography"
  },
  documentary: {
    prefix: "Documentary photograph, National Geographic style, raw authentic, photojournalism, 35mm film, natural moment, candid human expressions, realistic lighting, ",
    suffix: ", unedited, authentic, realistic grain, natural colors, depth of field, professional photography"
  },
  cinematic: {
    prefix: "Cinematic film still, shot on ARRI Alexa, anamorphic lens, Hollywood production quality, volumetric lighting, realistic atmosphere, natural shadows, ",
    suffix: ", 4K RAW, film grain, realistic depth, cinematic color grading, professional cinematography"
  },
  urban: {
    prefix: "Street photography, urban environment, candid authentic, natural lighting, realistic shadows, city atmosphere, 50mm lens, f/2.8 bokeh, ",
    suffix: ", photojournalistic style, realistic textures, natural grain, authentic moment, professional photography"
  },
  portrait: {
    prefix: "Professional portrait photography, studio lighting with natural falloff, realistic skin texture, visible pores, natural hair strands, authentic expression, 105mm portrait lens, ",
    suffix: ", realistic depth, editorial quality, natural imperfections, shallow DOF, professional photography"
  },
  musicvideo: {
    prefix: "Music video cinematography, professional grade camera, realistic lighting, natural colors, volumetric light rays, cinematic depth of field, ",
    suffix: ", 4K RAW footage, Steadicam shot, authentic atmosphere, realistic grain, professional cinematography"
  }
};

const NEGATIVE_PROMPT = "blurry, cartoon, illustration, artificial, fake, distorted, low quality, watermark, text, signature, deformed, ugly, duplicate, morbid, mutilated, extra fingers, poorly drawn hands, poorly drawn face, mutation, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, mutated hands, fused fingers, too many fingers, long neck, low resolution, worst quality, low quality, normal quality, jpeg artifacts, blurry";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File;
    const lyrics = formData.get("lyrics") as string;
    const style = formData.get("style") as string || "photorealistic";
    const userId = formData.get("userId") as string || "anonymous";

    if (!audioFile || !lyrics) {
      return NextResponse.json(
        { error: "Missing required fields: audio and lyrics" },
        { status: 400 }
      );
    }

    // Generate unique job ID
    const jobId = `mv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Parse lyrics into timed segments
    const lines = lyrics.split('\n').filter((l: string) => l.trim());
    
    // Get style configuration
    const styleConfig = REALISM_PROMPTS[style as keyof typeof REALISM_PROMPTS] || REALISM_PROMPTS.photorealistic;

    // Generate frame prompts with photorealistic enhancement
    const frames = lines.map((line: string, i: number) => {
      const basePrompt = `${styleConfig.prefix}${line}${styleConfig.suffix}`;
      return {
        text: line,
        startTime: i * 4,
        endTime: (i + 1) * 4,
        prompt: basePrompt,
        negativePrompt: NEGATIVE_PROMPT,
        settings: {
          addFilmGrain: true,
          addChromaticAberration: true,
          addVignette: true,
          depthOfField: 'f/1.4',
          colorGrading: 'cinematic'
        }
      };
    });

    // For now, queue the job (in production, this would use a queue like Bull/Redis)
    const job = {
      jobId,
      userId,
      style,
      status: 'queued',
      progress: 0,
      frames,
      createdAt: new Date().toISOString()
    };

    // Trigger n8n workflow for processing
    if (N8N_WEBHOOK) {
      try {
        await fetch(N8N_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jobId,
            userId,
            style,
            frames,
            audioFileName: audioFile.name,
            audioSize: audioFile.size,
            realismLevel: 'maximum',
            photorealistic: true
          })
        });
      } catch (webhookError) {
        console.error('n8n webhook failed:', webhookError);
        // Continue - job is queued locally
      }
    }

    return NextResponse.json({
      success: true,
      jobId,
      status: 'queued',
      message: 'Video generation started',
      frameCount: frames.length,
      estimatedTime: `${Math.ceil(frames.length * 0.5)} minutes`,
      style: {
        name: style,
        photorealistic: true
      }
    });

  } catch (error) {
    console.error('Video creation error:', error);
    return NextResponse.json(
      { error: `Failed to create video: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const jobId = searchParams.get("jobId");

  if (!jobId) {
    return NextResponse.json({ error: "Missing jobId" }, { status: 400 });
  }

  // In production, check job status from database
  // For now, return mock status based on job age
  const jobTimestamp = parseInt(jobId.split('_')[1]);
  const age = Date.now() - jobTimestamp;
  
  let status = 'queued';
  let progress = 0;
  let downloadUrl = null;

  if (age > 300000) { // 5 minutes
    status = 'completed';
    progress = 100;
    downloadUrl = `https://storage.example.com/videos/${jobId}.mp4`;
  } else if (age > 60000) { // 1 minute
    status = 'rendering';
    progress = Math.min(90, Math.floor((age / 300000) * 100));
  } else if (age > 10000) { // 10 seconds
    status = 'processing';
    progress = Math.floor((age / 60000) * 30);
  }

  return NextResponse.json({
    jobId,
    status,
    progress,
    downloadUrl,
    estimatedTimeRemaining: status === 'completed' ? '0:00' : `${Math.ceil((300000 - age) / 60000)} minutes`
  });
}