from services.model_loader import get_model
from services.fraud_service import FraudService

def get_fraud_service() -> FraudService:
    model = get_model()
    return FraudService(model)
