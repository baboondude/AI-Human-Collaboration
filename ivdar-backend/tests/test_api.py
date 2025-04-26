import os
import pytest
from fastapi.testclient import TestClient

from ivdar_backend.config import get_settings
from main import app

client = TestClient(app)


def _has_creds() -> bool:
    return (
        os.getenv("SPREADSHEET_ID")
        and os.path.exists(os.getenv("GOOGLE_SERVICE_ACCOUNT_JSON", "secrets/service_account.json"))
    )


def test_health():
    r = client.get("/health")
    assert r.status_code == 200
    assert r.json() == {"status": "ok"}


@pytest.mark.skipif(not _has_creds(), reason="Google creds/env not set")
def test_dashboard():
    r = client.get("/dashboard")
    assert r.status_code == 200
    data = r.json()["data"]
    assert isinstance(data, list) and len(data) > 0 