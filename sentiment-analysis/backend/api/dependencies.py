from functools import lru_cache
from services.nlp_service import NLPService


@lru_cache
def get_nlp_service() -> NLPService:
    return NLPService()
