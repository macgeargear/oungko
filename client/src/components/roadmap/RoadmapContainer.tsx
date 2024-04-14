import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Roadmap, { CourseEdge, CourseNode } from "./Roadmap";

const basicCourseNode: CourseNode[] = [
  {
    id: "hg",
    type: "custom",
    data: { title: "Hiragana", desc: "basic japanese character", emoji: "👶🏻" },
    position: { x: 200, y: 50 },
  },
  {
    id: "kt",
    type: "custom",
    data: { title: "Katakana", desc: "basic japanese character", emoji: "🤓" },
    position: { x: -200, y: 50 },
  },
  {
    id: "kj",
    type: "custom",
    data: { title: "Kanji", desc: "japanese character", emoji: "😎" },
    position: { x: 0, y: 200 },
  },
];

const basicCourseEdge: CourseEdge[] = [
  {
    id: "hg->kj",
    source: "hg",
    target: "kj",
  },
  {
    id: "kt->kj",
    source: "kt",
    target: "kj",
  },
];

const intermediateCourseNode: CourseNode[] = [
  {
    id: "n5",
    type: "custom",
    data: { title: "N5", desc: "JLPT N5", emoji: "👶🏻" },
    position: { x: 0, y: -150 },
  },
  {
    id: "n4",
    type: "custom",
    data: { title: "N4", desc: "JLPT N4", emoji: "🤓" },
    position: { x: 0, y: 0 },
  },
  {
    id: "n3",
    type: "custom",
    data: { title: "N3", desc: "JLPT N3", emoji: "😎" },
    position: { x: -0, y: 150 },
  },
];

const intermediateCourseEdge: CourseEdge[] = [
  { id: "n5->n4", source: "n5", target: "n4" },
  { id: "n4->n3", source: "n4", target: "n3" },
];

const advanceCourseEdge: CourseEdge[] = [
  { id: "n2->n1", source: "n2", target: "n1" },
];

const advanceCourseNode: CourseNode[] = [
  {
    id: "n2",
    type: "custom",
    data: { title: "N2", desc: "JLPT N2", emoji: "👶🏻" },
    position: { x: 0, y: -150 },
  },
  {
    id: "n1",
    type: "custom",
    data: { title: "N1", desc: "JLPT N1", emoji: "🤓" },
    position: { x: 0, y: 0 },
  },
];

export function RoadmapContainer() {
  return (
    <div className="container px-4">
      <Tabs defaultValue="basic" className="w-full ">
        <TabsList className="grid w-full grid-cols-3 h-fit">
          <TabsTrigger className="text-2xl" value="basic">
            Basic
          </TabsTrigger>
          <TabsTrigger className="text-2xl" value="intermediate">
            Intermediate
          </TabsTrigger>
          <TabsTrigger className="text-2xl" value="advance">
            Advance
          </TabsTrigger>
        </TabsList>
        <TabsContent value="basic">
          <Roadmap
            initCourseNode={basicCourseNode}
            initCourseEdge={basicCourseEdge}
          />
        </TabsContent>
        <TabsContent value="intermediate">
          <Roadmap
            initCourseNode={intermediateCourseNode}
            initCourseEdge={intermediateCourseEdge}
          />
        </TabsContent>
        <TabsContent value="advance">
          <Roadmap
            initCourseNode={advanceCourseNode}
            initCourseEdge={advanceCourseEdge}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
