import React, {useState} from 'react'
import "./estadisticas.css"
import genere from "../img/cures.png"
import edat from "../img/altaBaja.png"
import naixement from "../img/cor.png"
import enquestes from "../img/xarxa.png"
import consulta from "../img/arbre.png"
import suport from "../img/escales.png"
import calendario from '../img/calendario.png'
import DatePicker from "react-datepicker";
import {Bar} from "react-chartjs-2";
import axios from "axios";
import {Link} from "react-router-dom";
import ExportExcel from "react-export-excel";



const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExceSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

function edadesDiferentes() {
    return ["-18 anys", "De 18 a 24 anys", "De 25 a 34 anys", "De 35 a 44 anys", "De 45 a 54 anys", "De 55 a 64 anys", "De 65 a 74 anys", "De 75 a 84 anys", "De 85 y més", "NS/NC"]
}

function cuantasVecesSeRepite(edades, valoresPosibles) {
    if (edades === null){
        return []
    }else {
        return valoresPosibles.map(valorPosible =>
            edades.filter(edad => edad === valorPosible).length)
    }
}

export default function Estadisticas() {

    const [startDate, setStartDate] = useState(new Date("2021/08/31"));
    const [endDate, setEndDate] = useState(new Date("2021/08/31"));
    const [edades, setEdades] = useState([])
    const [descargaCsv, setDescargaCsv] = useState([])

    React.useEffect(() => {
        axios.get('http://localhost:8080/all')
            .then((res) => {
                setEdades(res.data.map(e => e.edat))
                setDescargaCsv(res.data)
            }).catch(err => alert(err))
    }, []);


    return (
        <div className="mainContainer">
            <div className="wrapperContainer">
                <div className="dataPickerContainer">
                    <p className="opcionFechas">Selecciona període</p>
                    <img src={calendario} alt=""className="calendario-img"/>
                    <DatePicker
                        className="inputs-picker"
                        selected={startDate}
                        onCpnge={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                    <DatePicker
                        className="inputs-picker"
                        selected={endDate}
                        onCpnge={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                </div>
                <div className="buttonContainer">
                    <Link to="/generos">
                        <button className="botonesHoover">
                            <img src={genere} alt="" className="iconoboton genere"/>
                            <span className="span-genere">Gènere</span>
                        </button>
                    </Link>

                    <button className="botonesHoover">
                        <img src={edat} alt="" className="iconoboton genere "/>
                        <span>Edat</span>
                    </button>

                    <Link to="/graficanacimiento">
                        <button className="botonesHoover">
                            <img src={naixement} alt="" className="iconoboton"/>
                            <span>Lloc naixement</span>
                        </button>
                    </Link>

                    <div className="buttonContainer second">
                        <button className="botonesHoover">
                            <img src={enquestes} alt="" className="iconoboton encuesta"/>
                            <span>Enquestes realitzades</span>
                        </button>

                        <button className="botonesHoover">
                            <img src={consulta} alt="" className="iconoboton"/>
                            <span>Consulta a títol</span>
                        </button>

                        <button className="botonesHoover">
                            <img src={suport} alt="" className="iconoboton"/>
                            <span>Cures /suport</span>
                        </button>
                    </div>
                </div>

            </div>
            <div className="tablaTitleContainer">
                <h3 className="tableTitle"> Tabla Title</h3>
            </div>
            <ExcelFile element={<button className="botonCsv"> Exportar a Excel</button>} filename="Excel Encuestas">
                <ExcelSheet data={descargaCsv} name="Encuestas">
                    <ExcelColumn label="Barris" value="barris" />
                    <ExcelColumn label="Canal De Atencio" value="canalDeAtencio" />
                    <ExcelColumn label="Edat" value="edat" />
                    <ExcelColumn label="lloc De Naixement" value="llocDeNaixement" />
                    <ExcelColumn label="consulta De Titol" value="consultaDeTitol" />
                    <ExcelColumn label="Motiu Cures" value="motiuCures" />
                    <ExcelColumn label="situacio Juridica" value="situacioJuridica" />
                    <ExcelColumn label="serveis Tramits" value="serveisTramits" />
                    <ExcelColumn label="nivel De Estudis" value="nivelEstudis" />
                    <ExcelColumn label="Situacio Laboral" value="situacioLaboral" />
                    <ExcelColumn label="Comens ha conegut" value="comenshaconegut" />
                </ExcelSheet>
            </ExcelFile>

            <div className="graficaContainer">

                <Bar
                    data={{
                        labels: edadesDiferentes(),
                        datasets: [{
                            label: 'Gráfica rango de edad',
                            data: cuantasVecesSeRepite(edades, edadesDiferentes()),
                            backgroundColor: [
                                'rgba(159,99,255,0.2)',
                                'rgba(82,196,97,0.2)',
                                'rgba(159,99,255,0.2)',
                                'rgba(82,196,97,0.2)',
                                'rgba(159,99,255,0.2)',
                                'rgba(82,196,97,0.2)',
                                'rgba(159,99,255,0.2)',
                                'rgba(82,196,97,0.2)',
                                'rgba(159,99,255,0.2)',
                                'rgba(82,196,97,0.2)',
                                'rgba(159,99,255,0.2)',
                                'rgba(82,196,97,0.2)',
                            ],
                            borderColor: [
                                'rgb(137,86,239)',
                                'rgb(39,156,59)',
                                'rgb(137,86,239)',
                                'rgb(39,156,59)',
                                'rgb(137,86,239)',
                                'rgb(39,156,59)',
                                'rgb(137,86,239)',
                                'rgb(39,156,59)',
                                'rgb(137,86,239)',
                                'rgb(39,156,59)',
                                'rgb(137,86,239)',
                                'rgb(39,156,59)',
                            ],
                            borderWidth: 1
                        }]

                    }}
                    height={180}
                    width={300}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
            <button>
                <a href={"url"}> </a>
                Descarga csv
            </button>

        </div>

    )
}
