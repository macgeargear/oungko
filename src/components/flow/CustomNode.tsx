import { memo } from "react";
import { Handle, Position } from "reactflow";

export interface CustomNodeProps {
  data: {
    emoji: string;
    title: string;
    desc: string;
  };
}

function CustomNode({ data }: CustomNodeProps) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
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
