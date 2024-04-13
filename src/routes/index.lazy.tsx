import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Page,
});

function Page() {
  return (
    // <div className="h-screen flex items-center justify-center">
    <div className="container mx-auto my-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-mono">Oungko</h1>
        <Button>
          <Link to="/flow">flow</Link>
        </Button>
        <Button>
          <Link to="/turboflow">turbo flow</Link>
        </Button>
      </div>
    </div>
  );
}
