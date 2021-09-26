import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Estadisticas from "./components/estadisticas/Estadisticas";
import FormEnquestas from "./components/form/FormEnquestas";
import SideBarUser from "./components/sideBarUser/SideBarUser";
import BarrasLugarNacimiento from "./components/estadisticasLugarNacimiento/BarrasLugarNacimiento";
import React from "react";
import GraficaQuesoGenero from "./components/estadisticaGenero/GraficaQuesoGenero";



function AppEncuestador() {
    return (
        <Router>
            <SideBarUser/>
                <Switch>
                    <Route exact path ="/">
                        <BarrasLugarNacimiento/>
                    </Route>

             <Route exact path="/enquesta">
                <FormEnquestas/>
            </Route>
                    <Route  path="/estadistiques">
                    <Estadisticas/>
                    </Route>
                    <Route path="/graficanacimiento">
                        <BarrasLugarNacimiento/>
                    </Route>

                    <Route path="/generos">
                        <GraficaQuesoGenero/>
                    </Route>

            </Switch>

        </Router>
    );
}

export default AppEncuestador;
