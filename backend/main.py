from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
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