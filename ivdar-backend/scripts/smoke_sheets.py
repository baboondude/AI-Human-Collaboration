"""
CLI sanity-check: fetch the first row & row-count from the dashboard tab.
Usage: poetry run python scripts/smoke_sheets.py
"""
import json
import os
from ivdar_backend.sheets import fetch_dashboard

sheet_id = os.getenv(
    "SPREADSHEET_ID", "1Bt0Ke7U3N7OeNsqTUVzILXDVWzBkrykUeul5-dICFJ0"
)
data = fetch_dashboard(sheet_id)
print(json.dumps({"row_count": len(data), "first_row": data[0]}, indent=2)) 