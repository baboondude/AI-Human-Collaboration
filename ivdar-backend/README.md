# IVDAR Backend

FastAPI service providing allocation data for the IVDAR frontend.

## Setup

1. Create and activate virtual environment:
   ```bash
   python -m venv .venv
   .\.venv\Scripts\Activate  # Windows
   source .venv/bin/activate  # Unix
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Copy `.env.example` to `.env` and update with your Google credentials path.

## Development

Run the development server:
```bash
./run-dev.sh  # Unix
.\run-dev.ps1  # Windows
```

The API will be available at http://localhost:8000
- API docs: http://localhost:8000/docs
- OpenAPI spec: http://localhost:8000/openapi.json 