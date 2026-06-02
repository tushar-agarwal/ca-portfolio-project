import os

from flask import Flask
from flask_cors import CORS

from config import db

from routes.contact_routes import contact_bp
from routes.appointment_routes import appointment_bp

from routes.admin_routes import admin_bp

from models.contact_model import Contact

from flask_jwt_extended import JWTManager
from routes.auth_routes import auth_bp

app = Flask(__name__)

@app.route("/")
def home():
    return {
        "message": "CA Portfolio Backend Running Successfully"
    }

CORS(app)

app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "sqlite:///portfolio.db"

app.config[
    "SQLALCHEMY_TRACK_MODIFICATIONS"
] = False

app.config[
    "JWT_SECRET_KEY"
] = "payal-secret-key"

jwt = JWTManager(app)

db.init_app(app)

with app.app_context():
    db.create_all()

app.register_blueprint(
    contact_bp,
    url_prefix="/api"
)

app.register_blueprint(
    appointment_bp,
    url_prefix="/api"
)

app.register_blueprint(
    admin_bp,
    url_prefix="/api/admin"
)

app.register_blueprint(
    auth_bp,
    url_prefix="/api/auth"
)

if __name__ == "__main__":
    app.run(debug=True)