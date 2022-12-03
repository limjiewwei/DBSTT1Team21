const express = require('express');
const app = express();
const cors = require('cors');



app.use(express.json());
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type",],
    })
)

let bankAccounts = require('C:/DBSTT1Team21/Main Challenge Data/BankAccount.json')

app.post('/getaccounts', (req, res) => {
    const userID = req.body.userID;
    console.log(bankAccounts)
    const foundAccounts = []
    for (let i = 0; i < bankAccounts.length; i++) {
        if (bankAccounts[i].UserID == userID) {
            foundAccounts.push(bankAccounts[i])
        }
    }
    // const foundAccounts = bankAccounts.users.find((accounts) => accounts.UserID === userID);
    console.log(foundAccounts)
    res.status(200).send(foundAccounts);
})

app.listen(5000, () => console.log('Server Running on Port: http://localhost:5000'));