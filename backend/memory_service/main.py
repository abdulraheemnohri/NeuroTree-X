from fastapi import FastAPI

app = FastAPI(title="NeuroTree X Memory Service")

@app.get("/")
async def root():
    return {"message": "NeuroTree X Memory Service is running"}
