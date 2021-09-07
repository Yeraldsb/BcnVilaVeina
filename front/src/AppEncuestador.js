import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Estadisticas from "./components/estadisticas/Estadisticas";
import {FormEnquestas} from "./components/form/FormEnquestas";
import SideBarUser from "./components/sideBarUser/SideBarUser";
import {StartSession} from "./components/startSession/StartSession";


function AppEncuestador() {
    return (
        <Router>
            <SideBarUser/>
                <Switch>

             <Route exact path="/enquesta">
                <FormEnquestas/>
            </Route>
                    <Route  path="/estadistiques">
                    <Estadisticas/>
                    </Route>

            </Switch>

        </Router>
    );
}

export default AppEncuestador;
