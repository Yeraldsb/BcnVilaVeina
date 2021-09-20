import * as React from 'react';
import "./sideBarAdmin.css"
import vila from "../img/LogoVila.png";
import logoencuesta from "../img/logoencuestalila.jpeg";
import logoestadisticas from "../img/logoestadisticaslila.jpeg";
import {Footer} from "../footer/Footer";
import altaBaja from "../img/logoaltausuarilila.jpeg";
import {Link} from "react-router-dom";



export default function SideBarAdmin() {
    return (
        <div className="sidebaradmin">
            <img src={vila} alt="" className="logovilasideadmin"/>
            <div className="containerButtonsideadmin">
                <Link to="/enquesta" className="linktoenquesta">
                    <button className="buttonsidebaradmin"><img src={logoencuesta} alt="" className="logobotonsidebar"/>NOVA ENQUESTA</button>

                </Link>
                <br/>
                <Link to="/estadistiques" className="linktoenquesta">
                    <button className="buttonsidebaradmin"><img src={logoestadisticas} alt="" className="logobotonsidebar"/>ESTADÍSTIQUES</button>

                </Link>
                <br/>
                <Link to="/tablaEncuestadores" className="linktoenquesta">
                    <button className="buttonsidebaradmin"><img src={altaBaja} alt="" className="logobotonsidebar"/>ALTA/BAIXA USUARIS</button>

                </Link>
                <Link to="/paginaHome" className="linktoenquesta">
                    <button className="button-logout-admin">SORTIR</button>
                </Link>

            </div>
            <Footer/>
        </div>
    )
}