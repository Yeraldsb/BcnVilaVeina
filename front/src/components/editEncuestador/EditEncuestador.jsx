import React, {useState} from 'react';
import './editEncuestador.css';
import {Redirect, useLocation, useParams} from "react-router-dom";
import axios from "axios";

export const EditEncuestador = (props) => {
    const locationData = useLocation()
    const [encuestador, setEncuestador] = useState(locationData.state?.encuestador || {
        id: "",
        nom: "",
        cognom: "",
        vilaveina: "",
        usuari: "",
        contrasenya: "",
        telefon: "",
        adreca: "",
        correu: "",
    })

    const handleInputChange = (e) => {
        setEncuestador({
            ...encuestador,
            [e.target.name]: e.target.value
        })
        console.log(encuestador)
    }

    const handleSubmit = (event) => {
        console.log(`Quiero hacer PUT http://localhost:8080/update/${encuestador.id} con el body ${encuestador}`)
    }

    return (
        <form>
            <div className={"registerForm"}>
                <h3>Editar dades enquestador</h3>
                <div className={"columnpile"}>

                    <div className={"columna-1"}>
                        <label>Nom</label>
                        <input
                            type="text"
                            className="register-name"
                            name="nom"
                            value={encuestador.nom}
                            onChange={handleInputChange}
                            required
                        />

                        <label>Adreça</label>
                        <input type="text"
                               className="register-address"
                               name="adreca"
                               value={encuestador.adreca}
                               onChange={handleInputChange}
                               required
                        />

                        <label>Email</label>
                        <input type="text"
                               className="register-email"
                               name="correu"
                               value={encuestador.correu}
                               onChange={handleInputChange}
                               required
                        />

                        <label>Usuari</label>
                        <input type="text"
                               className="register-email"
                               name="usuari"
                               value={encuestador.usuari}
                               onChange={handleInputChange}
                               required
                        />
                    </div>

                    <div className={"columna-2"}>

                        <label>Cognom</label>
                        <input type="text"
                               className="register-surname"
                               name="cognom"
                               value={encuestador.cognom}
                               onChange={handleInputChange}
                               required
                        />

                        <label> Vila Veïna</label>
                        <input type="text"
                               className="form-control"
                               name="vilaveina"
                               value={encuestador.vilaveina}
                               onChange={handleInputChange}
                               required
                        />


                        <label>Telèfon</label>

                        <input type="text"
                               className="register-phone"
                               name="telefon"
                               value={encuestador.telefon}
                               onChange={handleInputChange}
                               required
                        />
                        <label>Contrasenya</label>
                        <input type="password"
                               className="register-phone"
                               name="contrasenya"
                               value={encuestador.contrasenya}
                               onChange={handleInputChange}
                               required
                        />
                    </div>
                </div>

                <button
                    className="button-save"
                    type="submit"
                    onClick={() => console.log("Pinche callback")}
                >
                    Update
                </button>

            </div>

        </form>
    );


}
