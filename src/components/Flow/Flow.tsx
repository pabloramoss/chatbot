import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background, Controls, Edge, EdgeChange, Node, NodeChange } from "reactflow";
import SourceNode from "./CustomNodes/SourceNode";
import TargetNode from "./CustomNodes/TargetNode";
import DefaultNode from "./CustomNodes/defaultNode";
import { useCallback, useState } from "react";

const initialNodes: Node[] = [
  {
    id: "1",
    data: { label: 'Hello', blockId: "1" },
    position: { x: 0, y: 0 },
    type: 'sourceNode',
  },
  {
    id: "2",
    data: { label: 'World', blockId: "1" },
    position: { x: 100, y: 100 },
    type: 'defaultNode'
  },
  {
    id: "3",
    data: { label: 'Hola', blockId: "2" },
    position: { x: 100, y: 100 },
    type: 'targetNode'
  },
];
const initialEdges: Edge[] = []

const nodeTypes = {
  sourceNode: SourceNode,
  targetNode: TargetNode,
  defaultNode: DefaultNode,
};
export const Flow: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), []);

return (
  <div style={{height: "100vh"}}>
    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
    >
      <Background />
      <Controls />
    </ReactFlow>
  </div>
);
}