import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface KanaCardProps {
  title: string;
  desc: string;
  className?: string;
}

export default function KanaCard({ title, desc, className }: KanaCardProps) {
  return (
    <Card className={cn("w-fit grid place-content-center", className)}>
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="text-2xl md:text-5xl">{title}</CardTitle>
        <CardDescription className="text-lg text-center">
          {desc}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
