from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pgn(BaseModel):
    pgn: str

@app.post("/analyse")
def analyse(pgn: Pgn):
    return {"status": "success", "pgn": pgn.pgn}

@app.get("/")
def read_root():
    return {"Hello": "World"}

# Vercel serverless function handler
handler = app

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)