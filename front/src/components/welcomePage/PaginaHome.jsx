import React from "react";
import imgLogoVeina from "../img/LogoVila.png";
import logoAgenda from "../img/LogoAgenda.png";
import logoAjuntament from "../img/LogoAjuntament.gif";
import logoFoment from "../img/LogoFoment.png";
import PopupModal from "../popUp/PopupModal";
import {useState} from "react";
import "./paginaHome.css"
import {StartSession} from "../startSession/StartSession";


export function PaginaHome(props) {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="containerHome">
            <div className="containerLogoVila">
                <img src={imgLogoVeina} alt="logo veina"/>
            </div>
            <StartSession/>

            <button className="botonWelcome" onClick={() => setButtonPopup(true)}> ENTRAR</button>
            <div className="containerFooter">
                <img className="imgAgendahome" src={logoAgenda} alt="logo agenda"/>
                <img className="imgAyuntamenthome" src={logoAjuntament} alt="logo ajuntament"/>
                <img className="imgFomenthome" src={logoFoment} alt="logo foment"/>

            </div>
            <PopupModal trigger={buttonPopup} setTrigger={setButtonPopup} onSuccessfulLogin={props.onSuccessfulLogin}>

            </PopupModal>




        </div>
    )
}