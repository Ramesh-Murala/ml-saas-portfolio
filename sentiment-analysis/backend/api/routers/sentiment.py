from fastapi import APIRouter, Depends, HTTPException
from schemas.sentiment_schema import SentimentRequest, SentimentResponse
from services.nlp_service import NLPService
from api.dependencies import get_nlp_service

router = APIRouter()

@router.post("/analyze", response_model=SentimentResponse)
def analyze_sentiment(request: SentimentRequest, nlp_service: NLPService = Depends(get_nlp_service)):
    try:
        result = nlp_service.analyze(request.text)
    except RuntimeError as exc:
        raise HTTPException(status_code=503, detail="Sentiment model unavailable; retry after service recovery") from exc
    return SentimentResponse(**result)
