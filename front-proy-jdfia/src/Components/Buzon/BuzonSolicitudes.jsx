import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import {useForm, Controller, set} from 'react-hook-form'; 

import Swal from 'sweetalert2';

const BuzonSolicitudes = () => {

    const {handleSubmit, control, watch, reset, formState: { errors },setValue} = useForm();
    const [categorias, setCategorias ] = useState([]);
    const [subCategorias, setSubCategorias ] = useState([]);
    const [documento, setDocumento ] = useState(null);
    const idCategoriaSeleccionada = parseInt(watch('categoriaSolicitud', 0), 10);
    const token = localStorage.getItem('token')



    useEffect(() => {
       fetch('http://localhost:8000/api/categorias')
        .then(response => response.json())
        .then(data =>{ setCategorias(data); console.log(data)})
        .catch(error => console.log(error));
       
    }, []);
        
    useEffect(() => {
        const categoria = categorias.find(cat => cat.id === parseInt(idCategoriaSeleccionada));
        if (categoria) {
          setSubCategorias(categoria.subcategorias);
          setValue('subCategoriaSolicitud', ''); // Reset subcategory when category changes
        } else {
          setSubCategorias([]);
        }
      }, [idCategoriaSeleccionada, categorias, setValue]);


    

    const onSubmit = async (data) =>{


        let subcategoria = !data.subCategoriaSolicitud ? "" : parseInt(data.subCategoriaSolicitud,10)

        const form = new FormData();
        form.append('descripcion', data.descSolicitud);
        form.append('categoria_id', parseInt(data.categoriaSolicitud,10));
        if(subcategoria !== "") form.append('subcategoria_id', subcategoria); 
        form.append('name', data.codSolicitud);
        form.append('file', documento);
        
        if(!token)
            {
                console.log("token no encontrado")
                return
            }
            else{
                console.log(token)
            }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/solicitud', {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Authorization': `Bearer ${token}`
                },
              method: 'POST',
              body: form
            });
      
            if (response.ok) {
                Swal.fire({
                    title: "Solicitud Añadida",
                    text: "La solicitud se ha enviado con exito ",
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
                                        <Label className='text-light' for="codSolicitud">
                                            Codigo de la solicitud
                                        </Label>
                                        <Controller
                                            name="codSolicitud"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) =>  <Input {...field} type="text" id= "codSolicitud" bsSize="sm" placeholder="Ingrese un codigo" />}
                                        />
                                    </FormGroup>
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
                                            // rules={{
                                            //     required: "Debe seleccionar un archivo .pdf",
                                            //     validate: {
                                            //         maxSize: (value) => {
                                            //           if (!value) return true; // Si no hay archivo, no hay error
                                            //           return (value[0]?.size <= 5 * 1024 * 1024) || 'El archivo debe ser menor o igual a 5 MB';
                                            //         },
                                            //       },
                                            //   }} 
                                            defaultValue=""
                                            render={({ field, fieldState }) =>(
                                                <>
                                                <Input 
                                                {...field} 
                                                type="file" 
                                                id= "archivoSolicitud"
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
                                    <FormGroup>
                                    <Label className='text-light' for="categoriaSolicitud">
                                        Categoria de la solicitud
                                    </Label>
                                    <Controller
                                            name="categoriaSolicitud"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (

                                                <Input {...field} type="select" id= "categoriaSolicitud" bsSize="sm"  >
                                                    <option value=""  >Seleccione una opción</option>
                                                    {categorias.map((categoria) =><option value={categoria.id} key={categoria.id}>{categoria.name}</option>)}
                                                </Input>
                                            )}
                                        />
                                    
                                    </FormGroup>
                                    {subCategorias.length > 0 && (
                                        <FormGroup>
                                        <Label className='text-light' for="subCategoriaSolicitud">
                                            Subcategoria de la solicitud
                                        </Label>
                                        <Controller
                                                name="subCategoriaSolicitud"
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => (
    
                                                    <Input {...field}type="select" id= "subCategoriaSolicitud" bsSize="sm">
                                                         <option value="" >Seleccione una opción</option>
                                                        {subCategorias.map((subcategoria) =><option value={subcategoria.id} key={subcategoria.id}>{subcategoria.name}</option>)}    
                                                    </Input>
                                                )}
                                            />
                                        
                                        </FormGroup>
                                    )}
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
