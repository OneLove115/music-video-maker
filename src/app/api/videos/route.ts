import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File;
    const lyrics = formData.get("lyrics") as string;
    const style = formData.get("style") as string;
    const userId = formData.get("userId") as string;

    if (!audioFile || !lyrics) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generate unique job ID
    const jobId = `mv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // In production, we would:
    // 1. Upload audio to storage (S3/Supabase)
    // 2. Create job in database
    // 3. Trigger n8n webhook for processing
    // 4. Return job ID for status tracking

    const n8nWebhook = process.env.N8N_WEBHOOK_URL || "https://n8n-production-7804.up.railway.app/webhook/music-video";

    // Trigger n8n workflow
    const n8nResponse = await fetch(n8nWebhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobId,
        userId,
        style,
        lyrics,
        audioUrl: `pending-upload://${jobId}`,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!n8nResponse.ok) {
      console.error("n8n webhook failed:", await n8nResponse.text());
      // Still return success - we'll process via polling
    }

    return NextResponse.json({
      jobId,
      status: "queued",
      message: "Video generation started",
      estimatedTime: "5-10 minutes",
    });
  } catch (error) {
    console.error("Video creation error:", error);
    return NextResponse.json(
      { error: "Failed to create video" },
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
  // For now, return mock status
  const statuses = ["queued", "processing", "rendering", "completed"];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  return NextResponse.json({
    jobId,
    status: randomStatus,
    progress: randomStatus === "completed" ? 100 : Math.floor(Math.random() * 80),
    downloadUrl: randomStatus === "completed" 
      ? `https://storage.example.com/videos/${jobId}.mp4` 
      : null,
  });
}