import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'reactstrap';
import { pedirSolicitudes } from '../../Helpers/pedirDatos';
import FilaSolicitud from '../Buscador/Filas/FilaSolicitud';
import NavBar from '../Navbar/NavBar';
import { VerPdf } from '../Pdf/VerPdf';
import Swal from 'sweetalert2';

const HistorialBuzon = () => {

    const [solicitudes, setSolicitudes] = useState([]);

    useEffect(() => {
       getSolicitudes()
    }, []);


    
    const getSolicitudes = ()=>{
        fetch('http://127.0.0.1:8000/api/solicitudes')
        .then(response => response.json())
        .then(data =>{ setSolicitudes(data); console.log(data)})
        .catch(error => console.log(error));
    }

    const eliminarSolicitud = (id) =>{

        Swal.fire({
            title: "Desea eliminar esta solicitud",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
          }).then((result) => {
            if (result.isConfirmed) {
                    fetch(`http://127.0.0.1:8000/api/solicitud/${id}`, {
                        method: 'DELETE',
                        })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire({
                            title: "Registro eliminado",
                            text: "La solicitud se ha eliminado con exito",
                            icon: "success"
                        });
                        getSolicitudes()

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
        <React.Fragment>
            <NavBar/>
        <Container>
            <Row>
                <Col xs='12'>
                 <Container className=' p-4 bg-custom-dark my-4 rounded bg-opacity-75' >
                    <Row>
                        <Col >
                            <h1 className='text-center text-light'>Historial de Documentos</h1>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs='12'>
                            <Table bordered className='text-center'>
                                <thead className='table-primary'>
                                    <tr>    
                                        <th>#</th>
                                        <th>Fecha de subida</th>
                                        <th>Codigo</th>
                                        <th>Descripción</th>
                                        <th>Archivo</th>
                                        <th>Estado de la solicitud</th>
                                        <th>Comentario</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    {solicitudes.map((solicitud)=>  <tr className={`table-${solicitud.estado === "SUBIDO"? 'warning':solicitud.estado=== "ACEPTADO"?'success':'danger'}`}>
                                        <th scope='row'>{solicitud.id}</th>
                                        <td>{solicitud.creado.split("T")[0]+" "+ solicitud.creado.split("T")[1].split(".")[0]}</td>
                                        <td>{solicitud.codigo}</td>
                                        <td>{solicitud.descripcion}</td>
                                        <td><VerPdf id={solicitud.id} tipo="solicitud"/></td>
                                        <td>{solicitud.estado}</td>
                                        <td></td>
                                        <td> {solicitud.estado === "RECHAZO" ?  <Button className="text-white" color='custom-danger' onClick={()=>eliminarSolicitud(solicitud.id)}>Eliminar</Button>: '-' }</td>
                                         </tr> )}
                                </tbody>
                            </Table>
                        </Col>                          
                    </Row>
                 </Container>
                </Col>
             
            </Row>
        </Container>
        </React.Fragment> 
    );
}

export default HistorialBuzon;
