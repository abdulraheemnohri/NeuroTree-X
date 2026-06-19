from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer

app = FastAPI(title="NeuroTree X Security")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@app.get("/")
async def root():
    return {"message": "NeuroTree X Security is running"}

@app.get("/vault/access")
async def check_vault_access(token: str = Depends(oauth2_scheme)):
    if token == "master-brain-key":
        return {"access": "granted", "permissions": ["full-graph-write", "agent-override"]}
    raise HTTPException(status_code=401, detail="Unauthorized synaptic access")
