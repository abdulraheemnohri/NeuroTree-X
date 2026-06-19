#!/bin/bash
echo "🌌 BOOTSTRAPPING NEUROTREE X..."

# Install backend dependencies
cd backend && pip install -r requirements.txt && cd ..

# Install frontend dependencies
cd apps/frontend && npm install && cd ../..

echo "✅ BOOTSTRAP COMPLETE. READY FOR NEURAL SYNC."
