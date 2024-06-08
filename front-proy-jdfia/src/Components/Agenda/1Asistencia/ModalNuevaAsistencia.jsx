import React, { useState } from 'react';
import { Button, Col, Container, Input, Row, Modal, ModalHeader, ModalBody, Label   } from 'reactstrap';


const ModalNuevaAsistencia = ({modalNew, toggleNew, setAsistentesPropietarios, setAsistentesSuplentes, setAsistentesOtros, usuarios}) => {

    const [tipoAsistente, setTipoAsistente] = useState('0');
    const [usuarioAsistente, setUsuarioAsistente] = useState('');
    const [horaAsistencia, setHoraAsistencia] = useState('');
    const [asistencia, setAsistencia] = useState(false);
    const [quorum, setQuorum] = useState(false);

    const handleTipoAsistente = (event) => {
        setTipoAsistente(event.target.value); 
      };

    const handleUsuarioAsistente = (event) => {
        setUsuarioAsistente(event.target.value); 
      };

    const handleHoraAsistencia = (event) => {
        setHoraAsistencia(event.target.value); 
      };

    const handleAsistencia = () => {
        setAsistencia(!asistencia); 
      };

    const handleQuorum = () => {
        setQuorum(!quorum); 
      };


const AnadirAsistencia = () =>{

    let nuevaAsistencia = {
            "tipoAsistente": tipoAsistente,
            "usuarioAsistente": parseInt(usuarioAsistente),
            "horaAsistencia": horaAsistencia,
            "asistencia": asistencia,
            "quorum": quorum    
        }
        switch (parseInt(tipoAsistente)) {
            case 0:
               setNuevaAsistencia(setAsistentesPropietarios, nuevaAsistencia)
            break;
            case 1:
                setNuevaAsistencia(setAsistentesSuplentes, nuevaAsistencia)
            break;
            case 2:
                setNuevaAsistencia(setAsistentesOtros, nuevaAsistencia)
            break;
        
            default:
                break;
        }
}

const setNuevaAsistencia = (setAsistentes, nuevaAsistencia) =>{
    setAsistentes(prevAsistentes => {
        const nuevoArreglo = [...prevAsistentes]; // Crear una copia del arreglo original
        nuevoArreglo.push(nuevaAsistencia); // Añadir el nuevo valor al arreglo
        return nuevoArreglo;
    })

}







    return (
        <Container className='p-3 my-4'>
        <Modal scrollable size="lg" isOpen={modalNew} toggle={toggleNew}>
            <ModalHeader toggle={toggleNew}>Añadir nueva asistencia</ModalHeader>
            <ModalBody>
                    <Row>
                        <Col xs="12">   
                        <Label >Tipo de asistente</Label>
                        <Input type='select' id='tipoAsistente' onChange={handleTipoAsistente}>
                            <option value="0" >Propietario</option>
                            <option value="1" >Suplente</option>
                            <option value="2" >Otro</option>
                        </Input>
                        <br />
                        <Label >Seleccione el usuario</Label>
                        <Input type="select" id='usuarioAsistente' onChange={handleUsuarioAsistente}>
                        <option value="0" >Seleccione un usuario</option>
                        {usuarios.length > 0 && usuarios.map(usuario => <option value={usuario.id} >{usuario.name + " " + usuario.apellido}</option> )}
                        
                        
                        </Input>
                        <br />
                        <Label >Ingrese la hora de asistencia</Label>
                        <Input type="time" id='horaAsistencia' onChange={handleHoraAsistencia}/>
                        <br />
                        </Col>
                        <Col xs="6" className='text-center'>
                        <Label >Asistencia</Label>
                        <br />
                        <Input type="checkbox" className=' bg-custom-dark' id='asistencia' checked={asistencia} onChange={handleAsistencia}/>
                        </Col>
                        <Col xs="6" className='text-center'>
                        <Label >Quorum</Label>
                        <br />
                        <Input type="checkbox" className=' bg-custom-dark' id='quorum' checked={quorum} onChange={handleQuorum}/>
                        </Col>  
                        <br />
                        <br />
                        <br />  
                        <br />
                        <Button block color="custom-success" className='text-light' onClick={AnadirAsistencia}>Añadir asistencia</Button>
                    </Row>
            </ModalBody>
        </Modal>
    </Container>
    );
}

export default ModalNuevaAsistencia;
