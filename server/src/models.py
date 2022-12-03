from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
import datetime, string, random
from flask import jsonify
from uuid import uuid4

db = SQLAlchemy()


def get_uuid():
    return uuid4().hex


# database schema models


class User(db.Model):
    __tablename__ = "User"
    UserID = db.Column(db.Integer, primary_key=True)
    # userID generated with UUID
    UserName = db.Column(db.String(20), unique=True, nullable=False)
    Password = db.Column(db.String(20), unique=False, nullable=False)
    FirstName = db.Column(db.String(255), unique=False, nullable=False)
    LastName = db.Column(db.String(255), unique=False, nullable=False)
    Email = db.Column(db.String(255), unique=False)
    Address = db.Column(db.String(255), unique=False)
    OptIntoPhyStatements = db.Column(db.Integer(1), unique=False)


class Bank_Account(db.Model):
    __tablename__ = "Bank_Account"
    AccountID = db.Column(db.Integer, primary_key=True)
    UserID = db.Column(db.Integer, db.ForeignKey("User.UserID"), nullable=False)
    AccountType = db.Column(db.String(255), unique=False, nullable=False)
    AccountBalance = db.Column(db.Numeric(precision=10, scale=2), nullable=False)


class Scheduled_Transaction(db.Model):
    __tablename__ = "Scheduled_Transaction"
    TransactionID = db.Column(db.Integeer, primary_key=True)
    AccountID = db.Column(
        db.Integer, db.ForeignKey("Bank_Account.AccountID"), nullable=False
    )
    ReceivingAccountID = db.Column(db.Integer(255), unique=False, nullable=False)
    Date = db.Column(db.String(255), nullable=False)
    TransactionAmount = db.Column(db.Numeric(precision=10, scale=2), nullable=False)
    Comment = db.Column(db.String(255), nullable=False)
