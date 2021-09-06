import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Estadisticas from "./components/estadisticas/Estadisticas";
import {FormEnquestas} from "./components/form/FormEnquestas";
import React from "react";
import SideBarAdmin from "./components/sideBarAdmin/SideBarAdmin";
import TablaEncuestadores from "./components/registerEncuestadores/TablaEncuestadores";



function AppAdmin() {
    return (
        <Router>
            <SideBarAdmin />
                <Switch>
                    <Route exact path="/">
                        <FormEnquestas/>
                    </Route>
                    <Route path="/estadistiques">
                        <Estadisticas/>
                    </Route>
                    <Route path="/tablaEncuestadores">
                        <TablaEncuestadores/>
                    </Route>

                </Switch>

        </Router>
    );
}

export default AppAdmin;

