from flask import Blueprint, jsonify
from controllers.admin_controller import (
    get_all_contacts,
    get_all_appointments
)

admin_bp = Blueprint("admin_bp", __name__)

@admin_bp.route("/contacts")
def contacts():
    return jsonify(get_all_contacts())


@admin_bp.route("/appointments")
def appointments():
    return jsonify(get_all_appointments())