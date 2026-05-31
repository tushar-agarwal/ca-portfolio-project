from models.appointment_model import Appointment
from config import db

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

    return {"message": "Appointment Saved"}