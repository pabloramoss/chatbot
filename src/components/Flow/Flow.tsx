import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background, Controls, Edge, EdgeChange, Node, NodeChange } from "reactflow";
import SourceNode from "./CustomNodes/SourceNode";
import TargetNode from "./CustomNodes/TargetNode";
import DefaultNode from "./CustomNodes/DefaultNode";
import { useCallback, useContext, useState } from "react";
import { initialEdges, initialNodes } from "../../constants/initialNodes";
import { NodesContext } from "../../context/NodesContext";

const nodeTypes = {
  sourceNode: SourceNode,
  targetNode: TargetNode,
  defaultNode: DefaultNode,
};
export const Flow: React.FC = () => {
  const {nodes, edges, onNodesChange, onEdgesChange, onConnect} = useContext(NodesContext)

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