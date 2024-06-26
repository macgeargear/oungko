export interface MainKana {
  title: string;
  desc: string;
  kind: string;
}

export const mainHiragana = [
  { title: "あ", desc: "a", kind: "hira" },
  { title: "か", desc: "ka", kind: "hira" },
  { title: "さ", desc: "sa", kind: "hira" },
  { title: "た", desc: "ta", kind: "hira" },
  { title: "な", desc: "na", kind: "hira" },
  { title: "は", desc: "ha", kind: "hira" },
  { title: "ま", desc: "ma", kind: "hira" },
  { title: "や", desc: "ya", kind: "hira" },
  { title: "ら", desc: "ra", kind: "hira" },
  { title: "わ", desc: "wa", kind: "hira" },
];

export const hiragana = [
  { title: "あ", desc: "a", type: "a", kind: "hira" },
  { title: "い", desc: "i", type: "a", kind: "hira" },
  { title: "う", desc: "u", type: "a", kind: "hira" },
  { title: "え", desc: "e", type: "a", kind: "hira" },
  { title: "お", desc: "o", type: "a", kind: "hira" },
  { title: "か", desc: "ka", type: "ka", kind: "hira" },
  { title: "き", desc: "ki", type: "ka", kind: "hira" },
  { title: "く", desc: "ku", type: "ka", kind: "hira" },
  { title: "け", desc: "ke", type: "ka", kind: "hira" },
  { title: "こ", desc: "ko", type: "ka", kind: "hira" },
  { title: "さ", desc: "sa", type: "sa", kind: "hira" },
  { title: "し", desc: "shi", type: "sa", kind: "hira" },
  { title: "す", desc: "su", type: "sa", kind: "hira" },
  { title: "せ", desc: "se", type: "sa", kind: "hira" },
  { title: "そ", desc: "so", type: "sa", kind: "hira" },
  { title: "た", desc: "ta", type: "ta", kind: "hira" },
  { title: "ち", desc: "chi", type: "ta", kind: "hira" },
  { title: "つ", desc: "tsu", type: "ta", kind: "hira" },
  { title: "て", desc: "te", type: "ta", kind: "hira" },
  { title: "と", desc: "to", type: "ta", kind: "hira" },
  { title: "な", desc: "na", type: " na", kind: "hira" },
  { title: "に", desc: "ni", type: " na", kind: "hira" },
  { title: "ぬ", desc: "nu", type: " na", kind: "hira" },
  { title: "ね", desc: "ne", type: " na", kind: "hira" },
  { title: "の", desc: "no", type: " na", kind: "hira" },
  { title: "は", desc: "ha", type: "ha", kind: "hira" },
  { title: "ひ", desc: "hi", type: "ha", kind: "hira" },
  { title: "ふ", desc: "fu", type: "ha", kind: "hira" },
  { title: "へ", desc: "he", type: "ha", kind: "hira" },
  { title: "ほ", desc: "ho", type: "ha", kind: "hira" },
  { title: "ま", desc: "ma", type: "ma", kind: "hira" },
  { title: "み", desc: "mi", type: "ma", kind: "hira" },
  { title: "む", desc: "mu", type: "ma", kind: "hira" },
  { title: "め", desc: "me", type: "ma", kind: "hira" },
  { title: "も", desc: "mo", type: "ma", kind: "hira" },
  { title: "や", desc: "ya", type: "ya", kind: "hira" },
  { title: "ゆ", desc: "yu", type: "ya", kind: "hira" },
  { title: "よ", desc: "yo", type: "ya", kind: "hira" },
  { title: "ら", desc: "ra", type: "ra", kind: "hira" },
  { title: "り", desc: "ri", type: "ra", kind: "hira" },
  { title: "る", desc: "ru", type: "ra", kind: "hira" },
  { title: "れ", desc: "re", type: "ra", kind: "hira" },
  { title: "ろ", desc: "ro", type: "ra", kind: "hira" },
  { title: "わ", desc: "wa", type: "wa", kind: "hira" },
  { title: "を", desc: "wo", type: "wa", kind: "hira" },
  { title: "ん", desc: "n", type: "wa", kind: "hira" },
];

