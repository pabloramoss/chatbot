import { useReactFlow, Node } from "reactflow"
import styled from "styled-components"

const Container = styled.div`
  height: 94vh;
  width: 90px;
  background: grey;
`

export const LeftSidebar: React.FC = () => {

  const {addNodes, getNodes} = useReactFlow()

  const newNode: Node = {
    id: String(Date.now()),
    data: {text: ""},
    type: "defaultNode",
    position: {x: 100, y: 100}
  }
  return (
    <Container>
      <button>Enviar Mensaje</button>
      <button onClick={() => {
        addNodes(newNode)
        console.log("los nodos",getNodes())
      }}>Agregar nodo</button>
    </Container>
  )
}