from fastapi import APIRouter, Depends
from schemas.sentiment_schema import SentimentRequest, SentimentResponse
from services.nlp_service import NLPService
from api.dependencies import get_nlp_service

router = APIRouter()

@router.post("/analyze", response_model=SentimentResponse)
def analyze_sentiment(request: SentimentRequest, nlp_service: NLPService = Depends(get_nlp_service)):
    result = nlp_service.analyze(request.text)
    return SentimentResponse(**result)
