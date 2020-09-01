import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Inicio
      </a>

      <a className="menu-item" href="/Productos">
        Productos
      </a>

      <a className="menu-item" href="/Personaliza-tu-pedido">
        Personalizá tu pedido
      </a>

      <a className="menu-item" href="/Preguntas-frecuentes">
        Preguntas Frecuentes
      </a>
      <a className="menu-item" href="/Contacto">
        Contacto
      </a>
      <hr className="barraSep" />
    </Menu>
  );
};
