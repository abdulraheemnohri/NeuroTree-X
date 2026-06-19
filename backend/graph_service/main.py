from fastapi import FastAPI
from pydantic import BaseModel
import os

app = FastAPI(title="NeuroTree X Graph Service")

# Mock Neo4j driver initialization
# In a real app: driver = GraphDatabase.driver(os.getenv("DATABASE_URL"), auth=("neo4j", "password"))

class Node(BaseModel):
    name: str
    type: str

@app.get("/")
async def root():
    return {"message": "NeuroTree X Graph Service is running"}

@app.post("/node")
async def create_node(node: Node):
    # Mock Neo4j session run
    return {"message": f"Node {node.name} of type {node.type} created in graph", "node": node}
