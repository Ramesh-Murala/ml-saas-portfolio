# Recommendation UI Prototype

Filters already-seen items and applies a stable seeded shuffle. This is mocked ranking, not collaborative filtering or a learned recommendation model.

FastAPI backend and React frontend, intended for local demonstrations.

```bash
docker compose up --build
```

Frontend: `http://localhost:5173`. Backend documentation: `http://localhost:8000/docs`.

See the [repository overview](../README.md) for implementation boundaries and tests. This prototype has not been validated for production deployment.
