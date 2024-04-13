import { createLazyFileRoute } from "@tanstack/react-router";
import Flow from "../components/flow/Flow";

export const Route = createLazyFileRoute("/flow")({
  component: Page,
});

function Page() {
  return (
    <div className="p-2">
      <Flow />
    </div>
  );
}
