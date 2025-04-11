from transformers import pipeline
from core.config import settings
from utils.text_cleaner import clean_text

class NLPService:
    def __init__(self):
        try:
            self.model = pipeline("sentiment-analysis", model=settings.MODEL_NAME)
        except Exception:
            # Fallback mock model if loading fails
            self.model = None

    def analyze(self, text: str) -> dict:
        cleaned_text = clean_text(text)
        if self.model is None:
            # Mock implementation
            if "bad" in cleaned_text.lower():
                return {"text": text, "sentiment": "NEGATIVE", "confidence": 0.8}
            return {"text": text, "sentiment": "POSITIVE", "confidence": 0.9}
            
        result = self.model(cleaned_text)[0]
        return {
            "text": text,
            "sentiment": result["label"],
            "confidence": float(result["score"])
        }
