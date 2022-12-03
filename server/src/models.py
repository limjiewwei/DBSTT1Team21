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
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(32), unique=True, default=get_uuid, nullable=False)
    # we dont provide user with an id, default value will be get_uuid, which will return a new unique id
    email = db.Column(db.String(345), unique=True)
    password = db.Column(db.Text, nullable=False)


