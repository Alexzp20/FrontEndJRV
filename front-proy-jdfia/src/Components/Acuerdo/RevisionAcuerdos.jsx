import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Button, Col, Container, Row, Table } from 'reactstrap';
import NavBar from '../Navbar/NavBar';
import { VerPdf } from '../Pdf/VerPdf';

export const RevisionAcuerdos = () => {

    const {idAgenda} = useParams()
    const [solicitudes, setSolicitudes] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:8000/api/agenda/${idAgenda}`)
         .then(response => response.json())
         .then(data =>{ setSolicitudes(Object.values(data.solicitudes).flat())})
         .catch(error => console.log(error));
        
     }, []);



    
  return (
    <React.Fragment>
    <NavBar/>
    <br />
    <Container className='p-4 bg-custom-dark my-2 rounded bg-opacity-75' >
        <Row>
            <h3 className='text-center text-light'>Lista de solicitudes de la agenda</h3>
        </Row> 
        <br />
        <br />
        <Container>
            <Row>
                <Col xs="12">
                <Table bordered striped className='text-center'>
                    <thead className='table-primary'>
                        <tr>    
                            <th>#</th>
                            <th>Fecha y hora de subida</th>
                            <th>Codigo de la solicitud</th>
                            <th>Descripcion de la solicitud</th>
                            <th>Estado</th>
                            <th>Archivo de la solicitud</th>
                            <th>Archivo del acuerdo</th>
                            <th>Acciones para acuerdos</th>
                        </tr>
                    </thead>
                    <tbody className='table-light'> 
                        {solicitudes && solicitudes.map((solicitud)=>
                    <tr key={solicitud.id}>
                        <th>{solicitud.id}</th>
                        <td>{solicitud.creado.split("T")[0]+" "+ solicitud.creado.split("T")[1].split(".")[0]}</td>
                        <td>{solicitud.codigo}</td>
                        <td>{solicitud.descripcion}</td>
                        <td>{solicitud.estado}</td>
                        <td><VerPdf id={solicitud.id} tipo="solicitud"/></td>
                        <td><VerPdf id={solicitud.id} tipo="acuerdo"/></td>
                        <td>
                           <Link to={`/acuerdo/revision/nuevo/${solicitud.id}`}> <Button color='custom-success'className='text-light'>Nuevo</Button></Link> { } 
                            <Button color='custom-warning' className='text-light' onClick={()=>{}}>Editar</Button> { }
                           <Button color='custom-danger'className='text-light' onClick={()=>{}}>Eliminar</Button>
                        </td>
                    </tr>)}
                    </tbody>
                </Table></Col>
            </Row> 
        </Container>
    </Container>
</React.Fragment>  
  )
}
