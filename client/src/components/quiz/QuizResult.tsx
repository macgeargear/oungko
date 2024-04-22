import { quizResultAtom } from "@/atom/atom";
import { useAtom } from "jotai";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { cn, convertHiragana } from "@/lib/utils";

interface QuizResult {
  isFinished: boolean;
}

export default function QuizResult({ isFinished }: QuizResult) {
  const [quizResult] = useAtom(quizResultAtom);
  const wrongResult = quizResult.filter(
    (result) => result.answer !== result.solution
  );

  const wrongMainKanaCounts: { [key: string]: number } = {};
  wrongResult.forEach(({ type }) => {
    wrongMainKanaCounts[type] = (wrongMainKanaCounts[type] || 0) + 1;
  });

  const wrongMainKana = Object.entries(wrongMainKanaCounts).map(
    ([title, count]) => ({ title, count })
  );

  const correct = quizResult.length - wrongResult.length;
  const wrong = wrongResult.length;
  const percent = (correct / quizResult.length) * 100;

  return (
    <div className="container w-fit border-l-2 h-full">
      {isFinished ? (
        <h1 className="text-3xl font-mono text-center">Summary</h1>
      ) : (
        ""
      )}
      {isFinished ? (
        <div className="flex flex-col gap-2 items-center mt-12">
          <Card className={cn("w-full")}>
            <CardHeader className="text-center">
              <div className="flex justify-evenly items-center gap-2">
                <div className="flex flex-col">
                  <CardTitle className="text-3xl">Correct</CardTitle>
                  <CardDescription className="text-2xl text-center">
                    {correct}
                  </CardDescription>
                </div>
                <div className="flex flex-col border-x-2 px-4 mx-0">
                  <CardTitle className="text-3xl">Wrong</CardTitle>
                  <CardDescription className="text-2xl text-center">
                    {wrong}
                  </CardDescription>
                </div>
                <div className="flex flex-col">
                  <CardTitle className="text-3xl">%</CardTitle>
                  <CardDescription className="text-2xl text-center">
                    {percent}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          <h1 className="font-mono text-2xl">
            {wrongResult.length === 0 ? "correct 🎉" : "wrong"}
          </h1>
          <div className="grid grid-cols-4 gap-4">
            {wrongMainKana.map((result) => (
              <Card className={cn("w-fit")}>
                <CardHeader>
                  <CardTitle className="text-4xl">
                    {convertHiragana(result.title)}
                  </CardTitle>
                  <CardDescription className="text-3xl text-center">
                    {result.count}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
