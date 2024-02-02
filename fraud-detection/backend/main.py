from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.config import settings
from api.routers import fraud

app = FastAPI(title=settings.PROJECT_NAME, openapi_url=f"{settings.API_V1_STR}/openapi.json")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(fraud.router, prefix=f"{settings.API_V1_STR}/fraud", tags=["fraud"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Fraud Detection API"}
