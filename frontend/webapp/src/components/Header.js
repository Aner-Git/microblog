import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header({header}){
    return (
        <Navbar bg="light" sticky="top" className="Header">
            <Container>
            <Navbar.Brand>{header}</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

