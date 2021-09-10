import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Estadisticas from "./components/estadisticas/Estadisticas";
import {FormEnquestas} from "./components/form/FormEnquestas";
import React from "react";
import SideBarAdmin from "./components/sideBarAdmin/SideBarAdmin";
import TablaEncuestadores from "./components/registerEncuestadores/TablaEncuestadores";
import RegisterForm from "./components/registerForm/RegisterForm";
import EditEncuestador from "./components/editEncuestador/EditEncuestador";


function AppAdmin() {
    return (
        <Router>
            <SideBarAdmin />
                <Switch>
                    <Route path="/enquesta">
                        <FormEnquestas/>
                    </Route>
                    <Route path="/estadistiques">
                        <Estadisticas/>
                    </Route>
                    <Route path="/tablaEncuestadores">
                        <TablaEncuestadores/>
                    </Route>
                    <Route path="/registerForm">
                        <RegisterForm/>
                    </Route>
                    <Route path="/editar">
                        <EditEncuestador/>
                    </Route>

            </Switch>

        </Router>
    );
}

export default AppAdmin;

