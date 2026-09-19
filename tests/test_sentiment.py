import sys
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

sys.path.insert(0, str(Path(__file__).parents[1] / "sentiment-analysis" / "backend"))
from services.nlp_service import NLPService
from api.dependencies import get_nlp_service
from main import app


def unavailable(*args, **kwargs):
    raise OSError("model files missing")


def test_missing_model_never_returns_fabricated_prediction():
    service = NLPService(loader=unavailable)
    with pytest.raises(RuntimeError, match="unavailable"):
        service.analyze("great service")


def test_loaded_model_prediction_is_returned():
    def loader(*args, **kwargs):
        return lambda text: [{"label": "NEGATIVE", "score": 0.87}]
    result = NLPService(loader=loader).analyze("bad experience")
    assert result == {"text": "bad experience", "sentiment": "NEGATIVE", "confidence": 0.87}


def test_unavailable_model_returns_503():
    app.dependency_overrides[get_nlp_service] = lambda: NLPService(loader=unavailable)
    try:
        with TestClient(app) as client:
            response = client.post("/api/v1/analyze", json={"text": "great service"})
        assert response.status_code == 503
        assert "confidence" not in response.json()
    finally:
        app.dependency_overrides.clear()
