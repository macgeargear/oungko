import { useCallback } from "react";
import ReactFlow, {
  useEdgesState,
  addEdge,
  Controls,
  useNodesState,
} from "reactflow";

import "reactflow/dist/base.css";

import CustomNode from "./CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

const initNodes = [
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

const initEdges = [
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

const Roadmap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  return (
    <div className="w-[100vw] h-[100vh]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Roadmap;
