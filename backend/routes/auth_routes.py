from flask import Blueprint
from flask import request
from flask import jsonify

from models.admin_model import Admin

from flask_jwt_extended import (
    create_access_token
)

from utils.password_helper import (
    verify_password
)

auth_bp = Blueprint(
    "auth_bp",
    __name__
)

@auth_bp.route(
    "/login",
    methods=["POST"]
)
def login():
    return {"message": "login route working"}
    data = request.get_json()

    username = data.get(
        "username"
    )

    password = data.get(
        "password"
    )

    admin = Admin.query.filter_by(
        username=username
    ).first()

    if not admin:

        return jsonify({
            "message":
            "Invalid Username"
        }), 401

    if not verify_password(
        password,
        admin.password
    ):

        return jsonify({
            "message":
            "Invalid Password"
        }), 401

    token = create_access_token(
        identity=username
    )

    return jsonify({
        "message":
        "Login Success",
        "token": token
    })