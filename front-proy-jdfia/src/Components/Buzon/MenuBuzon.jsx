import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, Col, Container, Row} from 'reactstrap';

const MenuBuzon = () => {
    return (
        <div>
            <br />
            <Container className='p-3 bg-secondary my-2 rounded bg-opacity-75' >
            <Row>
                <h3 className='text-center text-light'>Buzon</h3>
            </Row> 
            <br />
            <br />
            <br />
            <Container>
                    <Row>
                    <Col xs="2"></Col>
                      <Col xs = "2">
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/buzon/nuevaSolicitud" >
                            <Card
                                body
                                color="warning"
                                outline
                                className="bg-transparent "
                            >
                               
                                <CardBody>
                                <CardText tag={"h6"} className='text-center'>
                                    Subida de solicitudes
                                </CardText>
                                    <CardImg 
                                        style={{filter: 'invert(100%)'}}
                                        alt="Card image cap"
                                        src= "/images/Buzon/SubidaDoc.png"
                                        />
                                    </CardBody>
                            </Card> 
                        </Link>
                      </Col>
                      <Col xs="1"></Col>
                      <Col xs="2">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to="/buzon" >
                            <Card
                                body
                                color="warning"
                                outline
                                className="bg-transparent"
                            >
                               
                                <CardBody>
                                <CardText tag={"h6"} className='text-center'>
                                    Notificaciones
                                </CardText>
                                   <CardImg 
                                        style={{filter: 'invert(100%)'}}
                                        alt="Card image cap"
                                        src= '/images/Buzon/Notificacion.png'
                                        />
                                    </CardBody>
                            </Card> 
                        </Link>
                      </Col>
                      <Col xs="1"></Col>
                      <Col xs="2">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to="/buzon" >
                            <Card
                                body
                                color="warning"
                                outline
                                className="bg-transparent "
                            >
                                <CardBody>
                                <CardText tag={"h6"} className='text-center'>
                                    Historial de documentos
                                </CardText>
                                    <CardImg 
                                        style={{filter: 'invert(100%)'}}
                                        alt="Card image cap"
                                        src= '/images/Buzon/HistorialDocs.png'
                                        />
                                    </CardBody>
                            </Card> 
                        </Link>
                      </Col>
                      <Col xs="2"></Col>
                    </Row> 
                </Container>
                <br />
            </Container>
            
        </div>
    );
}

export default MenuBuzon;