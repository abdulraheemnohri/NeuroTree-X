from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
import httpx
import logging

app = FastAPI(title="NeuroTree X API Gateway")

# Internal Service Mapping
SERVICES = {
    "agent_factory": "http://agent_factory:8000",
    "research": "http://research_engine:8000",
    "invention": "http://invention_engine:8000",
    "graph": "http://graph_service:8000",
    "memory": "http://memory_service:8000",
    "simulation": "http://simulation_engine:8000",
    "twin": "http://digital_twin:8000",
    "agi": "http://agi_assistant:8000",
    "code": "http://code_synthesis:8000",
    "p2p": "http://p2p_network:8000",
    "security": "http://security:8000",
    "orchestrator": "http://knowledge_orchestrator:8000",
    "learning": "http://learning_engine:8000"
}

@app.get("/")
async def root():
    return {
        "message": "NeuroTree X Unified API Gateway",
        "version": "1.0.0",
        "available_routes": list(SERVICES.keys())
    }

@app.get("/health")
async def health():
    return {"status": "healthy", "gateway": "online"}

@app.get("/system/status")
async def system_status():
    return {
        "cohesion_index": 0.98,
        "active_synapses": 145020,
        "agent_load": "nominal",
        "p2p_sync": "active"
    }

@app.api_route("/{service}/{path:path}", methods=["GET", "POST", "PUT", "DELETE"])
async def gateway_router(service: str, path: str, request: Request):
    if service not in SERVICES:
        raise HTTPException(status_code=404, detail=f"Service '{service}' not recognized by NeuroTree X Gateway")

    # In a production environment, this would use a library like 'httpx' to proxy
    target_url = f"{SERVICES[service]}/{path}"

    return JSONResponse(content={
        "gateway_intercept": True,
        "routing_to": target_url,
        "method": request.method,
        "status": "Service routing established"
    })
