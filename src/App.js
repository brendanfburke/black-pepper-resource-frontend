import React from "react";
import { Outlet } from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content-wrap">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
