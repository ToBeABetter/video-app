import React from "react";
import "./App.css";
import route from "./router";
import {
  useRoutes
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {
  const routes = useRoutes(route)
  return (
    <div>
      <Header/>
      {routes}
      <Footer/>
    </div>
  );
}

export default App;
