import React, {useState} from "react";
import genere from "../img/cures.png";
import edat from "../img/altaBaja.png";
import naixement from "../img/cor.png";
import enquestes from "../img/cures.png";
import consulta from "../img/arbre.png";
import suport from "../img/escales.png";
import './graficasGenero.css'
import { Pie} from "react-chartjs-2";
import axios from "axios";

const GraficaQuesoGenero = () => {

    const [generos, setGeneros] = useState(null)

    React.useEffect(() => {
        axios.get('http://localhost:8080/all')
            .then((res) => {
            setGeneros(res.data)
            }).catch(err => alert(err))
    }, []);

    let allGeneros = []
    if (generos){
        allGeneros = generos.map( genders => genders.genere)
    }
    console.log(allGeneros)

    return(
        <div className="barras-genero-container">
            <div className="graficas-genero-wrapper">
                <div className="container-buttons-genero">
                    <button className="butones-estadistica-genero">
                        <img src={genere} alt="" className="iconoboton"/>
                        Gènere
                    </button>

                    <button className="butones-estadistica-genero">
                        <img src={edat} alt="" className="iconoboton"/>
                        Edat
                    </button>

                    <button className="butones-estadistica-genero"><img src={naixement} alt="" className="iconoboton"/>Lloc
                        naixement
                    </button>
                    <div className="buttonContainer second">

                        <button className="butones-estadistica-genero">
                            <img src={enquestes} alt="" className="iconoboton"/>
                            Enquestes realitzades
                        </button>

                        <button className="butones-estadistica-genero">
                            <img src={consulta} alt="" className="iconoboton"/>
                            Consulta a títol
                        </button>

                        <button className="butones-estadistica-genero">
                            <img src={suport} alt="" className="iconoboton"/>
                            Cures /suport
                        </button>
                    </div>
                </div>


                <div className="container-wrapper-genero">
                    <Pie
                        data={{
                            labels: allGeneros,
                            datasets:[{
                                label : 'Gráfica per el gèner',
                                data:[200,100,500,300],
                                backgroundColor: [
                                    'rgb(238,180,204)',
                                    'rgba(0,191,255,0.36)',
                                    'rgba(152,251,152,0.8)',
                                    'rgba(255,159,64,0.54)',


                                ],
                                borderColor: [
                                    'rgb(255,105,180)',
                                    'rgb(30,144,255)',
                                    'rgb(50,205,50)',
                                    'rgba(255, 159, 64, 1)',
                                ],
                                borderWidth: 1,
                                hoverOffset: 4
                            }],

                        }}
                        height={580}
                        width={800}
                        options={{ maintainAspectRatio: false }}

                    />
                </div>
            </div>

        </div>
    )
}
export default GraficaQuesoGenero;
