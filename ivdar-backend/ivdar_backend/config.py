from functools import lru_cache
from typing import List

from pydantic import BaseSettings, Field

class Settings(BaseSettings):
    spreadsheet_id: str = Field(..., env="SPREADSHEET_ID")
    cors_origins: List[str] = Field(
        default_factory=lambda: ["http://localhost:5173"], env="CORS_ORIGINS"
    )

    class Config:
        env_file = ".env"
        case_sensitive = True


@lru_cache
def get_settings() -> Settings:  # pragma: no cover
    return Settings() 