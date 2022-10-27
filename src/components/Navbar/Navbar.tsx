import styled from "styled-components"

const NavbarContainer = styled.nav`
  width: 100vw;
  height:50px;
  background: lightblue;
`

export const Navbar: React.FC = () => {

  return (
    <NavbarContainer>
      <p>Navbar</p>
    </NavbarContainer>
  )
}