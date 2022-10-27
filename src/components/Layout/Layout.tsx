import { Navbar } from "../Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children}) => {

  return (
    <> 
      <Navbar />
      {children}
    </>
  )
}