import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Container, Navbar, NavbarBrand, NavbarText, Row,Col, Nav, NavItem } from 'reactstrap';
import Swal from 'sweetalert2';

const NavBar = () => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();

    
    const logout = async () =>{
        try {
            const response = await fetch('http://127.0.0.1:8000/api/logout', {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Authorization': `Bearer ${token}`
                },
            });
      
            if (response.ok) {
                Swal.fire({
                    title: "Sesion cerrada",
                    text: "Adios",
                    icon: "success"
                });
               navigate("/")
            } else {
                const errorData = await response.json();
                console.log(errorData)
                Swal.fire({
                    title: "Error",
                    text: "",
                    icon: "error"
                });
              console.error('');
            }
          } catch (error) {
            Swal.fire({
                    title: "Error en la solicitud",
                    text: {error},
                    icon: "error"
                });
          }
    }

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
                            <NavbarText className='link-light' onClick={()=>{logout()}}>Cerrar Sesion</NavbarText>                              
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
