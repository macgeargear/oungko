import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface KanaProps {
  title: string;
  desc: string;
  className?: string;
}

export default function KanaCard({ title, desc, className }: KanaProps) {
  return (
    <Card className={cn("w-fit", className)}>
      <CardHeader>
        <CardTitle className="text-5xl">{title}</CardTitle>
        <CardDescription className="text-lg text-center">
          {desc}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
