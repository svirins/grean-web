"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export function YouTubePlayer({ id }: { id: string }) {
  return (
    <LiteYouTubeEmbed
      aspectHeight={9}
      aspectWidth={16}
      id={id}
      title="Врач-психотерапевт Валерий Гринь"
    />
  );
}
