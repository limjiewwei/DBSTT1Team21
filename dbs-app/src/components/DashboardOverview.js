import { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import UserProfile from "./UserProfile";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function DashboardOveriew() {
	const [transactions, setTransactions] = useState([]);
	const [account, setAccountType] = useState("");
	const headers = ["AccountID", "ReceivingAccountID", "Date", "Amount", "Comment"];
	const navigate = useNavigate();
	const scheduleTransaction = () => {
		navigate("/newtransaction");
	};
	return (
		<Container fluid className="mt-5">
			<UserProfile />

			<h4>Transaction history</h4>
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
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>3</td>
						<td colSpan={2}>Larry the Bird</td>
						<td>@twitter</td>
						<td>@mdo</td>
					</tr>
				</tbody>
			</Table>
			<Button onClick={scheduleTransaction}>Schedule new transaction</Button>
		</Container>
	);
}

export default DashboardOveriew;
