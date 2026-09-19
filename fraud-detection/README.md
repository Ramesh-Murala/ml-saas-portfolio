# Fraud API/UI Prototype

Uses `DummyFraudModel`: transaction-amount thresholds return fixed demonstration scores. No model is trained and the scores are not calibrated fraud probabilities.

FastAPI backend and React frontend, intended for local demonstrations.

```bash
docker compose up --build
```

Frontend: `http://localhost:3000`. Backend documentation: `http://localhost:8000/docs`.

See the [repository overview](../README.md) for implementation boundaries and tests. This prototype has not been validated for production deployment.
