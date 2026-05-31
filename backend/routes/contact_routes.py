from flask import Blueprint, request, jsonify
from controllers.contact_controller import create_contact

contact_bp = Blueprint(
    "contact_bp",
    __name__
)

@contact_bp.route("/contact", methods=["POST"])
def save_contact():

    data = request.get_json()

    result = create_contact(data)

    return jsonify(result)