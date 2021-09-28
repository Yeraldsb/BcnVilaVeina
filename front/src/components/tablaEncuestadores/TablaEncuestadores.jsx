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
                            <TableRow className="tcolor" >
                                <TableCell style={{color: "white"}} >#</TableCell>
                                <TableCell style={{color: "white"}}>NOM</TableCell>
                                <TableCell style={{color: "white"}}>COGNOM</TableCell>
                                <TableCell style={{color: "white"}}>VILA</TableCell>
                                <TableCell style={{color: "white"}}>USUARI</TableCell>
                                <TableCell style={{color: "white"}}>CONTRASENYA</TableCell>
                                <TableCell style={{color: "white"}}>TELÈFON</TableCell>
                                <TableCell style={{color: "white"}}>ADREÇA</TableCell>
                                <TableCell style={{color: "white"}}>MAIL</TableCell>
                                <TableCell style={{color: "white"}}>ACCIONS</TableCell>
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
                        NOU REGISTRE
                    </button>
                </Link>

            </div>
        )


    }


}