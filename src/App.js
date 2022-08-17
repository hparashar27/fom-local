import React from "react";
import { Router } from "react-router-dom";
import Content from "./Components/Content";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/navbar";


function App() {
  return (
<>
<Router>
<LandingPage/>
</Router>
</>
  );
}

export default App;
