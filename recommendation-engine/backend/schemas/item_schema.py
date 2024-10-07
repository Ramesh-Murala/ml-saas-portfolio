from pydantic import BaseModel
from typing import List, Optional

class ItemBase(BaseModel):
    id: str
    name: str
    category: str
    price: float

class RecommendationResponse(BaseModel):
    user_id: str
    recommendations: List[ItemBase]
