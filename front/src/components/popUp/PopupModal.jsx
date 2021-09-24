import * as React from "react";
import './popupModal.css'
import imgLogoVeinablanco from "../img/Logo_blanco.png";
import {useState} from "react";


function PopupModal(props) {
    const [username, setusername] = useState("")
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="close-btn" onClick={() => props.setTrigger(false)}> X</div>
                {props.children}
                <img className="logomodalvilaveina" src={imgLogoVeinablanco} alt="logo veina"/>
                <form>
                    <div className="form">
                        <div className="form-element">
                            <div className="form-label">
                                <label htmlFor="usuario" className="labelUsuario">Usuari</label></div>
                            <input className="inputpopupmodal" onChange={e => setusername(e.target.value)} type="text" id="usuario" name="usuario"
                                   placeholder="Ingressi usuari"/>
                        </div>
                        <div className="form-element">
                            <div className="form-label">
                                <label htmlFor="contraseña" className="labelUsuario" >Contrasenya</label></div>
                            <input className="inputpopupmodal" type="text" id="contraseña" name="contraseña" placeholder="Ingressi contrasenya"/>

                        </div>

                        <button className="form-login"
                                onClick={() => props.onSuccessfulLogin(username === "admin")}
                                type="submit"
                                value="login"
                        >
                            ENTRAR
                        </button>


                    </div>
                </form>
            </div>
        </div>
    ) : "";
}

export default PopupModal