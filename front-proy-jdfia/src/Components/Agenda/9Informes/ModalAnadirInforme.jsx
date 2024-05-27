import React, { useState } from 'react';
import { Button, Col, Container, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';


export const ModalAnadirInforme = ({modalNew, toggleNew, setInformes}) => {

    const [codInforme, setCodInforme] = useState('');
        const [fechaInforme, setFechaInforme] = useState('');
        const [docInforme, setDocInforme] = useState(null);

        const handleCodInforme = (event) => {
            setCodInforme(event.target.value);
            
          };
        const handleFechaInforme = (event) => {
            setFechaInforme(event.target.value);
          
          };
        const handleDocInforme = (event) => {
            
            const doc = event.target.files[0]; 

            setDocInforme(doc)
          };


    const AnadirInforme = () =>{
        const informe = {
            "codigoInforme": codInforme,
            "fechaInforme": fechaInforme,
            "documentoInforme": docInforme
        }
        setInformes(prevInformes => {
            const nuevoArreglo = [...prevInformes]; // Crear una copia del arreglo original
            nuevoArreglo.push(informe); // Añadir el nuevo valor al arreglo
            return nuevoArreglo;
        })

        setCodInforme('')
        setFechaInforme('')
        setDocInforme(null)

    }



  return (
    <Container className='p-3 my-4'>
    <Modal scrollable size="lg" isOpen={modalNew} toggle={toggleNew}>
        <ModalHeader toggle={toggleNew}>Añadir Informe</ModalHeader>
        <ModalBody>
               <br />
               <Row>
                <Col xs="2"></Col>
                <Col xs="8">
                   
                        <Label for="codigoInforme">Codigo del informe</Label>
                                <Input
                                id="codigoInforme"
                                placeholder="Ingrese el codigo"
                                type="text"
                                value={codInforme}
                                onChange={handleCodInforme}
                                />
                               
                  
                        <Label for="fechaInforme">Fecha del informe</Label>
                                <Input
                                id="fechaInforme"
                                type="date"
                                value={fechaInforme}
                                onChange={handleFechaInforme}
                                />
                  
                        <Label for="documentoInforme">Documento del Informe</Label>
                                <Input
                                id="documentoInformoe"
                                type="file"
                                onChange={handleDocInforme}
                                />          
                </Col>
                <Col xs="2"></Col>
               </Row>
               <br />
               <ModalFooter>
                <Button className='text-light' color="custom-success"  onClick={ AnadirInforme }>
                    Añadir Informe
                </Button>{' '}
                <Button className='text-light' color="custom-danger" onClick={toggleNew}>
                    Cancelar
                </Button>
            </ModalFooter>
        </ModalBody>
    </Modal>
</Container>
  )
}
