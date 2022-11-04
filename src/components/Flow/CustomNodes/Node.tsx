import React, {memo, useContext, useState} from "react";
import { NodesContext } from "../../../context/NodesContext";
import { findIndex, updateArray } from "../utils";
import {style} from "./nodeStyle"
import { Node } from "reactflow"
interface NodeProps {
  label: string;
  selected: boolean;
  color?: string;
  content: React.ReactNode;
  id: string;
}
const Node: React.FC<NodeProps> = ({label, selected, color, content, id}: NodeProps) => {
  const {nodes, setNodes} = useContext(NodesContext)
  const [nodeText, setNodeText] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNodeText(e.target.value.trim())
  }

  const handleSubmit = () => {
    const itemIndex = findIndex(nodes, id) as number
    const node = nodes[itemIndex]
    const newNode: Node = {
      ...node,
      data: {text: nodeText}
    }
    
    setNodes(updateArray(nodes, newNode))
  }
  let customTitle = {...style.title};

  if (color) customTitle.backgroundColor = color;

  // Collapse contentWrapper on icon click
  return (
    // @ts-ignore
    <div style={{...style.body, ...(selected ? style.selected : []), position: ""}}>
      {/* @ts-ignore */}
      <div style={customTitle} />
      <div style={style.contentWrapper}>{content}
        <p style={{ fontWeight: "500"}}>Message</p>
        <textarea onChange={handleChange} placeholder="texto" />
        <button onClick={handleSubmit}>Confirmar</button>
      </div>
      <p style={{position: "absolute", top: 0, right: 0, margin: "4px", color: "grey"}}>{id}</p>
    </div>
  );
};

export default memo(Node);