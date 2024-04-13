import { createLazyFileRoute } from "@tanstack/react-router";
import Flow from "../components/roadmap/Roadmap";

export const Route = createLazyFileRoute("/roadmap")({
  component: Page,
});

function Page() {
  return (
    <div className="p-2">
      hi from oungko
      <Flow />
    </div>
  );
}
