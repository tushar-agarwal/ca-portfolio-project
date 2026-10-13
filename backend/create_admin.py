from getpass import getpass

from app import app
from config import db
from models.admin_model import Admin
from utils.password_helper import hash_password


def main():
    username = input("Admin username: ").strip()
    if not username:
        raise ValueError("Admin username cannot be empty.")

    password = getpass("Admin password: ")
    if len(password) < 12:
        raise ValueError("Choose a password with at least 12 characters.")

    with app.app_context():
        if Admin.query.filter_by(username=username).first():
            raise ValueError(
                f"Admin '{username}' already exists; choose another username."
            )

        admin = Admin(username=username, password=hash_password(password))
        db.session.add(admin)
        db.session.commit()

    print(f"Admin account '{username}' created.")


if __name__ == "__main__":
    main()
