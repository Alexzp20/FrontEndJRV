import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Label, Row, Table } from 'reactstrap';     
import Swal from 'sweetalert2';
import { FaFilePdf } from 'react-icons/fa6';
import { ModalEditInforme } from './ModalEditInforme';
// import { ModalEditActa } from './ModalEditActa';

export const GestionInformes = () => {
    const [informes, setInformes] = useState([]);
    const [informeEdit, setInformeEdit] = useState({});
    
      //hooks de estado del modal de edit Informe
      const [modalEdit, setModalEdit] = useState(false);
      const toggleEdit = () => setModalEdit(!modalEdit);

    useEffect(() => {
       getInformes()
    }, []);     

    const getInformes = () => {
        fetch('http://127.0.0.1:8000/api/informes')
        .then(response => response.json())
        .then(data =>{ setInformes(data)})
        .catch(error => console.log(error));
    }

    
    const toggleEditar = (informe) => {
       setInformeEdit(informe)
        toggleEdit()

    }

    const eliminarInforme = (id) =>{

        Swal.fire({
            title: "Desea eliminar este informe",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
          }).then((result) => {
            if (result.isConfirmed) {
                    fetch(`http://127.0.0.1:8000/api/informe/${id}`, {
                        method: 'DELETE',
                        })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire({
                            title: "Registro eliminado",
                            text: "El informe se ha eliminado con exito",
                            icon: "success"
                        });
                        getInformes()

                    })
                    .catch(err => {
                    Swal.fire({
                            title: "Error al eliminar el registro",
                            text: {err},
                            icon: "error"
                        });
                        console.error(':', err);
                    });
            } else if (result.isDenied) {
              Swal.fire("No se han realizado Cambios", "", "info");
            }
          });

    }








  return (
    <Container className='p-4 bg-custom-dark my-3 rounded bg-opacity-75'>
    <br />
    <Row>
        <Col xs="12">
            <h1 className='text-center text-light'>Gestion de Informes</h1>
        </Col>
    </Row>
    <br />
    <Row>
                        <Col xs='12'>
                            <Table bordered striped className='text-center'>
                                <thead className='table-primary'>
                                    <tr>    
                                        <th>#</th>
                                        <th>Fecha y hora de subida</th>
                                        <th>Codigo del informe</th>
                                        <th>Archivo</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className='table-light'> 
                                    {informes.map((informe)=>
                                <tr key={informe.id}>
                                    <th>{informe.id}</th>
                                    <td>{informe.created_at.split("T")[0]+" "+ informe.created_at.split("T")[1].split(".")[0]}</td>
                                    <td>{informe.codigo}</td>
                                    <td><FaFilePdf onClick={()=>{}} className='w-40 h-50' style={{color: 'rgb(0, 0, 0)'}}/></td>
                                    <td><Button color='custom-warning' className='text-light' onClick={()=>{toggleEditar(informe)}}>Editar</Button> { } <Button color='custom-success'className='text-light' onClick={()=>{eliminarInforme(informe.id)}}>Eliminar</Button> 
                                    </td>
                                </tr>)}
                                </tbody>
                            </Table>
                        </Col>      
                    </Row>
                    <ModalEditInforme  toggleEdit={toggleEdit} modalEdit={modalEdit} informe={informeEdit}/>
    </Container>
  )
}