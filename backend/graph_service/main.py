from fastapi import FastAPI

app = FastAPI(title="NeuroTree X Graph Service")

@app.get("/")
async def root():
    return {"message": "NeuroTree X Graph Service is running"}
