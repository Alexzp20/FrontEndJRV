import React from 'react';
import { Button } from 'reactstrap';

const TablaSolicitud = ({titulo ="", solicitudes, setSolicitudes, toggleEstado, eliminarElemento, subirElemento}) => {
    return (
        <React.Fragment>
            {titulo !== "" && (
                <thead className='text-center'>
                <tr>
                    <th colSpan="7"><h6>{titulo}</h6></th>
                </tr>
                </thead>
            )}
            <tbody className='table-light text-center'>
            {solicitudes.map((solicitud)=>
                                <tr key={solicitud.id}>
                                <th scope='row'>{solicitud.id}</th>
                                <td >{solicitud.descripcion}</td>
                                <td >{solicitud.documento}</td>
                                <td >{solicitud.documento}</td>
                                <td >
                                    <Button color="custom-danger" className='text-light' onClick={() => eliminarElemento(solicitud.id, setSolicitudes, solicitudes)}>X</Button>
                                </td>
                                <td ><Button color="custom-warning" className='text-light' onClick={() => subirElemento(solicitud.id, setSolicitudes)}>Subir</Button></td>
                                <td ><Button color="custom-dark" className='text-light' onClick={toggleEstado}>Actualizar</Button></td>
                            </tr>
                            )}
            </tbody>
        </React.Fragment>
    );
}

export default TablaSolicitud;