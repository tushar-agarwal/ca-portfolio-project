from models.contact_model import Contact
from models.appointment_model import Appointment

def get_all_contacts():
    contacts = Contact.query.all()

    return [
        {
            "id": c.id,
            "name": c.name,
            "email": c.email,
            "phone": c.phone,
            "subject": c.subject,
            "message": c.message
        }
        for c in contacts
    ]


def get_all_appointments():
    appointments = Appointment.query.all()

    return [
        {
            "id": a.id,
            "name": a.name,
            "email": a.email,
            "phone": a.phone,
            "service": a.service,
            "date": a.date,
            "message": a.message
        }
        for a in appointments
    ]