import React, {Component} from "react";
import "./createEncuestador.css";
import axios from "axios";
import Form from "react-bootstrap/Form";

export class CreateEncuestador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            cognom: "",
            vilaveina: "",
            usuari: "",
            contrasenya: "",
            telefon: "",
            adreca: "",
            correu: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({...this.state, [event.target.name]: event.target.value})
        console.log(this.state)
    }


    handleSubmit = event => {
        event.preventDefault();
        const values = JSON.stringify(this.state.values)
        alert("El nou enquestador ha estat donat d'alta");


        axios.post(`http://localhost:8080/create`, {
            nom: this.state.nom,
            cognom: this.state.cognom,
            vilaveina: this.state.vilaveina,
            usuari: this.state.usuari,
            contrasenya: this.state.contrasenya,
            telefon: this.state.telefon,
            adreca: this.state.adreca,
            correu: this.state.correu
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        this.setState({
            nom: "",
            cognom: "",
            vilaveina: "",
            usuari: "",
            contrasenya: "",
            telefon: "",
            adreca: "",
            correu: "",
        })
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <div className="registerForm">
                    <h3>Alta Enquestadores</h3>
                    <div className="columnpile">

                        <div className="columna-1">
                            <label htmlFor="nom">Nom</label>
                            <input type="text"
                                   className="form-control"
                                   name="nom"
                                   value={this.state.nom}
                                   onChange={this.handleChange}
                                   required/>

                            <label>Cognom</label>
                            <input type="text"
                                   className="form-control"
                                   name="cognom"
                                   value={this.state.cognom}
                                   onChange={this.handleChange}
                                   required/>

                            <label>Usuari</label>
                            <input type="text"
                                   className="form-control"
                                   name="usuari"
                                   value={this.state.usuari}
                                   onChange={this.handleChange}
                                   required/>

                            <label>Contrasenya</label>
                            <input type="text"
                                   className="form-control"
                                   name="contrasenya"
                                   value={this.state.contrasenya}
                                   onChange={this.handleChange}
                                   required/>
                        </div>

                        <div className={"columna-2"}>

                            <label>Telèfon</label>
                            <input type="text"
                                   className="form-control"
                                   name="telefon"
                                   value={this.state.telefon}
                                   onChange={this.handleChange}
                                   required/>
                            <Form.Group>
                                <Form.Label> Vila Veïna </Form.Label>
                                <div>
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
                            </Form.Group>


                            {/* <input type="text"
                                   className="form-control"
                                   name="vilaveina"
                                   value={this.state.vilaveina}
                                   onChange={this.handleChange}
                                   required
                            />
*/}
                            <label>Adreca</label>
                            <input type="text"
                                   className="form-control"
                                   name="adreca"
                                   value={this.state.adreca}
                                   onChange={this.handleChange}
                            />

                            <label>Correu electrònic</label>
                            <input type="text"
                                   className="form-control"
                                   name="correu"
                                   value={this.state.correu}
                                   onChange={this.handleChange}
                                   required
                            />
                        </div>
                    </div>
                    <button className="button-save" type="submit"> Guardar</button>

                </div>
            </form>


        )
    }
}