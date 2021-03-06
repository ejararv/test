import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/MyNavbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
