
import {PaginaHome} from "./components/welcomePage/PaginaHome";
import {useState} from "react";
import AppAdmin from "./AppAdmin";
import AppEncuestador from "./AppEncuestador";



function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    const login = (admin) => {
      setLoggedIn(true)
        setIsAdmin(admin)
    }

    if (isLoggedIn) {
        if (isAdmin) {
            return <AppAdmin />
        }
        return <AppEncuestador />
    }
    return <PaginaHome onSuccessfulLogin={login} />

}

export default App;
