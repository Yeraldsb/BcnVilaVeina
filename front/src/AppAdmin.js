import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Estadisticas from "./components/estadisticas/Estadisticas";
import {RegisterForm} from "./components/registerForm/RegisterForm";
import {FormEnquestas} from "./components/form/FormEnquestas";
import {AdminPage} from "./components/adminPage/AdminPage";
import {Footer} from "./components/footer/Footer";
import React from "react";




function AppAdmin() {
    return (
        <Router>
          <AdminPage/>
            <Switch>
                <Route path="/estadistiques">
                    <Estadisticas />
                </Route>

                <Route path="/estadistiques">
                    <Estadisticas />
                </Route>

            </Switch>
        </Router>
    );
}

export default AppAdmin;

