import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Estadisticas from "./components/estadisticas/Estadisticas";
import {FormEnquestas} from "./components/form/FormEnquestas";
import SideBarUser from "./components/sideBarUser/SideBarUser";
import {StartSession} from "./components/startSession/StartSession";




function AppEncuestador() {
    return (

        <Router>
            <SideBarUser />
            <StartSession />

            <Switch>
                <Route path="/estadistiques">
                    <Estadisticas />
                </Route>
                <Route path="/enquesta">
                    <FormEnquestas />
                </Route>

            </Switch>

        </Router>
    );
}

export default AppEncuestador;
