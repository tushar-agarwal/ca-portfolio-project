from flask import Blueprint, request, jsonify
from controllers.appointment_controller import create_appointment

appointment_bp = Blueprint(
    "appointment_bp",
    __name__
)

@appointment_bp.route(
    "/appointment",
    methods=["POST"]
)
def save_appointment():

    data = request.get_json()

    result = create_appointment(data)

    return jsonify(result)