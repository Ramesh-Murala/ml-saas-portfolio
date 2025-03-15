import os

class Settings:
    PROJECT_NAME: str = "Customer Sentiment Analysis API"
    MODEL_NAME: str = os.getenv("MODEL_NAME", "distilbert-base-uncased-finetuned-sst-2-english")

settings = Settings()
