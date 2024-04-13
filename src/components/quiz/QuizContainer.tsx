import { kanaKindAtom, quizAtom } from "@/atom/atom";
import { useAtom } from "jotai";
import Question from "./Question";
import { hiragana, katakana } from "@/lib/constant";
import { Button } from "../ui/button";

export default function QuizContainer() {
  const [quizType] = useAtom(quizAtom);
  const [kanaKind] = useAtom(kanaKindAtom);
  const quizElements =
    kanaKind === "hira"
      ? hiragana.filter((kana) => quizType.includes(kana.type))
      : katakana.filter((kana) => quizType.includes(kana.type));
  return (
    <div className="container">
      <h1 className="text-5xl">Quiz</h1>
      <div className="grid grid-cols-5 w-fit gap-4">
        {quizElements.map((kana) => (
          <Question title={kana.title} />
        ))}
      </div>
      <Button size="lg" className="text-xl">
        Submit
      </Button>
    </div>
  );
}
