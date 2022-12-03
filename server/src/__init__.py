from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
from src.authentication import authentication, bcrypt
from src.user import user
from src.transactions import transactions
from src.models import User, db
from flask_migrate import Migrate
from flask_session import Session
from dotenv import load_dotenv
import os, redis
load_dotenv("../")

app = Flask(__name__, instance_relative_config=True)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


app.config.from_mapping(
    SECRET_KEY=os.getenv("SECRET_KEY"),
    SQLALCHEMY_DATABASE_URI=os.environ.get("SQLALCHEMY_DB_URI"),
    SQLALCHEMY_TRACK_MODIFICATIONS = False,
    SQLALCHEMY_ECHO = True,
)


db.init_app(app)

bcrypt.init_app(app)

# use blueprints to group related functionalities together
app.register_blueprint(authentication)
app.register_blueprint(user)
app.register_blueprint(transactions)


