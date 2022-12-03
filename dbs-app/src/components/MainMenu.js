import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MainMenu = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#dashboard">DBS Digibank</Navbar.Brand>
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
