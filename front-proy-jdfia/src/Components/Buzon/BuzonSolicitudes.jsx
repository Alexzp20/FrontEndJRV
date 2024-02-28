import React from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import {useForm, Controller} from 'react-hook-form'; 

const BuzonSolicitudes = () => {

    const {handleSubmit, control} = useForm();

    const onSubmit = (data) =>{
            console.log(data);
    }

    return (
        <div >
            <Container>
            <Row>
            <Col xs="1"></Col>
            <Col xs="10">
                <Container className=' p-2 bg-custom-dark my-4 rounded bg-opacity-75' >
                    <Row>
                        <Col >
                            <h1 className='text-center text-light'>Subida de solicitudes</h1>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs="2"></Col>
                        <Col xs="8">
                            <Form  onSubmit={handleSubmit(onSubmit)} >
                                    <FormGroup>
                                        <Label className='text-light' for="descSolicitud">
                                            Descripción de la solicitud
                                        </Label>
                                        <Controller
                                            name="descSolicitud"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) =>  <Input {...field} type="textarea" id= "descSolicitud" bsSize="sm" placeholder="Ingrese una descripción" />}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label className='text-light' for="archivoSolicitud">
                                        Archivo de la solicitud
                                    </Label>
                                    <Controller
                                            name="archivoSolicitud"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => <Input {...field} type="file" id= "archivoSolicitud"  bsSize="sm" /> }
                                        />
                                
                                    </FormGroup>
                                    <FormGroup>
                                    <Label className='text-light' for="categoriaSolicitud">
                                        Categoria de la solicitud
                                    </Label>
                                    <Controller
                                            name="categoriaSolicitud"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (

                                                <Input {...field}type="select" id= "categoriaSolicitud" bsSize="sm">
                                                    <option value="" >Seleccione una opción</option>
                                                    <option value="Administración academica">Administración academica</option>
                                                    <option value="">Comite tecnico asesor</option>
                                                    <option value="">Otros academicos</option>
                                                    <option value="">Funcionamiento de la facultad</option>
                                                </Input>
                                            )}
                                        />
                                    
                                    </FormGroup>
                                    <Container fluid className='text-center'>
                                        <Button className='m-2 text-light' color='custom-success' type='submit'>Enviar</Button>
                                        
                                        <Button className='m-2 text-light' color='custom-danger'>Cancelar</Button>
                                    </Container>
                            </Form>
                        </Col>
                        <Col xs="2"></Col>
    
                    </Row>
                </Container>
            </Col>  
            </Row>
            </Container>
        </div>
    );
}

export default BuzonSolicitudes;
