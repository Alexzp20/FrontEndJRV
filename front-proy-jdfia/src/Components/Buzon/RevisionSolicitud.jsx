import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Label, Row, Table } from 'reactstrap';     
import ModalEditarSolicitud from './ModalEditarSolicitud';
import ModalDenegarSolicitud from './ModalDenegarSolicitud';
import Swal from 'sweetalert2';
import { VerPdf } from '../Pdf/VerPdf';

export default function RevisionSolicitud() {

    const [solicitudes, setSolicitudes] = useState([]);
    const [solicitudEdit, setSolicitudEdit] = useState({});
    const [documentoSolicitud, setDocumentoSolicitud] = useState(null);
    const cookies = new Cookies();
    const token = cookies.get('token')

    
    const [denegado, setDenegado] = useState({});
      //hooks de estado del modal de edit Solicitudes
      const [modalEdit, setModalEdit] = useState(false);
      const toggleEdit = () => setModalEdit(!modalEdit);
      //hooks de estado del modal del denegar solicitudes
      const [modalDeneg, setModalDeneg] = useState(false);
      const toggleDeneg = () => setModalDeneg(!modalDeneg);


    useEffect(() => {
       getSolicitudes()
    }, []);     

    const getSolicitudes = () => {
        fetch('http://127.0.0.1:8000/api/solicitudes/estado/1')
        .then(response => response.json())
        .then(data =>{ setSolicitudes(data); console.log(data)})
        .catch(error => console.log(error));
    }

    
    const toggleEditar = (usuario) => {
        setSolicitudEdit(usuario)
        toggleEdit()

    }
    const toggleDenegar = (solicitud) => {
        setDenegado(solicitud)
        toggleDeneg()

    }
    
    const handleSolicitud = (solicitud, estadoSolicitud, comentario) =>{

        let estado = {}
        if(comentario === ""){
            estado = {
                "id": parseInt(solicitud.id),
                "estado": parseInt(estadoSolicitud)
                }
        }else{
            estado =  {
                "id": parseInt(solicitud.id),
                "comentario": comentario,
                "estado": parseInt(estadoSolicitud)
                }
        }

        if(!token)
            {
                console.log("token no encontrado")
                return
            }
            else{
                console.log(token)
            }

        Swal.fire({
            title: `Desea ${comentario !== ""? "denegar": "aprobar"} la siguiente solicitud: `,
            text: `${solicitud.descripcion}`,
            showCancelButton: true,
            confirmButtonText: `${comentario !== ""? "Denegar": "Aprobar"}`,
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch('http://127.0.0.1:8000/api/revision', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json, text/plain, */*',
                        'Authorization': `Bearer ${token}`
                      },
                      body: JSON.stringify(estado),
                  })
                    .then(response => {
                      if (!response.ok) {
                          Swal.fire("Error en el envio", response.status, "error");
                      }
                      else{
                          response.text()
                      }
                    })
                    .then(data => {
                        Swal.fire({
                            title: `Solicitud ${comentario !== ""? "denegada": "aprobada"}`,
                            text: data,
                            icon: "success"
                        });
                        getSolicitudes()
                    })
                    .catch(error => {
                        Swal.fire("No se han realizado Cambios", {error}, "error");
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
            <h1 className='text-center text-light'>Revisión de Solicitudes</h1>
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
                                        <th>Codigo de la solicitud</th>
                                        <th>Categoria de la solicitud</th>
                                        <th>Archivo</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className='table-light'> 
                                    {solicitudes.map((solicitud)=>
                                <tr key={solicitud.id}>
                                    <th>{solicitud.id}</th>
                                    <td>{solicitud.created_at.split("T")[0]+" "+ solicitud.created_at.split("T")[1].split(".")[0]}</td>
                                    <td>{solicitud.codigo}</td>
                                    <td>{solicitud.descripcion}</td>
                                    <td><VerPdf id={solicitud.id} tipo="solicitud"/></td>
                                    <td><Button color='custom-warning' className='text-light' onClick={()=>{toggleEditar(solicitud)}}>Editar</Button> { } <Button color='custom-success'className='text-light' onClick={()=>{handleSolicitud(solicitud, 2,"")}}>Aprobar</Button> { } <Button color='custom-danger'className='text-light' onClick={()=>{toggleDenegar(solicitud)}}>Denegar</Button> { }
                                    </td>
                                </tr>)}
                                </tbody>
                            </Table>
                        </Col>      
                    </Row>
                    <ModalEditarSolicitud toggleEdit={toggleEdit} modalEdit={modalEdit} solicitud={solicitudEdit}/>
                    <ModalDenegarSolicitud toggleDeneg={toggleDeneg} modalDeneg={modalDeneg} denegado={denegado} handleSolicitud={handleSolicitud}/>
    </Container>
  )
}
