import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { useState } from "react";
import { quizResultAtom } from "@/atom/atom";
import { useAtom } from "jotai";

export interface QuestionProps {
  title: string;
  desc: string;
  solution?: string;
  isFinished: boolean;
  className?: string;
}

export default function Question({
  title,
  desc,
  className,
  solution,
  isFinished,
}: QuestionProps) {
  const [answer, setAnswer] = useState<string>("");
  const [quizResult, setQuizResult] = useAtom(quizResultAtom);

  const updateQuizResult = (desc: string, answer: string) => {
    const currIdx = quizResult.findIndex(({ problem }) => problem === title);
    if (currIdx === -1) return;
    setQuizResult((prevResult) =>
      prevResult.map((result) =>
        result.desc === desc ? { ...result, answer } : result
      )
    );
    console.log(quizResult);
  };

  return (
    <Card
      className={cn(
        "w-fit text-center",
        { "bg-green-400": isFinished && answer == solution },
        { "bg-red-400": isFinished && answer != solution },
        className
      )}
    >
      <CardHeader className="gap-4">
        <CardTitle className="text-5xl">{title}</CardTitle>
        <CardFooter>
          <div className="flex flex-col justify-center">
            <Input
              id="name"
              placeholder="?"
              className="w-14 h-14 text-center text-2xl border-2"
              onChange={(e) => {
                e.preventDefault();
                setAnswer(e.target.value);
                updateQuizResult(desc, e.target.value);
              }}
              // disabled={isFinished}
              value={answer}
            />
          </div>
        </CardFooter>
      </CardHeader>
    </Card>
  );
}
