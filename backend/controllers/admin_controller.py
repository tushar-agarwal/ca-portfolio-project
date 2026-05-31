from models.contact_model import Contact
from models.appointment_model import Appointment

def get_dashboard_data():

    contacts = Contact.query.all()
    appointments = Appointment.query.all()

    return {
        "totalContacts": len(contacts),
        "totalAppointments": len(appointments)
    }