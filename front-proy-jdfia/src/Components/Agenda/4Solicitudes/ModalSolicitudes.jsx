
import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Container,  Row, Col, Input, Table, Button } from 'reactstrap';
import { pedirSolicitudes } from '../../../Helpers/pedirDatos';


const ModalSolicitudes = ({modal, toggle, handleAsignacion}) => {

    const [solicitudes,setSolicitudes] = useState([]);

    useEffect(() => {
        pedirSolicitudes()
        .then((res)=>{
            setSolicitudes(res);
        })
    }, []);

    return (
        <Container className='p-3 my-4'>
        <Modal scrollable size="xl" isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Añadir Solicitudes</ModalHeader>
            <ModalBody>
                    <Row>
                        <Col xs="12">
                                <Table className='text-center'>
                                    <thead>
                                    <tr>    
                                        <th>#</th>
                                        <th>Fecha de subida</th>
                                        <th>Descripción de la solicitud</th>
                                        <th>Documento de acuerdo</th>
                                        <th>Seleccionar</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {solicitudes.map((solicitud)=>
                                        <tr key={solicitud.id}>
                                        <td scope='row'>{solicitud.id}</td>
                                        <td scope='row'>{solicitud.fechaSubida}</td>
                                        <td scope='row'>{solicitud.descripcion}</td>
                                        <td scope='row'>{solicitud.documento}</td>
                                        <td scope='row'>
                                            <Button color='custom-primary' onClick={()=>handleAsignacion(solicitud)}>
                                                Añadir
                                            </Button>
                                        </td>
                                    </tr>
                                    )}
                                    </tbody>
                                </Table>
                        </Col>
                    </Row>
            </ModalBody>
        </Modal>
    </Container>
    );
}

export default ModalSolicitudes;
