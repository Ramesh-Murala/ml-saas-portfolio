from pydantic import BaseModel

class TransactionInput(BaseModel):
    transaction_id: str
    user_id: str
    amount: float
    merchant: str
    timestamp: str

class FraudPredictionResponse(BaseModel):
    transaction_id: str
    is_fraud: bool
    fraud_probability: float
    risk_level: str
    message: str
