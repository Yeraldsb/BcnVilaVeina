import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TablaEncuestadores from "./components/registerEncuestadores/TablaEncuestadores";
import Estadisticas from "./components/estadisticas/Estadisticas";
import {RegisterForm} from "./components/registerForm/RegisterForm";
import {PaginaHome} from "./components/welcomePage/PaginaHome";
import {FormEnquestas} from "./components/form/FormEnquestas";




function App() {
  return (

      <Router>
          <Route exact path="/">
              <PaginaHome/>
          </Route>
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
