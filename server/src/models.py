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
    UserID = db.Column(db.String(32), primary_key=True, unique=True, nullable=False)
    # we dont provide user with an id, default value will be get_uuid, which will return a new unique id
    Username = db.Column(db.String(20), nullable=False)
    Password = db.Column(db.String(20), nullable=False)
    Firstname = db.Column(db.String(255), nullable=False)
    Lastname = db.Column(db.String(255), nullable=False)
    Email = db.Column(db.String(255), nullable=False)
    Address = db.Column(db.String(255), nullable=False)
    OptIntoPhyStatements = db.Column(db.Integer, nullable=False)