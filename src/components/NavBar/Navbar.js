import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <Navbar bg="light" expand="lg" className='sticky-top '>
            <Container>
                <Navbar.Brand href="#home">MeAL DB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-bar">
                        <NavLink className={({isActive})=> isActive ? 'active' : 'inactive'} to='/home'>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to="/foods">Foods</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to="/order">Order</NavLink>
                       
                    </Nav>
                  
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;