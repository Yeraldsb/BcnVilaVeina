import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Estadisticas from "./components/estadisticas/Estadisticas";
import React from "react";
import SideBarAdmin from "./components/sideBarAdmin/SideBarAdmin";
import TablaEncuestadores from "./components/tablaEncuestadores/TablaEncuestadores";
import {CreateEncuestador} from "./components/createEncuestador/CreateEncuestador";
import FormEnquestas from "./components/form/FormEnquestas";
import {EditEncuestador} from "./components/editEncuestador/EditEncuestador";
import GraficaQuesoGenero from "./components/estadisticaGenero/GraficaQuesoGenero";
import BarrasLugarNacimiento from "./components/estadisticasLugarNacimiento/BarrasLugarNacimiento";

function AppAdmin(props) {
    return (
        <Router>
            <SideBarAdmin />
                <Switch>

                    <Route exact path ="/">
                        <BarrasLugarNacimiento/>
                    </Route>
                    <Route exact path="/enquesta">
                        <FormEnquestas/>
                    </Route>
                    <Route path="/estadistiques">
                        <Estadisticas/>
                    </Route>

                    <Route path="/barrasnacimiento">
                        <BarrasLugarNacimiento/>
                    </Route>

                    <Route path="/generos">
                        <GraficaQuesoGenero/>
                    </Route>

                    <Route
                        path="/tablaEncuestadores">
                        <TablaEncuestadores/>
                    </Route>

                    <Route path="/registerForm">
                        <CreateEncuestador/>
                    </Route>

                    <Route path="/editar/:id">
                        <EditEncuestador/>
                    </Route>

            </Switch>

        </Router>
    );
}

export default AppAdmin;

