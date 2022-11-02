import React, {memo} from "react";
import {Handle, Position} from "reactflow";

import Node from "./Node";
import  {contentStyle as style} from "./nodeStyle"

interface Props {
  data: any;
  selected: any;
}

const DefaultNode: React.FC<Props> = ({data, selected}) => {
  return (
    <Node
      id={data.blockId}
      color="lightgrey"
      content={
        // @ts-ignore
        <div style={style.io}>
          {"Default"}
          <Handle
            id="o__data"
            position={Position.Left}
            style={{...style.handle, ...style.right}}
            type="target"
          />
          <Handle
            id="o__data"
            position={Position.Right}
            style={{...style.handle, ...style.right}}
            type="source"
          />
        </div>
      }
      label={data.label}
      selected={selected}
    />
  );
};

export default memo(DefaultNode);