from sqlalchemy import desc, func
from flask import Blueprint, request, jsonify, abort, session, make_response
import json, datetime
from src.constants.http_status_codes import HTTP_401_UNAUTHORIZED, HTTP_409_CONFLICT, HTTP_201_CREATED, HTTP_200_OK, HTTP_404_NOT_FOUND, HTTP_202_ACCEPTED
from src.models import db, User
from flask_bcrypt import Bcrypt
# imports for jwt authentication
import jwt, os
from datetime import datetime, timedelta
from functools import wraps
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

user = Blueprint("user", __name__, url_prefix="/api1/user")
# bcrypt = Bcrypt()

@user.route("/", methods=['GET'])
def test():
    return jsonify({"return": "OK"}), HTTP_200_OK

@user.route("/list", methods=['GET'])
def return_user_list():

    user_list = User.query.all()
    if not user_list:
        return jsonify({
            "errors": "No list of users found"
            }), HTTP_404_CONFLICT

    return jsonify({
        "users list": [user.UserID for user in user_list]
    }), HTTP_200_OK

@user.route("/list_details/<int:user_id>", methods=['GET'])
def return_user_details(user_id):

    user_exists = User.query.filter_by(UserID=user_id).first() is not None
    if not user_exists:
        return jsonify({
            "errors": "No user found"
            }), HTTP_404_NOT_FOUND

    user = User.query.filter_by(UserID=user_id).first()

    return jsonify({
        "user id": user.UserID,
        "user address": user.Address,
        "username": user.Username,
        "first name": user.Firstname,
        "last name": user.Lastname,
        "email": user.Email
    }), HTTP_200_OK

@user.route("/edit/<int:user_id>", methods=['PUT'])
def update_address_email(user_id):

    email = request.json["email"]
    address = request.json["address"]

    user_exists = User.query.filter_by(UserID=user_id).first() is not None
    if not user_exists: 
        return jsonify({
            "errors": "No user found"
            }), HTTP_404_NOT_FOUND

    user = User.query.filter_by(UserID=user_id).first()
    user.Email = email
    user.Address = address
    # db.session.merge(user)
    db.session.commit()

    return jsonify({
        "user email": user.Email,
        "user address": user.Address
    }), HTTP_202_ACCEPTED