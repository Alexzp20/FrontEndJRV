import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Label, Row, Table } from 'reactstrap';
import ModalAnadirActa from './ModalAnadirActa';
import Swal from 'sweetalert2';

const MenuActas = ({setTotalActas}) => {

    const [modalNew, setModalNew] = useState(false);
    const [actas, setActas] = useState([])
    const toggleNew = () =>{
        setModalNew(!modalNew)
    }
    
    useEffect(() => {
        setTotalActas(actas)
    }, [actas, setTotalActas]);



    const deleteActa = (index) =>{

        Swal.fire({
            title: "Desea eliminar esta Acta",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
          }).then((result) => {
            if (result.isConfirmed) {

                setActas(prevActas => {
                    const nuevoArreglo = [...prevActas]; 
                    nuevoArreglo.splice(index, 1);
                    console.log(nuevoArreglo)
                    return nuevoArreglo;
                })
                Swal.fire({
                    title: "Registro eliminado",
                    text: `El acta se ha eliminado con exito`,
                    icon: "success"
                });
            } else if (result.isDenied) {
              Swal.fire("No se han realizado Cambios", "", "info");
            }
          });
    }



    return (
        <Container>
            <Row>
                <h5>3-Aprobación de actas</h5>
                <br />
                <br />
                <Col xs="9"></Col>
                <Col xs="3">
                    <Label className=' text-center' sm={6} for="newUserBt"><h6>Añadir Acta: </h6></Label>
                    <Button id="newUserBt" className='text-light' color='custom-success' onClick={toggleNew}>Nueva Acta</Button>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                <ModalAnadirActa modalNew={modalNew} toggleNew={toggleNew} setActas={setActas}/>
                </Col>
            </Row>
                 <Row>
                    <Col xs="12">
                        <br />
                        <Table className='text-center'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>#</th>
                                    <th>Codigo de Acta</th>
                                    <th>fecha de Acta</th>
                                    <th>Documento</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {actas.length >0 && (actas.map((acta, index)=>{
                                    return <tr key={index}>
                                            <th>{index+1}</th>
                                            <td>{acta.codigoActa}</td>
                                            <td>{acta.fechaActa}</td>
                                            <td>{acta.documentoActa}</td>
                                            <td><Button color='custom-danger' className='text-light' onClick={()=>{deleteActa(index)}}>Eliminar</Button></td>
                                           </tr>
                                }))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
       </Container>
    );
}

export default MenuActas;
