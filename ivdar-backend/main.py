from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from ivdar_backend.config import get_settings
from ivdar_backend.sheets import fetch_dashboard

settings = get_settings()

app = FastAPI(title="IVDAR Backend", version="0.1.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.get("/dashboard")
async def dashboard():
    if not settings.spreadsheet_id:
        raise HTTPException(status_code=500, detail="SPREADSHEET_ID not configured")
    return {"data": fetch_dashboard(settings.spreadsheet_id)} 