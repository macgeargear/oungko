import { NodeToolbar } from "reactflow";
import { Button } from "../ui/button";

export default function Toolbar({ data }) {
  return (
    <>
      <NodeToolbar
        isVisible={data.forceToolbarVisible || undefined}
        position={data.toolbarPosition}
      >
        <Button>cut</Button>
        <Button>copy</Button>
        <Button>taste</Button>
      </NodeToolbar>
      <div className="react-flow__node-default">{data?.label}</div>
    </>
  );
}
