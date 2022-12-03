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
    UserID = db.Column(db.Integer, default=get_uuid, primary_key=True)
    # userID generated with UUID
    UserName = db.Column(db.String(20), unique=True, nullable=False)
    Password = db.Column(db.String(20), unique=False, nullable=False)
    FirstName = db.Column(db.String(255), unique=False, nullable=False)
    LastName = db.Column(db.String(255), unique=False, nullable=False)
    Email = db.Column(db.String(255), unique=False)
    Address = db.Column(db.String(255), unique=False)
    OptIntoPhyStatements =db.Column(db.Integer(1), unique=False), nullable=False)
   


