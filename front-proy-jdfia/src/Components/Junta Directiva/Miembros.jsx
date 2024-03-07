import React, { useEffect, useState } from 'react';
import { Col, Container, Input, Label, Row, Table } from 'reactstrap';


const Miembros = () => {


    const [fechaInicial, setFechaInicial] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');
    const [usuarios, setUsuarios ] = useState([]);
    const [usuariosFiltrados, setUsuariosFiltrados ] = useState([]);


  {/*
  useEffect(() => {

        const filtrados = usuarios.filter((usuario) => {
            const usuarioNac = new Date(usuario.fecha_nacimiento);
            return usuarioNac >= new Date(fechaInicial) && usuarioNac <= new Date(fechaFinal);
          });
      

        setUsuariosFiltrados(filtrados);
    }, [fechaFinal,fechaInicial, usuariosFiltrados]); 
*/}

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/users")
        .then((data) => data.json())
        .then((res)=>{
           setUsuarios(res);
         //  filtrarJuntaDirectiva(res);
           console.log(res)
        }) 
    }, []);

    {/*
    const filtrarJuntaDirectiva = (usuarios) => {
        const usuariosFiltrados = usuarios.filter((usuario) =>{
            if(usuario.id === '1')
            {
                return usuario
            }
        })
        setUsuariosFiltrados(usuariosFiltrados)
    }
*/}

    return (
        <Container className=' p-4 bg-custom-dark my-4 rounded bg-opacity-75' >
                    <Row>
                        <Col xs="12">
                            <h1 className='text-center text-light'>Miembros de la junta directiva</h1>
                        </Col>
                    </Row>
                    <br />
                    <Row className='text-light'>
                        <Col xs="1"></Col>
                        <Col xs="4"> 
                            <Label >Fecha inicial</Label>
                            <Input type="date" value={fechaInicial} onChange={(e) => setFechaInicial(e.target.value)}></Input>
                        </Col>
                        <Col xs="2"></Col>
                        <Col xs="4">
                            <Label >Fecha final</Label>
                            <Input type="date" value={fechaFinal} onChange={(e) => setFechaFinal(e.target.value)}></Input>
                        </Col>
                        <Col xs="1"></Col>
                    </Row>
                    <br />
                    <Row>
                        <Table className='text-center'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Correo electronico</th>
                                    <th>Carnet</th>
                                    <th>Fecha Nacimiento</th>
                                </tr>
                            </thead>
                            <tbody>
                            { usuariosFiltrados.length > 0 && usuariosFiltrados.map((usuario) => (
                                <tr key={usuario.id}>
                                    <th scope='row'>{usuario.id}</th>
                                    <td>{usuario.name}</td>
                                    <td>{usuario.name}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.password}</td>
                                    <td>{usuario.carnet}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Row>
       </Container>
    );
}

export default Miembros;
