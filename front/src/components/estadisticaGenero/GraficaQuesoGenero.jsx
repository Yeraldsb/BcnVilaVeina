import React, {useState} from "react";
import genere from "../img/cures.png";
import edat from "../img/altaBaja.png";
import naixement from "../img/cor.png";
import enquestes from "../img/cures.png";
import consulta from "../img/arbre.png";
import suport from "../img/escales.png";
import './graficasGenero.css'
import {Pie} from "react-chartjs-2";
import axios from "axios";
import {Link} from "react-router-dom";


function diferentesGeneros() {
    return ["Home", "Dona", "No binari", "Altres"]
}

function totalRepeticiones(generos, generosPosibles) {
    if (generos === null) {
        return []
    } else {
        return generosPosibles.map(generoPosible =>
            generos.filter(genero => genero === generoPosible).length)
    }
}

const GraficaQuesoGenero = () => {

    const [generos, setGeneros] = useState(null)

    React.useEffect(() => {
        axios.get('http://localhost:8080/all')
            .then((res) => {
                setGeneros(res.data.map(g => g.genere))
            }).catch(err => alert(err))
    }, []);

    return (
        <div className="barras-genero-container">
            <div className="botones-container-genero">
                <Link to="estadistiques">
                    <button className="botonesHoover">
                        <img src={edat} alt="" className="iconoboton"/>
                        Edat
                    </button>

                </Link>

                <Link to="graficanacimiento">
                    <button className="botonesHoover">
                        <img src={naixement} alt="" className="iconoboton"/>
                        Lloc naixement
                    </button>
                </Link>

                <button className="botonesHoover">
                    <img src={enquestes} alt="" className="iconoboton"/>
                    Enquestes realitzades
                </button>

                <button className="botonesHoover">
                    <img src={consulta} alt="" className="iconoboton"/>
                    Consulta a títol
                </button>

                <button className="botonesHoover">
                    <img src={suport} alt="" className="iconoboton"/>
                    Cures /suport
                </button>
            </div>


            <div className="container-wrapper-estadistica">
                <Pie
                    data={{
                        labels: diferentesGeneros(),
                        datasets: [{
                            data: totalRepeticiones(generos, diferentesGeneros()),
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
                    options={{maintainAspectRatio: false}}

                />
            </div>


        </div>
    )
}
export default GraficaQuesoGenero;
