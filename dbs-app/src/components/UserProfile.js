import React from "react";

const UserProfile = () => {
	return (
		<>
			<div style={{ display: "flex", flexDirection: "row", marginBottom: "50px", alignItems: "center" }}>
				<img src="https://mdbootstrap.com/img/new/slides/041.webp" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
				<div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
					<h1>John</h1>
					<p>Account Type</p>
				</div>
			</div>
		</>
	);
};

export default UserProfile;
