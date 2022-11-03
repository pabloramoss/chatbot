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
  
  const sendMessage = async () => {
    const chat_id = 1367188448
    await fetch(`https://api.telegram.org/bot5165116240:AAFAI03uGZhb2C7Wg6TGkdhQ6Jg4DMJauSo/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent("mensaje de prueba")}`)
  }

return (
  <div style={{height: "100vh"}}>
    <button onClick={sendMessage}>send message</button>
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