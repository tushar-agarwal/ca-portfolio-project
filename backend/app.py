from flask import Flask
from flask_cors import CORS

from config import db

from routes.contact_routes import contact_bp
from routes.appointment_routes import appointment_bp

from routes.admin_routes import admin_bp

from models.contact_model import Contact

app = Flask(__name__)

@app.route("/")
def home():
    return {
        "message": "CA Portfolio Backend Running Successfully"
    }

CORS(app)

app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "sqlite:///database.db"

app.config[
    "SQLALCHEMY_TRACK_MODIFICATIONS"
] = False

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

if __name__ == "__main__":
    app.run(debug=True)