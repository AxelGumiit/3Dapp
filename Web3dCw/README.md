# 🚗 Car Showroom Web Application

An interactive car showroom web application built with a **React** frontend and **Django** (with Django REST Framework) backend. Users can browse cars, view detailed information, and test-drive vehicles in a 3D scene.

---

## 🛠️ Tech Stack

### Frontend
- **React** – Component-based UI library for building the user interface.
- **React Router** – Handles client-side routing.
- **React Three Fiber** – Used for rendering interactive 3D scenes (car test drives, showroom environments).
- **Tailwind CSS** – Utility-first CSS framework for fast styling.

### Backend
- **Django** – Python-based web framework used to handle authentication, admin, and API logic.
- **Django REST Framework** – Provides RESTful APIs to serve car data to the frontend.
- **django-cors-headers** – Handles Cross-Origin Resource Sharing (CORS) for frontend-backend communication.

### Database
- **SQLite** (for development) – Lightweight database used during local development.
- Can be swapped with **PostgreSQL** for production.

---

## 📁 Project Structure
├── backend/ # Django project
│ ├── carinfo/ # App with models, views, serializers
│ ├── manage.py
│ └── ...
├── public/  #React app
├── src/
└── ...

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/AxelGumiit/3Dapp.git
cd car-showroom

```

### 2. To start the backend


```bash
cd Web3dCw
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

```

### 3. TO start the React app

```bash
cd Web3dCw
npm install
npm run dev
```





