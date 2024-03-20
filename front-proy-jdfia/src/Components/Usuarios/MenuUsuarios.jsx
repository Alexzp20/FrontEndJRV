import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Label, Row, Table } from 'reactstrap';
import FilaUsuario from './FilaUsuario';
import ModalNewUsuario from './ModalNewUsuario';
import ModalEditUsuario from './ModalEditUsuario';
import Swal from 'sweetalert2';


const MenuUsuarios = () => {
    
    //hooks de estado del modal de nuevo usuario
    const [modalNew, setModalNew] = useState(false);
    const toggleNew = () => setModalNew(!modalNew);
    
    //hooks de estado del modal de edit usuario
    const [modalEdit, setModalEdit] = useState(false);
    const toggleEdit = () => setModalEdit(!modalEdit);
    
    const [usuarios, setUsuarios] = useState([]);
    
    const [usuarioEdit, setUsuarioEdit] = useState({})


    const consumo = () =>{
        fetch("http://127.0.0.1:8000/api/users")
        .then((data) => data.json())
        .then((res)=>{
           setUsuarios(res);
        })
    }

    const deleteUser = (id) =>{

        Swal.fire({
            title: "Desea eliminar este usuario",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
          }).then((result) => {
            if (result.isConfirmed) {
                    fetch(`http://127.0.0.1:8000/api/users/${id}`, {
                        method: 'DELETE',
                        })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire({
                            title: "Registro eliminado",
                            text: "El usuario se ha eliminado con exito",
                            icon: "success"
                        });
                        consumo()

                    })
                    .catch(err => {
                        console.error('Error al eliminar el registro:', err);
                    });
            } else if (result.isDenied) {
              Swal.fire("No se han realizado Cambios", "", "info");
            }
          });
    }

    useEffect(() => {
        consumo()
    }, []);

    return (
            <Container className='p-3 bg-custom-dark my-4 rounded bg-opacity-75'>
                    <br />
                    <Row>
                        <Col xs="12">
                            <h1 className='text-center text-light'>Gestion de usuarios</h1>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Row >
                        <Col xs="3"> <h4 className='text-light'>Lista de usuarios</h4></Col>
                        <Col xs="5"></Col>
                        <Col xs="3" className=' p-2 text-center text-light'>
                            <Label className=' text-center' sm={6} for="newUserBt"><h6>Añadir usuario: </h6></Label>
                            <Button id="newUserBt" className='text-light' color='custom-success' onClick={toggleNew}>Nuevo usuario</Button>
                        </Col>
                    </Row>
                    <Row >
                        <Col  xs="12">
                            <Table borderless striped hover className='text-center'>
                                <thead className='table-primary'>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre de usuario</th>
                                        <th>Correo Electronido</th>
                                        <th>Fecha nacimiento</th>
                                        <th>Carnet</th>
                                        <th>CV</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className='table-light'>
                                    {usuarios.map((usuario)=>{
                                    return <FilaUsuario key={usuario.id} usuario={usuario} toggleEdit = {toggleEdit} setUsuarioEdit = {setUsuarioEdit} deleteUser={deleteUser}/>
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                        <ModalNewUsuario toggleNew={toggleNew} modalNew={modalNew}/>
                        <ModalEditUsuario toggleEdit={toggleEdit} modalEdit={modalEdit}  usuario = {usuarioEdit}/>
                    </Container>
);
}

export default MenuUsuarios;
