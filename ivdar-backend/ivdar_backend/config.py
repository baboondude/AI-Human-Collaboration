from functools import lru_cache
from typing import List

from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field

class Settings(BaseSettings):
    spreadsheet_id: str = Field(validation_alias="SPREADSHEET_ID")
    cors_origins: List[str] = Field(
        default_factory=lambda: ["http://localhost:5173"], 
        validation_alias="CORS_ORIGINS"
    )

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
        extra='ignore'
    )


@lru_cache
def get_settings() -> Settings:  # pragma: no cover
    return Settings() 