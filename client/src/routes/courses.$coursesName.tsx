import KanaCard from "@/components/KanaCard";
import KanaModeCard from "@/components/KanaModeCard";
import { Button } from "@/components/ui/button";
import { MainKana, hiragana, katakana, mainHiragana } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useAtom } from "jotai";
import { kanaKindAtom, mainKanaAtom, quizResultAtom } from "@/atom/atom";

export const Route = createFileRoute("/courses/$coursesName")({
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

  const [, setHoveredKanaMode] = useState<string | null>(null);
  const [mainKanaQuiz, setMainKanaQuiz] = useAtom(mainKanaAtom);
  const [quizKind, setQuizKind] = useAtom(kanaKindAtom);
  const [, setQuizResult] = useAtom(quizResultAtom);

  // add kana to quiz result
  const handleSelectKana = (mainKana: MainKana) => {
    setQuizKind(mainKana.kind);
    if (mainKanaQuiz.includes(mainKana.desc)) {
      setMainKanaQuiz((quizType) =>
        quizType.filter((type) => mainKana.desc != type)
      );
      setQuizResult((quizResult) =>
        quizResult.filter((result) => result.problem !== mainKana.desc)
      );
    } else {
      setMainKanaQuiz((quizType) => [...quizType, mainKana.desc]);
      switch (mainKana.kind) {
        case "hira":
          setQuizResult((prev) => [
            ...prev,
            ...hiragana
              .filter((kana) => kana.type === mainKana.desc)
              .map((kana) => ({
                problem: kana.title,
                desc: kana.desc,
                solution: kana.desc,
                answer: "",
                type: kana.type,
              })),
          ]);
          break;
        case "kata":
          setQuizResult((prev) => [
            ...prev,
            ...katakana
              .filter((kana) => kana.type === mainKana.title)
              .map((kana) => ({
                problem: kana.title,
                desc: kana.desc,
                solution: kana.desc,
                answer: "",
                type: kana.type,
              })),
          ]);
          break;
      }
    }
  };

  return (
    <div className="container mx-auto mt-40">
      <div className="container">
        <Link to="/roadmap">
          <Button variant="outline">back to roadmap</Button>
        </Link>
      </div>
      <h1 className="text-5xl text-center font-mono mb-4">{coursesName}</h1>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 lg:gap-40">
        <div className="grid grid-cols-5 gap-2 w-fit md:first">
          {kana.map(({ title, desc, type }) => (
            <KanaCard
              title={title}
              desc={desc}
              className={cn({
                "bg-slate-200/50": mainKanaQuiz.includes(type),
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
                  "bg-slate-200/50": mainKanaQuiz.includes(kana.desc),
                })}
                onMouseEnter={() => setHoveredKanaMode(kana.desc)}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectKana(kana);
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
  );
}
