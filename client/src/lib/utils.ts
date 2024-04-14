import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { hiragana } from "./constant";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertHiragana(englishText: string) {
  let japaneseText = "";

  for (let i = 0; i < englishText.length; i++) {
    const desc = englishText.substring(i); // Get remaining English text

    // Find matching hiragana object (try longer matches first)
    const matchingHiragana = hiragana.find((kana) =>
      desc.startsWith(kana.desc)
    );

    if (matchingHiragana) {
      japaneseText += matchingHiragana.title;
      i += matchingHiragana.desc.length - 1; // Adjust index to skip converted part
    } else {
      japaneseText += englishText[i]; // Keep unconverted characters as is
    }
  }

  return japaneseText;
}
