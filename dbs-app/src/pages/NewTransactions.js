import React, { useEffect, useState } from "react";
import MainMenu from "../components/MainMenu";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function NewTransaction(props) {
	const [transactions, setTransactions] = useState([]);
	const [allSenders, setAllSenders] = useState([]);
	const [senderId, setSenderId] = useState("");
	const [senderType, setSenderType] = useState("");
	const [accBal, setAccBal] = useState(0);
	const [recipient, setRecipient] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [comment, setComment] = useState("");
	const userID = 1;

	const submitTransaction = () => {
		return;
	};

	const getSenderAccounts = () => {
		// fetch
		fetch("http://localhost:5000/getaccounts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userID: userID,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setAllSenders(data);
			});
	};

	const clickedSender = (sender) => {
		setSenderId(sender.AccountID);
		setSenderType(sender.AccountType);
		setAccBal(sender.AccountBalance);

		console.log(senderId);
		console.log(senderType);
		console.log(accBal);
	};

	useEffect(() => {
		getSenderAccounts();
	}, []);

	return (
		<div class="p-5">
			<h1>New Transaction</h1>
			<Form>
				<Form.Group className="mb-3">
					<Form.Label>Sender</Form.Label>
					<Dropdown>
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							Dropdown Button
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{allSenders.map((send) => {
								return (
									<Dropdown.Item onClick={(e) => clickedSender(send)}>
										{send.AccountID} ({send.AccountType})
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
					{senderId != "" ? (
						<Form.Text className="text-muted">
							{senderId} ({senderType}) selected
						</Form.Text>
					) : null}
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Recipient</Form.Label>
					<Form.Control type="text" placeholder="Enter recipient account ID" onClick={(e) => setRecipient(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Amount</Form.Label>
					<Form.Control type="number" placeholder="Enter amount to be sent" onClick={(e) => setAmount(e.target.value)} />
					{amount > accBal ? (
						<Form.Text className="text-muted">The amount is larger than your balance. This transaction will be rejected at the scheduled date unless the balance is increased.</Form.Text>
					) : null}
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Date</Form.Label>
					<Form.Control type="text" placeholder="YYYY-MM-DD" onClick={(e) => setDate(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Time</Form.Label>
					<Form.Control type="text" placeholder="HH:MM (24h format)" onClick={(e) => setTime(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Comment</Form.Label>
					<Form.Control as="textarea" rows={3} onChange={(e) => setComment(e.target.value)} />
				</Form.Group>

				<Button variant="primary" type="submit">
					Cancel
				</Button>

				<Button variant="primary" type="submit" onClick={() => submitTransaction}>
					Submit
				</Button>
			</Form>
		</div>
	);
}
