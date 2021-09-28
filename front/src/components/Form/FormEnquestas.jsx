import React from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import "./FormEnquestas.css";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import CustomDatePicker from "./CustomDatePicker";
import axios from "axios";
import formPic from '../img/form2.png'

export default function FormEnquestas() {
    const [datepick] = useState(new Date());
    const initialData = {
        barris: "",
        genere: "",
        canalDeAtencio: "",
        edat: "",
        llocDeNaixement: "",
        consultaDeTitol: "",
        motiuCures: "",
        situacioJuridica: "",
        serveisTramits: "",
        nivelEstudis: "",
        situacioLaboral: "",
        comenshaconegut: "",
    }

    const [encuesta, setEncuesta] = useState(initialData)

    function onCreatePost(e) {
        e.preventDefault();
        const postData = {
            encuesta
        };
        console.log(":)")
        console.log(postData)
        axios.post(`http://localhost:8080/createencuesta`,
            postData.encuesta,
        )
            .then(res => {
                alert("Enquesta guardada correctament")
               setEncuesta(initialData)
            })
    }

    function handleFormChange(e) {
        setEncuesta({
            ...encuesta,
            [e.target.name]: e.target.value
        })
    }


    return (

        <div className="pollbackground">
            <Form className="poll-form" onSubmit={onCreatePost}>
                <h3 className="form-title"> Nova Enquesta</h3>
                <div className="form-content">
                    <img src={formPic} alt="" className="form-img"/>
                    <div className="form-column-1">
                        <div className="form-datalabelpicker">
                            <Form.Group>
                                <Form.Label className="data"> Data : </Form.Label>
                            </Form.Group>
                            <Form.Group className={"formdatepicker"}>
                                <CustomDatePicker className="form-control" dateFormat="dd/MM/yyyy"
                                                  selected={datepick}/>
                            </Form.Group>
                        </div>
                        <div className="form-column-1-content">
                            <div>
                                <Form.Group>
                                    <label className="all-labels"> Vila Veïna : </label>
                                    <div>
                                        <select name="barris" id="barris" className="inputs-style"
                                                     onChange={handleFormChange} value={encuesta.barris}
                                            required>
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
                                </Form.Group>


                                <Form.Group>
                                    <label className="all-labels"> Canal d'Atenció </label>
                                    <div>
                                        <select name="canalDeAtencio" id="canalDeAtencio" className="inputs-style"
                                                     onChange={handleFormChange} value={encuesta.canalDeAtencio}
                                            required>
                                            <option></option>
                                            <option value="Presencial Espai">Presencial Espai</option>
                                            <option value="Presencial Descentralizat">Presencial Descentralizat</option>
                                            <option value="Telefónic">Telefónic</option>
                                            <option value="Correu Electrònic">Correu Electrònic</option>
                                            <option value="Telemàtic">Telemàtic</option>
                                        </select>
                                    </div>
                                </Form.Group>
                                <Form.Group>
                                     <label className="age all-labels"> Edat </label>
                                     <div>
                                        <select className="age" name="edat" id="edat" className="inputs-style"
                                                     onChange={handleFormChange} value={encuesta.edat} 
                                            required>
                                            <option></option>
                                            <option value="-18 anys">-18 anys</option>
                                            <option value="De 18 a 24 anys">De 18 a 24 anys</option>
                                            <option value="De 25 a 34 anys">De 25 a 34 anys</option>
                                            <option value="De 35 a 44 anys">De 35 a 44 anys</option>
                                            <option value="De 45 a 54 anys">De 45 a 54 anys</option>
                                            <option value="De 55 a 64 anys">De 55 a 64 anys</option>
                                            <option value="De 65 a 74 anys">De 65 a 74 anys</option>
                                            <option value="De 75 a 84 anys">De 75 a 84 anys</option>
                                            <option value="De 85 y més">De 85 y més</option>
                                            <option value="NS/NC">NS/NC</option>
                                        </select>
                                     </div>
                                </Form.Group>

                                <Form.Group>
                                      <label className="origin all-labels"> Lloc de naixement </label>
                                        <div>
                                        <select className="origin inputs-style" name="llocDeNaixement" id="llocDeNaixement"
                                                     onChange={handleFormChange} value={encuesta.llocDeNaixement}
                                            required>
                                            <option></option>
                                            <option value="Catalunya">Catalunya</option>
                                            <option value="Resta de l'Estat">Resta de l'Estat</option>
                                            <option value="Unión Europea">Unión Europea</option>
                                            <option value="Resta d'Europa">Resta d'Europa</option>
                                            <option value="Asia">Asia</option>
                                            <option value="Àfrica del Nord">Àfrica del Nord</option>
                                            <option value="Resta d'Àfrica">Resta d'Àfrica</option>
                                            <option value="América del Sud i Central">América del Sud i Central</option>
                                            <option value="América del Nord">América del Nord</option>
                                            <option value="Oceania">Oceania</option>
                                            <option value="NS/NC">NS/NC</option>
                                        </select>
                                        </div>
                                    </Form.Group>

                                <Form.Group>
                                    <label className="all-labels"> Gènere </label>
                                    <select className="genere inputs-style" name="genere" id="genere"
                                                 onChange={handleFormChange} value={encuesta.genere}
                                        required>
                                        <option></option>
                                        <option value="Home">Home</option>
                                        <option value="Dona">Dona</option>
                                        <option value="No binari">No binari</option>
                                        <option value="Altres">Altres</option>
                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label className="all-labels"> Consulta de títol: </label>
                                    <br/>
                                    <select name="consultaDeTitol" id="consultaDeTitol" className="inputs-style"
                                            onChange={handleFormChange} value={encuesta.consultaDeTitol}
                                        required>
                                        <option></option>
                                        <option value="Professional de les cures i de la llar"> Professional de les cures i de la llar</option>
                                        <option value="Persona cuidadora familiar"> Persona cuidadora familiar</option>
                                        <option value="Persona receptora de cures"> Persona receptora de cures</option>
                                        <option value="Professional d'altres serveis públics"> Professional d'altres serveis públics</option>
                                        <option value="Entitat, empresa o organització"> Entitat, empresa o organització</option>
                                        <option value="Altres"> Altres</option>
                                        <option value="NS / NC"> NS / NC</option>
                                    </select>
                                </Form.Group>
                            </div>
                        </div>
                    </div>

                    <div className="form-column-2">
                        <div className={"form-column-2-content"}>
                            <Form.Group>
                                <label className="all-labels"> Motiu cures o suport: </label>
                                <select name="motiuCures" id="motiuCures" className="inputs-style"
                                             onChange={handleFormChange} value={encuesta.motiuCures}
                                    required>
                                    <option></option>
                                    <option value="Edat: petita infància">Edat: petita infància</option>
                                    <option value="Edat: procés d'envelliment">Edat: procés d'envelliment</option>
                                    <option value="Malaltia crònica">Malaltia crònica</option>
                                    <option value="Diversitat funcional">Diversitat funcional</option>
                                    <option value="Necessitats de cura puntuals (accident o malaltia)">Necessitats de cura puntuals (accident o malaltia)</option>
                                    <option value="Altres">Altres</option>
                                    <option value="NS/NC">NS/NC</option>
                                </select>
                            </Form.Group>
                            <Form.Group>
                                <label className="all-labels"> Situació Jurídica: </label>
                                <div>
                                    <select name="situacioJuridica" id="situacioJuridica" className=" inputs-style"
                                                 onChange={handleFormChange} value={encuesta.situacioJuridica}
                                        required>
                                        <option></option>
                                        <option value="Nacionalitat espanyola">Nacionalitat espanyola</option>
                                        <option value="Autorització de residència i treball">Autorització de residència i treball</option>
                                        <option value="Autorització de residència sense treball">Autorització de residència sense treball</option>
                                        <option value="Residència per estudis">Residència per estudis</option>
                                        <option value="Sense papers">Sense papers</option>
                                        <option value="Altres">Altres</option>
                                        <option value="NS/NC">NS/NC</option>
                                    </select>
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <label className="all-labels"> Serveis i Tràmits: </label>
                                <div>
                                    <select name="serveisTramits" id="serveisTramits" className=" inputs-style"
                                                 onChange={handleFormChange} value={encuesta.serveisTramits}
                                        required>
                                        <option></option>
                                        <option value="Informació">Informació</option>
                                        <option value="Orientació">Orientació</option>
                                        <option value="Assessorament especialitzat">Assessorament especialitzat</option>
                                        <option value="Tramitació">Tramitació</option>
                                        <option value="Dinamització de la informació"> Dinamització de la informació</option>
                                        <option value="Estada a l'espai VilaVeïna">Estada a l'espai VilaVeïna</option>
                                    </select>
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <label className="all-labels"> Nivell d'estudis: </label>
                                <div>
                                    <select name="nivelEstudis" id="nivelEstudis" className="genere inputs-style"
                                                 onChange={handleFormChange} value={encuesta.nivelEstudis}
                                        required>
                                        <option></option>
                                        <option value="No sap llegir ni esciure">No sap llegir ni esciure</option>
                                        <option value="Primària incompleta">Primària incompleta</option>
                                        <option value="Primària completa">Primària completa</option>
                                        <option value="Secundaria o grau mig de formació professional">Secundaria o grau mig de formació professional</option>
                                        <option value="Estudis superiors">Estudis superiors</option>
                                        <option value="NS/NC">NS/NC</option>
                                    </select>
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <label className="all-labels"> Situació Laboral: </label>
                                <div>
                                    <select name="situacioLaboral" id="situacioLaboral" className="inputs-style"
                                                 onChange={handleFormChange} value={encuesta.situacioLaboral}
                                        required>
                                        <option></option>
                                        <option value="Treball a temps parcial">Treball a temps parcial</option>
                                        <option value="Treball a temps complet">Treball a temps complet</option>
                                        <option value="Estudiant">Estudiant</option>
                                        <option value="Tasques d'habitatge">Tasques d'habitatge</option>
                                        <option value="Pensionista">Pensionista</option>
                                        <option value="Aturat/da">Aturat/da</option>
                                        <option value="Incapacitat permanent">Incapacitat permanent</option>
                                        <option value="Inactiu per altres motius">Inactiu per altres motius</option>
                                    </select>
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <label className="all-labels"> Com ens ha conegut: </label>
                                <div>
                                    <select name="comenshaconegut" id="comenshaconegut" className=" inputs-style"
                                                 onChange={handleFormChange} value={encuesta.comenshaconegut}
                                        required>
                                        <option></option>
                                        <option value="Boca-orella">Boca-orella</option>
                                        <option value="Web">Web</option>
                                        <option value="Xarxes socials">Xarxes socials</option>
                                        <option value="Cartells publicitaris">Cartells publicitaris</option>
                                        <option value="Ve derivat d'un altre servei">Ve derivat d'un altre servei</option>
                                        <option value="Accions de dinamització">Accions de dinamització</option>
                                        <option value="Altre VilaVeïna">Altre VilaVeïna</option>
                                        <option value="Premsa">Premsa</option>
                                        <option value="Altres">Altres</option>
                                        <option value="NS/NC">NS/NC</option>
                                    </select>
                                </div>
                            </Form.Group>
                        </div>
                        <Button
                            className={"submitpoll"}
                            type="submit"
                            variant="success"
                        >
                            ENVIAR
                        </Button>
                    </div>
                </div>
            </Form>
        </div>

    )
}