import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserProfile = () => {
  const headers = ["Account ID", "Account Type", "Account Balance ($)"];
  const navigate = useNavigate();
  const editProfile = () => {
    navigate("/profilepage");
  };


  return (
    <div>
      <h4>Hello! </h4>

      <Button onClick={editProfile} className="justify-content-end">
        Edit Profile
      </Button>

      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>621156213</td>
            <td>Saving</td>
            <td>70200.71</td>
          </tr>
          <tr>
            <td>958945214</td>
            <td>Current</td>
            <td>99720.46</td>
          </tr>
          <tr>
            <td>339657462</td>
            <td>Current</td>
            <td>47380.33</td>
          </tr>
        </tbody>
      </Table>
    </div>
    // <>
    // 	<div style={{ display: "flex", flexDirection: "row", marginBottom: "50px", alignItems: "center" }}>
    // 		<img src="https://mdbootstrap.com/img/new/slides/041.webp" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
    // 		<div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
    // 			<div style={{ display: "flex", flexDirection: "row" }}>
    // 				<h1 style={{ marginRight: "10px" }}>John</h1>
    // 				<Button variant="primary" size="sm" onClick={editProfile}>
    // 					Edit Profile
    // 				</Button>
    // 			</div>
    // 			<p>Account Type</p>
    // 		</div>
    // 	</div>
    // </>
  );
};

export default UserProfile;
