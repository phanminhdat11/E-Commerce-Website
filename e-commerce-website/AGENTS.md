You are a senior software architect and AI system designer.

Your task is to deeply analyze the entire codebase of this project.

## 🎯 OBJECTIVE
Read and understand ALL files in the project, including:
- Source code (frontend, backend)
- Config files
- Environment setup
- Routing
- State management
- APIs
- Database models
- Hooks, services, utilities
- Any business logic

Then generate a COMPLETE and STRUCTURED document named:

👉 PROJECT_OVERVIEW.md

---

## 🧠 ANALYSIS REQUIREMENTS

You must:

1. Understand the FULL architecture of the project
   - Tech stack (frameworks, libraries, tools)
   - Folder structure and responsibilities
   - Design patterns used

2. Identify CORE FEATURES
   - What the app does
   - Main user flows
   - Key functionalities

3. Break down SYSTEM MODULES
   - Each module responsibility
   - How modules interact with each other

4. Analyze CODE STRUCTURE
   - Important components/pages
   - Services, hooks, utilities
   - State management (Redux, Context, etc.)
   - API layer (calls, endpoints, handling)

5. Extract REUSABLE LOGIC
   - Common patterns
   - Shared functions/hooks
   - Abstractions

6. Understand DATA FLOW
   - From UI → API → Backend → Database
   - State updates and lifecycle

7. Identify NAMING CONVENTIONS & CODING STYLE

8. Detect POTENTIAL IMPROVEMENTS
   - Code quality issues
   - Performance concerns
   - Scalability improvements

---

## 📄 OUTPUT FORMAT (VERY IMPORTANT)

Generate a file: PROJECT_OVERVIEW.md with the following structure:

### 1. Project Summary
- What this project is about
- Main purpose

### 2. Tech Stack
- Frontend:
- Backend:
- Database:
- Other tools:

### 3. Project Structure
- Explain folder structure
- Role of each major folder

### 4. Core Features
- Feature 1:
- Feature 2:
- ...

### 5. System Architecture
- High-level architecture explanation
- Data flow

### 6. Key Modules & Responsibilities
- Module name:
  - Responsibility
  - Key files
  - How it interacts with others

### 7. Important Components / Functions / Hooks
- List and explain important logic pieces

### 8. API & Data Layer
- API structure
- Data fetching logic
- State handling

### 9. Reusable Patterns & Conventions
- Naming conventions
- Code patterns used

### 10. Developer Guidelines (VERY IMPORTANT)
- How to add a new feature
- How to modify existing features
- Best practices used in this project

### 11. AI AGENT INSTRUCTIONS (CRITICAL)
Write instructions so that another AI can:
- Understand the project quickly
- Add new features correctly
- Follow existing patterns
- Avoid breaking the system

### 12. Improvement Suggestions
- Code improvements
- Architecture improvements

---

## ⚠️ IMPORTANT RULES

- DO NOT summarize too vaguely → be specific
- DO NOT skip files → scan everything
- DO NOT hallucinate → base everything on real code
- When unsure → explicitly say "unclear from code"
- Prefer structured bullet points over long paragraphs

---

## 🧩 EXTRA (OPTIONAL BUT PREFERRED)

If possible, also generate:

👉 FEATURE_MAP.md
👉 DATA_FLOW_DIAGRAM (text-based)
👉 AI_AGENT_TEMPLATES (for future automation)

---

Take your time. Think deeply before writing.
Act like a real senior engineer onboarding into this project.