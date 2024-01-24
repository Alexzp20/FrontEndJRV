import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Navbar, NavbarBrand, NavbarText, Row,Col } from 'reactstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar
            className="navbar-light"
            color="secondary"
            dark
            light
            >
            <Container fluid>
                <Row className='border' >
                    <Col className='border' xs="6">
                        <NavbarBrand>
                        <Link style={{ textDecoration: 'none', color: 'white'}} to="/inicio" >Junta Directiva</Link>
                        </NavbarBrand>

                    </Col>
                    <Col className='border text-center' xs="1">
                        <NavbarText><Link style={{ textDecoration: 'none' }} to="/inicio" >Inicio</Link></NavbarText>                              
                    </Col>
                    <Col className='border text-center' xs="1">
                        <NavbarText><Link style={{ textDecoration: 'none' }} to="/" >Perfil</Link></NavbarText>                              
                    </Col>
                    <Col className='border text-left' xs="1">
                        <NavbarText><Link style={{ textDecoration: 'none' }} to="/" >notificaciones</Link></NavbarText>                              
                    </Col>
                    <Col className='border text-center' xs="1">
                        <NavbarText><Link style={{ textDecoration: 'none' }} to="/" ></Link></NavbarText>                              
                    </Col>
                    <Col className='border text-center' xs="1">
                        <NavbarText><Link style={{ textDecoration: 'none' }} to="/" ></Link></NavbarText>                              
                    </Col>
                    <Col className='border text-center' xs="1"  >
                        <NavbarText><Link className= 'text-nowrap' style={{ textDecoration: 'none'}} to="/" >Cerrar Sesion</Link></NavbarText>                              
                    </Col>
                </Row>
            </Container>
            </Navbar>

        </div>
     
       
    );
}

export default NavBar;
