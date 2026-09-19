# Document Search Prototype

Uses scikit-learn TF-IDF and cosine similarity over in-memory documents. The answer is a retrieved snippet; there is no LLM generation, FAISS index, or dense embedding model.

FastAPI backend and React frontend, intended for local demonstrations.

```bash
docker compose up --build
```

Frontend: `http://localhost:3000`. Backend documentation: `http://localhost:8000/docs`.

See the [repository overview](../README.md) for implementation boundaries and tests. This prototype has not been validated for production deployment.
