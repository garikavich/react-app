import React from "react"
import {Outlet} from "react-router-dom";
import "./style/style.css"
import Navbar from "./components/UI/Navbar";

function App() {

  return (
      <div>
        <Navbar />
        <Outlet />
      </div>
  )
}

export default App;
