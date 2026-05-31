from models.contact_model import Contact
from config import db

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

    return {"message": "Contact saved successfully"}