from pydantic import BaseModel
from typing import Optional

class DocumentModel(BaseModel):
    id: str
    content: str
    metadata: Optional[dict] = None