export const katakana = [
  { title: "ア", desc: "a", type: "a", kind: "kata" },
  { title: "イ", desc: "i", type: "a", kind: "kata" },
  { title: "ウ", desc: "u", type: "a", kind: "kata" },
  { title: "エ", desc: "e", type: "a", kind: "kata" },
  { title: "オ", desc: "o", type: "a", kind: "kata" },
  { title: "カ", desc: "ka", type: "ka", kind: "kata" },
  { title: "キ", desc: "ki", type: "ka", kind: "kata" },
  { title: "ク", desc: "ku", type: "ka", kind: "kata" },
  { title: "ケ", desc: "ke", type: "ka", kind: "kata" },
  { title: "コ", desc: "ko", type: "ka", kind: "kata" },
  { title: "サ", desc: "sa", type: " sa", kind: "kata" },
  { title: "シ", desc: "shi", type: " sa", kind: "kata" },
  { title: "ス", desc: "su", type: " sa", kind: "kata" },
  { title: "セ", desc: "se", type: " sa", kind: "kata" },
  { title: "ソ", desc: "so", type: " sa", kind: "kata" },
  { title: "タ", desc: "ta", type: "ta", kind: "kata" },
  { title: "チ", desc: "chi", type: "ta", kind: "kata" },
  { title: "ツ", desc: "tsu", type: "ta", kind: "kata" },
  { title: "テ", desc: "te", type: "ta", kind: "kata" },
  { title: "ト", desc: "to", type: "ta", kind: "kata" },
  { title: "ナ", desc: "na", type: "na", kind: "kata" },
  { title: "ニ", desc: "ni", type: "na", kind: "kata" },
  { title: "ヌ", desc: "nu", type: "na", kind: "kata" },
  { title: "ネ", desc: "ne", type: "na", kind: "kata" },
  { title: "ノ", desc: "no", type: "na", kind: "kata" },
  { title: "ハ", desc: "ha", type: "ha", kind: "kata" },
  { title: "ヒ", desc: "hi", type: "ha", kind: "kata" },
  { title: "フ", desc: "fu", type: "ha", kind: "kata" },
  { title: "ヘ", desc: "he", type: "ha", kind: "kata" },
  { title: "ホ", desc: "ho", type: "ha", kind: "kata" },
  { title: "マ", desc: "ma", type: "ma", kind: "kata" },
  { title: "ミ", desc: "mi", type: "ma", kind: "kata" },
  { title: "ム", desc: "mu", type: "ma", kind: "kata" },
  { title: "メ", desc: "me", type: "ma", kind: "kata" },
  { title: "モ", desc: "mo", type: "ma", kind: "kata" },
  { title: "ヤ", desc: "ya", type: "ya", kind: "kata" },
  { title: "ユ", desc: "yu", type: "ya", kind: "kata" },
  { title: "ヨ", desc: "yo", type: "ya", kind: "kata" },
  { title: "ラ", desc: "ra", type: "ra", kind: "kata" },
  { title: "リ", desc: "ri", type: "ra", kind: "kata" },
  { title: "ル", desc: "ru", type: "ra", kind: "kata" },
  { title: "レ", desc: "re", type: "ra", kind: "kata" },
  { title: "ロ", desc: "ro", type: "ra", kind: "kata" },
  { title: "ワ", desc: "wa", type: "wa", kind: "kata" },
  { title: "ヲ", desc: "wo", type: "wa", kind: "kata" },
  { title: "ン", desc: "n", type: "wa" },
];

export const hiraganaConversion: { [key: string]: string } = {
  a: "あ",
  i: "い",
  u: "う",
  e: "え",
  o: "お",

  ka: "か",
  ki: "き",
  ku: "く",
  ke: "け",
  ko: "こ",

  ga: "が",
  gi: "ぎ",
  gu: "ぐ",
  ge: "げ",
  go: "ご",

  pa: "ぱ",
  pi: "ぴ",
  pu: "ぷ",
  pe: "ぺ",
  po: "ぽ",

  kya: "きゃ",
  kyu: "きゅ",
  n: "ん",
};
