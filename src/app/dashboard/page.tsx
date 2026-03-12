"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Upload, 
  Music, 
  Video, 
  Play,
  Download,
  Clock,
  CheckCircle,
  Sparkles,
  Settings,
  CreditCard
} from "lucide-react";

export default function DashboardPage() {
  const [step, setStep] = useState(1);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [lyrics, setLyrics] = useState("");
  const [style, setStyle] = useState("modern");
  const [isProcessing, setIsProcessing] = useState(false);
  const [jobId, setJobId] = useState<string | null>(null);

  const styles = [
    { id: "photorealistic", name: "Photorealistic", preview: "from-gray-100 to-gray-300", desc: "Ultra-realistic, indistinguishable from reality" },
    { id: "documentary", name: "Documentary", preview: "from-amber-200 to-amber-400", desc: "Authentic, raw, photojournalistic" },
    { id: "cinematic", name: "Cinematic", preview: "from-blue-400 to-cyan-500", desc: "Hollywood film quality" },
    { id: "urban", name: "Urban Street", preview: "from-gray-400 to-gray-600", desc: "Candid city photography" },
    { id: "portrait", name: "Portrait", preview: "from-rose-200 to-rose-400", desc: "Professional studio portraits" },
    { id: "musicvideo", name: "Music Video", preview: "from-purple-400 to-pink-500", desc: "Professional music video aesthetic" },
  ];

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(file);
    }
  };

  const handleSubmit = async () => {
    if (!audioFile || !lyrics) return;
    
    setIsProcessing(true);
    
    const formData = new FormData();
    formData.append("audio", audioFile);
    formData.append("lyrics", lyrics);
    formData.append("style", style);
    formData.append("userId", "demo-user");

    try {
      const response = await fetch("/api/videos", {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();
      setJobId(data.jobId);
      setStep(4);
    } catch (error) {
      console.error("Failed to submit:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background urban-grid">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-urban-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
              <Video className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold neon-text">VideoForge</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn-secondary flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Upgrade
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  s <= step
                    ? "bg-gradient-to-br from-neon-purple to-neon-pink text-white"
                    : "bg-urban-card border border-urban-border text-urban-muted"
                }`}
              >
                {s < step ? <CheckCircle className="w-5 h-5" /> : s}
              </div>
              {s < 4 && (
                <div
                  className={`w-16 h-1 mx-2 ${
                    s < step ? "bg-neon-purple" : "bg-urban-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Upload Audio */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Upload Your Track</h2>
            <p className="text-urban-muted mb-8">
              Drag and drop your audio file to get started
            </p>

            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="relative border-2 border-dashed border-neon-purple/30 rounded-2xl p-16 hover:border-neon-purple/60 transition-all cursor-pointer group"
            >
              <input
                type="file"
                accept="audio/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setAudioFile(file);
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Upload className="w-10 h-10 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white mb-1">
                    Drop your audio file here
                  </p>
                  <p className="text-urban-muted">
                    MP3, WAV, FLAC up to 100MB
                  </p>
                </div>
              </div>
            </div>

            {audioFile && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 rounded-xl bg-urban-card border border-neon-green/50"
              >
                <div className="flex items-center gap-3">
                  <Music className="w-6 h-6 text-neon-green" />
                  <div className="flex-1 text-left">
                    <p className="font-semibold">{audioFile.name}</p>
                    <p className="text-sm text-urban-muted">
                      {(audioFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-neon-green" />
                </div>
              </motion.div>
            )}

            {audioFile && (
              <button
                onClick={() => setStep(2)}
                className="btn-primary mt-8 flex items-center gap-2 mx-auto"
              >
                Continue
                <Play className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        )}

        {/* Step 2: Add Lyrics */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center">Add Lyrics</h2>
            <p className="text-urban-muted mb-8 text-center">
              Paste your lyrics for synchronized display
            </p>

            {audioFile && (
              <div className="mb-6 p-4 rounded-xl bg-urban-card border border-urban-border">
                <div className="flex items-center gap-3">
                  <Music className="w-5 h-5 text-neon-purple" />
                  <span className="font-semibold">{audioFile.name}</span>
                </div>
              </div>
            )}

            <textarea
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
              placeholder="Paste your lyrics here...

[Verse 1]
First line of the song
Second line of the song

[Chorus]
This is the chorus
That everyone sings along"
              className="w-full h-64 p-6 rounded-xl bg-urban-card border border-urban-border focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 resize-none text-white placeholder:text-urban-muted"
            />

            <div className="flex justify-between mt-6">
              <button onClick={() => setStep(1)} className="btn-secondary">
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!lyrics.trim()}
                className="btn-primary flex items-center gap-2"
              >
                Continue
                <Play className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Choose Style */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center">Choose Your Style</h2>
            <p className="text-urban-muted mb-8 text-center">
              Select the visual theme for your music video
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {styles.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStyle(s.id)}
                  className={`p-6 rounded-xl border transition-all ${
                    style === s.id
                      ? "border-neon-purple neon-box bg-urban-card"
                      : "border-urban-border bg-urban-card hover:border-neon-purple/50"
                  }`}
                >
                  <div
                    className={`w-full h-24 rounded-lg mb-4 bg-gradient-to-br ${s.preview}`}
                  />
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-xs text-urban-muted mt-1">{s.desc}</p>
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={() => setStep(2)} className="btn-secondary">
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={isProcessing}
                className="btn-primary flex items-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <Clock className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Create Video
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Processing/Complete */}
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Video Created!</h2>
            <p className="text-urban-muted mb-8">
              Your music video is ready to download
            </p>

            <div className="p-8 rounded-xl neon-border glass">
              <div className="aspect-video bg-urban-darker rounded-lg mb-6 flex items-center justify-center">
                <Video className="w-16 h-16 text-urban-muted" />
              </div>

              <div className="flex gap-4 justify-center">
                <button className="btn-primary flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download MP4
                </button>
                <button className="btn-secondary">
                  Share to YouTube
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setStep(1);
                setAudioFile(null);
                setLyrics("");
                setJobId(null);
              }}
              className="btn-secondary mt-8"
            >
              Create Another Video
            </button>
          </motion.div>
        )}
      </main>
    </div>
  );
}