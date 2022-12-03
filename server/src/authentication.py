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

@authentication.route("/register", methods=['POST'])
def register_user():

    username = request.json["username"]
    password = request.json["password"]

    user_exists = User.query.filter_by(username=username).first() is not None

    if not username:
        return jsonify({
            "errors": "Please enter email address"
            }), HTTP_409_CONFLICT
    elif not password:
        return jsonify({
            "errors": "Please enter password"
        }), HTTP_409_CONFLICTs

    if user_exists:
        return jsonify({"conflict": "This account already exists"}), HTTP_409_CONFLICT
    
    hashed_password = bcrypt.generate_password_hash(password)

    new_user = User(username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "user": new_user.id,
        "user id": new_user.user_id,
        "email": new_user.email
    }), HTTP_201_CREATED


@authentication.route("/login", methods=["POST"])
def login_user():
    
    username = request.json["username"]
    password = request.json["password"]

    if not username:
        return jsonify({
            "errors": "that email is not registered"
            }), HTTP_401_UNAUTHORIZED
    elif not password:
        return jsonify({
            "errors": "that password is incorrect"
        }), HTTP_401_UNAUTHORIZED


    user = User.query.filter_by(username=username).first()

    if user is None:
        return jsonify({
            "errors": "that email or password is incorrect"
        }), HTTP_401_UNAUTHORIZED

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({
            "errors": "that email or password is incorrect"
        }), HTTP_401_UNAUTHORIZED

    token = jwt.encode({
        'public_id': user.user_id,
        'exp' : datetime.utcnow() + timedelta(minutes = 30)
    }, os.getenv("SECRET_KEY"))

    return jsonify({
        "user": user.id,
        "user id": user.user_id,
        "usesrname": user.username,
        "token": token.decode('UTF-8')
    }), HTTP_200_OK
