from fastapi import APIRouter, Depends
from schemas.transaction_schema import TransactionInput, FraudPredictionResponse
from services.fraud_service import FraudService
from api.dependencies import get_fraud_service

router = APIRouter()

@router.post("/evaluate", response_model=FraudPredictionResponse)
def evaluate_transaction(
    transaction: TransactionInput,
    fraud_service: FraudService = Depends(get_fraud_service)
):
    result = fraud_service.evaluate_transaction(transaction.model_dump())
    return FraudPredictionResponse(
        transaction_id=transaction.transaction_id,
        is_fraud=result["is_fraud"],
        fraud_probability=result["fraud_probability"],
        risk_level=result["risk_level"],
        message=result["message"]
    )
