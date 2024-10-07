from services.data_loader import load_items
from models.user_model import get_user_by_id
from utils.similarity import compute_similarity
import random

def get_recommendations_for_user(user_id: str, limit: int = 4):
    user = get_user_by_id(user_id)
    items = load_items()
    
    interacted_set = set(user.interaction_history)
    available_items = [item for item in items if item.id not in interacted_set]
    
    random.seed(hash(user_id))
    random.shuffle(available_items)
    
    return available_items[:limit]
