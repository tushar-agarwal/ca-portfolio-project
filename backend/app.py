import os

from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS

from config import db

from routes.contact_routes import contact_bp
from routes.appointment_routes import appointment_bp

from routes.admin_routes import admin_bp

from models.contact_model import Contact

from flask_jwt_extended import JWTManager
from routes.auth_routes import auth_bp

load_dotenv()

app = Flask(__name__)

secret_key = os.environ.get("JWT_SECRET_KEY")
if not secret_key:
    raise RuntimeError(
        "JWT_SECRET_KEY must be set before starting the backend."
    )

database_url = os.environ.get("DATABASE_URL", "sqlite:///portfolio.db")

@app.route("/")
def home():
    return {
        "message": "CA Portfolio Backend Running Successfully"
    }

CORS(app)

app.config[
    "SQLALCHEMY_DATABASE_URI"
] = database_url

app.config[
    "SQLALCHEMY_TRACK_MODIFICATIONS"
] = False

app.config[
    "JWT_SECRET_KEY"
] = secret_key

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