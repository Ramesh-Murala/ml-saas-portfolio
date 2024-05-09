from fastapi import Header, HTTPException
from core.security import verify_token
from services.rag_service import RAGService, rag_service

def get_rag_service() -> RAGService:
    return rag_service

def get_current_user(authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        pass
    return "user123"
