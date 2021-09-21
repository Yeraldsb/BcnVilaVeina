import * as React from 'react';
import "./sideBarUser.css"
import vila from "../img/LogoVila.png";
import logoencuesta from "../img/logoencuestalila.jpeg";
import logoestadisticas from "../img/logoestadisticaslila.jpeg";
import {Footer} from "../footer/Footer";
import altaBaja from "../img/logoaltausuarilila.jpeg";
import {Link} from "react-router-dom";



export default function SideBarUser() {
    return (
        <div className="sidebaruser">
            <img src={vila} alt="" className="logovilasideuser"/>
            <div className="containerButtonsideuser">
                <Link to="/enquesta" className="linktoenquestauser">
                    <button className="buttonsidebaruser"><img src={logoencuesta} alt="" className="logobotonsidebaruser"/>NOVA ENQUESTA</button>

                </Link>
                <br/>
                <Link to="/estadistiques" className="linktoenquestauser">
                    <button className="buttonsidebaruser"><img src={logoestadisticas} alt="" className="logobotonsidebaruser"/>ESTADÍSTIQUES</button>

                </Link>
                <br/>
               <Link to="/paginaHome" className="linktoenquestauser">
                    <button className="button-logout-user">SORTIR</button>
                </Link>

            </div>
            <Footer/>
        </div>
    )
}
