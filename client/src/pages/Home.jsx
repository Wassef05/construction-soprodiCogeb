import Card1 from "../components/Card1";
import Carrousel from "../pages/Carrousel";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";
import NavComp from "../components/NavComp";
import Map from "../components/Map";


export default function Home() {
  return (
    <div className="w-full max-w-full overflow-x-hidden" >
      <NavComp />
      <HeaderHome/>
      <Card1/>
      <Carrousel/>
      <Contact/>
      <Map/>
      <Footer/>
    </div>
  )
}
