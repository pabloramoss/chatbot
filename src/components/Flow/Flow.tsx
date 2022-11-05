import ReactFlow, { Background, Controls } from "reactflow";
import SourceNode from "./CustomNodes/SourceNode";
import TargetNode from "./CustomNodes/TargetNode";
import DefaultNode from "./CustomNodes/DefaultNode";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { connectChange, edgesChange, nodesChange } from "../../redux/slices/flowChartSlice";

const nodeTypes = {
  sourceNode: SourceNode,
  targetNode: TargetNode,
  defaultNode: DefaultNode,
};
export const Flow: React.FC = () => {

  const dispatch = useAppDispatch()
  const {nodes, edges} = useAppSelector(state => state.flowchart)

return (
  <div style={{height: "100%", width: "100%"}}>
    <ReactFlow
      nodes={nodes}
      onNodesChange={(changes) => dispatch(nodesChange(changes))}
      edges={edges}
      onEdgesChange={(changes) => dispatch(edgesChange(changes))}
      onConnect={(connection) => dispatch(connectChange(connection))}
      nodeTypes={nodeTypes}
    >
      <Background />
      <Controls />
    </ReactFlow>
  </div>
);
}