import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface KanaProps {
  title: string;
  desc: string;
}

export default function Kana({ title, desc }: KanaProps) {
  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle className="text-5xl">{title}</CardTitle>
        <CardDescription className="text-lg text-center">
          {desc}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
