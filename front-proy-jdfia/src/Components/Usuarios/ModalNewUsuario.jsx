import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Form, Row, Col, FormGroup, Input, Label } from 'reactstrap';

const ModalNewUsuario = ({modal, toggle}) => {
    return (
        <Container className='p-3 my-4'>
            <Modal scrollable size="xl" isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Nuevo usuario</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row>
                            <Col xs="6">
                                <FormGroup >
                                    <Label for="nombreUsuario">Nombre de usuario</Label>
                                    <Input
                                    id="nombreUsuario"
                                    placeholder="Ingrese un nombre de usuario"
                                    type="text"
                                    />
                                </FormGroup>
                                <FormGroup >
                                    <Label for="contraUsuario">Contraseña</Label>
                                    <Input
                                    id="contraUsuario"
                                    placeholder="Ingrese una contraseña"
                                    type="password"
                                    />
                                </FormGroup>
                                <FormGroup >
                                    <Label for="cvUsuario">Curriculum Vitae (opcional)</Label>
                                    <Input
                                    id="cvUsuario"
                                    type="file"
                                    />
                                </FormGroup>
                                <FormGroup >
                                    <Label for="carnetUsuario">Carnet</Label>
                                    <Input
                                    id="carnetUsuario"
                                    placeholder='ingrese un carnet'
                                    type="text"
                                    />
                                </FormGroup>
                            </Col>

                            <Col xs="6">
                                <FormGroup >
                                    <Label for="correoUsuario">Correo electronico</Label>
                                    <Input
                                    id="correoUsuario"
                                    placeholder="Ingrese correo electronico"
                                    type="email"
                                    />
                                </FormGroup>
                                <FormGroup >
                                    <Label for="contrarepUsuario">Repetir contraseña</Label>
                                    <Input
                                    id="contrarepUsuario"
                                    placeholder="Ingrese una contraseña"
                                    type="password"
                                    />
                                </FormGroup>
                                <FormGroup >
                                    <Label for="nacUsuario">Fecha de nacimiento</Label>
                                    <Input
                                    id="nacUsuario"
                                    type="date"
                                    />
                                </FormGroup>
                                <FormGroup >
                                    <Label for="rolUsuario">Rol</Label>
                                    <Input
                                    id="rolUsuario"
                                    type="select"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={toggle}>
                        Añadir usuario
                    </Button>{' '}
                    <Button color="danger" onClick={toggle}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
        );
        
}

export default ModalNewUsuario;
