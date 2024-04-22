import { createLazyFileRoute } from "@tanstack/react-router";
import { RoadmapContainer } from "@/components/roadmap/RoadmapContainer";

export const Route = createLazyFileRoute("/roadmap")({
  component: Page,
});

function Page() {
  return (
    <div className="p-2">
      <RoadmapContainer />
    </div>
  );
}
