# ChessLens

**ChessLens** is a Chess Game Review Web App that provides automated, coach-like analysis of chess games. It is designed to help players of all levels learn from their games by explaining the reasoning behind moves, highlighting mistakes, and providing actionable improvement tips.

## 🚀 Features

- **Automated Hybrid Game Review**: Combines engine evaluations with coach-style narrative explanations.
- **PGN Upload**: Easy game input via PGN file upload.
- **Variable Engine Depth**: Cost-aware engine analysis that goes deeper for critical moments.
- **Learning Summary**: Summarizes strengths, weaknesses, and improvement tips after each review.
- **No Q&A Required**: Proactively explains key moments without needing user prompts.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript

### Backend
- **Framework**: [FastAPI](https://fastapi.tiangolo.com/) (Python)
- **Engine**: Stockfish (planned)
- **AI**: LLM for explanation generation (planned)

## 📂 Project Structure

- `frontend/`: Contains the Next.js frontend application.
- `backend/`: Contains the FastAPI backend application.

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Python (v3.9 or higher)
- pip (Python package installer)

### Backend Setup

1. Navigate to `backend` directory:
   ```bash
   cd backend
   ```

2. Create and activate virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. Install required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the backend server:
   ```bash
   python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```
   The backend will be available at `http://localhost:8000`.
   API Documentation: `http://localhost:8000/docs`

### Frontend Setup

1. Navigate to `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`.

## 📖 Usage

1. Start both the backend and frontend servers.
2. Open your browser and go to `http://localhost:3000`.
3. Paste your PGN (Portable Game Notation) into the text area.
4. Click "Analyze PGN" to submit the game for analysis.

## 🌐 Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update codebase"
   git push origin main
   ```

2. **Deploy via Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import repository: `sammybilly57-wq/chess_analysis`
   - Configure:
     - **Root Directory**: `frontend`
     - **Build Command**: `npm run build`
     - **Output Directory**: `.next`
   - Deploy

3. **API Configuration**
   The Vercel deployment will automatically set up API routes via `vercel.json` configuration.

### API Endpoints

**POST /api/analyse**
Analyze a chess game from PGN format.

Request:
```json
{
  "pgn": "1. e4 e5 2. Nf3 Nc6..."
}
```

Response:
```json
{
  "status": "success",
  "pgn": "1. e4 e5 2. Nf3 Nc6..."
}
```

**GET /api/**
Health check endpoint.

## 🚨 Troubleshooting

### Port Already in Use
If you get "address already in use" error:
```bash
# Find and kill process on port 8000
lsof -ti:8000 | xargs kill -9

# Or use different port
python -m uvicorn main:app --port 8001
```

### CORS Issues
Ensure your frontend URL is in the CORS allow_origins list in `backend/main.py` and `backend/api/index.py`.

## 📄 License

[MIT](LICENSE)
