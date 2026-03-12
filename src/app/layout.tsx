import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VideoForge | AI Music Video Maker",
  description: "Create stunning music videos with photorealistic AI. Upload your audio, add lyrics, and let AI create professional visuals indistinguishable from reality.",
  keywords: ["music video", "AI video", "video maker", "lyrics video", "audio visualization", "photorealistic"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}