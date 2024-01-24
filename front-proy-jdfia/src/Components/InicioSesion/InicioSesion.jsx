import React from 'react';
import { Button, Container, FormGroup, Input, Label, Row, Col} from 'reactstrap';

const InicioSesion = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <Container className=' bg-black rounded bg-opacity-75'>
                <br />
                <Row>
                <h2 className='text-center text-light'>Iniciar Sesion</h2>
                </Row>
                    <Container>
                        <Row>
                            <Col xs="3" ></Col>
                            <Col xs="6" >
                            <Label className='text-light' for="user"> Nombre de usuario </Label>
                                <Input 
                                bsSize="sm"
                                className="mb-3" 
                                id="user"
                                name="userText"
                                placeholder="Ingrese su usuario"
                                type="text"
                                />
                                <Label className='text-light' for="user"> Contraseña </Label>
                                <Input  
                                bsSize="sm"
                                className="mb-3"
                                id="password"
                                name="userText"
                                placeholder="Ingrese su Contraseña"
                                type="password"
                                />
                            </Col>
                            <Col xs="3" ></Col>
                        </Row>
                        <br />
                                <Row>
                                    <Col xs='5'></Col>
                                    <Col xs='2'>
                                        <Button color="success">
                                            Iniciar Sesion
                                        </Button>
                                    </Col>
                                    <Col xs='5'></Col>
                                </Row>
                                <br />
                    </Container>
            </Container>
        </div>
    );
}

export default InicioSesion;
