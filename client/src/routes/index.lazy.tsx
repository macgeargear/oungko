import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Page,
});

function Page() {
  return (
    <div className="flex flex-col h-screen text-lg">
      <main className="flex-1">
        <section className="h-screen w-full grid place-content-center py-6 md:py-12 lg:py-16 xl:py-20">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                Oungko
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Master the language of the rising sun. Accessible. Customizable.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to="/roadmap"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mx-auto/none">
                Features
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Learn Japanese with our immersive platform.
              </p>
            </div>
            <div className="mx-auto grid max-w-3xl items-start gap-10 sm:gap-6 lg:grid-cols-2 lg:max-w-none">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Kanji Practice</h3>
                <p className="text-sm text-gray-500/relaxed dark:text-gray-400/relaxed">
                  Master the complex characters with our interactive quizzes.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Conversational Videos</h3>
                <p className="text-sm text-gray-500/relaxed dark:text-gray-400/relaxed">
                  Learn from native speakers with our engaging video series.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Vocabulary Builder</h3>
                <p className="text-sm text-gray-500/relaxed dark:text-gray-400/relaxed">
                  Expand your word bank with our daily flashcards.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Grammar Lessons</h3>
                <p className="text-sm text-gray-500/relaxed dark:text-gray-400/relaxed">
                  Understand the rules with our easy-to-follow grammar
                  tutorials.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                What our students are saying
              </h2>
            </div>
            <div className="mx-auto grid max-w-3xl items-start gap-10 sm:gap-6 lg:grid-cols-2 lg:max-w-none">
              <div className="flex flex-col gap-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Conversation
                </div>
                <p className="text-sm text-gray-500/relaxed dark:text-gray-400/relaxed">
                  I've been using the app for a month and I'm already having
                  simple conversations with my Japanese friends. The audio clips
                  are super helpful!
                </p>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/macgeargear.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Sarah Johnson
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Vocabulary
                </div>
                <p className="text-sm text-gray-500/relaxed dark:text-gray-400/relaxed">
                  The app makes learning fun! I love the quizzes and games. The
                  illustrations are adorable, and I'm remembering so many words.
                </p>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/macgeargear.png"
                      alt="@shadcn"
                      width={32}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Takeshi Tanaka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to get started?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Accessible. Customizable. Open Source.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
