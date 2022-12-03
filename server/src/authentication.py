from sqlalchemy import desc, func
from flask import Blueprint, request, jsonify, abort, session, make_response
import json, datetime
from src.constants.http_status_codes import HTTP_401_UNAUTHORIZED, HTTP_409_CONFLICT, HTTP_201_CREATED, HTTP_200_OK
from src.models import db, User
from flask_bcrypt import Bcrypt
# imports for jwt authentication
import jwt, os
from datetime import datetime, timedelta
from functools import wraps
from flask_cors import CORS, cross_origin


authentication = Blueprint("authentication", __name__, url_prefix="/api1/auth")
bcrypt = Bcrypt()

@authentication.route("/", methods=['GET'])
def test():
    print("in")
    return jsonify({"return": "OK"}), HTTP_200_OK

@authentication.route("/register", methods=['POST'])
def register_user():

    email = request.json["email"]
    password = request.json["password"]
    user_id = request.json["UserID"]
    username = request.json["Username"]
    first_name = request.json["Firstname"]
    last_name = request.json["Lastname"]
    address = request.json["Address"]
    opt = request.json["OptIntoPhyStatements"]

    user_exists = User.query.filter_by(Username=username).first() is not None

    if not email:
        return jsonify({
            "errors": "Please enter email address"
            }), HTTP_409_CONFLICT
    elif not password:
        return jsonify({
            "errors": "Please enter password"
        }), HTTP_409_CONFLICT

    if user_exists:
        return jsonify({"conflict": "This account already exists"}), HTTP_409_CONFLICT
    
    # hashed_password = bcrypt.generate_password_hash(password)

    new_user = User(Email=email, Password=password, UserID=user_id, Username=username, Firstname=first_name, Lastname=last_name, Address=address, OptIntoPhyStatements=opt)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "message": "creation success",
        "user id": new_user.UserID,
        "email": new_user.Email
    }), HTTP_201_CREATED


@authentication.route("/login", methods=["POST"])
def login_user():
    
    username = request.json["username"]
    password = request.json["password"]

    if not username:
        return jsonify({
            "errors": "no username provided"
            }), HTTP_401_UNAUTHORIZED
    elif not password:
        return jsonify({
            "errors": "no password provided"
        }), HTTP_401_UNAUTHORIZED


    user = User.query.filter_by(Username=username).first()

    if user is None:
        return jsonify({
            "errors": "that email or password is incorrect"
        }), HTTP_401_UNAUTHORIZED

    # if not bcrypt.check_password_hash(user.Password, password):
    #     return jsonify({
    #         "errors": "that email or password is incorrect"
    #     }), HTTP_401_UNAUTHORIZED

    token = jwt.encode({
        'public_id': user.UserID,
        'exp' : datetime.utcnow() + timedelta(minutes = 30)
    }, os.getenv("SECRET_KEY"))

    return jsonify({
        "user id": user.UserID,
        "user Name": user.Username,
        "first name":user.Firstname,
        "last name": user.Lastname,
        "token": token.decode('UTF-8')
    }), HTTP_200_OK
