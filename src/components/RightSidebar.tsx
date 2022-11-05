import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateSingleNode } from "../redux/slices/flowChartSlice";
import {Node, useReactFlow} from "reactflow"

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  z-index: 10;
  display: flex;
  position: absolute;
  right: ${p => p.isOpen ? "0" : "-500px"};
  flex-direction: column;
  height: 100%;
  width: 500px;
  transition: right .5s;
  overflow: hidden;
  background: white;
  color: grey;
  justify-content: space-between;
`
export const Divider = styled.hr`
  color: rgba(0, 0, 0, 0.65);
  width: 90%;
`;

export const RightSidebar: React.FC = () => {
  const selectedNode = useAppSelector(state => state.flowchart.selection.nodes[0])
  const isOpen = selectedNode === undefined ? false : true
  const dispatch = useAppDispatch()

  const ref = useRef<HTMLTextAreaElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedNode: Node = {
      ...selectedNode,
      data: {text: e.target.value.trim()}
    }
    dispatch(updateSingleNode(updatedNode))
  }

  useEffect(() => {
    if(selectedNode !== undefined) {
      ref.current!.value = selectedNode.data.text
    }
  },[selectedNode])

  return (
    <Container isOpen={isOpen}>
      <div>
        <p>Mensaje</p>
        <Divider />
        <div style={{display: "flex", flexDirection: "column"}}>
          {/* TODO: Add emoji library */}
          <textarea ref={ref} placeholder="Introduzca el texto del mensaje" onChange={handleChange} />
          <button>+ Añadir botón</button>
        </div>
        <form style={{display: "flex", gap: "1em"}}>
          <input type="checkbox" />
          <label>Esperar la respuestas del subscriptor</label>
        </form>
      </div>
      <button>Aplicar</button>
    </Container>
  )
}