import pytest
from fastapi.testclient import TestClient
from knowledge_orchestrator.main import app as orch_app
from learning_engine.main import app as learn_app
from ai_service.main import app as ai_app

def test_orchestration():
    client = TestClient(orch_app)
    response = client.post("/orchestrate", json={"topic": "Quantum Ethics"})
    assert response.status_code == 200
    assert response.json()["status"] == "in_progress"

def test_learning_classify():
    client = TestClient(learn_app)
    response = client.post("/classify?data=SynapticExpansion")
    assert response.status_code == 200
    assert "classified_as" in response.json()

def test_ai_reasoning():
    client = TestClient(ai_app)
    response = client.post("/reason?context=SystemInit&query=ScaleFactor")
    assert response.status_code == 200
    assert response.json()["confidence"] > 0.9
