import React from 'react';
import { Button, Container, Input, Label, Row, Col,Form} from 'reactstrap';
import {useForm, Controller} from 'react-hook-form'; 
import { useNavigate } from 'react-router-dom';

const InicioSesion = () => {

    const {handleSubmit, control} = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) =>{
        console.log(data)
         navigate("/inicio");
        }
    return (
        <Container fluid>
            <br />
            <br />
            <br />
            <Row>
                <Col xs="2"></Col>
                <Col xs="8">
                    <Container className=' bg-secondary rounded bg-opacity-75'> 
                        <br />
                        <Row>
                            <h2 className='text-center text-light'>Iniciar Sesion</h2>
                        </Row>
                        <br /> 
                        <Row>
                            <Col xs="1"></Col>
                            <Col xs="3" >
                            <img src="/images/inicioSesion/sesion.png" className= "img-fluid" alt="" />
                            </Col>
                            <Col xs="1"></Col>
                            <Col xs="6" >
                                <br />
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Label className='text-light' for="user"> Nombre de usuario </Label>
                                    <Controller
                                                name="userText"
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => 
                                                <Input
                                                    {...field} 
                                                    bsSize="sm"
                                                    className="mb-3 " 
                                                    id="user"
                                                    placeholder="Ingrese su usuario"
                                                    type="text"
                                                />}
                                        />  

                                    <Label className='text-light' for="password"> Contraseña </Label>
                                    <Controller
                                                name="userPass"
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => 
                                                <Input  
                                                    {...field}
                                                    bsSize="sm"
                                                    className="mb-3"
                                                    id="password"
                                                    placeholder="Ingrese su Contraseña"
                                                    type="password"
                                                />}
                                        />  
                                    <br />
                                    <Row>
                                        <Col xs='4'></Col>
                                        <Col xs='5'>
                                        <Button color="success" type='submit'>
                                                Iniciar Sesion
                                        </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                        <br />
                        <br />
            </Container>
                </Col>
                <Col xs="2"></Col>
            </Row>
        </Container>
    );
}

export default InicioSesion;
