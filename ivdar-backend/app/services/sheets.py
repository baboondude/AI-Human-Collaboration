"""Google Sheets helper for IVDAR."""
import os  # Added import
from functools import lru_cache

import gspread
from google.auth.transport.requests import AuthorizedSession
from google.oauth2.service_account import Credentials


SCOPES = ("https://www.googleapis.com/auth/spreadsheets.readonly",)


@lru_cache
def _client() -> gspread.Client:
    creds = Credentials.from_service_account_file(
        os.getenv("GOOGLE_SERVICE_ACCOUNT_FILE"), scopes=SCOPES
    )
    authed = AuthorizedSession(creds)
    return gspread.Client(auth=creds, session=authed)


def get_sheet(tab: str):
    """Return a list-of-dicts for the given tab."""
    sheet = _client().open_by_key(os.getenv("GOOGLE_SHEET_ID")).worksheet(tab)
    rows = sheet.get_all_records()
    return rows 