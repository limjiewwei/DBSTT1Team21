import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
	const navigate = useNavigate();
	const editProfile = () => {
		navigate("/profilepage");
	};
	return (
		<>
			<div style={{ display: "flex", flexDirection: "row", marginBottom: "50px", alignItems: "center" }}>
				<img src="https://mdbootstrap.com/img/new/slides/041.webp" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
				<div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
					<div style={{ display: "flex", flexDirection: "row" }}>
						<h1 style={{ marginRight: "10px" }}>John</h1>
						<Button variant="primary" size="sm" onClick={editProfile}>
							Edit Profile
						</Button>
					</div>
					<p>Account Type</p>
				</div>
			</div>
		</>
	);
};

export default UserProfile;
