import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Container,  Row, Col, Table, Button } from 'reactstrap';
import { FaFilePdf } from 'react-icons/fa6';

const ModalAnadirActa = ({modalNew, toggleNew, setActasAgenda}) => {

    const [actas,setActas] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/actasAgenda")
        .then((data) => data.json())
        .then((res)=>{
            console.log(res)
           setActas(res)
        })
    }, [])
       
  
    return (
        <Container className='p-3 my-4'>
        <Modal scrollable size="xl" isOpen={modalNew} toggle={toggleNew}>
            <ModalHeader toggle={toggleNew}>Añadir Actas</ModalHeader>
            <ModalBody>
                    <Row>
                        <Col xs="12">
                                <Table className='text-center'>
                                    <thead>
                                    <tr>    
                                        <th>#</th>
                                        <th>Fecha y hora de subida</th>
                                        <th>Codigo del acta</th>
                                        <th>Documento del acta</th>
                                        <th>Seleccionar</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {actas.map((acta)=>
                                        <tr key={acta.id}>
                                        <th scope='row'>{acta.id}</th>
                                        <td >{acta.created_at.split("T")[0]+" "+ acta.created_at.split("T")[1].split(".")[0]}</td>
                                        <td >{acta.codigo}</td>
                                        <td ><FaFilePdf onClick={()=>{}} className='w-40 h-50' style={{color: 'rgb(0, 0, 0)'}}/></td>
                                        <td >
                                            <Button color='custom-primary' onClick={()=>setActasAgenda(acta)}>
                                                Añadir
                                            </Button>
                                        </td>
                                    </tr>
                                    )}
                                    </tbody>
                                </Table>
                        </Col>
                    </Row>
            </ModalBody>
        </Modal>
    </Container>
        );
}

export default ModalAnadirActa;