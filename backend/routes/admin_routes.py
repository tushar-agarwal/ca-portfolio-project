from flask import Blueprint, jsonify

from controllers.admin_controller import (
    get_dashboard_data
)

admin_bp = Blueprint(
    "admin_bp",
    __name__
)

@admin_bp.route("/dashboard")
def dashboard():

    data = get_dashboard_data()

    return jsonify(data)