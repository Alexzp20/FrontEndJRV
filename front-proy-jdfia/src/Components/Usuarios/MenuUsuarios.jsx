import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Label, Row, Table } from 'reactstrap';
import { pedirUsuarios } from '../../Helpers/pedirDatos';
import FilaUsuario from './FilaUsuario';
import ModalNewUsuario from './ModalNewUsuario';

const MenuUsuarios = () => {

    //hooks de estado del modal de nuevo usuario
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [usuarios, setUsuarios] = useState([]);


    useEffect(() => {
        pedirUsuarios()
        .then((res)=>{
           setUsuarios(res);
           console.log(res)
        })
    
    }, []);

    return (
            <Container className='p-3 bg-secondary my-4 rounded bg-opacity-75'>
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
                        <Col xs="3" className=' p-2 text-center'>
                            <Label className='text-light text-center' sm={6} for="newUserBt"><h6>Añadir usuario: </h6></Label>
                            <Button id="newUserBt" color='success' onClick={toggle}>Nuevo usuario</Button>
                        </Col>
                    </Row>
                    <Row >
                        <Col  xs="12">
                            <Table borderless striped hover className='text-center'>
                                <thead className='table-info'>
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
                                    return <FilaUsuario key={usuario.id} usuario={usuario}/>
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                        <ModalNewUsuario toggle={toggle} modal={modal}></ModalNewUsuario>
                    </Container>
);
}

export default MenuUsuarios;
