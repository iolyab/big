import "./App.css";
import Nav from "./pages/nav/Nav.js";
import Main from "./pages/Main.js";
import Menu from "./pages/menu/Menu.js";
import Cards from "./components/cards/Cards.js";
import About from "./pages/about/About.js";
import Footer from "./pages/footer/Footer.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Main />
        <Menu />
        <Cards />
        <About />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
