from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional
import time

app = FastAPI(title="NeuroTree X Digital Twin Service")

class DigitalTwin(BaseModel):
    id: str
    entity_name: str
    type: str # device, person, process
    last_sync: float
    state: dict
    health: float = 1.0

twins_db = {}

@app.get("/")
async def root():
    return {"message": "NeuroTree X Digital Twin Service is running"}

@app.post("/register")
async def register_twin(entity_id: str, name: str, twin_type: str = "process"):
    twin = DigitalTwin(
        id=entity_id,
        entity_name=name,
        type=twin_type,
        last_sync=time.time(),
        state={"status": "initialized", "sync_mode": "real-time"}
    )
    twins_db[entity_id] = twin
    return {"message": f"Digital Twin for {name} registered", "twin": twin}

@app.put("/sync/{entity_id}")
async def sync_twin(entity_id: str, state_update: dict):
    if entity_id in twins_db:
        twin = twins_db[entity_id]
        twin.state.update(state_update)
        twin.last_sync = time.time()
        return {"message": "Sync complete", "twin": twin}
    return {"error": "Twin not found"}

@app.get("/twins", response_model=List[DigitalTwin])
async def list_twins():
    return list(twins_db.values())
