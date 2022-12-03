from sqlalchemy import desc, func
from flask import Blueprint, request, jsonify, abort, session, make_response
import json, datetime
from src.constants.http_status_codes import HTTP_401_UNAUTHORIZED, HTTP_409_CONFLICT, HTTP_201_CREATED, HTTP_200_OK
from src.models import db, User, Scheduled_Transaction, Bank_Account
from datetime import datetime, timedelta
from functools import wraps
import src.constants.http_status_codes
from flask import jsonify
import uuid

transactions = Blueprint("transactions", __name__, url_prefix="/api2/transac")

def generate_uuid():
    return uuid.uuid4()

@transactions.route("/oldTransactions", methods=['POST'])
def old_transactions():

    accountID = request.json["AccountID"]


    transactions_exists = Scheduled_Transaction.query.filter_by(accountID=accountID).first()
    if not transactions_exists:
        return jsonify({
            "error": "An issue has occurred while retrieving transactions"
        })

    return jsonify({
            "accountID": transactions_exists.AccountID,
            "date": transactions_exists.Date,
            "receivingAccID": transactions_exists.TransactionAmount,
            "comment": transactions_exists.Comment
            }), HTTP_201_CREATED


@transactions.route("/addTransactions", methods=['POST'])
def add_transactions():

    userID = request.json["userID"]
    receivingAccountID = request.json["receivingAccountID"]
    date = request.json["date"]
    transactionAmount = request.json["transactionAmount"]
    comment = request.json['comment']

    bank_account = Bank_Account.query.filter_by(UserID=userID).first()
    if bank_account is None:
        print("ERROR")
    else:
        print(bank_account)
        print(bank_account.AccountID)

    new_transaction = Scheduled_Transaction(TransactionID=generate_uuid(), AccountID=bank_account.AccountID,ReceivingAccountID=receivingAccountID, Date=date,TransactionAmount=transactionAmount,Comment=comment)
    db.session.add(new_transaction)
    db.session.commit()

    return jsonify({
            "success": 200,
            "transaction_id": new_transaction.TransactionID,
            "sending from account_id": new_transaction.AccountID,
            "sending to account_id":new_transaction.ReceivingAccountID,
            "amount": new_transaction.TransactionAmount,
            "date": new_transaction.Date,
            "comment": new_transaction.Comment
        }), HTTP_200_OK



