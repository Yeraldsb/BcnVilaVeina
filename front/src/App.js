import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SideBarUser from "./components/sideBarUser/SideBarUser";
import TablaEncuestadores from "./components/registerEncuestadores/TablaEncuestadores";
import {FormEnquestas} from "./components/Form/FormEnquestas";
import Estadisticas from "./components/estadisticas/Estadisticas";
import {RegisterForm} from "./components/registerForm/RegisterForm";
import {PaginaHome} from "./components/welcomePage/PaginaHome";
import {useState} from "react";
import {Home} from "@material-ui/icons";
import AppAdmin from "./AppAdmin";
import AppEncuestador from "./AppEncuestador";



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


}

export default App;
