from fastapi import APIRouter
from schemas.item_schema import RecommendationResponse
from services.recsys_service import get_recommendations_for_user

router = APIRouter()

@router.get("/recommendations/{user_id}", response_model=RecommendationResponse)
def get_recommendations(user_id: str, limit: int = 4):
    recs = get_recommendations_for_user(user_id, limit)
    return RecommendationResponse(
        user_id=user_id,
        recommendations=recs
    )
