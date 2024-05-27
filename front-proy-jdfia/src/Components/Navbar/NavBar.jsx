import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Navbar, NavbarBrand, NavbarText, Row,Col, Nav, NavItem } from 'reactstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar
            className="navbar-light"
            color="custom-primary"
            dark
            light
            >
            <Container fluid>
                <Row >
                    <Col xs="6" >
                        <NavbarBrand >
                        <Link className='text-white'  style={{ textDecoration: 'none'}} to="/inicio" >Junta Directiva</Link>
                        </NavbarBrand>

                    </Col>
                    <Col xs="6" >
                        <Nav fill>
                        <NavItem  >
                            <NavbarText><Link className='text-white' style={{ textDecoration: 'none' }} to="/inicio" >Inicio</Link></NavbarText>                              
                        </NavItem>

                        <NavItem>
                            <NavbarText><Link className='text-white' style={{ textDecoration: 'none' }} to="/" >Perfil</Link></NavbarText>                              
                        </NavItem>
                        <NavItem>
                            <NavbarText><Link className='text-white' style={{ textDecoration: 'none'}} to="/junta/miembros" >Miembros JD</Link></NavbarText>                              
                        </NavItem>
                        <NavItem>
                            <NavbarText><Link className='text-white' style={{ textDecoration: 'none' }} to="/" >notificaciones</Link></NavbarText>                              
                        </NavItem>
                        <NavItem>
                            <NavbarText><Link className='text-white' style={{ textDecoration: 'none'}} to="/" >Cerrar Sesion</Link></NavbarText>                              
                        </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </Container>
            </Navbar>

        </div>
     
       
    );
}

export default NavBar;
