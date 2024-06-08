import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Label, Row, Table } from 'reactstrap';     
import FilaSolicitud from '../Buscador/Filas/FilaSolicitud';
import ModalEditarSolicitud from './ModalEditarSolicitud';
import ModalDenegarSolicitud from './ModalDenegarSolicitud';
import Swal from 'sweetalert2';
import { FaFilePdf } from 'react-icons/fa6';

export default function RevisionSolicitud() {

    const [solicitudes, setSolicitudes] = useState([]);
    const [solicitudEdit, setSolicitudEdit] = useState({});
    const [documentoSolicitud, setDocumentoSolicitud] = useState(null);
    
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


    const getDocumento = (id) =>{

        // let url
        // fetch(`http://127.0.0.1:8000/api/solicitud/doc/${id}`)
        // .then(response => {
        //     if (!response.ok) {
        //       throw new Error(`Error: ${response.status}`);
        //     }
        //     return response.blob();
        //   })
        // .then(
        //     blob => {
        //         url = URL.createObjectURL(blob);
        //         console.log(url)
        //         setDocumentoSolicitud(url);
        //       }
        // )
        // .catch(error => console.log(error));

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
                                    <td><FaFilePdf onClick={()=>{getDocumento(solicitud.documentos[0].id)}} className='w-50 h-50' style={{color: 'rgb(0, 0, 0)'}}/></td>
                                    <td><Button color='custom-warning' className='text-light' onClick={()=>{toggleEditar(solicitud)}}>Editar</Button> { } <Button color='custom-success'className='text-light' onClick={()=>{handleSolicitud(solicitud, 2,"")}}>Aprobar</Button> { } <Button color='custom-danger'className='text-light' onClick={()=>{toggleDenegar(solicitud)}}>Denegar</Button> { }
                                    </td>
                                </tr>)}
                                </tbody>
                            </Table>
                        </Col>      
                            {/* {documentoSolicitud ? (
                             <iframe src={documentoSolicitud} width="100%" height="600px" />
                            ) : (
                                <div>Loading...</div>
                            )}                         */}
                    </Row>
                    <ModalEditarSolicitud toggleEdit={toggleEdit} modalEdit={modalEdit} solicitud={solicitudEdit}/>
                    <ModalDenegarSolicitud toggleDeneg={toggleDeneg} modalDeneg={modalDeneg} denegado={denegado} handleSolicitud={handleSolicitud}/>
    </Container>
  )
}
