import * as React from "react";
import logoAgenda from "../img/logoagendablanco.jpeg";
import logoAjuntament from "../img/logoAjuntamentlila.jpeg";
import logoFoment from "../img/logofomentblanco.jpeg";
import "./footer.css";


export const Footer = () => (
    <footer>
        <div className="contenedorLogos">
            <div><img className="imgAju" src={logoAjuntament} alt="logo ajuntament"/></div>
            <div><img className="imgAgenda" src={logoAgenda} alt="logo agenda"/></div>
            <div> <img className="imgFoment" src={logoFoment} alt="logo foment"/></div>
        </div>

    </footer>
);



