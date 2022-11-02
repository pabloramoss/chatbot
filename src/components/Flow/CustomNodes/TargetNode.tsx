import React, {memo} from "react";
import {Handle, Position} from "reactflow";

import Node from "./Node";
import {contentStyle as style} from "./nodeStyle"

interface Props {
  data: any;
  selected: any;
}

const TargetNode: React.FC<Props> = ({data, selected}) => {
  return (
    <Node
      id={data.blockId}
      color="#e0bbe4"
      content={
        // @ts-ignore
        <div style={style.io}>
          {"Target"}
          <Handle
            id="o__data"
            position={Position.Left}
            style={{...style.handle, ...style.right}}
            type="target"
          />
        </div>
      }
      label={data.label}
      selected={selected}
    />
  );
};

export default memo(TargetNode);