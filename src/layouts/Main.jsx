import { Outlet } from "react-router-dom"
import Navbar from "../components/Shared/Navbar/Navbar"
import Container from "../components/Shared/Container"
import Footer from "../components/Shared/Footer/Footer"

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-28 font-semibold pb-20">
        <Container><Outlet></Outlet></Container>
      </div>
      <Footer/>  
    </div>
  )
}

export default Main
