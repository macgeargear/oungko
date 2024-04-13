/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { Handle, Position, NodeToolbar } from "reactflow";
import { Button } from "../ui/button";
import { RoadmapDetail } from "./RoadmapDetail";

export interface CustomNodeProps {
  data: {
    title: string;
    emoji: string;
    desc: string;
  };
}

function CustomNode({ data }: CustomNodeProps) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <NodeToolbar position={Position.Right}>
        <div className="flex flex-col items-start gap-1 rounded-md p-2">
          <RoadmapDetail />
          {/* <Button variant="outline" size="lg" className="border-2 text-lg">
            Details
          </Button> */}
          <Button variant="outline" size="lg" className="border-2 text-lg">
            Buy
          </Button>
          <Button variant="outline" size="lg" className="border-2 text-lg">
            Learn
          </Button>
        </div>
      </NodeToolbar>
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          {data.emoji}
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.title}</div>
          <div className="text-gray-500">{data.desc}</div>
        </div>
      </div>

      <Handle type="target" position={Position.Top} className=" !bg-teal-500" />
      <Handle
        type="source"
        position={Position.Bottom}
        className=" !bg-teal-500"
      />
    </div>
  );
}

export default memo(CustomNode);
