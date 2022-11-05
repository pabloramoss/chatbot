import React, {memo} from "react";
import {style} from "./nodeStyle"
interface NodeProps {
  selected: boolean;
  color?: string;
  content: React.ReactNode;
  id: string;
  data: any;
}
const Node: React.FC<NodeProps> = ({selected, color, content, id, data}: NodeProps) => {

  let customTitle = {...style.title};

  if (color) customTitle.backgroundColor = color;

  const text = data?.text === "" ? "Introduzca el texto del mensaje" : data.text

  return (
    // @ts-ignore
    <div style={{...style.body, ...(selected ? style.selected : [])}}>
      {/* @ts-ignore */}
      <div style={customTitle} />
      <div style={style.contentWrapper}>{content}
        <p style={{ fontWeight: "500"}}>Message</p>
        <p style={{padding: "0.5em", background: "lightgrey", color: "grey", borderRadius: "4px"}}>{text}</p>
      </div>
      <p style={{position: "absolute", top: 0, right: 0, margin: "4px", color: "grey"}}>{id}</p>
    </div>
  );
};

export default memo(Node);