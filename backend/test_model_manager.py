import pytest
from fastapi.testclient import TestClient
from model_manager.main import app as model_app

client = TestClient(model_app)

def test_list_models():
    response = client.get("/models")
    assert response.status_code == 200
    assert len(response.json()) >= 3
    assert any(m["name"] == "Gemma-2-9b" for m in response.json())

def test_activate_model():
    response = client.post("/activate/Phi-3-Mini")
    assert response.status_code == 200

    # Verify change
    list_res = client.get("/models")
    phi = next(m for m in list_res.json() if m["name"] == "Phi-3-Mini")
    assert phi["status"] == "active"

def test_compute_stats():
    response = client.get("/system/compute")
    assert response.status_code == 200
    assert "vram_usage" in response.json()
