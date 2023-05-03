import React from "react";
import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Mycart from "./pages/Mycart";
import Nav from "./components/Nav";
// import Footer from "./components/Footer"



import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./styles/style.css";
import Deal from "./pages/Deal";


function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={ <><Nav /> <Home/></>}/>
          <Route path="/mycart" element={<><Nav /><Mycart/></>}/>
          <Route path="/deal" element={<Deal/>} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
