import React, {Component, useState} from "react";
import './tablaEncuestadores.css'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import axios from "axios";
import {Link} from "react-router-dom";
import {Delete} from "@material-ui/icons";


interface MyState {
    handleSubmit: [],
    Encuestadores: [];
}

export default class TablaEncuestadores extends Component<{}, MyState> {


    state: MyState = {
        handleSubmit: [],
        Encuestadores: [],

    }

    componentDidMount() {
        this.getEncuestadores();
        console.log("Data has been recived")

    }

    getEncuestadores = (props) => {
        axios.get('http://localhost:8080/enquestadors')
            .then(response => {
                const Encuestadores = response.data
                this.setState({Encuestadores});
            })
            .catch(() => {
                alert("Error");
            })
    }

    deleteEncuestador = (encuestadorId) => {

        console.log(encuestadorId)
        axios.delete('http://localhost:8080/eliminar/' + encuestadorId)
            .then(r => {
                this.getEncuestadores();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="Tabla">
                <h1 align="center" className="registro">Registre enquestadors</h1>
                <TableContainer component={Paper}>
                    <Table className="contenedorTabla">
                        <TableHead>
                            <TableRow className="tcolor">
                                <TableCell>#</TableCell>
                                <TableCell>Nom</TableCell>
                                <TableCell>Cognom</TableCell>
                                <TableCell>Vila</TableCell>
                                <TableCell>Usuari</TableCell>
                                <TableCell>Contrasenya</TableCell>
                                <TableCell>Telèfon</TableCell>
                                <TableCell>Adreça</TableCell>
                                <TableCell>Correu electrònic</TableCell>
                                <TableCell>Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.Encuestadores.map((encuestador, index) =>
                                <TableRow key={encuestador.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell align="left">{encuestador.nom}</TableCell>
                                    <TableCell align="left">{encuestador.cognom}</TableCell>
                                    <TableCell align="left">{encuestador.vilaveina}</TableCell>
                                    <TableCell align="left">{encuestador.usuari}</TableCell>
                                    <TableCell align="left">{encuestador.contrasenya}</TableCell>
                                    <TableCell align="left">{encuestador.telefon}</TableCell>
                                    <TableCell align="left">{encuestador.adreca}</TableCell>
                                    <TableCell align="left">{encuestador.correu}</TableCell>
                                    <TableCell align="left">
                                        <Link  to={{
                                            pathname:`/editar/` + encuestador.id,
                                            state: {encuestador: encuestador}
                                        }} style={{textDecoration: "none"}}>
                                            <button
                                                type="submit"
                                                className="botonActualizar"
                                            >
                                                Editar
                                            </button>
                                        </Link>

                                        <Delete onClick={() => this.deleteEncuestador(encuestador.id)} className="borrar"/>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Link to="/registerForm" style={{textDecoration: "none"}}>
                    <button className="botonTablaEncuestadores " type="submit">
                        NUEVO REGISTRO
                    </button>
                </Link>

            </div>
        )


    }


}


{/*

Link to={"/EditEncuestador"} style={{ textDecoration:

    const [data, setData] = useState(dataEncuestadores);
    const [modalEditar, setModalEditar] = useState(false);

    const [modalEliminar, setModalEliminar] = useState(false)

    const [nombreSeleccionado, setNombreSeleccionado] = useState({
        id: '',
        nombre: '',
        cognom: '',
        vila: '',
        usuari: '',
        contrasenya: '',
        telèfon: '',
        adreça: ''

    });

    const seleccionarNombre = (elemento, caso) => {
        setNombreSeleccionado(elemento);
        (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setNombreSeleccionado(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const editar = () => {
        const dataNueva = data;
        dataNueva.map(nombree => {
            if (nombree.id === nombreSeleccionado.id) {
                nombree.cognom = nombreSeleccionado.cognom;
                nombree.nombre = nombreSeleccionado.nombre;
                nombree.vila = nombreSeleccionado.vila;
                nombree.usuari = nombreSeleccionado.usuari;
                nombree.adreça = nombreSeleccionado.adreça;
                nombree.telèfon = nombreSeleccionado.telèfon;

            }
        })
        setData(dataNueva);
        setModalEditar(false)
    };

            <div className="modalContainer">
                <Modal className="primerModal" isOpen={modalEditar}>
                    <ModalHeader>
                        <div>
                            <h3>Editar Informacion</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label>ID</label>
                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                name="id"
                                value={nombreSeleccionado && nombreSeleccionado.id}
                                onChange={handleChange}
                            />
                            <br/>
                            <label>Nom</label>
                            <input
                                className="form-control"
                                type="text"
                                name="nombre"
                                value={nombreSeleccionado && nombreSeleccionado.nombre}
                                onChange={handleChange}
                            />
                            <br/>
                            <label>Cognom</label>
                            <input
                                className="form-control"
                                type="text"
                                name="cognom"
                                value={nombreSeleccionado && nombreSeleccionado.cognom}
                                onChange={handleChange}
                            />
                            <br/>
                            <label>Vila</label>
                            <select className="form-control selectForm"
                                    type="text"
                                    name="vila"
                                    value={nombreSeleccionado && nombreSeleccionado.vila}
                                    onChange={handleChange}>
                                <option>Badal</option>
                                <option>Carmel de dalt</option>
                                <option>Casc antic d'Horta</option>
                                <option>Casc antic Les Corts</option>
                                <option>Consell de Cent - Girona - Eixample</option>
                                <option>El Camp de l'Arpa - Alchemika</option>
                                <option>El Congrés i els Indians</option>
                                <option>Gotic</option>
                                <option>La Marina - Mare de Déu del Port</option>
                                <option>La Trinidad Vella</option>
                                <option>Maresme</option>
                                <option>Prosperitat</option>
                                <option>Provençals de Poblenou</option>
                                <option>Sant Gervasi de Cassoles</option>
                                <option>Vila de Gracia</option>
                                <option>Vilapicina i la Torre LLobeta - Cotxeres</option>

                            </select>
                            <br/>
                            <label>Usuari</label>
                            <input
                                className="form-control"
                                type="text"
                                name="usuari"
                                value={nombreSeleccionado && nombreSeleccionado.usuari}
                                onChange={handleChange}
                            />
                            <br/>
                            <label>Contrasenya</label>
                            <input
                                className="form-control"
                                type="number"
                                name="contraseya"
                                value={nombreSeleccionado && nombreSeleccionado.contrasenya}
                                onChange={handleChange}
                            />
                            <br/>
                            <label>Telèfon</label>
                            <input
                                className="form-control"
                                type="text"
                                name="telefono"
                                value={nombreSeleccionado && nombreSeleccionado.telèfon}
                                onChange={handleChange}
                            />
                            <br/>
                            <label>Adreça</label>
                            <input
                                className="form-control"
                                type="text"
                                name="Adreça"
                                value={nombreSeleccionado && nombreSeleccionado.adreça}
                                onChange={handleChange}
                            />
                            <br/>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button variant="outlined"
                                className="botonActualizarModal"
                                onClick={() => editar()}>
                            Actualizar
                        </button>
                        <button variant="outline"
                                className="botonCierre"
                                onClick={() => setModalEditar(false)}>
                            Cancelar
                        </button>
                    </ModalFooter>
                </Modal>


            </div>
        <div>
            <Link to="/registerForm" style={{ textDecoration: 'none' }}>
                <button className="botonTablaEncuestadores " type="submit">
                NUEVO REGISTRO
            </button>
            </Link>
        </div>

        </div>
    )
}*/
}