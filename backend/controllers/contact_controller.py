from flask import current_app

from models.contact_model import Contact
from config import db
from services.email_service import EmailNotificationError, send_email

def create_contact(data):

    contact = Contact(
        name=data["name"],
        email=data["email"],
        phone=data["phone"],
        subject=data["subject"],
        message=data["message"]
    )

    db.session.add(contact)
    db.session.commit()

    try:
        send_email(
            f"New inquiry: {contact.subject or contact.name}",
            "A new inquiry was submitted. The attached workbook contains all "
            "current inquiries and appointments.",
        )
    except EmailNotificationError:
        current_app.logger.exception(
            "Inquiry %s was saved, but its email notification failed.",
            contact.id,
        )
        return {
            "message": (
                "Inquiry saved, but its email notification could not be sent. "
                "Please check the server email settings."
            ),
            "recordSaved": True,
            "notificationSent": False,
        }

    return {
        "message": "Inquiry saved and email notification sent.",
        "recordSaved": True,
        "notificationSent": True,
    }