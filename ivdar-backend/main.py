import os
from fastapi import FastAPI, HTTPException

from ivdar_backend.sheets import fetch_dashboard

app = FastAPI(title="IVDAR Backend", version="0.1.0")


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.get("/dashboard")
async def dashboard():
    sheet_id = os.getenv("SPREADSHEET_ID")
    if not sheet_id:
        raise HTTPException(status_code=500, detail="SPREADSHEET_ID not configured")
    return {"data": fetch_dashboard(sheet_id)} 