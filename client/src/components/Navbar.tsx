import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex items-center" to="/">
            <Icon
              icon="material-symbols:language-japanese-kana"
              width={40}
              height={40}
            />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              to="/"
            >
              Home
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              to="/roadmap"
            >
              Roadmap
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              About
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
