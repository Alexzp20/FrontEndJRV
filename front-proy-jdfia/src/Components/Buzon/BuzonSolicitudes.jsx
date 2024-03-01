import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import {useForm, Controller} from 'react-hook-form'; 
import { pedirCategorias, pedirSubCategorias } from '../../Helpers/pedirDatos';

const BuzonSolicitudes = () => {

    const {handleSubmit, control, watch, setValue} = useForm();
    const [categorias, setCategorias ] = useState([]);
    const [subCategorias, setSubCategorias ] = useState([]);
    const idCategoriaSeleccionada = parseInt(watch('categoriaSolicitud', ''), 10);

    const subcategoriasSeleccionadas = subCategorias.filter(
        subcategoria => subcategoria.idCategoria === idCategoriaSeleccionada
      );

    useEffect(() => {
       pedirCategorias()
       .then((res) =>{
        setCategorias(res)
    
       })
       pedirSubCategorias()
       .then((res)=>{
        setSubCategorias(res)
       })
    }, []);
    

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
                                                    {categorias.map((categoria) =><option value={categoria.idCategoria} key={categoria.idCategoria}>{categoria.categoria}</option>)}
                                                </Input>
                                            )}
                                        />
                                    
                                    </FormGroup>
                                    {subcategoriasSeleccionadas.length > 0 && (
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
                                                        {subcategoriasSeleccionadas.map((subcategoria) =><option value={subcategoria.idSubCategoria} key={subcategoria.idSubCategoria}>{subcategoria.subCategoria}</option>)}    
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
