import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

export interface KanaProps {
  title: string;
  answer?: string;
  className?: string;
}

export default function Question({ title, className }: KanaProps) {
  return (
    <Card className={cn("w-fit text-center", className)}>
      <CardHeader className="gap-4">
        <CardTitle className="text-5xl">{title}</CardTitle>
        <CardFooter>
          <div className="flex flex-col justify-center">
            <Input
              id="name"
              placeholder="?"
              className="w-14 h-14 text-center text-2xl"
            />
          </div>
        </CardFooter>
      </CardHeader>
    </Card>
  );
}
