from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="NeuroTree X Agent Factory")

class AgentConfig(BaseModel):
    name: str
    type: str
    skills: List[str]
    model: str
    status: str = "idle"

agents_db = []

@app.get("/")
async def root():
    return {"message": "NeuroTree X Agent Factory is running"}

@app.post("/register")
async def register_agent(agent: AgentConfig):
    agents_db.append(agent)
    return {"message": f"Agent {agent.name} registered successfully", "agent": agent}

@app.get("/agents", response_model=List[AgentConfig])
async def list_agents():
    return agents_db
