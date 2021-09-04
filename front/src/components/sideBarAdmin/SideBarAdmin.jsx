import * as React from 'react';
import "./sideBarAdmin.css"
import vila from "../img/LogoVila.png";
import green from "../img/listaVerde.png";
import orange from "../img/estadisticaNaranja.png";
import {Footer} from "../footer/Footer";
import altaBaja from "../img/altaBaja.png";
import {Link} from "react-router-dom";



export default function SideBarAdmin() {
    return (
        <div className="sidebar">
            <img src={vila} alt="" className="vila"/>
            <div className="containerButton">
                <Link to="/enquesta" className="link">
                    <button><img src={green} alt="" className="logoSidebar"/>Nova enquesta</button>

                </Link>
                <br/>
                <Link to="/estadistiques" className="link">
                    <button><img src={orange} alt="" className="logoSidebar"/>Estadístiques</button>

                </Link>
                <br/>
                <Link to="/tablaEncuestadores" className="link">
                    <button><img src={altaBaja} alt="" className="logoSidebar"/>Alta/Baixa Usuaris</button>

                </Link>
                <Link to="/paginaHome" className="link">
                    <button className="button-logout">Sortir</button>
                </Link>

            </div>
            <Footer/>
        </div>
    )
}