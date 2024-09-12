from fastapi import FastAPI
from api.routers import recsys
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Real-Time Recommendation API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(recsys.router, prefix="/api/v1")

@app.get("/")
def health_check():
    return {"status": "ok", "message": "Recommendation Engine running"}
