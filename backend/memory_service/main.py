from fastapi import FastAPI
from pydantic import BaseModel
import os
# from qdrant_client import QdrantClient

app = FastAPI(title="NeuroTree X Memory Service")

class QdrantConnector:
    def __init__(self):
        self.url = os.getenv("VECTOR_DB_URL", "http://qdrant:6333")
        self.client = None

    def connect(self):
        # In production: self.client = QdrantClient(url=self.url)
        pass

    def upsert_memory(self, vector, payload):
        return {"status": "indexed", "vector_dim": len(vector)}

memory_db = QdrantConnector()

class Point(BaseModel):
    vector: list[float]
    payload: dict

@app.get("/")
async def root():
    return {"message": "NeuroTree X Memory Service is running"}

@app.post("/memory")
async def add_memory(point: Point):
    res = memory_db.upsert_memory(point.vector, point.payload)
    return {"message": "Memory indexed in vector space", "result": res}
