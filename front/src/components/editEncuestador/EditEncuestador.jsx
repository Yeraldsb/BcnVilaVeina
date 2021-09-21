import React, {useEffect, useState} from 'react';
import './editEncuestador.css';
import {Redirect, useLocation, useParams} from "react-router-dom";
import axios from "axios";

export const EditEncuestador = (props) => {
    const locationData = useLocation()
    const [encuestadorInfo, setEncuestadorInfo] = React.useState(locationData.state?.encuestador || {
        nom: "",
        cognom: "",
        vilaveina: "",
        usuari: "",
        contrasenya: "",
        telefon: "",
        adreca: "",
        correu: "",
    })


    React.useEffect(() => {
        axios.get('http://localhost:8080/enquestadors/${encuestadoresInfo.id}')
            .then((res) => {
                setEncuestadorInfo(res.data);
                console.log("Getting data here")
                console.log(res.data)
            })
    }, []);

    let {id} = useParams()
    console.log(id)
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post( `http://localhost:8080/update/${id} `,
            encuestadorInfo
        ).then((res) => {
            setEncuestadorInfo(res.data)
        }).catch(err => alert(err))
    }

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setEncuestadorInfo((info) => {
            return {
                ...info,
                [name]: value
            }
        })
    }


    return (
        <form>
            <div className="registerForm-edit">
                <h3>Editar dades enquestador</h3>
                <div className={"columnpile"}>
                    <div className={"columna-1"}>
                        <label>Nom</label>
                        <input
                            type="text"
                            className="register-name"
                            name="nom"
                            value={encuestadorInfo.nom}
                            onChange={handleChange}
                            required
                        />

                        <label>Adreça</label>
                        <input type="text"
                               className="register-address"
                               name="adreca"
                               value={encuestadorInfo.adreca}
                               onChange={handleChange}
                               required
                        />

                        <label>Email</label>
                        <input type="text"
                               className="register-email"
                               name="correu"
                               value={encuestadorInfo.correu}
                               onChange={handleChange}
                               required
                        />

                        <label>Usuari</label>
                        <input type="text"
                               className="register-email"
                               name="usuari"
                               value={encuestadorInfo.usuari}
                               onChange={handleChange}
                               required
                        />
                    </div>

                    <div className={"columna-2"}>

                        <label>Cognom</label>
                        <input type="text"
                               className="register-surname"
                               name="cognom"
                               value={encuestadorInfo.cognom}
                               onChange={handleChange}
                               required
                        />

                        <label> Vila Veïna</label>
                        <input type="text"
                               className="form-control"
                               name="vilaveina"
                               value={encuestadorInfo.vilaveina}
                               onChange={handleChange}
                               required
                        />


                        <label>Telèfon</label>

                        <input type="text"
                               className="register-phone"
                               name="telefon"
                               value={encuestadorInfo.telefon}
                               onChange={handleChange}
                               required
                        />
                        <label>Contrasenya</label>
                        <input type="password"
                               className="register-phone"
                               name="contrasenya"
                               value={encuestadorInfo.contrasenya}
                               onChange={handleChange}
                               required
                        />
                    </div>
                </div>

                <button
                    className="button-save"
                    type="submit"
                    onClick={handleSubmit}
                >
                    GUARDAR
                </button>

            </div>

        </form>
    );


}
