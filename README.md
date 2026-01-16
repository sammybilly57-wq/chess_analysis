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

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```
   The backend will be available at `http://localhost:8000`.

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
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
3. (Note: The current implementation is an MVP skeleton. Full features are in development.)

## 📄 License

[MIT](LICENSE)
