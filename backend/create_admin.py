from app import app
from config import db
from models.admin_model import Admin

with app.app_context():

    admin = Admin(
        username="payal",
        password="Payal@123"
    )

    db.session.add(admin)
    db.session.commit()

    print("Admin Created")