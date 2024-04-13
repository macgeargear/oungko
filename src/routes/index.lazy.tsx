import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Page,
});

function Page() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-mono">Oungko</h1>
        <p className=" font-mono">a guide for learning japanese</p>
      </div>
    </div>
  );
}
