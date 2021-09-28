import React, {useEffect, useState} from 'react';
import './editEncuestador.css';
import {Redirect, useLocation, useParams} from "react-router-dom";
import axios from "axios";
import edit from '../img/edit.png'
import Form from "react-bootstrap/Form";

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
        axios.post(`http://localhost:8080/update/${id} `,
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
        <div className="main-container-edit">
            <form>
                <div className="registerForm-edit">
                    <h3 className="edit-title">Editar dades enquestador</h3>
                    <img src={edit} alt="" className="edit-img"/>
                    <div className="columnpile">
                        <div className="columna-1">
                            <label className="edit-labels">Nom</label>
                            <input
                                type="text"
                                className="edit-inputs-style"
                                name="nom"
                                value={encuestadorInfo.nom}
                                onChange={handleChange}
                                required
                            />

                            <label className="edit-labels">Adreça</label>
                            <input type="text"
                                   className="edit-inputs-style"
                                   name="adreca"
                                   value={encuestadorInfo.adreca}
                                   onChange={handleChange}
                                   required
                            />

                            <label className="edit-labels">Email</label>
                            <input type="text"
                                   className="edit-inputs-style"
                                   name="correu"
                                   value={encuestadorInfo.correu}
                                   onChange={handleChange}
                                   required
                            />

                            <label className="edit-labels">Usuari</label>
                            <input type="text"
                                   className="edit-inputs-style"
                                   name="usuari"
                                   value={encuestadorInfo.usuari}
                                   onChange={handleChange}
                                   required
                            />
                        </div>

                        <div className="columna-2">

                            <label className="edit-labels">Cognom</label>
                            <input type="text"
                                   className="edit-inputs-style"
                                   name="cognom"
                                   value={encuestadorInfo.cognom}
                                   onChange={handleChange}
                                   required
                            />


                            <label className="edit-labels"> Vila Veïna : </label>
                            <div>
                                <select name="vilaveina" id="vilaveina" className="edit-inputs-style"
                                        onChange={handleChange} defaultValue={encuestadorInfo.vilaveina}>
                                    <option></option>
                                    <option value="Badal">Badal</option>
                                    <option value="Carmel de dalt">Carmel de dalt</option>
                                    <option value="Casc antic d'Horta">Casc antic d'Horta</option>
                                    <option value="Casc antic Les Corts">Casc antic Les Corts</option>
                                    <option value="Consell de Cent - Girona - Eixample">Consell de Cent - Girona
                                        - Eixample
                                    </option>
                                    <option value="El Camp de l'Arpa - Alchemika">El Camp de l'Arpa -
                                        Alchemika
                                    </option>
                                    <option value="El Congrés i els Indians">El Congrés i els Indians</option>
                                    <option value="Gotic">Gotic</option>
                                    <option value="La Marina - Mare de Déu del Port">La Marina - Mare de Déu del
                                        Port
                                    </option>
                                    <option value="La Trinidad Vella">La Trinidad Vella</option>
                                    <option value="Maresme">Maresme</option>
                                    <option value="Prosperitat">Prosperitat</option>
                                    <option value="Provençals de Poblenou">Provençals de Poblenou</option>
                                    <option value="Sant Gervasi de Cassoles">Sant Gervasi de Cassoles</option>
                                    <option value="Vila de Gracia">Vila de Gracia</option>
                                    <option value="Vilapicina i la Torre LLobeta - Cotxeres">Vilapicina i la
                                        Torre LLobeta - Cotxeres
                                    </option>
                                </select>
                            </div>

                            <label className="edit-labels">Telèfon</label>

                            <input type="text"
                                   className="edit-inputs-style"
                                   name="telefon"
                                   value={encuestadorInfo.telefon}
                                   onChange={handleChange}
                                   required
                            />
                            <label className="edit-labels">Contrasenya</label>
                            <input type="password"
                                   className="edit-inputs-style"
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
        </div>
    );


}
