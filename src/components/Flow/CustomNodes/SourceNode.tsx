import React, {memo} from "react";
import {Handle, Position} from "reactflow";

import Node from "./Node";
import {contentStyle as style} from "./nodeStyle"

interface Props {
  data: any;
  selected: any;
}

const SourceNode: React.FC<Props> = ({data, selected}) => {
  return (
    <Node
      id={data.blockId}
      color="#add5fa"
      content={
        // @ts-ignore
        <div style={style.io}>
          {"Source"}
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

export default memo(SourceNode);