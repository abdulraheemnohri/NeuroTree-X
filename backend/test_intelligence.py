import pytest
from fastapi.testclient import TestClient
from agent_factory.main import app as agent_app
from research_engine.main import app as research_app
from invention_engine.main import app as invention_app

def test_agent_registration():
    client = TestClient(agent_app)
    response = client.post("/register", json={
        "name": "Explorer-1",
        "type": "Explorer",
        "skills": ["Web Search", "PDF Parsing"],
        "model": "gemma-7b"
    })
    assert response.status_code == 200
    assert "Explorer-1" in response.json()["message"]

def test_hypothesis_generation():
    client = TestClient(research_app)
    response = client.post("/hypothesis/generate?topic=AGI")
    assert response.status_code == 200
    assert response.json()["status"] == "generated"
    assert "AGI" in response.json()["hypothesis"]["topic"]

def test_invention_generation():
    client = TestClient(invention_app)
    response = client.post("/generate-invention")
    assert response.status_code == 200
    assert response.json()["status"] == "success"
    assert "invention" in response.json()
