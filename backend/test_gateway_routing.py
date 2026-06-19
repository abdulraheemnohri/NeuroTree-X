import pytest
from fastapi.testclient import TestClient
from api_gateway.main import app as gateway_app

client = TestClient(gateway_app)

def test_gateway_root():
    response = client.get("/")
    assert response.status_code == 200
    assert "available_routes" in response.json()

def test_gateway_routing_mock():
    # Testing that the gateway recognizes and routes a service
    response = client.post("/research/hypothesis/generate?topic=Quantum")
    assert response.status_code == 200
    assert response.json()["gateway_intercept"] is True
    assert "research_engine:8000" in response.json()["routing_to"]

def test_gateway_invalid_service():
    response = client.get("/unknown_service/some/path")
    assert response.status_code == 404
    assert "not recognized" in response.json()["detail"]

def test_system_status():
    response = client.get("/system/status")
    assert response.status_code == 200
    assert response.json()["cohesion_index"] > 0.9
