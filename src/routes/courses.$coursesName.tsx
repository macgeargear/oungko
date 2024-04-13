import KanaCard from "@/components/KanaCard";
import KanaModeCard from "@/components/KanaModeCard";
import { Button } from "@/components/ui/button";
import { hiragana, katakana, mainHiragana } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useAtom } from "jotai";
import { kanaKindAtom, quizAtom } from "@/atom/atom";

export const Route = createFileRoute("/courses/$coursesName")({
  loader: async ({ params }) => {
    console.log(params.coursesName);
  },
  component: Page,
});

function Page() {
  const { coursesName } = Route.useParams();
  let kana: { title: string; desc: string; type: string }[] = [];
  switch (coursesName) {
    case "Hiragana":
      kana = hiragana;
      break;
    case "Katakana":
      kana = katakana;
      break;
  }

  const [hoveredKanaMode, setHoveredKanaMode] = useState<string | null>(null);
  const [quizType, setQuizType] = useAtom(quizAtom);
  const [quizKind, setQuizKind] = useAtom(kanaKindAtom);
  console.log(quizType);

  return (
    <>
      <div className="container mx-auto my-auto mt-40">
        <div className="container">
          <Link to="/roadmap">
            <Button variant="outline">back to roadmap</Button>
          </Link>
        </div>
        <h1 className="text-5xl text-center font-mono mb-4">{coursesName}</h1>
        <div className="flex justify-center  gap-40">
          <div className="grid grid-cols-5 gap-2 w-fit">
            {kana.map(({ title, desc, type }) => (
              <KanaCard
                title={title}
                desc={desc}
                className={cn({
                  "bg-slate-200/50": quizType.includes(type),
                })}
              />
            ))}
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl font-mono text-center">Quiz Mode</h1>
            <div className="grid grid-cols-2 h-fit gap-2">
              {mainHiragana.map((kana) => (
                <KanaModeCard
                  key={kana.title}
                  title={kana.title}
                  desc={kana.desc}
                  className={cn({
                    "bg-slate-200/50": quizType.includes(kana.desc),
                  })}
                  onMouseEnter={() => setHoveredKanaMode(kana.desc)}
                  onClick={() => {
                    setQuizKind(kana.kind);
                    // setHoveredKanaMode(kana.desc);
                    if (quizType.includes(kana.desc)) {
                      setQuizType((quizType) =>
                        quizType.filter((type) => kana.desc != type)
                      );
                    } else {
                      setQuizType((quizType) => [...quizType, kana.desc]);
                    }
                  }}
                />
              ))}
            </div>
            <Link
              to="/quiz/$quizType"
              className="flex justify-center my-4"
              params={{ quizType: quizKind }}
            >
              <Button size="lg">Start Quiz</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
