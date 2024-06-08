import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import {useForm, Controller} from 'react-hook-form'; 
import Swal from 'sweetalert2';



export const NuevaActa = () => {

    const {handleSubmit, control, watch, reset, formState: { errors },setValue} = useForm();
    const [documento, setDocumento ] = useState(null);


    const onSubmit = async (data) =>{

        const form = new FormData();
        form.append('codigoActa', data.codActa);
        form.append('documentoActa', documento);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/acta', {
              method: 'POST',
              body: form
            });
      
            if (response.ok) {
                Swal.fire({
                    title: "Acta Añadida",
                    text: "El acta se ha enviado con exito ",
                    icon: "success"
                });
               reset();
            } else {
                const errorData = await response.json();
                console.log(errorData)
                    Swal.fire({
                        title: "Error",
                        text: "",
                        icon: "error"
                    });
              console.error('');
            }
          } catch (error) {
            Swal.fire({
                    title: "Error en la solicitud",
                    text: {error},
                    icon: "error"
                });
          }


    }



  return (
    <Container>
    <Row>
    <Col xs="2"></Col>
    <Col xs="8">
        <Container className=' p-2 bg-custom-dark my-4 rounded bg-opacity-75' >
            <Row>
                <Col >
                    <h1 className='text-center text-light'>Nueva Acta</h1>
                </Col>
            </Row>
            <br />
            <Row>
                <Col xs="2"></Col>
                <Col xs="8">
                    <Form  onSubmit={handleSubmit(onSubmit)} >
                            <FormGroup>
                                <Label className='text-light' for="codActa">
                                    Codigo del acta
                                </Label>
                                <Controller
                                    name="codActa"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) =>  <Input {...field} type="text" id= "codActa" bsSize="sm" placeholder="Ingrese un codigo" />}
                                />
                            </FormGroup>
                            <FormGroup>
                            <Label className='text-light' for="archivoActa">
                                    Documento del Acta
                            </Label>
                            <Controller
                                    name="archivoActa"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState }) =>(
                                        <>
                                        <Input 
                                        {...field} 
                                        type="file" 
                                        id= "archivoActa"
                                        bsSize="sm"
                                        accept='.pdf'
                                        onChange={(e) => {
                                            setDocumento(e.target.files[0])
                                            field.onChange(e);
                                            field.onBlur(e);  
                                            console.log(!!fieldState.error, fieldState.error)     
                                        }} 
                                        /> 
                                         {errors.archivoSolicitud && (
                                            <p style={{ color: 'red' }}>{errors.archivoSolicitud.message}</p>
                                        )}
                                        </>)}
                                        
                                          /* {{fieldState.error && (
                                            <FormFeedback>{fieldState.error.message}</FormFeedback>)}} */
                                />
                            </FormGroup>
                            <Container fluid className='text-center'>
                                <Button className='m-2 text-light' color='custom-success' type='submit'>Subir</Button>
                                
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
  )
}
