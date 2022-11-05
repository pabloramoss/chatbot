import styled from "styled-components"
import { useAppSelector } from "../redux/hooks";

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${p => p.isOpen ? "500px" : "0"};
  height: 100%;
  transition: width .5s;
`
export const Divider = styled.hr`
  color: rgba(0, 0, 0, 0.65);
  width: 70%;
`;

export const RightSidebar: React.FC = () => {
  const isOpen = useAppSelector(state => state.sidebar.sidebarOpen)

  return (
    <Container isOpen={isOpen}>
      <p>Mensaje</p>
      <Divider />
      <div>
        {/* TODO: Add emoji library */}
        <textarea placeholder="Introduzca el texto del mensaje" />
        <button>+ Añadir botón</button>
      </div>
      <form style={{display: "flex", gap: "1em"}}>
        <input type="checkbox" />
        <label>Esperar la respuestas del subscriptor</label>
      </form>
    </Container>
  )
}