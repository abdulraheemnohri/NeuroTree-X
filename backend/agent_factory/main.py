from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional
import json
import os

app = FastAPI(title="NeuroTree X Agent Factory")

class AgentConfig(BaseModel):
    name: str
    type: str
    skills: List[str]
    model: str
    tools: List[str] = []
    status: str = "idle"

REGISTRY_FILE = "agent_registry.json"

def load_registry():
    if os.path.exists(REGISTRY_FILE):
        with open(REGISTRY_FILE, 'r') as f:
            return json.load(f)
    return []

def save_registry(agents):
    with open(REGISTRY_FILE, 'w') as f:
        json.dump(agents, f, indent=2)

@app.get("/")
async def root():
    return {"message": "NeuroTree X Agent Factory is running"}

@app.post("/register")
async def register_agent(agent: AgentConfig):
    agents = load_registry()
    agents.append(agent.dict())
    save_registry(agents)
    return {"message": f"Agent {agent.name} registered and persisted", "agent": agent}

@app.get("/agents")
async def list_agents():
    return load_registry()

@app.post("/spawn")
async def spawn_agent(goal: str):
    # Logic to decompose goal and spawn a specialized agent
    import uuid
    new_agent = AgentConfig(
        name=f"Agent-{uuid.uuid4().hex[:4]}",
        type="Dynamic-Specialist",
        skills=["Goal Decomposition", "Task Execution"],
        model="gemma-2-9b",
        tools=["web-search", "knowledge-graph-access"],
        status="active"
    )
    agents = load_registry()
    agents.append(new_agent.dict())
    save_registry(agents)
    return {"message": "New agent spawned from goal", "goal": goal, "agent": new_agent}
