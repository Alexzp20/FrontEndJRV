import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Form, Row, Col, FormGroup, Input, Label } from 'reactstrap';
import {useForm, Controller} from 'react-hook-form'; 
import { pedirCategorias, pedirSubCategorias } from '../../Helpers/pedirDatos';
import Swal from 'sweetalert2';

export default function ModalEditarSolicitud({modalEdit, toggleEdit,solicitud}) {

    const {handleSubmit, control, watch, reset, formState: { errors },clearErrors} = useForm();
    const [categorias, setCategorias ] = useState([]);
    const [subCategorias, setSubCategorias ] = useState([]);
    const [documento, setDocumento ] = useState(null);
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
        console.log(data.archivoSolicitud)
        console.log(documento)
    }
    return (
    <Modal scrollable size="lg" isOpen={modalEdit} toggle={toggleEdit}>
    <ModalHeader toggle={toggleEdit}>Editar Solicitud</ModalHeader>
    <ModalBody>
        <Row>
                        <Col xs="12">
                            <Form  onSubmit={handleSubmit(onSubmit)} >
                                   {/*  <FormGroup>
                                        <Label for="codSolicitud">
                                            Codigo de la solicitud
                                        </Label>
                                        <Controller
                                            name="codSolicitud"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) =>  <Input {...field} type="text" id= "codSolicitud"  placeholder="Ingrese un codigo" />}
                                        />
                                    </FormGroup> */}
                                    <FormGroup>
                                        <Label  for="descSolicitud">
                                            Descripción de la solicitud
                                        </Label>
                                        <Controller
                                            name="descSolicitud"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) =>  <Input {...field} type="textarea" id= "descSolicitud" placeholder="Ingrese una descripción" />}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="archivoSolicitud">
                                        Archivo de la solicitud
                                    </Label>
                                    <Controller
                                            name="archivoSolicitud"
                                            control={control}
                                            /* rules={{
                                                required: "Debe seleccionar un archivo .pdf",
                                                validate: {
                                                    maxSize: (value) => {
                                                      if (!value) return true; // Si no hay archivo, no hay error
                                                      return (value[0]?.size <= 5 * 1024 * 1024) || 'El archivo debe ser menor o igual a 5 MB';
                                                    },
                                                  },
                                              }} */
                                            defaultValue=""
                                            render={({ field, fieldState }) =>(
                                                <>
                                                <Input 
                                                {...field} 
                                                type="file" 
                                                id= "archivoSolicitud"
                                                accept='.pdf'
                                                onChange={(e) => {
                                                    setDocumento(e.target.files[0])
                                                    field.onChange(e);
                                                    field.onBlur(e);   
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
                                    <Label for="categoriaSolicitud">
                                        Categoria de la solicitud
                                    </Label>
                                    <Controller
                                            name="categoriaSolicitud"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (

                                                <Input {...field}type="select" id= "categoriaSolicitud">
                                                    <option value="" >Seleccione una opción</option>
                                                    {categorias.map((categoria) =><option value={categoria.idCategoria} key={categoria.idCategoria}>{categoria.categoria}</option>)}
                                                </Input>
                                            )}
                                        />
                                    
                                    </FormGroup>
                                    {subcategoriasSeleccionadas.length > 0 && (
                                        <FormGroup>
                                        <Label for="subCategoriaSolicitud">
                                            Subcategoria de la solicitud
                                        </Label>
                                        <Controller
                                                name="subCategoriaSolicitud"
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => (
    
                                                    <Input {...field}type="select" id= "subCategoriaSolicitud">
                                                         <option value="" >Seleccione una opción</option>
                                                        {subcategoriasSeleccionadas.map((subcategoria) =><option value={subcategoria.idSubCategoria} key={subcategoria.idSubCategoria}>{subcategoria.subCategoria}</option>)}    
                                                    </Input>
                                                )}
                                            />
                                        
                                        </FormGroup>
                                    )}
                                     <ModalFooter>
                                <Button className='text-light' color="custom-success" type='submit'>
                                    Editar Solicitud
                                </Button>{' '}
                                <Button className='text-light' color="custom-danger" onClick={toggleEdit}>
                                    Cancelar
                                </Button>
                            </ModalFooter>
                            </Form>
                        </Col>
                    </Row>
    </ModalBody>
</Modal>
  )
}
