import React, { useState } from 'react';
import { Button, Col, Container, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

const ModalAnadirActa = ({modalNew, toggleNew, setActas}) => {

        const [codActa, setCodActa] = useState('');
        const [fechaActa, setFechaActa] = useState('');
        const [docActa, setDocActa] = useState(null);

        const handleCodActa = (event) => {
            setCodActa(event.target.value);
            
          };
        const handleFechaActa = (event) => {
            setFechaActa(event.target.value);
          
          };
        const handleDocActa = (event) => {
            
            const doc = event.target.files[0]; 

            setDocActa(doc)
          };


    const AnadirActa = () =>{
        const acta = {
            "codigoActa": codActa,
            "fechaActa": fechaActa,
            "documentoActa": docActa
        }
        setActas(prevActas => {
            const nuevoArreglo = [...prevActas]; // Crear una copia del arreglo original
            nuevoArreglo.push(acta); // Añadir el nuevo valor al arreglo
            return nuevoArreglo;
        })

        setCodActa('')
        setFechaActa('')
        setDocActa(null)

    }

    return (
        <Container className='p-3 my-4'>
        <Modal scrollable size="lg" isOpen={modalNew} toggle={toggleNew}>
            <ModalHeader toggle={toggleNew}>Añadir Acta</ModalHeader>
            <ModalBody>
                   <br />
                   <Row>
                    <Col xs="2"></Col>
                    <Col xs="8">
                       
                            <Label for="codigoActa">Codigo de Acta</Label>
                                    <Input
                                    id="codigoActa"
                                    placeholder="Ingrese el codigo"
                                    type="text"
                                    value={codActa}
                                    onChange={handleCodActa}
                                    />
                                   
                      
                            <Label for="fechaActa">Fecha del Acta</Label>
                                    <Input
                                    id="fechaActa"
                                    type="date"
                                    value={fechaActa}
                                    onChange={handleFechaActa}
                                    />
                      
                            <Label for="documentoActa">Documento del Acta</Label>
                                    <Input
                                    id="documentoActa"
                                    type="file"
                                    onChange={handleDocActa}
                                    />          
                    </Col>
                    <Col xs="2"></Col>
                   </Row>
                   <br />
                   <ModalFooter>
                    <Button className='text-light' color="custom-success"  onClick={ AnadirActa }>
                        Añadir Acta
                    </Button>{' '}
                    <Button className='text-light' color="custom-danger" onClick={toggleNew}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </ModalBody>
        </Modal>
    </Container>
        );
}

export default ModalAnadirActa;
