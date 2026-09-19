# Sentiment Analysis Prototype

Uses a pretrained HuggingFace sentiment pipeline. If loading fails, the API returns 503; it never silently replaces the model with keyword rules. Recover model availability and restart the service to reload. Scores are model outputs, not calibrated guarantees.

FastAPI backend and React frontend, intended for local demonstrations.

```bash
docker compose up --build
```

Frontend: `http://localhost:3000`. Backend documentation: `http://localhost:8000/docs`.

See the [repository overview](../README.md) for implementation boundaries and tests. This prototype has not been validated for production deployment.
