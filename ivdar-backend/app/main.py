from fastapi import FastAPI
from app.api.routes import sheets

app = FastAPI()

app.include_router(sheets.router)

@app.get("/health")
def health():
    return {"status": "ok"} 