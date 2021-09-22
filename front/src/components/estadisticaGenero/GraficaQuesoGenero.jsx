import React from "react";
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

    React.useEffect(() => {
        axios.get('http://localhost:8080/enquestadors/${encuestadoresInfo.id}')
            .then((res) => {
                console.log("Getting data here")
                console.log(res.data)
            })
    }, []);

    return(
        <div className="barras-genero-container">

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
