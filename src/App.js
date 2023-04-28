import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Mycart from "./pages/Mycart";
import Nav from "./components/Nav";
import Footer from "./components/Footer"

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./styles/style.css";



function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mycart" element={<Mycart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
