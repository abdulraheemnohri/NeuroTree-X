from fastapi import FastAPI
from pydantic import BaseModel
import random

app = FastAPI(title="NeuroTree X Invention Engine")

class Invention(BaseModel):
    title: str
    concepts: list[str]
    potential_impact: str

@app.get("/")
async def root():
    return {"message": "NeuroTree X Invention Engine is running"}

@app.post("/generate-invention")
async def generate_invention():
    sample_concepts = ["Quantum Computing", "Neural Networks", "Bio-mimicry", "Graphene", "CRISPR", "Fusion Energy"]
    selected = random.sample(sample_concepts, 2)

    invention = Invention(
        title=f"The {selected[0]}-{selected[1]} Hybrid",
        concepts=selected,
        potential_impact="Revolutionary efficiency in energy-aware computing."
    )
    return {"status": "success", "invention": invention}
