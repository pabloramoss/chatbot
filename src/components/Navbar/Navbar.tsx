import styled from "styled-components"

const Container = styled.nav`
  width: 100vw;
  height: 6vh;
  background: lightblue;

  p {
    margin: 0;
  }
`

export const Navbar: React.FC = () => {

  return (
    <Container>
      <p>Navbar</p>
    </Container>
  )
}