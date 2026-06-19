from fastapi import FastAPI, WebSocket
import asyncio
import random
import json

app = FastAPI(title="NeuroTree X NeuroViz Server")

@app.get("/")
async def root():
    return {"message": "NeuroTree X NeuroViz Activity Server is running"}

@app.websocket("/ws/activity")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            # Simulate neural activity firing data
            activity_data = {
                "active_nodes": [random.randint(1, 100) for _ in range(5)],
                "intensity": random.uniform(0.1, 1.0),
                "synapse_firing": [
                    {"from": random.randint(1, 100), "to": random.randint(1, 100)}
                    for _ in range(3)
                ]
            }
            await websocket.send_text(json.dumps(activity_data))
            await asyncio.sleep(1)  # Stream every second
    except Exception as e:
        print(f"Connection closed: {e}")
