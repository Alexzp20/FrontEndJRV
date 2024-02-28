import React from 'react';
import { Button } from 'reactstrap';

const FilaSolicitud = ({solicitud}) => {
    return (
        <tr>
            <th scope='row'>{solicitud.id}</th>
            <td>{solicitud.fechaSubida}</td>
            <td>{solicitud.descripcion}</td>
            <td>{solicitud.documento}</td>
            <td><Button className="text-white" color='custom-danger'>Eliminar</Button></td>
        </tr>   
    );
}

export default FilaSolicitud;
