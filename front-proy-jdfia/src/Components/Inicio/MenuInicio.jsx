import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Card, CardBody, CardHeader, CardImg, Col} from 'reactstrap';

const MenuInicio = () => {
    return (
        <div>
            <br />
            <Container className='p-4 bg-secondary my-2 rounded bg-opacity-75' >
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
                        {/*INICIO DEL CARD */}
                      <Col xs = "3">
                        <Link style={{ textDecoration: 'none', color: 'Black' }} to="/buzon" >
                            <Card
                                body
                                color="info"
                                outline
                                className='shadow-lg'
                            >
                                <CardHeader tag={"h4"} className='text-center'>
                                    Buzon
                                </CardHeader>
                                <CardBody>
                                    <CardImg 
                                        alt="Card image cap"
                                        src="https://picsum.photos/500/400"
                                        />
                                    </CardBody>
                            </Card> 
                        </Link>
                      </Col>
                       {/*FIN DEL CARD*/}

                       {/*INICIO DEL CARD */}
                      <Col xs = "3">
                        <Link style={{ textDecoration: 'none', color: 'Black' }} to="/buscador" >
                            <Card
                                body
                                color="info"
                                outline
                                className='shadow-lg'
                            >
                                <CardHeader tag={"h4"} className='text-center'>
                                    Buscador
                                </CardHeader>
                                <CardBody>
                                    <CardImg 
                                        alt="Card image cap"
                                        src="https://picsum.photos/500/400"
                                        />
                                    </CardBody>
                            </Card> 
                        </Link>
                      </Col>
                       {/*FIN DEL CARD*/}
                         {/*INICIO DEL CARD */}
                      <Col xs = "3">
                        <Link style={{ textDecoration: 'none', color: 'Black' }} to="/estadistico" >
                            <Card
                                body
                                color="info"
                                outline
                                className='shadow-lg'
                            >
                                <CardHeader tag={"h4"} className='text-center'>
                                    Estadisticos
                                </CardHeader>
                                <CardBody>
                                    <CardImg 
                                        alt="Card image cap"
                                        src="https://picsum.photos/500/400"
                                        />
                                    </CardBody>
                            </Card> 
                        </Link>
                      </Col>
                       {/*FIN DEL CARD*/}

                        {/*INICIO DEL CARD */}
                      <Col xs = "3">
                        <Link style={{ textDecoration: 'none', color: 'Black' }} to="/ajustes" >
                            <Card
                                body
                                color="info"
                                outline
                                className='shadow-lg'
                            >
                                <CardHeader tag={"h4"} className='text-center'>
                                    Ajustes
                                </CardHeader>
                                <CardBody>
                                    <CardImg 
                                        alt="Card image cap"
                                        src="https://picsum.photos/500/400"
                                        />
                                    </CardBody>
                            </Card> 
                        </Link>
                      </Col>
                       {/*FIN DEL CARD*/}
                    </Row> 
                </Container>
            </Container>
        </div>  
    );
}

export default MenuInicio;
