import React, {Component} from "react";
import "./createEncuestador.css";
import axios from "axios";


export class CreateEncuestador extends Component {

    constructor() {
        super();
        this.state = {
            nom: '',
            cognom: '',
            vilaveina: '',
            usuari: '',
            contrasenya: '',
            telefon: '',
            adreca: '',
            correu: ''
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.nom] = e.target.value;
        this.setState(state);
    }
    onSubmit = (e) => {
        e.preventDefault();

        const {nom, cognom, vilaveina, usuari, contrasenya, telefon, adreca, correu} = this.state;

        axios.post('http://localhost:8080/enquestadors', {
            nom,
            cognom,
            vilaveina,
            usuari,
            contrasenya,
            telefon,
            adreca,
            correu
        })
            .then((result) => {
                this.props.history.push("/enquestadors")
            });
    }


    render() {
        const {nom, cognom, vilaveina, usuari, contrasenya, telefon, adreca, correu} = this.state;
        return (
            <div className="registerForm">
                <h3>Alta Enquestadores</h3>
                <div className="columnpile">

                    <div className="columna-1">
                        <label>Nom</label>
                        <input type="text"
                               className="form-control"
                               name="name"
                               value={nom}
                               onChange={this.onChange}
                               required/>

                        <label>Cognom</label>
                        <input type="text"
                               className="form-control"
                               name="name"
                               value={cognom}
                               onChange={this.onChange}
                               required/>

                        <label>Usuari</label>
                        <input type="text"
                               className="form-control"
                               name="usuari"
                               value={usuari}
                               onChange={this.onChange}
                               required/>

                        <label>Contrasenya</label>
                        <input type="text"
                               className="form-control"
                               name="contrasenya"
                               value={contrasenya}
                               onChange={this.onChange}
                               required/>
                    </div>

                    <div className={"columna-2"}>

                        <label>Telèfon</label>
                        <input type="text"
                               className="form-control"
                               name="contrasenya"
                               value={telefon}
                               onChange={this.onChange}
                               required/>

                        <label> Vila Veïna</label>
                        <input type="text"
                               className="form-control"
                               name="contrasenya"
                               value={vilaveina}
                               onChange={this.onChange}
                               required/>

                        <label>Adreca</label>
                        <input type="text"
                               className="form-control"
                               name="contrasenya"
                               value={adreca}
                               onChange={this.onChange}
                              />

                        <label>Correu electrònic</label>
                        <input type="text"
                               className="form-control"
                               name="contrasenya"
                               value={correu}
                               onChange={this.onChange}
                               required/>
                    </div>
                </div>

                <button className="button-save" type="submit" onClick={this.onSubmit}> Guardar</button>

            </div>


        )
    }
}

/*
* <Form.Group>
                            <Form.Label> Vila Veïna : </Form.Label>
                            <div className="formselect">
                                <Form.Select>

                                    <option></option>
                                    <option>Badal</option>
                                    <option>Carmel de dalt</option>
                                    <option>Casc antic d'Horta</option>
                                    <option>Casc antic Les Corts</option>
                                    <option>Consell de Cent - Girona - Eixample</option>
                                    <option>El Camp de l'Arpa - Alchemika</option>
                                    <option>El Congrés i els Indians</option>
                                    <option>Gotic</option>
                                    <option>La Marina - Mare de Déu del Port</option>
                                    <option>La Trinidad Vella</option>
                                    <option>Maresme</option>
                                    <option>Prosperitat</option>
                                    <option>Provençals de Poblenou</option>
                                    <option>Sant Gervasi de Cassoles</option>
                                    <option>Vila de Gracia</option>
                                    <option>Vilapicina i la Torre LLobeta - Cotxeres</option>
                                </Form.Select>
                            </div>
                        </Form.Group>*/
