import React from 'react';
import { Button } from 'reactstrap';

const FilaUsuario = ({usuario}) => {
    return (
        <tr>
            <th scope='row'>{usuario.id_usuario}</th>
            <td>{usuario.nombre_usuario}</td>
            <td>{usuario.correo}</td>
            <td>{usuario.fecha_nacimiento}</td>
            <td>{usuario.carnet}</td>
            <td>{usuario.cv}</td>
            <td>
                <Button className='m-1 text-light' color='custom-warning'>Editar</Button>
                <Button className='m-1 text-light' color='custom-danger'>Eliminar</Button>
            </td>
        </tr>   
    );
}

export default FilaUsuario;
