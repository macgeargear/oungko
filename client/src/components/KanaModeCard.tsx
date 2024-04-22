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
  onMouseEnter: () => void;
  onMouseLeave?: () => void;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export default function KanaModeCard({
  title,
  desc,
  className,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: KanaProps) {
  return (
    <Card
      className={cn("h-fit grid place-content-center", className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <CardHeader className="w-[180px] text-center">
        <CardTitle className="text-6xl">{title}</CardTitle>
        <CardDescription className="text-3xl">{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
}
