import logging

from core.config import settings
from utils.text_cleaner import clean_text

logger = logging.getLogger(__name__)


class NLPService:
    def __init__(self, loader=None):
        self.model = None
        try:
            if loader is None:
                from transformers import pipeline
                loader = pipeline
            self.model = loader("sentiment-analysis", model=settings.MODEL_NAME)
        except Exception as exc:
            logger.warning("Sentiment model unavailable (%s)", type(exc).__name__)

    def analyze(self, text: str) -> dict:
        if self.model is None:
            raise RuntimeError("Sentiment model unavailable")
        result = self.model(clean_text(text))[0]
        return {"text": text, "sentiment": result["label"], "confidence": float(result["score"])}
