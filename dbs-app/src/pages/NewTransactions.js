import React, { useEffect, useState } from "react";
import MainMenu from "../components/MainMenu";
import Dropdown from "react-bootstrap/Dropdown";

export default function NewTransaction(props) {
  const [transactions, setTransactions] = useState([]);
  const [sender, setSender] = useState([]);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");

  const submitTransaction = () => {
    return;
  };

  const getSenderAccounts = () => {
    // fetch
    // setSender
    return;
  };

  return (
    <div class="p-5">
      <h1>New Transaction</h1>
      <form>
        <div class="form-group">
          {/* sender */}
          <label for="sender">From</label>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* recipient */}
        <div class="form-group">
          <label for="recipient">To</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Account ID of recipient"
            onChange={() => setRecipient}
          />
        </div>
        {/* amount */}
        <div class="form-group">
          <label for="amount">Amount</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Amount to send"
            onChange={() => setAmount}
          />
        </div>
        {/* date */}
        <div class="form-group">
          <label for="recipient">Date</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="YYYY-MM-DD"
          />
        </div>
        {/* time */}
        <div class="form-group">
          <label for="Time">Time</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="HH:MM (24h format)"
          />
        </div>
        {/* comments */}
        <div class="form-group">
          <label for="comments">Comments</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => submitTransaction}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
