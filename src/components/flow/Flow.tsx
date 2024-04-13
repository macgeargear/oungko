import ReactFlow, { Controls } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 20 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2", lebel: "to the", type: "step" },
];

export default function Flow() {
  return (
    <div className="w-[100vw] h-[100vh] p-4">
      <ReactFlow nodes={initialNodes} edges={initialEdges}>
        <Controls />
      </ReactFlow>
    </div>
  );
}
