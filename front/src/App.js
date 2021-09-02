import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SideBarUser from "./components/sideBarUser/SideBarUser";
import TablaEncuestadores from "./components/registerEncuestadores/TablaEncuestadores";
import {FormEnquestas} from "./components/Form/FormEnquestas";
import Estadisticas from "./components/estadisticas/Estadisticas";
import {RegisterForm} from "./components/registerForm/RegisterForm";
import {PaginaHome} from "./components/welcomePage/PaginaHome";




function App() {
  return (

      <Router>
          <Route exact path="/">
              <PaginaHome/>
          </Route>

          <SideBarUser/>
        <Switch>
          <Route path="/tabla">
            <TablaEncuestadores />
          </Route>

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

export default App;
