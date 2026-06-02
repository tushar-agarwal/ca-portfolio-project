from app import app
from config import db

from models.admin_model import Admin

from utils.password_helper import (
    hash_password
)

with app.app_context():

    existing = Admin.query.filter_by(
        username="payal"
    ).first()

    if existing:
        db.session.delete(existing)
        db.session.commit()

    admin = Admin(
        username="payal",
        password=hash_password(
            "Payal@123"
        )
    )

    db.session.add(admin)
    db.session.commit()

    print(
        "Admin Created Successfully"
    )

    print(
        "Username : payal"
    )

    print(
        "Password : Payal@123"
    )