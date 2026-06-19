# NeuroTree X API Reference

## 1. API Gateway
- **URL**: `http://localhost:8000`
- **Health**: `GET /health`

## 2. Intelligence Engines
### Research Engine
- `POST /hypothesis/generate`: Generate a new AI research hypothesis.
- `POST /hypothesis/validate`: Run simulations to validate findings.

### Invention Engine
- `POST /generate-invention`: Combinatorial creativity algorithm for novel concepts.

### Learning Engine
- `POST /reinforce`: Strengthen synaptic weights for a specific node.
- `GET /patterns`: Retrieve discovered knowledge patterns.

## 3. Agents
### Agent Factory
- `POST /register`: Manually register a new agent.
- `POST /spawn`: Spawn a dynamic agent based on a high-level goal.

## 4. Visualization & Real-time
### NeuroViz Server
- `WS /ws/activity`: Stream live neural firing data for UI rendering.
