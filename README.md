# CA Portfolio

The project contains a React/Vite website and a Flask API. Contact inquiries and
appointment requests are stored in a SQLite database and can be reviewed from
the password-protected admin dashboard.

## Run locally

1. Set up the Flask API:

   ```powershell
   cd backend
   py -m venv .venv
   .\.venv\Scripts\Activate.ps1
   pip install -r requirements.txt
   Copy-Item .env.example .env
   ```

   Replace `JWT_SECRET_KEY` in `backend/.env` with a unique random value. For
   example, generate one with `py -c "import secrets; print(secrets.token_hex(32))"`.
   Start the API with `py app.py`. The SQLite database is created at
   `backend/instance/portfolio.db` on first startup. Set `DATABASE_URL` in
   `backend/.env` to use a different database URL.

2. In a second terminal, create an admin account:

   ```powershell
   cd backend
   .\.venv\Scripts\Activate.ps1
   py create_admin.py
   ```

   Enter a username and a password with at least 12 characters when prompted.
   Passwords are stored as hashes; the script will not replace an existing
   account.

3. Start the React website:

   ```powershell
   cd frontend
   Copy-Item .env.example .env
   npm install
   npm run dev
   ```

   Open `/login` on the Vite development server and sign in with the admin
   account. The dashboard and inquiry/appointment pages are available under
   `/admin`.

For deployment, configure `JWT_SECRET_KEY` as a private environment variable
and provide persistent storage for `DATABASE_URL` (or a managed database).
Never use the example secret in a deployed environment.
