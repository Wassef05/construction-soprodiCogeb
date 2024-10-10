import Card1 from "../components/Card1";
import Carrousel from "../components/Carrousel";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";
import NavComp from "../components/NavComp";

export default function Home() {
  return (
    <div className="w-full max-w-full overflow-x-hidden" >
      <NavComp />
      <HeaderHome/>
      <Card1/>
      <Carrousel/>
      <Contact/>
      <Footer/>
    </div>
  )
}
