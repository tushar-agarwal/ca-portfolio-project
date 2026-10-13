from flask import Blueprint, jsonify, request

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
    data = request.get_json()

    if not isinstance(data, dict):
        return jsonify({"message": "Username and password are required"}), 400

    username = data.get("username")
    password = data.get("password")
    if not isinstance(username, str) or not isinstance(password, str):
        return jsonify({"message": "Username and password are required"}), 400

    admin = Admin.query.filter_by(
        username=username
    ).first()

    if not admin or not verify_password(password, admin.password):
        return jsonify({"message": "Invalid username or password"}), 401

    token = create_access_token(
        identity=username
    )

    return jsonify({
        "message":
        "Login Success",
        "token": token
    })