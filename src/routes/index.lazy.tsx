import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/")({
  component: Page,
});

function Page() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl">Oungko</h1>
      </div>
    </div>
  );
}
