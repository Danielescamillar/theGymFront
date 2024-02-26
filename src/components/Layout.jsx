import Navbar from "./navbar/Navbar";
import MenuNavbar from "./navbar/MenuNavbar";
import { useEffect , useState } from "react";

const Layaout = ({children}) => {

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen)setIsOpen(false)
    }
  window.addEventListener("resize",hideMenu) // Refactored is possible

  return () => {
    window.removeEventListener("resize",hideMenu) // remove the listener when component Layaout is destroyed
  }
    })

  const toggleNavbarOpen = () => {
    setIsOpen(!isOpen)
  }
    return (
      <div className=" h-screen bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover">
        <Navbar toggleNavbarOpen={toggleNavbarOpen}/>
        {isOpen ? <MenuNavbar toggleNavbarOpen={toggleNavbarOpen}/> : null}
        {/* {isOpen && <MenuNavbar/>} */}
        {children}
      </div>
    )
  }
  
  export default Layaout;
  