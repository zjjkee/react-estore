import React from "react";
import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Mycart from "./pages/Mycart";
import Nav from "./components/Nav";
// import Footer from "./components/Footer"
import Deal from "./pages/Deal";
import { Index } from "./pages/Index";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./styles/style.css";



function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<><Nav/> <Index /></>}/>
          <Route path="/shopping" element={<><Nav /> <Home/> </> }/>
          <Route path="/mycart" element={<><Nav /><Mycart/></>}/>
          <Route path="/deal" element={<Deal/>} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
