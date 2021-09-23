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


const BarrasLugarNacimiento = () => {

    const[neiborhood, setNeiborhood] = useState(null);

    React.useEffect(() => {
        axios.get('http://localhost:8080/all')
            .then((res) => {
                setNeiborhood(res.data)
                console.log(setNeiborhood(res.data))
            }).catch(err => alert(err))
    }, []);

    let ids = []
    let result = []
    if (neiborhood){
        result = neiborhood.map( n => n.llocDeNaixement)
        ids = neiborhood.map(x => x.id)
    }
    console.log(result)
    console.log(ids)
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

                <button className="butones-estadistica-nacimiento botonesHoover">
                    <img src={naixement} alt="" className="iconoboton"/>
                  <span>  Lloc naixement</span>
                </button>

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
                        labels: result,
                        datasets: [{
                            label: 'Gráfica de lloc de naixement',
                            data: [100, 200, 300, 400, 500, 600, 300, 400, 600, 150],
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

export default BarrasLugarNacimiento;