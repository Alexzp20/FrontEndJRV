import React from 'react';
import { Button } from 'reactstrap';

const FilaHistorial = ({solicitud}) => {
    return (
        <tr>
            <th scope='row'>{solicitud.id}</th>
            <td>{solicitud.fechaSubida}</td>
            <td>{solicitud.descripcion}</td>
            <td>{solicitud.documento}</td>
            <td><Button color='danger'>Eliminar</Button></td>
        </tr>   
    );
}

export default FilaHistorial;
