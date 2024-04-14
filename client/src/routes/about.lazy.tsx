import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createLazyFileRoute("/about")({
  component: Page,
});
export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh] mt-20">
      <main className="flex-1">
        <section className="w-full">
          <div className="container grid items-center gap-6 px-4 text-center lg:px-6 lg:grid-cols-2">
            <div className="space-y-3">
              <div className="space-y-2 lg:px-20 xl:space-y-3">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl/none">
                  Learn Japanese with Sakura
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Your guide to mastering the language of the rising sun
                </p>
              </div>
            </div>
            <Skeleton className="w-[550px] h-[310px] my-20 mx-auto aspect-video  rounded-xl object-cover object-center lg:w-full" />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About P&apos;baiton
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  P'baitong is a native Japanese speaker with over 10 years of
                  experience teaching the language. She is passionate about
                  sharing her language and culture with the world and believes
                  that learning a language should be fun and engaging.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-4 lg:max-w-none lg:items-center lg:gap-10">
              <Skeleton className="w-[600px] h-[400px] my-20 mx-auto aspect-video  rounded-xl object-cover object-center lg:w-full" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Testimonials
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from some of baitong's previous students about their
                  experience learning Japanese with her.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-6 lg:max-w-none lg:items-center lg:gap-10">
              <div className="border rounded-lg">
                <div className="grid gap-4 p-4">
                  <div className="font-semibold">Miyuki S.</div>
                  <blockquote className="text-sm border-l-2 pl-2 border-gray-200 dark:border-gray-800">
                    “Sakura-sensei is a wonderful teacher. Her lessons are
                    always engaging and fun, and she is patient and
                    understanding. I have learned so much from her and my
                    confidence in speaking Japanese has improved significantly.“
                  </blockquote>
                </div>
              </div>
              <div className="border rounded-lg">
                <div className="grid gap-4 p-4">
                  <div className="font-semibold">Hiroshi T.</div>
                  <blockquote className="text-sm border-l-2 pl-2 border-gray-200 dark:border-gray-800">
                    “I have been taking lessons with Sakura-sensei for a few
                    months now and I am very happy with my progress. She is
                    always well-prepared and her explanations are clear and easy
                    to understand. I highly recommend her to anyone looking to
                    learn Japanese.“
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact P'baitong
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Ready to start your Japanese learning journey? Fill out the
                  form below to get in touch with Sakura-sensei.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-4 lg:max-w-none lg:items-center lg:gap-10">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" required type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Japanese with Sakura. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
