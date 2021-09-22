import React, {useState} from 'react'
import "./estadisticas.css"
import genere from "../img/cures.png"
import edat from "../img/altaBaja.png"
import naixement from "../img/cor.png"
import enquestes from "../img/cures.png"
import consulta from "../img/arbre.png"
import suport from "../img/escales.png"
import DatePicker from "react-datepicker";
import {Bar} from "react-chartjs-2";
import axios from "axios";

export default function Estadisticas() {


    const [startDate, setStartDate] = useState(new Date("2021/08/31"));
    const [endDate, setEndDate] = useState(new Date("2021/08/31"));
    const [edades, setEdades] = useState(null)

    React.useEffect(() => {
        axios.get('http://localhost:8080/all')
            .then((res) => {
                setEdades(res.data)
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
                   <button className="buttonEstadisticas"><img src={genere} alt="" className="iconoboton"/>Gènere</button>
                   <button className="buttonEstadisticas"><img src={edat} alt="" className="iconoboton"/>Edat</button>
                   <button className="buttonEstadisticas"><img src={naixement} alt="" className="iconoboton"/>Lloc naixement</button>
                   <div className="buttonContainer second">
                       <button className="buttonEstadisticas"><img src={enquestes} alt="" className="iconoboton"/>Enquestes realitzades</button>
                       <button className="buttonEstadisticas"><img src={consulta} alt="" className="iconoboton"/>Consulta a títol</button>
                       <button className="buttonEstadisticas"><img src={suport} alt="" className="iconoboton"/>Cures /suport</button>
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
