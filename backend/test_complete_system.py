import pytest
from fastapi.testclient import TestClient
from simulation_engine.main import app as sim_app
from digital_twin.main import app as twin_app
from agi_assistant.main import app as agi_app
from p2p_network.main import app as p2p_app

def test_simulation_launch():
    client = TestClient(sim_app)
    response = client.post("/launch?name=TestSim&sim_type=physics", json={})
    assert response.status_code == 200
    assert response.json()["simulation"]["name"] == "TestSim"

def test_digital_twin_sync():
    client = TestClient(twin_app)
    client.post("/register?entity_id=E1&name=DeviceA")
    response = client.put("/sync/E1", json={"temp": 42})
    assert response.status_code == 200
    assert response.json()["twin"]["state"]["temp"] == 42

def test_agi_tasks():
    client = TestClient(agi_app)
    response = client.post("/tasks?description=Research%20Fusion")
    assert response.status_code == 200
    assert "Research Fusion" in response.json()["task"]["description"]

def test_p2p_peers():
    client = TestClient(p2p_app)
    response = client.get("/peers")
    assert response.status_code == 200
    assert "node-alpha-1" in response.json()["peers"]
