import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Label, Row, Table } from 'reactstrap';
import Swal from 'sweetalert2';
import { ModalAnadirInforme } from './ModalAnadirInforme';
import { FaFilePdf } from 'react-icons/fa6';

export const MenuInformes = ({setTotalInformes}) => {
    const [modalNew, setModalNew] = useState(false);
    const [informes, setInformes] = useState([])
    const toggleNew = () =>{
        setModalNew(!modalNew)
    }
    
    useEffect(() => {
        setTotalInformes(informes)
    }, [informes, setTotalInformes]);


    const anadirInforme = (informe) =>{
      
        if (informes.some((o) => o.id === informe.id)) {
            setInformes(informes.filter((o) => o.id !== informe.id))
        }
        else
        {
            setInformes([...informes, informe])  
        }
    }



    const deleteInforme = (index) =>{

        Swal.fire({
            title: "Desea eliminar esta Informe",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
          }).then((result) => {
            if (result.isConfirmed) {

                setInformes(prevInformes => {
                    const nuevoArreglo = [...prevInformes]; 
                    nuevoArreglo.splice(index, 1);
                    return nuevoArreglo;
                })
                Swal.fire({
                    title: "Registro eliminado",
                    text: `El informe se ha eliminado con exito`,
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
                <h5>5 - Informes</h5>
                <br />
                <br />
                <Col xs="9"></Col>
                <Col xs="3">
                    <Label className=' text-center' sm={6} for="newUserBt"><h6>Añadir informe: </h6></Label>
                    <Button id="newUserBt" className='text-light' color='custom-success' onClick={toggleNew}>Nuevo informe</Button>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                </Col>
            </Row>
                 <Row>
                    <Col xs="12">
                        <br />
                        <Table className='text-center'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>#</th>
                                    <th>Codigo de informe</th>
                                    <th>fecha de informe</th>
                                    <th>Documento</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {informes.length >0 && (informes.map((informe)=>{
                                    return <tr key={informe.id}>
                                                <th>{informe.id}</th>
                                                <td>{informe.codigo}</td>
                                                <td>{informe.created_at.split("T")[0]+" "+ informe.created_at.split("T")[1].split(".")[0]}</td>
                                                <td><FaFilePdf onClick={()=>{}} className='w-40 h-50' style={{color: 'rgb(0, 0, 0)'}}/></td>
                                                <td><Button color='custom-danger' className='text-light' onClick={()=>{deleteInforme(informe.id-1)}}>Eliminar</Button></td>
                                            </tr>
                                }))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <ModalAnadirInforme toggleNew={toggleNew} modalNew={modalNew} setInformesAgenda={anadirInforme}/>
       </Container>
    )
}