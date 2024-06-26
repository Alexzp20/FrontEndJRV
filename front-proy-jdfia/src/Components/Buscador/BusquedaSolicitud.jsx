import React, { useEffect, useState } from 'react';
import { pedirSolicitudes } from '../../Helpers/pedirDatos';
import {  Col, Container, Input, Label, Row, Table } from 'reactstrap';
import FilaSolicitud from './Filas/FilaSolicitud';
import NavBar from '../Navbar/NavBar';

const BusquedaSolicitud = () => {

    const [solicitudes, setSolicitudes] = useState([]);
    const [solicitudesBusqueda, setSolicitudesBusqueda] = useState([]);
    const [busqueda, setBusqueda] = useState("");

      //funcion que guarda en la busqueda el valor del input de entrada
      const handleChange = e => {
        setBusqueda(e.target.value)
        filtrarBusqueda(e.target.value)
    }

     //funcion para filtrar la busqueda
     const filtrarBusqueda = (terminoBusqueda) => {
        var resultadosBusqueda = solicitudesBusqueda.filter((elemento) => {

            if (elemento.descripcion.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento
            }
        })
        setSolicitudes(resultadosBusqueda)
    }

    //hook para devolver los datos de las agendas
    useEffect(() => {
        pedirSolicitudes()
        .then((res)=>{
            setSolicitudes(res);
            setSolicitudesBusqueda(res);
        })
    }, []);


    return (
        <React.Fragment>
            <NavBar/>
        <Container>
        <Row>
        <Col xs="12">
        <Container className=' p-2 bg-secondary my-4 rounded bg-opacity-75' >
                <Row>
                    <Col >
                        <h1 className='text-center text-light'>Buscador de Solicitudes</h1>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Label className="text-center text-light" for="inputBusqueda" sm="3">
                        Busqueda por descripción
                    </Label>
                    <Col sm="7">
                        <Input
                            id="inputBusqueda"
                            placeholder="Ingrese una busqueda"
                            type="text"
                            value={busqueda}
                            onChange={handleChange}
                        />
                    </Col>
                    
                </Row>
                <br />
                <br />
                <Row>
                    <Col xs='12'>
                        <Table bordered striped className='text-center'>
                            <thead className='table-primary'>
                                <tr>    
                                    <th>#</th>
                                    <th>Fecha/hora de subida</th>
                                    <th>Descripción de la solicitud</th>
                                    <th>Documento de acuerdo</th>
                                    <th>Codigo de la solicitud</th>
                                    <th>Estado de la solicitud</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody className='table-light'>
                            {solicitudes.map((solicitud)=><FilaSolicitud key={solicitud.id} solicitud={solicitud}/>)}
                            </tbody>
                        </Table>
                    </Col>                          
                </Row>
        </Container>
        </Col>
        </Row>
        </Container>
        </React.Fragment>
    );
}

export default BusquedaSolicitud;
