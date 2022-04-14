import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo2.png'
import './Header.css'

const Header = () => {
    const navigate = useNavigate();

    const navigateToSignUp = ()=>{
        navigate('/signup')
    }
    return (
        <div>
            <Navbar className='rounded' bg="#FCF4E0" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"><img className='logo w-100' src={logo} alt="" /></Navbar.Brand>
                        <Nav className="ms-auto align-items-center">
                            <Link className='text-dark text-decoration-none ps-4' to='/'>Home</Link>
                            

                            
                            
                            <button onClick={navigateToSignUp} className='ms-3 btn btn-link text-light text-decoration-none rounded-pill bg-danger '>SignUp</button>
                            
                        
                            
                                <Link className='text-dark text-decoration-none ps-4' to='/login'>Login</Link>
                        </Nav>
                    </Container>
                </Navbar>
        </div>
    );
};

export default Header;