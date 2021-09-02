import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SideBarUser from "./components/sideBarUser/SideBarUser";
import TablaEncuestadores from "./components/registerEncuestadores/TablaEncuestadores";
import Estadisticas from "./components/estadisticas/Estadisticas";
import {RegisterForm} from "./components/registerForm/RegisterForm";
import {PaginaHome} from "./components/welcomePage/PaginaHome";
import {useState} from "react";
import {Home} from "@material-ui/icons";
import AppAdmin from "./AppAdmin";
import AppEncuestador from "./AppEncuestador";
import {FormEnquestas} from "./components/Form/FormEnquestas";




function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    const enquestadorLogin = () => {
      setLoggedIn(true)
    }

    if (isLoggedIn) {
        if (isAdmin) {
            return <AppAdmin />
        }
        return <AppEncuestador />
    }
    return <PaginaHome onSuccessfulLogin={enquestadorLogin} />



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
