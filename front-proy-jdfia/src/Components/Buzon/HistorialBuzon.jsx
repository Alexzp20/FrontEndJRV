import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'reactstrap';
import { pedirSolicitudes } from '../../Helpers/pedirDatos';
import FilaSolicitud from '../Buscador/Filas/FilaSolicitud';

const HistorialBuzon = () => {

    const [solicitudes, setSolicitudes] = useState([]);

    useEffect(() => {
        pedirSolicitudes()
        .then((res)=>{
            setSolicitudes(res);
            console.log(res)
        })
    }, []);

    return (    
        <Container>
            <Row>
                <Col xs='12'>
                 <Container className=' p-4 bg-custom-dark my-4 rounded bg-opacity-75' >
                    <Row>
                        <Col >
                            <h1 className='text-center text-light'>Historial de Documentos</h1>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs='12'>
                            <Table bordered striped className='text-center'>
                                <thead className='table-primary'>
                                    <tr>    
                                        <th>#</th>
                                        <th>Fecha de subida</th>
                                        <th>Descripción</th>
                                        <th>Archivo</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className='table-light'> 
                                    {solicitudes.map((solicitud)=> <FilaSolicitud key={solicitud.id} solicitud={solicitud} />)}
                                </tbody>
                            </Table>
                        </Col>                          
                    </Row>
                 </Container>
                </Col>
             
            </Row>
        </Container>
    );
}

export default HistorialBuzon;
