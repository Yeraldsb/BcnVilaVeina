import React, {useState} from 'react'
import "./estadisticas.css"
import genere from "../img/cures.png"
import edat from "../img/altaBaja.png"
import naixement from "../img/cor.png"
import enquestes from "../img/cures.png"
import consulta from "../img/arbre.png"
import suport from "../img/escales.png"
import DatePicker from "react-datepicker";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line} from 'recharts';

export default function Estadisticas() {

    const data = [
        {
            name: '0 - 3',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '4 - 7',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '8 - 14',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: '15 - 18',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: '18 - 26',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: '27 - 40',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: '40 - 60',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const [startDate, setStartDate] = useState(new Date("2021/08/31"));
    const [endDate, setEndDate] = useState(new Date("2021/08/31"));

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
               <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={data}>
                       <XAxis dataKey="name" stroke="#5550bd" />
                       <YAxis />
                       <Bar dataKey="pv" fill="#8884d8" />
                       <Bar dataKey="uv" fill="#82ca9d" />
                   </BarChart>
               </ResponsiveContainer>
           </div>

       </div>

    )
}

/*


*  <div className="bodyestadisticas">
            <div className="containerestadisticas">
                <div className="containerdatepicker">

                </div>
                <div >
                    <div className="botonContainer">

                    </div>
                    <div className="botonContainer">

                    </div>
                </div>
                <div className="containergrafica">
                    <p>aquí irá la gráfica</p>

                </div>
            </div>
        </div>*/