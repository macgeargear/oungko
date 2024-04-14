import { kanaKindAtom, mainKanaAtom } from "@/atom/atom";
import { useAtom } from "jotai";
import Question from "./Question";
import { hiragana, katakana } from "@/lib/constant";
import { Button } from "../ui/button";
import { useState } from "react";
import QuizResult from "./QuizResult";

export default function QuizContainer() {
  const [mainKana] = useAtom(mainKanaAtom);
  const [kanaKind] = useAtom(kanaKindAtom);
  const [submit, setSubmit] = useState<boolean>(false);
  const quizElements =
    kanaKind === "hira"
      ? hiragana.filter((kana) => mainKana.includes(kana.type))
      : katakana.filter((kana) => mainKana.includes(kana.type));

  return (
    <div className="container px-0 flex justify-center items-center">
      <div className=" grid place-content-center w-fit mx-12">
        <h1 className="text-5xl text-center font-mono my-20">Quiz</h1>
        <div className="grid grid-cols-5 w-fit gap-4">
          {quizElements.map((kana) => (
            <Question
              key={kana.title}
              title={kana.title}
              desc={kana.desc}
              isFinished={submit}
              solution={kana.desc}
            />
          ))}
        </div>
        <Button
          size="lg"
          className="text-xl w-fit text-center"
          onClick={() => setSubmit(true)}
        >
          Submit
        </Button>
      </div>
      <div className="w-fit">
        <QuizResult isFinished={submit} />
      </div>
    </div>
  );
}
