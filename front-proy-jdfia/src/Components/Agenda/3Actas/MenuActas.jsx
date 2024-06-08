import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Label, Row, Table } from 'reactstrap';
import ModalAnadirActa from './ModalAnadirActa';
import Swal from 'sweetalert2';
import { FaFilePdf } from 'react-icons/fa6';

const MenuActas = ({setTotalActas}) => {

    const [modalNew, setModalNew] = useState(false);
    const [actas, setActas] = useState([])
    const toggleNew = () =>{
        setModalNew(!modalNew)
    }
    
    useEffect(() => {
        setTotalActas(actas)
    }, [actas, setTotalActas]);



    const anadirActa = (acta) =>{
      
        if (actas.some((o) => o.id === acta.id)) {
            setActas(actas.filter((o) => o.id !== acta.id))
        }
        else
        {
            setActas([...actas, acta])  
        }
    }


    const deleteActa = (index) =>{

        Swal.fire({
            title: "Desea eliminar esta acta de la agenda",
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
                <ModalAnadirActa modalNew={modalNew} toggleNew={toggleNew} setActasAgenda={anadirActa}/>
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
                                {actas.length >0 && (actas.map((acta)=>{
                                    return <tr key={acta.id}>
                                            <th>{acta.id}</th>
                                            <td>{acta.codigo}</td>
                                            <td>{acta.created_at.split("T")[0]+" "+ acta.created_at.split("T")[1].split(".")[0]}</td>
                                            <td><FaFilePdf onClick={()=>{}} className='w-40 h-50' style={{color: 'rgb(0, 0, 0)'}}/></td>
                                            <td><Button color='custom-danger' className='text-light' onClick={()=>{deleteActa(acta.id-1)}}>Eliminar</Button></td>
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
