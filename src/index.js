import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Menu de hamburguesa.
import "./components/BurgerMenu/burgerMenu.css";
import SideBar from "./components/BurgerMenu/burgerMenu";


// Todo el contenido va dentro del campo div id=App.
function Menu() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <img className="Logo" src={require("./img/accesorios.png")} alt="logo" />
      <div id="page-wrap">
        
        <h2>Contenido centrado.</h2>

      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Menu />, rootElement);

