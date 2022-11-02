import React, {memo} from "react";
import {style} from "./nodeStyle"
interface NodeProps {
  label: string;
  selected: boolean;
  color?: string;
  content: React.ReactNode;
  id: string;
}
const Node: React.FC<NodeProps> = ({label, selected, color, content, id}: NodeProps) => {
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
        <textarea placeholder="texto" />
      </div>
      <p style={{position: "absolute", top: 0, right: 0, margin: "4px", color: "grey"}}>{id}</p>
    </div>
  );
};

export default memo(Node);