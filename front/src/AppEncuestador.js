import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TablaEncuestadores from "./components/registerEncuestadores/TablaEncuestadores";
import Estadisticas from "./components/estadisticas/Estadisticas";
import {RegisterForm} from "./components/registerForm/RegisterForm";
import {FormEnquestas} from "./components/form/FormEnquestas";




function AppEncuestador() {
    return (

        <Router>
            <FormEnquestas />
            <Switch>
                <Route path="/estadistiques">
                    <Estadisticas />
                </Route>
                <Route path="/register">
                    <RegisterForm />
                </Route>

            </Switch>

        </Router>
    );
}

export default AppEncuestador;
