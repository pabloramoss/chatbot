import ReactFlow, { Background, Controls, Edge, Node, NodeMouseHandler, OnSelectionChangeParams, useOnSelectionChange, useStore } from "reactflow";
import SourceNode from "./CustomNodes/SourceNode";
import TargetNode from "./CustomNodes/TargetNode";
import DefaultNode from "./CustomNodes/DefaultNode";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { connectChange, edgesChange, nodesChange, setSelection } from "../../redux/slices/flowChartSlice";
import { MouseEventHandler, useCallback } from "react";

const nodeTypes = {
  sourceNode: SourceNode,
  targetNode: TargetNode,
  defaultNode: DefaultNode,
};
export const Flow: React.FC = () => {

  const dispatch = useAppDispatch()
  const {nodes, edges} = useAppSelector(state => state.flowchart)

  const handleSelection = useCallback(({ nodes, edges }: OnSelectionChangeParams) => {
    dispatch(setSelection({nodes, edges}))
  },[dispatch])

return (
  <div style={{height: "100%", width: "100%"}}>
    <ReactFlow
      nodes={nodes}
      onNodesChange={(changes) => dispatch(nodesChange(changes))}
      edges={edges}
      onEdgesChange={(changes) => dispatch(edgesChange(changes))}
      onConnect={(connection) => dispatch(connectChange(connection))}
      nodeTypes={nodeTypes}
      selectNodesOnDrag={false}
      onSelectionChange={handleSelection}
      nodesFocusable={true}
      deleteKeyCode={["Backspace", "Delete"]}
    >
      <Background />
      <Controls />
    </ReactFlow>
  </div>
);
}