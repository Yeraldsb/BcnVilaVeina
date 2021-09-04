import * as React from "react";
import './popupModal.css'
import imgLogoVeina from "../img/LogoVila.png";
import {useState} from "react";


function PopupModal(props) {
    const [username, setusername] = useState("")
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}> X</button>
                {props.children}
                <img src={imgLogoVeina} alt="logo veina"/>
                <form>
                    <div className="form">
                        <div className="form-element">
                            <div className="form-label">
                                <label htmlFor="usuario" className="labelUsuario">Usuari</label></div>
                            <input onChange={e => setusername(e.target.value)} type="text" id="usuario" name="usuario"
                                   placeholder="Ingressi usuari"/>
                        </div>
                        <div className="form-element">
                            <div className="form-label">
                                <label htmlFor="contraseña" className="labelUsuario" >Contrasenya</label></div>
                            <input type="text" id="contraseña" name="contraseña" placeholder="Ingressi contrasenya"/>

                        </div>

                        <button className="form-login"
                                onClick={() => props.onSuccessfulLogin(username === "admin")}
                                type="submit"
                                value="login"
                        >
                            Login
                        </button>


                    </div>
                </form>
            </div>
        </div>
    ) : "";
}

export default PopupModal