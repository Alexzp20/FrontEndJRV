import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Container,  Row, Col, Table, Button } from 'reactstrap';
import { FaFilePdf } from 'react-icons/fa6';
export const ModalAnadirInforme = ({modalNew, toggleNew, setInformesAgenda}) => {

    const [informes,setInformes] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/informesAgenda")
        .then((data) => data.json())
        .then((res)=>{
            console.log(res)
           setInformes(res)
        })
    }, [])


  return (
    <Container className='p-3 my-4'>
    <Modal scrollable size="xl" isOpen={modalNew} toggle={toggleNew}>
        <ModalHeader toggle={toggleNew}>Añadir informes</ModalHeader>
        <ModalBody>
                <Row>
                    <Col xs="12">
                            <Table className='text-center'>
                                <thead>
                                <tr>    
                                    <th>#</th>
                                    <th>Fecha y hora de subida</th>
                                    <th>Codigo del informe</th>
                                    <th>Documento del infome</th>
                                    <th>Seleccionar</th>
                                </tr>
                                </thead>
                                <tbody>
                                {informes.map((informe)=>
                                    <tr key={informe.id}>
                                    <th scope='row'>{informe.id}</th>
                                    <td >{informe.created_at.split("T")[0]+" "+ informe.created_at.split("T")[1].split(".")[0]}</td>
                                    <td >{informe.codigo}</td>
                                    <td ><FaFilePdf onClick={()=>{}} className='w-40 h-50' style={{color: 'rgb(0, 0, 0)'}}/></td>
                                    <td >
                                        <Button color='custom-primary' onClick={()=>setInformesAgenda(informe)}>
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
  )
}
