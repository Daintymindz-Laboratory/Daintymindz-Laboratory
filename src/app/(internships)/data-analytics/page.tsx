import type { Metadata } from "next";
import { TRACKS } from "../internship-data";
import TrackDetailPage from "../TrackDetailPage";

const track = TRACKS.find((t) => t.slug === "data-analytics")!;

export const metadata: Metadata = {
  title: `${track.title} Internship`,
  description: track.description,
};

export default function DataAnalyticsPage() {
  return <TrackDetailPage track={track} />;
}
