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
                                    <label className="all-labels"> Vila Ve??na : </label>
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
                                            <option value="El Congr??s i els Indians">El Congr??s i els Indians</option>
                                            <option value="Gotic">Gotic</option>
                                            <option value="La Marina - Mare de D??u del Port">La Marina - Mare de D??u del
                                                Port
                                            </option>
                                            <option value="La Trinidad Vella">La Trinidad Vella</option>
                                            <option value="Maresme">Maresme</option>
                                            <option value="Prosperitat">Prosperitat</option>
                                            <option value="Proven??als de Poblenou">Proven??als de Poblenou</option>
                                            <option value="Sant Gervasi de Cassoles">Sant Gervasi de Cassoles</option>
                                            <option value="Vila de Gracia">Vila de Gracia</option>
                                            <option value="Vilapicina i la Torre LLobeta - Cotxeres">Vilapicina i la
                                                Torre LLobeta - Cotxeres
                                            </option>
                                        </select>
                                    </div>
                                </Form.Group>


                                <Form.Group>
                                    <label className="all-labels"> Canal d'Atenci?? </label>
                                    <div>
                                        <select name="canalDeAtencio" id="canalDeAtencio" className="inputs-style"
                                                     onChange={handleFormChange} value={encuesta.canalDeAtencio}
                                            required>
                                            <option></option>
                                            <option value="Presencial Espai">Presencial Espai</option>
                                            <option value="Presencial Descentralizat">Presencial Descentralizat</option>
                                            <option value="Telef??nic">Telef??nic</option>
                                            <option value="Correu Electr??nic">Correu Electr??nic</option>
                                            <option value="Telem??tic">Telem??tic</option>
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
                                            <option value="De 85 y m??s">De 85 y m??s</option>
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
                                            <option value="Uni??n Europea">Uni??n Europea</option>
                                            <option value="Resta d'Europa">Resta d'Europa</option>
                                            <option value="Asia">Asia</option>
                                            <option value="??frica del Nord">??frica del Nord</option>
                                            <option value="Resta d'??frica">Resta d'??frica</option>
                                            <option value="Am??rica del Sud i Central">Am??rica del Sud i Central</option>
                                            <option value="Am??rica del Nord">Am??rica del Nord</option>
                                            <option value="Oceania">Oceania</option>
                                            <option value="NS/NC">NS/NC</option>
                                        </select>
                                        </div>
                                    </Form.Group>

                                <Form.Group>
                                    <label className="all-labels"> G??nere </label>
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
                                    <label className="all-labels"> Consulta de t??tol: </label>
                                    <br/>
                                    <select name="consultaDeTitol" id="consultaDeTitol" className="inputs-style"
                                            onChange={handleFormChange} value={encuesta.consultaDeTitol}
                                        required>
                                        <option></option>
                                        <option value="Professional de les cures i de la llar"> Professional de les cures i de la llar</option>
                                        <option value="Persona cuidadora familiar"> Persona cuidadora familiar</option>
                                        <option value="Persona receptora de cures"> Persona receptora de cures</option>
                                        <option value="Professional d'altres serveis p??blics"> Professional d'altres serveis p??blics</option>
                                        <option value="Entitat, empresa o organitzaci??"> Entitat, empresa o organitzaci??</option>
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
                                    <option value="Edat: petita inf??ncia">Edat: petita inf??ncia</option>
                                    <option value="Edat: proc??s d'envelliment">Edat: proc??s d'envelliment</option>
                                    <option value="Malaltia cr??nica">Malaltia cr??nica</option>
                                    <option value="Diversitat funcional">Diversitat funcional</option>
                                    <option value="Necessitats de cura puntuals (accident o malaltia)">Necessitats de cura puntuals (accident o malaltia)</option>
                                    <option value="Altres">Altres</option>
                                    <option value="NS/NC">NS/NC</option>
                                </select>
                            </Form.Group>
                            <Form.Group>
                                <label className="all-labels"> Situaci?? Jur??dica: </label>
                                <div>
                                    <select name="situacioJuridica" id="situacioJuridica" className=" inputs-style"
                                                 onChange={handleFormChange} value={encuesta.situacioJuridica}
                                        required>
                                        <option></option>
                                        <option value="Nacionalitat espanyola">Nacionalitat espanyola</option>
                                        <option value="Autoritzaci?? de resid??ncia i treball">Autoritzaci?? de resid??ncia i treball</option>
                                        <option value="Autoritzaci?? de resid??ncia sense treball">Autoritzaci?? de resid??ncia sense treball</option>
                                        <option value="Resid??ncia per estudis">Resid??ncia per estudis</option>
                                        <option value="Sense papers">Sense papers</option>
                                        <option value="Altres">Altres</option>
                                        <option value="NS/NC">NS/NC</option>
                                    </select>
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <label className="all-labels"> Serveis i Tr??mits: </label>
                                <div>
                                    <select name="serveisTramits" id="serveisTramits" className=" inputs-style"
                                                 onChange={handleFormChange} value={encuesta.serveisTramits}
                                        required>
                                        <option></option>
                                        <option value="Informaci??">Informaci??</option>
                                        <option value="Orientaci??">Orientaci??</option>
                                        <option value="Assessorament especialitzat">Assessorament especialitzat</option>
                                        <option value="Tramitaci??">Tramitaci??</option>
                                        <option value="Dinamitzaci?? de la informaci??"> Dinamitzaci?? de la informaci??</option>
                                        <option value="Estada a l'espai VilaVe??na">Estada a l'espai VilaVe??na</option>
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
                                        <option value="Prim??ria incompleta">Prim??ria incompleta</option>
                                        <option value="Prim??ria completa">Prim??ria completa</option>
                                        <option value="Secundaria o grau mig de formaci?? professional">Secundaria o grau mig de formaci?? professional</option>
                                        <option value="Estudis superiors">Estudis superiors</option>
                                        <option value="NS/NC">NS/NC</option>
                                    </select>
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <label className="all-labels"> Situaci?? Laboral: </label>
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
                                        <option value="Accions de dinamitzaci??">Accions de dinamitzaci??</option>
                                        <option value="Altre VilaVe??na">Altre VilaVe??na</option>
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