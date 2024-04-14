import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Link, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Page,
});

function Page() {
  return (
    <div className="flex h-screen flex-col text-lg">
      <main className="flex-1">
        <section className="grid h-screen w-full place-content-center py-6 md:py-12 lg:py-16 xl:py-20">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                Oungko
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Master the language of the rising sun. Accessible. Customizable.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className={cn(
                  buttonVariants({ size: "xl", variant: "outline" })
                )}
                to="/roadmap"
              >
                Get Started
              </Link>
              <Link
                className={cn(
                  buttonVariants({ size: "xl", variant: "outline" })
                )}
                href="#"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full border-t py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="mx-auto/none text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Features
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Learn Japanese with our immersive platform.
              </p>
            </div>
            <div className="mx-auto grid max-w-3xl items-start gap-10 sm:gap-6 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Kanji Practice</h3>
                <p className="text-gray-500/relaxed dark:text-gray-400/relaxed text-sm">
                  Master the complex characters with our interactive quizzes.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Conversational Videos</h3>
                <p className="text-gray-500/relaxed dark:text-gray-400/relaxed text-sm">
                  Learn from native speakers with our engaging video series.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Vocabulary Builder</h3>
                <p className="text-gray-500/relaxed dark:text-gray-400/relaxed text-sm">
                  Expand your word bank with our daily flashcards.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Grammar Lessons</h3>
                <p className="text-gray-500/relaxed dark:text-gray-400/relaxed text-sm">
                  Understand the rules with our easy-to-follow grammar
                  tutorials.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full border-t py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                What our students are saying
              </h2>
            </div>
            <div className="mx-auto grid max-w-3xl items-start gap-10 sm:gap-6 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Conversation
                </div>
                <p className="text-gray-500/relaxed dark:text-gray-400/relaxed text-sm">
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
                <p className="text-gray-500/relaxed dark:text-gray-400/relaxed text-sm">
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
        <section className="w-full border-t py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to get started?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
