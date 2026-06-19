from fastapi import FastAPI
from pydantic import BaseModel
import os

app = FastAPI(title="NeuroTree X Memory Service")

# Mock Qdrant client initialization
# In a real app: client = QdrantClient(url=os.getenv("VECTOR_DB_URL"))

class Point(BaseModel):
    vector: list[float]
    payload: dict

@app.get("/")
async def root():
    return {"message": "NeuroTree X Memory Service is running"}

@app.post("/memory")
async def add_memory(point: Point):
    # Mock Qdrant upsert
    return {"message": "Memory added to vector store", "point_preview": point.payload}
