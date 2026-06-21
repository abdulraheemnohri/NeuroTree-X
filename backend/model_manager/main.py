from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI(title="NeuroTree X Local Model Manager")

class AIModel(BaseModel):
    name: str
    size: str
    status: str
    compute_type: str = "GPU"

models_db = [
    AIModel(name="Gemma-2-9b", size="5.4 GB", status="active", compute_type="GPU"),
    AIModel(name="Phi-3-Mini", size="2.2 GB", status="downloaded", compute_type="CPU/GPU"),
    AIModel(name="Llama-3-8b", size="4.9 GB", status="inactive", compute_type="GPU")
]

@app.get("/")
async def root():
    return {"message": "NeuroTree X Model Manager is online"}

@app.get("/models", response_model=List[AIModel])
async def list_models():
    return models_db

@app.post("/activate/{name}")
async def activate_model(name: str):
    for model in models_db:
        if model.name == name:
            model.status = "active"
        else:
            if model.status == "active":
                model.status = "downloaded"
    return {"message": f"Model {name} activated as primary synaptic engine"}

@app.get("/system/compute")
async def get_compute_stats():
    return {
        "vram_usage": "8.2 / 12 GB",
        "cpu_load": "14%",
        "active_engine": "Gemma-2-9b"
    }
