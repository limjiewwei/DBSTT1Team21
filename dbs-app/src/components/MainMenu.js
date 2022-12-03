import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

const MainMenu = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#dashboard">
						<img src={logo} width="100%" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#dashboard">Dashboard</Nav.Link>
						<Nav.Link href="#transactions">Transactions</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default MainMenu;
