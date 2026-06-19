# NeuroTree X Deployment Guide

## 1. Prerequisites
- Docker & Docker Compose
- Python 3.9+
- Node.js 18+
- GPU with 12GB+ VRAM (for local AI models)

## 2. Infrastructure Setup
The system uses the following core databases:
- **Neo4j**: Knowledge graph storage.
- **Qdrant**: Vector memory system.
- **Redis**: Real-time message brokering and caching.
- **IPFS**: Distributed file and knowledge storage.

## 3. Local Deployment
1. **Bootstrap**: Install all local dependencies.
   \`bash
   ./scripts/bootstrap.sh
   \`
2. **Start Services**: Launch the infrastructure and microservices.
   \`bash
   docker-compose up -d
   \`
3. **Frontend**: Access the dashboard at `http://localhost:3000`.

## 4. Cloud Deployment (Kubernetes)
Manifests are located in `infrastructure/kubernetes/`. We recommend using a managed K8s service with GPU node pools.

## 5. Security
- Ensure `JWT_SECRET` and `ENCRYPTION_KEY` are set in the `.env` file.
- All synaptic traffic is encrypted by default via the Security service.
