import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import setAuthToken from "../setAuthToken";
import desktoplogo from "../assets/desktoplogo.png";
function Login() {
	const navigate = useNavigate();
	const [msg, setMsg] = React.useState("");
	const [auth, setAuth] = React.useState({
		username: "",
		password: "",
	});
	function handleChange(event) {
		const { name, value } = event.target;

		setAuth((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
		console.log(event.target.value);
	}
	const login = async (e) => {
		e.preventDefault();
		try {
			await axios
				.post("http://localhost:3001/api/auth/login", {
					username: auth.username,
					password: auth.password,
				})
				.then((response) => {
					if (!response.data.accessToken) {
						navigate("/login");
					} else {
						const token = response.data.accessToken;
						localStorage.setItem("token", token);
						setAuthToken(token);
						navigate("/dashboard");
					}
				});
		} catch (error) {
			if (error.response) {
				setMsg(error.response.data.msg);
			}
		} finally {
			navigate("/dashboard");
		}
	};
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100vw",
				height: "100vh",
				backgroundImage: `url("https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Gardens-by-the-Bay.jpg")`,
			}}>
			<Container Fluid>
				<Card style={{ width: "100%", height: "100%" }}>
					<img src={desktoplogo} style={{ width: "200px", height: "150px", marginLeft: "auto", marginRight: "auto" }} />
					<Card.Body>
						<Form>
							<Form.Group className="mb-3" controlId="formBasicUsername">
								<Form.Label>Username</Form.Label>
								<Form.Control onChange={handleChange} type="email" name="username" placeholder="Enter username" />
								<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control onChange={handleChange} type="password" name="password" placeholder="Password" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group>
							<Button variant="primary" onClick={login} type="submit">
								Submit
							</Button>
						</Form>
					</Card.Body>
				</Card>
				{/* <Card style={boxshadow}>
					<Form>
						<div className="container-fluid mx-auto" style={{ alignItems: "center", justifyContent: "center" }}></div>
						<br />
						<br />
						<h1 className="h6 mb-3 fw-normal">Sign in to digibank</h1>

						<div className="form-floating">
							<input type="username" className="form-control" id="floatingInput" onChange={handleChange} name="username" placeholder="name@example.com" />
							<label for="floatingInput">Username</label>
						</div>
						<div className="form-floating">
							<input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange} name="password" />
							<label for="floatingPassword">Password</label>
						</div>

						<div className="checkbox mb-3">
							<label>
								<input type="checkbox" value="remember-me" /> Remember me
							</label>
						</div>
						<button className="w-100 btn btn-lg btn-primary" onClick={login} type="submit">
							Sign in
						</button>
						<p className="mt-5 mb-3 text-muted">© 2017–2021</p>
					</Form>
				</Card> */}
			</Container>
		</div>
	);
}

export default Login;
