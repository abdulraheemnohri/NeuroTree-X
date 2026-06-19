from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional
import uuid

app = FastAPI(title="NeuroTree X Simulation Engine")

class SimulationEnvironment(BaseModel):
    id: str
    name: str
    type: str
    parameters: dict
    status: str = "initializing"
    agent_feedback: Optional[str] = None

simulations_db = {}

@app.get("/")
async def root():
    return {"message": "NeuroTree X Simulation Engine is running"}

@app.post("/launch")
async def launch_simulation(name: str, sim_type: str, params: dict):
    sim_id = str(uuid.uuid4())
    sim = SimulationEnvironment(
        id=sim_id,
        name=name,
        type=sim_type,
        parameters=params,
        status="running"
    )
    simulations_db[sim_id] = sim
    return {"message": "Simulation launched", "simulation": sim}

@app.post("/trigger-from-scientist")
async def trigger_from_scientist(hypothesis_id: str, topic: str):
    # Logic to create a specialized sim for testing a hypothesis
    sim_id = str(uuid.uuid4())
    sim = SimulationEnvironment(
        id=sim_id,
        name=f"Scientist Lab: {topic}",
        type="experimental-validation",
        parameters={"hypothesis_id": hypothesis_id},
        status="evaluating",
        agent_feedback="Scientist Agent monitoring synaptic stability..."
    )
    simulations_db[sim_id] = sim
    return {"message": "Scientist-led simulation triggered", "simulation": sim}

@app.get("/active", response_model=List[SimulationEnvironment])
async def list_active_simulations():
    return list(simulations_db.values())
