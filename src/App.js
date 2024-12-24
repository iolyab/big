import './App.css';
import Nav from './pages/Nav.js';
import Main from './pages/Main.js';
import Menu from './pages/Menu.js';
import Cards from './pages/Cards.js';
import Footer from './Footer.js';
import { BrowserRouter } from 'react-router-dom'




function App() {
  return (
    <BrowserRouter>
      <>
      <Nav />
      <Main />
      <Menu />
      <Cards />
      <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
