# ML Application Prototypes

Four FastAPI/React demonstrations exploring API contracts and user interfaces for ML applications. This repository includes simplified and mocked behavior, documented below. It is not a collection of production ML systems.

For my focused AI engineering work, see [Structured Output Agent](https://github.com/Ramesh-Murala/Structured-Output-Agent) and [RAG Agent with Citation Validation](https://github.com/Ramesh-Murala/RAG-Agent-with-Citation).

## Implementation status

| Prototype | Actual backend behavior | What is not implemented |
|---|---|---|
| `rag-assistant/` | In-memory TF-IDF search; returns the best matching document snippet | LLM generation, FAISS, dense embeddings, persistence |
| `sentiment-analysis/` | HuggingFace sentiment pipeline; returns 503 if the model cannot load | Fine-tuning, domain evaluation, calibrated probabilities |
| `fraud-detection/` | Explicit dummy model using amount thresholds | Trained fraud detector, Isolation Forest, calibrated risk |
| `recommendation-engine/` | Stable seeded shuffle of unseen items | Collaborative filtering, learned ranking, relevance evaluation |

The fraud scores are fixed demonstration values. Recommendation ordering demonstrates the UI/API flow and is not personalized from learned preferences. Sentiment model failures never substitute made-up predictions.

## Run a prototype

Each directory has a Docker Compose configuration:

```bash
cd rag-assistant  # or another prototype
docker compose up --build
```

Run one prototype at a time because they share backend port 8000. The recommendation frontend uses port 5173; the other frontends use port 3000. Sentiment inference needs network access to download its HuggingFace model and enough memory to load it.

## Failure-path tests

```bash
pip install 'fastapi>=0.116,<1' 'httpx>=0.28,<1' 'pytest>=8,<9'
python -m pytest -q tests
```

These tests verify sentiment success/failure behavior with injected model loaders. They do not download a model or validate all four interfaces end to end.

## Why keep these examples?

They show modular routers, schemas, services, frontend state, and container wiring. Their value is application scaffolding. Before treating any as an ML product, replace mocks with evaluated models, add representative datasets and baselines, and implement authentication, monitoring, persistence, and deployment checks.
