import React, {useState} from "react";
import "./estadisticasLugarNacimiento.css"
import {Bar} from "react-chartjs-2";
import genere from "../img/cures.png";
import edat from "../img/altaBaja.png";
import naixement from "../img/cor.png";
import enquestes from "../img/cures.png";
import consulta from "../img/arbre.png";
import suport from "../img/escales.png";
import axios from "axios";
import {Link} from "react-router-dom";

function lugaresDeNacimiento() {
    return [ "Catalunya", "Resta de l'Estat", "Unión Europea", "Resta d'Europa", "Asia", "Àfrica del Nord", "Resta d'Àfrica", "América del Sud i Central", "América del Nord", "Oceania", "NS/NC" ]
}
function lugarDeNacimientoRepetido( lugares, lugaresRepetidos) {
    if (lugares === null){
        return []
    }else{
        return lugaresRepetidos.map(lugarRepetido =>
        lugares.filter(lugar => lugar === lugarRepetido).length)
    }
}

export default function  BarrasLugarNacimiento(){

    const[lugares, setLugares] = useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:8080/all')
            .then((res) => {
                setLugares(res.data.map(e => e.llocDeNaixement))

            }).catch(err => alert(err))
    }, []);


    return (
        <div className="barras-edad-container">
            <div className="butones-Container-barras-Edad ">
                <button className="butones-estadistica-nacimiento botonesHoover">
                    <img src={genere} alt="" className="iconoboton genere"/>
                   <span>Gènere</span>
                </button>

                <Link to="/estadistiques">
                <button className="butones-estadistica-nacimiento botonesHoover">
                    <img src={edat} alt="" className="iconoboton genere"/>
                    <span>Edat</span>
                </button>
                </Link>

                <Link to="/graficanacimiento">
                <button className="butones-estadistica-nacimiento botonesHoover">
                    <img src={naixement} alt="" className="iconoboton"/>
                  <span>  Lloc naixement</span>
                </button>
                </Link>

                <div className="buttonContainer second">
                    <button className="butones-estadistica-nacimiento botonesHoover">
                        <img src={enquestes} alt="" className="iconoboton encuesta"/>
                        <span>Enquestes realitzades</span>
                    </button>
                    <button className="butones-estadistica-nacimiento botonesHoover">
                        <img src={consulta} alt="" className="iconoboton"/>
                        <span>Consulta a títol</span>
                    </button>
                    <button className="butones-estadistica-nacimiento botonesHoover">
                        <img src={suport} alt="" className="iconoboton"/>
                        <span>Cures /suport</span>
                    </button>
                </div>
            </div>
            <div className="container-wrapper-barra">
                <Bar
                    data={{
                        labels: lugaresDeNacimiento(),
                        datasets: [{
                            label: 'Gráfica de lloc de naixement',
                            data: lugarDeNacimientoRepetido(lugares, lugaresDeNacimiento()),
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                            ],
                            borderWidth: 1
                        }]

                    }}
                    height={300}
                    width={300}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>

        </div>
    )
}

