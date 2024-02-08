/* eslint-disable no-unused-vars */
import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div
      style={{ backgroundColor: "#161616" }}
      className="h-fit w-full font-Satoshi_Variable"
    >
      <NavBar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
