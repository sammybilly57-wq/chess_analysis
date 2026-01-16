---
document: PRD
product: Chess Game Review Web App
style: learning-first, coach-like
audience: all-levels
analysis: automatic, no-qna
engine: variable-depth
version: 1.0
---

# Chess Game Review Web App – Product Requirements Document (PRD)

## 1. Product Overview

**Working Name:** ChessLens  
**Category:** Chess Education / Game Analysis  
**Platform:** Web (Desktop-first, Mobile responsive)

### Problem Statement
Most chess analysis tools rely heavily on engine evaluations without explaining the reasoning behind moves in a human-understandable way. Players often see mistakes but fail to learn from them.

### Solution
A web-based chess game review application that automatically analyzes games and provides **coach-like explanations**, backed by engine accuracy, without requiring users to ask questions.

### Core Value Proposition
> “This feels like a personal chess coach reviewing my game.”

---

## 2. Goals & Success Metrics

### Goals
- Enable meaningful learning from game reviews
- Reduce cognitive load by eliminating manual Q&A
- Support all skill levels with adaptive explanations
- Optimize engine usage through variable-depth analysis

### Success Metrics
- % of users completing a full game review
- Average time spent on the review page
- Weekly active users (WAU)
- Repeat game uploads per user
- User feedback on explanation quality

---

## 3. Target Audience

### Audience Scope
All levels (Beginner → Advanced), with automatic adaptation.

### Personas

#### Beginner (≤1200 ELO)
- Principle-based explanations
- Minimal variations
- Focus on blunders and basic tactics

#### Intermediate (1200–1800 ELO)
- Positional ideas with short concrete lines
- Clear plans and alternatives

#### Advanced (1800+ ELO)
- Precise evaluations
- Deeper engine-backed variations
- Reduced verbosity

---

## 4. Core Features

### 4.1 Game Input
- Upload PGN file
- Paste PGN text
- Built-in board play (Phase 2)
- Import from Lichess / Chess.com (Phase 2)

---

### 4.2 Automatic Hybrid Game Review (Primary Feature)

- No user Q&A
- System proactively explains:
  - Blunders, mistakes, inaccuracies
  - Missed tactics
  - Incorrect plans
  - Phase transitions (opening, middlegame, endgame)

**Explanation Style: Hybrid**
- Coach-style narrative (principles and plans)
- Engine-backed validation (evaluations and best lines)

**User Controls**
- Explanation depth: Simple / Balanced / Deep
- Toggle engine lines on/off

---

### 4.3 Move-Level Analysis

For critical moves:
- Engine evaluation before and after the move
- Natural language explanation
- Best alternative move
- Short supporting line (optional)

---

### 4.4 Concept Tagging

Automatic tagging of:
- Tactical themes (fork, pin, skewer, discovered attack)
- Positional concepts (weak squares, open files, pawn structure)
- Opening principles
- Endgame fundamentals

---

### 4.5 Learning Summary

At the end of each review:
- Strengths demonstrated
- Common mistakes
- 2–3 actionable improvement tips
- “What to focus on next” section

---

## 5. Explanation System Design

### No User Q&A
- Users do not ask questions
- System decides what is important and explains it automatically

### Explanation Types
1. Why the move fails
2. Better alternative and reasoning
3. Plan guidance
4. Missed opportunity

### Adaptation Rules
- Beginner: principles over variations
- Intermediate: principles + short lines
- Advanced: concrete lines + evaluations

---

## 6. Engine Depth Strategy

### Variable Depth (Cost-Aware)
- Shallow depth for forced or obvious moves
- Deep analysis for:
  - Blunders
  - Tactical positions
  - Critical middlegame moments
  - Endgames

### Depth Controller
- Determines depth per position
- Flags critical moments
- Balances accuracy vs compute cost

---

## 7. User Flow

1. User lands on homepage
2. Uploads or pastes PGN
3. Selects explanation depth
4. Automatic analysis begins
5. User navigates move-by-move
6. System highlights and explains key moments
7. User reviews final learning summary

---

## 8. Non-Functional Requirements

- Explanation latency under 3–5 seconds
- Asynchronous analysis pipeline
- Responsive UI (desktop and mobile)
- Secure PGN handling
- Scalable backend architecture

---

## 9. Tech Stack (Suggested)

### Frontend
- React / Next.js
- Interactive chessboard
- Evaluation graph
- Explanation panels

### Backend
- Python (FastAPI)
- Stockfish engine
- LLM for explanation generation

### Infrastructure
- Async job queue (Celery / SQS)
- Position-level caching
- Cost-aware engine depth controller

---

## 10. Monetization

### Free Tier
- Limited game reviews per day
- Standard explanation depth

### Pro Tier
- Unlimited reviews
- Deep explanations
- Full engine lines
- Advanced learning summaries

---

## 11. Product Positioning

**Primary Differentiation**
> “A personal chess coach that explains your games automatically.”

- Learning-first approach
- Insight-driven explanations
- No chat or questioning
- No engine overload

---

## 12. Future Enhancements

- Opening repertoire analysis
- Pattern tracking across games
- Personalized training plans
- Voice-based explanations
- Coach persona modes

---

## 13. MVP Definition

### MVP Includes
- PGN upload
- Automatic hybrid review
- Variable-depth engine analysis
- Move-level explanations
- Learning summary

### Excluded from MVP
- User Q&A
- External platform imports
- Voice features
- Advanced personalization
