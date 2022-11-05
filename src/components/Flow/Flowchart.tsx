import { ReactFlowProvider } from "reactflow"
import { Flow } from "./Flow"

export const Flowchart: React.FC = () => {

  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  )
}