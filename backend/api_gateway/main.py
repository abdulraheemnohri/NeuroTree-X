from fastapi import FastAPI

app = FastAPI(title="NeuroTree X API Gateway")

@app.get("/")
async def root():
    return {"message": "Welcome to NeuroTree X API Gateway"}

@app.get("/health")
async def health():
    return {"status": "healthy"}
