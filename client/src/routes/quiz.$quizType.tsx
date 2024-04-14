import QuizContainer from "@/components/quiz/QuizContainer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quiz/$quizType")({
  component: Page,
});

function Page() {
  return (
    <>
      <QuizContainer />
    </>
  );
}
