from fastapi import APIRouter, HTTPException

from app.services.sheets import get_sheet

router = APIRouter(prefix="/sheets", tags=["sheets"])


@router.get("/dashboard")
def sheet_summary(tab: str = "IVDAR Dashboard"):
    try:
        return get_sheet(tab)[:10]  # first ten rows for now
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(500, str(exc)) 