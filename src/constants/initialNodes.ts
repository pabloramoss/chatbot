import { Edge, Node } from "reactflow";

export const initialNodes: Node[] = [
  {
    id: "1",
    data: { text: 'Hello', blockId: "1" },
    position: { x: 0, y: 0 },
    type: 'sourceNode',
  },
  {
    id: "2",
    data: { text: 'World', blockId: "2" },
    position: { x: 100, y: 100 },
    type: 'defaultNode'
  },
  {
    id: "3",
    data: { text: 'Hola', blockId: "3" },
    position: { x: 100, y: 200 },
    type: 'targetNode'
  },
];
export const initialEdges: Edge[] = []