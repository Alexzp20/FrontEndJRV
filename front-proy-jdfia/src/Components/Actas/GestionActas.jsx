import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Label, Row, Table } from 'reactstrap';     
import Swal from 'sweetalert2';
import { FaFilePdf } from 'react-icons/fa6';
import { ModalEditActa } from './ModalEditActa';

export const GestionActas = () => {

    const [actas, setActas] = useState([]);
    const [actaEdit, setActaEdit] = useState({});
    
      //hooks de estado del modal de edit Acta
      const [modalEdit, setModalEdit] = useState(false);
      const toggleEdit = () => setModalEdit(!modalEdit);

    useEffect(() => {
       getActas()
    }, []);     

    const getActas = () => {
        fetch('http://127.0.0.1:8000/api/actas')
        .then(response => response.json())
        .then(data =>{ setActas(data)})
        .catch(error => console.log(error));
    }

    
    const toggleEditar = (acta) => {
       setActaEdit(acta)
        toggleEdit()

    }

    const eliminarActa = (id) =>{

        Swal.fire({
            title: "Desea eliminar esta Acta",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
          }).then((result) => {
            if (result.isConfirmed) {
                    fetch(`http://127.0.0.1:8000/api/acta/${id}`, {
                        method: 'DELETE',
                        })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire({
                            title: "Registro eliminado",
                            text: "El acta se ha eliminado con exito",
                            icon: "success"
                        });
                        getActas()

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
            <h1 className='text-center text-light'>Gestion de actas</h1>
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
                                        <th>Codigo del acta</th>
                                        <th>Archivo</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className='table-light'> 
                                    {actas.map((acta)=>
                                <tr key={acta.id}>
                                    <th>{acta.id}</th>
                                    <td>{acta.created_at.split("T")[0]+" "+ acta.created_at.split("T")[1].split(".")[0]}</td>
                                    <td>{acta.codigo}</td>
                                    <td><FaFilePdf onClick={()=>{}} className='w-40 h-50' style={{color: 'rgb(0, 0, 0)'}}/></td>
                                    <td><Button color='custom-warning' className='text-light' onClick={()=>{toggleEditar(acta)}}>Editar</Button> { } <Button color='custom-success'className='text-light' onClick={()=>{eliminarActa(acta.id)}}>Eliminar</Button> 
                                    </td>
                                </tr>)}
                                </tbody>
                            </Table>
                        </Col>      
                    </Row>
                    <ModalEditActa   toggleEdit={toggleEdit} modalEdit={modalEdit} acta={actaEdit}/>
    </Container>
  )
}