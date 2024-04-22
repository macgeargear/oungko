import { atom } from "jotai";

export interface QuizResult {
  problem: string;
  desc: string;
  answer: string;
  solution: string;
  type: string;
}

export const mainKanaAtom = atom<string[]>([]);
export const kanaKindAtom = atom<string>("");
export const quizResultAtom = atom<QuizResult[]>([]);
