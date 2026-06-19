from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
import random
import time

app = FastAPI(title="NeuroTree X P2P Network")

class PeerInfo(BaseModel):
    id: str
    knowledge_count: int
    status: str

@app.get("/")
async def root():
    return {"message": "NeuroTree X P2P Network is running"}

@app.get("/peers", response_model=List[PeerInfo])
async def list_peers():
    return [
        PeerInfo(id="node-alpha-1", knowledge_count=452000, status="connected"),
        PeerInfo(id="node-omega-7", knowledge_count=120000, status="syncing"),
        PeerInfo(id="private-brain-local", knowledge_count=1200000, status="host")
    ]

@app.post("/sync")
async def sync_knowledge(target_peer: str):
    # Simulate CRDT-based conflict-free sync
    return {
        "status": "merging",
        "peer": target_peer,
        "delta_discovered": random.randint(100, 1000),
        "conflicts_resolved": random.randint(0, 5),
        "sync_cohesion": 0.999,
        "last_sync_timestamp": time.time()
    }

@app.get("/discovery")
async def get_new_peers():
    return {"discovered": ["node-beta-4", "experimental-lab-2"], "protocol": "libp2p-mdns"}
