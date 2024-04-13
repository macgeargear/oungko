import Kana from "@/components/Kana";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/courses/$coursesName")({
  loader: async ({ params }) => {
    console.log(params.coursesName);
  },
  component: Page,
});

const hiragana = [
  { title: "あ", desc: "a" },
  { title: "い", desc: "i" },
  { title: "う", desc: "u" },
  { title: "え", desc: "e" },
  { title: "お", desc: "o" },

  { title: "か", desc: "ka" },
  { title: "き", desc: "ki" },
  { title: "く", desc: "ku" },
  { title: "け", desc: "ke" },
  { title: "こ", desc: "ko" },

  { title: "さ", desc: "sa" },
  { title: "し", desc: "shi" },
  { title: "す", desc: "su" },
  { title: "せ", desc: "se" },
  { title: "そ", desc: "so" },

  { title: "た", desc: "ta" },
  { title: "ち", desc: "chi" },
  { title: "つ", desc: "tsu" },
  { title: "て", desc: "te" },
  { title: "と", desc: "to" },

  { title: "な", desc: "na" },
  { title: "に", desc: "ni" },
  { title: "ぬ", desc: "nu" },
  { title: "ね", desc: "ne" },
  { title: "の", desc: "no" },

  { title: "は", desc: "ha" },
  { title: "ひ", desc: "hi" },
  { title: "ふ", desc: "fu" },
  { title: "へ", desc: "he" },
  { title: "ほ", desc: "ho" },

  { title: "ま", desc: "ma" },
  { title: "み", desc: "mi" },
  { title: "む", desc: "mu" },
  { title: "め", desc: "me" },
  { title: "も", desc: "mo" },

  { title: "や", desc: "ya" },
  { title: "ゆ", desc: "yu" },
  { title: "よ", desc: "yo" },

  { title: "ら", desc: "ra" },
  { title: "り", desc: "ri" },
  { title: "る", desc: "ru" },
  { title: "れ", desc: "re" },
  { title: "ろ", desc: "ro" },

  { title: "わ", desc: "wa" },
  { title: "を", desc: "wo" },
  { title: "ん", desc: "n" },
];

function Page() {
  const { coursesName } = Route.useParams();
  let kana: { title: string; desc: string }[] = [];
  switch (coursesName) {
    case "Hiragana":
      kana = hiragana;
      break;
  }

  return (
    <>
      <div className="container mx-auto my-auto mt-40">
        <div className="container">
          <Link to="/roadmap">
            <Button variant="outline">back to roadmap</Button>
          </Link>
        </div>
        <h1 className="text-5xl text-center font-mono mb-4">{coursesName}</h1>
        <div className="flex justify-center items-center gap-40">
          <div className="grid grid-cols-5 gap-2 w-fit">
            {kana.map(({ title, desc }) => (
              <Kana title={title} desc={desc} />
            ))}
          </div>
          <div className="grid grid-cols-5 gap-2 w-fit">
            {kana.map(({ title, desc }) => (
              <Kana title={title} desc={desc} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
