import React, { createContext, useCallback, useState } from "react"
import { Node, Edge, NodeChange, applyNodeChanges, EdgeChange, applyEdgeChanges, addEdge } from "reactflow";
import { initialEdges, initialNodes } from "../constants/initialNodes";

export const NodesContext = createContext<any>(null)

interface Props {
  children: React.ReactNode;
}

export const NodesProvider: React.FC<Props> = ({children}) => {
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

  const value = {
    nodes,
    setNodes,
    edges,
    setEdges,
    onNodesChange,
    onEdgesChange,
    onConnect,
  }

  return (
    <NodesContext.Provider value={value}>
      {children}
    </NodesContext.Provider>
  )
}