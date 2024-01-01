# ML SaaS Portfolio

This repository contains 4 end-to-end production-level Machine Learning SaaS applications developed as a portfolio showcase. Each project is fully self-contained with a FastAPI backend, React frontend, and Docker deployment configuration.

## Projects

### 1. Enterprise Knowledge Assistant (RAG SaaS)
- **Directory**: `rag-assistant/`
- **Description**: A Retrieval-Augmented Generation (RAG) system using LangChain, FAISS, and HuggingFace embeddings. Upload documents and chat with your data.

### 2. Customer Sentiment Analysis API
- **Directory**: `sentiment-analysis/`
- **Description**: An NLP pipeline utilizing HuggingFace transformers for real-time sentiment analysis, complete with a React dashboard.

### 3. Fraud Detection Engine
- **Directory**: `fraud-detection/`
- **Description**: A real-time anomaly detection API using Scikit-learn's Isolation Forest, bundled with an interactive API developer portal.

### 4. Real-Time Recommendation API
- **Directory**: `recommendation-engine/`
- **Description**: A collaborative filtering recommender system driving a mock e-commerce storefront with dynamic, real-time product suggestions.

## Running Locally

Each project is containerized using Docker Compose. To run any of the projects, navigate to its directory and run:

```bash
docker-compose up --build
```
