from sqlalchemy import desc, func
from flask import Blueprint, request, jsonify, abort, session, make_response
import json, datetime
from src.constants.http_status_codes import HTTP_401_UNAUTHORIZED, HTTP_409_CONFLICT, HTTP_201_CREATED, HTTP_200_OK
from src.models import db, User, Scheduled_Transaction
from datetime import datetime, timedelta
from functools import wraps
import src.constants.http_status_codes
import jsonify


transactions = Blueprint("transactions", __name__, url_prefix="/api1/transactions")
@transactions.route("/", methods=['GET'])
def hello():
    return jsonify({"status": "ok"})

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


@transactions.route("/newTransactions", methods=['PUT'])
def new_transactions():

    accountID = request.json["AccountID"]


    transactions_exists = Scheduled_Transaction.query.filter_by(accountID=accountID).first()
    if not transactions_exists:

        return jsonify({
                "success": 200
                }), HTTP_201_CREATED



