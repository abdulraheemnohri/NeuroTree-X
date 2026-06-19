from fastapi import FastAPI

app = FastAPI(title="NeuroTree X P2P Network")

@app.get("/")
async def root():
    return {"message": "NeuroTree X P2P Network is running"}

@app.get("/peers")
async def list_peers():
    return {"peers": ["node-alpha-1", "node-omega-7", "private-brain-local"]}

@app.post("/sync")
async def sync_knowledge(target_peer: str):
    return {"status": "syncing", "progress": 0.45, "estimated_time": "12s"}
