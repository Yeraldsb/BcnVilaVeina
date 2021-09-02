import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SideBarUser from "./components/sideBarUser/SideBarUser";
import TablaEncuestadores from "./components/registerEncuestadores/TablaEncuestadores";
import Estadisticas from "./components/estadisticas/Estadisticas";
import {RegisterForm} from "./components/registerForm/RegisterForm";
import {PaginaHome} from "./components/welcomePage/PaginaHome";
import {FormEnquestas} from "./components/Form/FormEnquestas";




function AppAdmin() {
    return (

        <Router>
            <FormEnquestas />
            <Switch>

                <Route path="/enquesta">
                    <FormEnquestas />
                </Route>
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

export default AppAdmin;

