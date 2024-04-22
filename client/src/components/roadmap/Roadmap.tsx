import { useCallback } from "react";
import ReactFlow, {
  useEdgesState,
  addEdge,
  useNodesState,
  Edge,
  Node,
  Connection,
} from "reactflow";

import "reactflow/dist/base.css";

import CustomNode from "./CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

export type CourseNode = Node;
export type CourseEdge = Edge;

interface RoadmapProps {
  initCourseNode: CourseNode[];
  initCourseEdge: CourseEdge[];
}

const Roadmap = ({ initCourseNode, initCourseEdge }: RoadmapProps) => {
  const [nodes, , onNodesChange] = useNodesState<CourseNode[]>(initCourseNode);
  const [edges, setEdges, onEdgesChange] =
    useEdgesState<CourseEdge[]>(initCourseEdge);
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  return (
    <div className="w-full h-[80vh]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      ></ReactFlow>
    </div>
  );
};

export default Roadmap;
