# Enterprise Fraud Detection SaaS MVP

This is an end-to-end full-stack machine learning application for fraud detection.

## Architecture

- **Backend**: FastAPI with Python. Incorporates mock ML inference logic mimicking an ensemble model checking transaction features.
- **Frontend**: React (Vite). Displays real-time transaction simulation, metrics, and risk assessment via a sleek UI.

## How to Run

Use Docker Compose to spin up both the backend and frontend simultaneously:

```bash
docker-compose up --build
```

- Frontend UI: http://localhost:3000
- Backend API Docs: http://localhost:8000/api/v1/openapi.json

## Components
The project architecture strictly follows enterprise standards, decoupled into modular routers, schemas, services, and core configuration elements.
