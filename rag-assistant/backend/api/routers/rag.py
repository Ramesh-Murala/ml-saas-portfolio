from fastapi import APIRouter, Depends
from schemas.rag_schema import QueryRequest, QueryResponse, DocumentCreate
from api.dependencies import get_rag_service, get_current_user
from services.rag_service import RAGService

router = APIRouter()

@router.post("/query", response_model=QueryResponse)
def query_knowledge_base(
    request: QueryRequest,
    service: RAGService = Depends(get_rag_service),
    user=Depends(get_current_user)
):
    return service.query(request.query, request.top_k)

@router.post("/documents")
def add_document(
    doc: DocumentCreate,
    service: RAGService = Depends(get_rag_service),
    user=Depends(get_current_user)
):
    doc_id = service.add_document(doc.content)
    return {"status": "success", "doc_id": doc_id}
