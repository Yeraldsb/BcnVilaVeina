import React, {useState} from 'react'
import "./estadisticas.css"
import genere from "../img/cures.png"
import edat from "../img/altaBaja.png"
import naixement from "../img/cor.png"
import enquestes from "../img/xarxa.png"
import consulta from "../img/arbre.png"
import suport from "../img/escales.png"
import DatePicker from "react-datepicker";
import {Bar} from "react-chartjs-2";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Estadisticas() {


    const [startDate, setStartDate] = useState(new Date("2021/08/31"));
    const [endDate, setEndDate] = useState(new Date("2021/08/31"));
    const [edades, setEdades] = useState(null)
    const [encuestas , setEncuestas ] = useState(null)

    React.useEffect(() => {
        axios.get('http://localhost:8080/all')
            .then((res) => {
                setEdades(res.data)
                setEncuestas(res.data)
            }).catch(err => alert(err))
    }, []);

    let respuestaEdades = []
    if(edades){
        respuestaEdades = edades.map( e => e.edat)
    }
    console.log(respuestaEdades)


    return (
       <div className="mainContainer">
           <div className="wrapperContainer">
               <div className="dataPickerContainer">
                   <p className="opcionFechas">Selecciona periode</p>
                   <DatePicker
                       selected={startDate}
                       onCpnge={(date) => setStartDate(date)}
                       selectsStart
                       startDate={startDate}
                       endDate={endDate}
                   />
                   <DatePicker
                       selected={endDate}
                       onCpnge={(date) => setEndDate(date)}
                       selectsEnd
                       startDate={startDate}
                       endDate={endDate}
                       minDate={startDate}
                   />
               </div>
               <div className="buttonContainer">
                   <button className="buttonEstadisticas botonesHoover">
                       <img src={genere} alt="" className="iconoboton genere"/>
                       <span className="span-genere">Gènere</span>
                   </button>

                   <button className="buttonEstadisticas botonesHoover">
                       <img src={edat} alt="" className="iconoboton genere "/>
                       <span>Edat</span>
                   </button>

                   <Link to="/barrasnacimiento">
                   <button className="buttonEstadisticas botonesHoover">
                       <img src={naixement} alt="" className="iconoboton"/>
                       <span>Lloc naixement</span>
                   </button>
                   </Link>

                   <div className="buttonContainer second">
                       <button className="buttonEstadisticas botonesHoover">
                           <img src={enquestes} alt="" className="iconoboton encuesta"/>
                           <span>Enquestes realitzades</span>
                       </button>

                       <button className="buttonEstadisticas botonesHoover">
                           <img src={consulta} alt="" className="iconoboton"/>
                           <span>Consulta a títol</span>
                       </button>

                       <button className="buttonEstadisticas botonesHoover">
                           <img src={suport} alt="" className="iconoboton"/>
                           <span>Cures /suport</span>
                       </button>
                   </div>
               </div>

           </div>
           <div className="tablaTitleContainer">
               <h3 className="tableTitle"> Tabla Title</h3>
           </div>
           <div className="graficaContainer">

               <Bar
                   data={{
                       labels: respuestaEdades,
                       datasets: [{
                           label: 'Gráfica rango de edad',
                           data: [100, 200, 300, 400, 500, 600, 300, 400, 600, 150],
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

       </div>

    )
}
