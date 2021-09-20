import React from 'react'
import "./sideBarUser.css"
import vila from '../img/LogoVila.png'
import green from '../img/listaVerde.png'
import orange from '../img/estadisticaNaranja.png'
import {Footer} from "../footer/Footer";
import {Link} from 'react-router-dom';


export default function SideBarUser() {
    return (
        <div className="sidebar">
            <img src={vila} alt="" className="vila"/>
            <div className="containerButton">
                <Link to="/enquesta" style={{ textDecoration: 'none' }}>
                    <button><img src={green} alt="" className="logoSidebar"/>Nova enquesta</button>
                </Link >
                <br/>
                <Link to="/estadistiques" style={{ textDecoration: 'none' }}>
                    <button><img src={orange} alt="" className="logoSidebar"/>Estadístiques</button>
                </Link>
                <Link to="/paginaHome" style={{ textDecoration: 'none' }}>
                    <button className="button-logout-user">SORTIR</button>
                </Link>

                </div>
            <Footer/>
        </div>
    )
}
