import React, { useState} from "react";
import './tablaEncuestadores.css'
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

function TablaEncuestadores() {
    const dataEncuestadores = [
        {id: 1, nombre: "Yealdin", cognom: "Salazar", vila: "Sant Andreu" , usuari: "Yeraldsb"},
        {id: 2, nombre: "Yealdin", cognom: "Salazar", vila: "Sant Andreu",  usuari: "Yeraldsb"},
        {id: 3, nombre: "Yealdin", cognom: "Salazar", vila: "Sant Andreu",  usuari: "Yeraldsb"},
        {id: 4, nombre: "Yealdin", cognom: "Salazar", vila: "Sant Andreu",  usuari: "Yeraldsb"},
    ];

    const [data, setData] = useState(dataEncuestadores);
    const [modalEditar, setModalEditar]= useState(false);

    const [modalEliminar, setModalEliminar]= useState(false)

    const [nombreSeleccionado, setNombreSeleccionado]= useState({
        id: '',
        nombre: '',
        cognom: '',
        vila: '',
        usuari: ''
    });

    const seleccionarNombre=(elemento, caso)=>{
        setNombreSeleccionado(elemento);
        (caso==='Editar')?setModalEditar(true): setModalEliminar(true)
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setNombreSeleccionado(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const editar=()=>{
        const dataNueva=data;
        dataNueva.map(nombree=>{
            if(nombree.id===nombreSeleccionado.id){
                nombree.cognom=nombreSeleccionado.cognom;
                nombree.nombre=nombreSeleccionado.nombre;
                nombree.vila= nombreSeleccionado.vila;
                nombree.usuari= nombreSeleccionado.usuari;

            }
        })
        setData(dataNueva);
        setModalEditar(false)
    };

    const eliminar =()=>{
        setData(data.filter(nombre=> nombre.id !== nombreSeleccionado.id))
        setModalEliminar(false);
    }


    return (
        <div className="Tabla">
            <h1 align="center" className="registro">Registre enquestadors</h1>
            <TableContainer component={Paper} >
                <Table className="contenedorTabla">
                    <TableHead>
                        <TableRow className="tcolor">
                            <TableCell>Id</TableCell>
                            <TableCell>Nom</TableCell>
                            <TableCell>Cognom</TableCell>
                            <TableCell>Vila</TableCell>
                            <TableCell>Usuari</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(elemento => (
                            <TableRow key={elemento.id}>
                                <TableCell>{elemento.id}</TableCell>
                                <TableCell align="left">{elemento.nombre}</TableCell>
                                <TableCell align="left">{elemento.cognom}</TableCell>
                                <TableCell align="left">{elemento.vila}</TableCell>
                                <TableCell align="left">{elemento.usuari}</TableCell>
                                <TableCell align="left">
                                    <button className="botonActualizar" onClick={()=>seleccionarNombre(elemento, 'Editar')}>Editar</button>{" "}
                                    <Delete  onClick={()=> seleccionarNombre(elemento, "Eliminar")} />
                                    {}</TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <div className="modalContainer">
                <Modal className="primerModal" isOpen={modalEditar} >
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
                            <input
                                className="form-control"
                                type="text"
                                name="vila"
                                value={nombreSeleccionado && nombreSeleccionado.vila}
                                onChange={handleChange}
                            />
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
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button variant="outlined"
                                className="botonActualizarModal"
                                onClick={()=> editar()}>
                            Actualizar
                        </button>
                        <button variant="outline"
                                className="botonCierre"
                                onClick={()=>setModalEditar(false)}>
                            Cancelar
                        </button>
                    </ModalFooter>
                </Modal>

                <Modal className="modalEliminar" isOpen={modalEliminar}>
                    <ModalBody className="preguntaModal">
                        Esta Seguro que desea eliminar el usuario {nombreSeleccionado && nombreSeleccionado.nombre}
                    </ModalBody>
                    <ModalFooter>
                        <button className="botonModalEliminarSi" onClick={()=>eliminar()}>
                            Si
                        </button><br/>
                        <button className="botonModalEliminarNo"
                                onClick={()=> setModalEliminar(false)}>
                            No
                        </button>
                    </ModalFooter>
                </Modal>

            </div>

            <button className="botonTablaEncuestadores " type="submit" >
                NUEVO REGISTRO
            </button>


        </div>
    )
}

export default TablaEncuestadores;
