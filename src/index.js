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
      
      
      <div id="page-wrap">
        <h1>Contenido centrado.</h1>

      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Menu />, rootElement);

