from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import uuid
from models.document import DocumentModel
from schemas.rag_schema import QueryResponse, Source
from utils.logger import logger

class RAGService:
    def __init__(self):
        self.documents = []
        self.vectorizer = TfidfVectorizer()
        self.doc_vectors = None
        self._initialize_dummy_data()

    def _initialize_dummy_data(self):
        dummy_texts = [
            "Our company leave policy allows 20 days of paid time off per year.",
            "To reset your password, visit the IT portal and click 'Forgot Password'.",
            "The Q3 town hall will be held on October 15th at 10 AM.",
            "Health insurance benefits are provided through BlueCross for all full-time employees."
        ]
        for text in dummy_texts:
            self.add_document(text)

    def add_document(self, content: str) -> str:
        doc_id = str(uuid.uuid4())
        doc = DocumentModel(id=doc_id, content=content)
        self.documents.append(doc)
        self._update_vectors()
        logger.info(f"Added document {doc_id}")
        return doc_id

    def _update_vectors(self):
        if self.documents:
            texts = [doc.content for doc in self.documents]
            self.doc_vectors = self.vectorizer.fit_transform(texts)

    def query(self, query_text: str, top_k: int = 3) -> QueryResponse:
        if not self.documents:
            return QueryResponse(answer="I don't have any knowledge base to answer that.", sources=[])

        query_vec = self.vectorizer.transform([query_text])
        similarities = cosine_similarity(query_vec, self.doc_vectors).flatten()
        
        top_indices = np.argsort(similarities)[::-1][:top_k]
        
        sources = []
        for idx in top_indices:
            score = similarities[idx]
            if score > 0.05:  # threshold
                doc = self.documents[idx]
                sources.append(Source(id=doc.id, snippet=doc.content, score=float(score)))

        if not sources:
            answer = "I couldn't find any relevant information in my knowledge base."
        else:
            answer = f"Based on the documents, here is what I found: {sources[0].snippet}"

        return QueryResponse(answer=answer, sources=sources)

rag_service = RAGService()
