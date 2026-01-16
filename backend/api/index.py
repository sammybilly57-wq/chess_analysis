from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

# Add CORS middleware - allow both local development and production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://*.vercel.app"],
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
    return {"status": "ok", "message": "ChessLens API is running"}

# Vercel serverless function handler
app = app

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)