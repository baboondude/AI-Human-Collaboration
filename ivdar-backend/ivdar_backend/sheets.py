from typing import List
import os

import gspread
from google.oauth2.service_account import Credentials

SCOPES: list[str] = ["https://www.googleapis.com/auth/spreadsheets.readonly"]
DEFAULT_TAB = "IVDAR Dashboard"


def _client() -> gspread.Client:
    creds_path = os.getenv("GOOGLE_SERVICE_ACCOUNT_JSON", "secrets/service_account.json")
    creds = Credentials.from_service_account_file(creds_path, scopes=SCOPES)
    return gspread.authorize(creds)


def fetch_dashboard(sheet_id: str, tab: str = DEFAULT_TAB) -> List[List[str]]:
    """Return the full values grid of the given tab."""
    client = _client()
    worksheet = client.open_by_key(sheet_id).worksheet(tab)
    return worksheet.get_all_values() 