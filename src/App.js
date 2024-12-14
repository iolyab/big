import './App.css';
import Nav from './pages/Nav.js';
import Main from './pages/Main.js';
import { BrowserRouter } from 'react-router-dom'




function App() {
  return (
    <BrowserRouter>
      <>
      <Nav />
      <Main />
      </>
    </BrowserRouter>
  );
};

export default App;
