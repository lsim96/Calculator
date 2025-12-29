# 🧮 React Calculator (TypeScript)

A clean and responsive calculator application built with **React + TypeScript**.  
This project demonstrates strong fundamentals in component design, state management, event handling, and UI styling.

Designed as a **portfolio project** to showcase modern frontend development practices.

---

## 🚀 Live Demo

👉 *(Add your deployed link here — Vercel / Netlify / GitHub Pages)*

---

## ✨ Key Features

- Basic arithmetic operations: `+`, `-`, `*`, `/`
- Clear (`AC`) and delete (`DE`) functionality
- Graceful error handling for invalid expressions
- Reusable and scalable button logic
- Type-safe event handling with TypeScript
- Clean, modern, and responsive UI

---

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **CSS**
- **Vite**

---

## 🧠 What This Project Demonstrates

- Proper React state management using hooks
- Avoidance of repetitive logic through reusable handlers
- Type-safe DOM event handling (`React.MouseEvent`)
- Clean component structure and readable code
- UI/UX attention to spacing, layout, and interaction
- Defensive programming with error handling

---

## 📁 Project Structure

src/
├── App.tsx # Calculator logic & UI
├── App.css # Styling
├── main.tsx # Application entry point


---

## ⚙️ How It Works

- All calculator buttons share a single click handler
- Button values are appended to state dynamically
- Expressions are evaluated using a scoped JavaScript function
- Invalid expressions are caught and displayed as `Error`

---

## 🧪 Getting Started Locally

### Clone the repository
```bash
git clone https://github.com/your-username/react-calculator.git

Install dependencies
npm install

Run the development server
npm run dev


Then open:

http://localhost:5173
