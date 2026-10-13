from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required
from controllers.admin_controller import (
    get_all_contacts,
    get_all_appointments
)

from models.contact_model import Contact
from models.appointment_model import Appointment

admin_bp = Blueprint("admin_bp", __name__)

@admin_bp.route("/contacts")
@jwt_required()
def contacts():
    return jsonify(get_all_contacts())


@admin_bp.route("/appointments")
@jwt_required()
def appointments():
    return jsonify(get_all_appointments())

@admin_bp.route("/stats")
@jwt_required()
def stats():
    return jsonify({
        "totalContacts": Contact.query.count(),
        "totalAppointments": Appointment.query.count()
    })