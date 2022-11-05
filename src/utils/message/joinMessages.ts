import { findIndex } from "../../components/Flow/utils"
import { Node, Edge } from "reactflow"

const getNode = (nodes: Node[], id: string) => {
  const node = nodes[findIndex(nodes, id) as number]
  return node
}

export const joinMessages = (nodes: Node[], edges: Edge[]) => {
  let array: string[] = []
  edges.forEach( edge => {
    const sourceNode = getNode(nodes, edge.source)
    const targetNode = getNode(nodes, edge.target)
    const text = [sourceNode.data.text, targetNode.data.text].join(". ")
    array.push(text)
  })
  const message = array.join(" ")

  return message
}