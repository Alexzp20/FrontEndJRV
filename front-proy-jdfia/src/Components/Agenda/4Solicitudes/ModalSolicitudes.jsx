
import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Container,  Row, Col, Table, Button } from 'reactstrap';


const ModalSolicitudes = ({modal, toggle, handleAsignacion}) => {

    const [solicitudes,setSolicitudes] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/solicitudes/estado/2")
        .then((data) => data.json())
        .then((res)=>{
           console.log(res)
           setSolicitudes(res)
        })
    }, [])


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
                                        <th scope='row'>{solicitud.id}</th>
                                        <td >{solicitud.fechaSubida}</td>
                                        <td >{solicitud.descripcion}</td>
                                        <td >{solicitud.documento}</td>
                                        <td >
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
