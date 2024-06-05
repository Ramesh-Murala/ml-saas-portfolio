from pydantic import BaseModel
from typing import List

class QueryRequest(BaseModel):
    query: str
    top_k: int = 3

class Source(BaseModel):
    id: str
    snippet: str
    score: float

class QueryResponse(BaseModel):
    answer: str
    sources: List[Source]

class DocumentCreate(BaseModel):
    content: str
