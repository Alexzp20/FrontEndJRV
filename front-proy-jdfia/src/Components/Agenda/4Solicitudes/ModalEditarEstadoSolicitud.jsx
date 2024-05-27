import React from 'react'
import { Button, Col, Container, Input, Row, Modal, ModalHeader, ModalBody, Label   } from 'reactstrap';

export default function ModalEditarEstadoSolicitud({modalEstado, toggleEstado}) {
  return (
    <Container className='p-3 my-4'>
    <Modal scrollable size="lg" isOpen={modalEstado} toggle={toggleEstado}>
        <ModalHeader toggle={toggleEstado}>Editar estado de la solicitud</ModalHeader>
        <ModalBody>
                <Row>
                    <h6>Solicitud: x</h6>
                    <Col xs="12">   
                    <Label >Editar Estado</Label>
                    <Input type='select'>
                        <option value="0" >Seleccione</option>
                        <option value="1" >Aprobado</option>
                        <option value="2" >Denegado</option>
                        <option value="3" >pendiente</option>
                    </Input>
                    <br />
                    </Col>
                </Row>
                <Row className='text-center'>
                  <Col xs="4">
                    <Label >Votos a favor</Label>
                    <Input type="number"/>
                    <br />
                  </Col>
                  <Col xs="4">
                    <Label >Votos en contra</Label>
                    <Input type="number"/>
                    <br />
                  </Col>
                  <Col xs="4">
                    <Label >Abstenciones</Label>
                    <Input type="number"/>
                    <br />
                  </Col>
                </Row>
                <Row>
                    <Col xs="12">
                    <br />
                    <Label >Añadir comentario</Label>
                    <Input type="textarea"/>
                    <br />
                    <Label >Añadir documento de acuerdo</Label>
                    <Input type="file"/>
                    <br />
                    <br />
                    <Button block color="custom-success" className='text-light'>Actualizar estado</Button>
                    </Col>
                </Row>
        </ModalBody>
    </Modal>
</Container>
  )
}
