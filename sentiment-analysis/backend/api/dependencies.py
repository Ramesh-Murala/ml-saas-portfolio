from services.nlp_service import NLPService

_nlp_service_instance = NLPService()

def get_nlp_service() -> NLPService:
    return _nlp_service_instance
