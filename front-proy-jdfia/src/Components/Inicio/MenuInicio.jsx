import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Card, CardBody, CardHeader, CardImg, Col} from 'reactstrap';
import { pedirOpciones } from '../../Helpers/menu';

const MenuInicio = () => {

    const [opciones, setOpciones] = useState([]);

    useEffect(() => {
        pedirOpciones()
        .then((res)=>{
            setOpciones(res);
        })
    }, []);

    return (
        <div>
            <br />
            <Container className='p-4 bg-custom-dark my-2 rounded bg-opacity-75' >
                <Row>
                    <h3 className='text-center text-light'>Bienvenido</h3>
                </Row> 
                <Row>
                    <h6 className='text-center text-light'>Seleccione la opción que desee</h6>
                </Row> 
                <br />
                <br />
                <br />
                <br />
                <Container>
                    <Row>
                    {opciones.map((opcion)=>
                            <React.Fragment>
                                {/*INICIO DEL CARD */}
                                <Col xs = "3">
                                    <br />
                                    <Link style={{ textDecoration: 'none', color: 'white' }} to={opcion.direccion} >
                                        <Card
                                            body
                                            color="custom-secondary"
                                            outline
                                            className="bg-custom-primary"
                                        >
                                            <CardHeader tag={"h4"} className='text-center'>
                                                {opcion.titulo}
                                            </CardHeader>
                                            <CardBody>
                                                <CardImg 
                                                    alt="Card image cap"
                                                    src={opcion.imagen}
                                                    />
                                                </CardBody>
                                        </Card> 
                                    </Link>
                                 </Col>
                                {/*FIN DEL CARD*/}
                         </React.Fragment>
                        )}
                    </Row> 
                </Container>
            </Container>
        </div>  
    );
}

export default MenuInicio;
