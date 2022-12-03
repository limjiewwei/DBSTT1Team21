import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { Navigate, Link } from "react-router-dom";

const MainMenu = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#dashboard">
						<img src={logo} width="100%" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />
					</Navbar.Brand>
					<Nav className="me-auto">
						<Link to="/dashboard" style={{ textDecoration: "none", color: "white", marginRight: "20px" }}>
							Dashboard
						</Link>
						<Link to="/transactions" style={{ textDecoration: "none", color: "white" }}>
							Transactions
						</Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default MainMenu;
