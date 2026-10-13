from flask import current_app

from models.appointment_model import Appointment
from config import db
from services.email_service import EmailNotificationError, send_email

def create_appointment(data):

    appointment = Appointment(
        name=data["name"],
        email=data["email"],
        phone=data["phone"],
        service=data["service"],
        date=data["date"],
        message=data["message"]
    )

    db.session.add(appointment)
    db.session.commit()

    try:
        send_email(
            f"New appointment: {appointment.name}",
            "A new appointment was booked. The attached workbook contains all "
            "current inquiries and appointments.",
        )
    except EmailNotificationError:
        current_app.logger.exception(
            "Appointment %s was saved, but its email notification failed.",
            appointment.id,
        )
        return {
            "message": (
                "Appointment saved, but its email notification could not be sent. "
                "Please check the server email settings."
            ),
            "recordSaved": True,
            "notificationSent": False,
        }

    return {
        "message": "Appointment saved and email notification sent.",
        "recordSaved": True,
        "notificationSent": True,
    }