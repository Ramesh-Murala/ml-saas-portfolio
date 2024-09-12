import os

class Settings:
    PROJECT_NAME: str = "Real-Time Recommendation API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    MODEL_PATH: str = os.getenv("MODEL_PATH", "./data/model.pkl")

settings = Settings()
