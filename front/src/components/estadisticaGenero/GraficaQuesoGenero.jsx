import React from "react";
import genere from "../img/cures.png";
import edat from "../img/altaBaja.png";
import naixement from "../img/cor.png";
import enquestes from "../img/cures.png";
import consulta from "../img/arbre.png";
import suport from "../img/escales.png";
import './graficasGenero.css'
import { Pie} from "react-chartjs-2";

const GraficaQuesoGenero = () => {
    return(
        <div className="barras-genero-container">
            <div className="butones-Container-barras-genero">
                <button className="butones-estadistica-genero"><img src={genere} alt="" className="iconoboton"/>Gènere</button>
                <button className="butones-estadistica-genero"><img src={edat} alt="" className="iconoboton"/>Edat</button>
                <button className="butones-estadistica-genero"><img src={naixement} alt="" className="iconoboton"/>Lloc naixement</button>
                <div className="buttonContainer second">
                    <button className="butones-estadistica-genero"><img src={enquestes} alt="" className="iconoboton"/>Enquestes realitzades</button>
                    <button className="butones-estadistica-genero"><img src={consulta} alt="" className="iconoboton"/>Consulta a títol</button>
                    <button className="butones-estadistica-genero"><img src={suport} alt="" className="iconoboton"/>Cures /suport</button>
                </div>
            </div>
            <div className="container-wrapper-genero">
                <Pie
                    width={100}
                    height={40}
                    data={{
                        labels: ['Home', 'Dona', 'No binari', 'Altres'],
                        datasets:[{
                            label : 'Gráfica per el gèner',
                            data:[200,100,500,300],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',

                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                            ],
                            borderWidth: 1,
                            hoverOffset: 4
                        }],

                    }}

                />
            </div>

        </div>
    )
}
export default GraficaQuesoGenero;