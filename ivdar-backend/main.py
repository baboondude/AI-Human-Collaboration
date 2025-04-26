from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="IVDAR API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/snapshot")
async def snapshot():
    """Return a public snapshot of target allocations.
    Placeholder values for now—will be replaced by Google Sheets data."""
    return {
        "equities": 55,
        "bonds": 25,
        "intl": 15,
        "cash": 5,
    } 