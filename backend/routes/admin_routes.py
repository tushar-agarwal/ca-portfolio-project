from flask import Blueprint, jsonify
from controllers.admin_controller import (
    get_all_contacts,
    get_all_appointments
)

from models.contact_model import Contact
from models.appointment_model import Appointment

admin_bp = Blueprint("admin_bp", __name__)

@admin_bp.route("/contacts")
def contacts():
    return jsonify(get_all_contacts())


@admin_bp.route("/appointments")
def appointments():
    return jsonify(get_all_appointments())

@admin_bp.route("/stats")
def stats():
    return jsonify({
        "totalContacts": Contact.query.count(),
        "totalAppointments": Appointment.query.count()
    })