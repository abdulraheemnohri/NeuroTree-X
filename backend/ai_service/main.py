from fastapi import FastAPI

app = FastAPI(title="NeuroTree X AI Service")

@app.get("/")
async def root():
    return {"message": "NeuroTree X AI Service is running"}
