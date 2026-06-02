from flask import Blueprint
from flask import request
from flask import jsonify

from models.admin_model import Admin

from flask_jwt_extended import (
    create_access_token
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
            "Invalid Credentials"
        }), 401

    if not verify_password(
        password,
        admin.password
    ):
        return jsonify({
            "message":
            "Invalid Credentials"
        }), 401

    token = create_access_token(
        identity=username
    )

    return jsonify({
        "token": token
    })