# The Game of 15: Algorithmic Solvability and DOM Manipulation

**Author:** Shreshth Mehrotra  
**Institution:** SRM Institute of Science and Technology  
**Project Type:** Full-Stack Web Development Case Study  

---

## 📌 Project Overview
This repository contains the implementation of the classic "Game of 15" sliding puzzle, developed as a technical case study. The project focuses on rendering a 4x4 grid of tiles numbered 1-15, leaving one empty slot. The primary objective is to rearrange the randomly shuffled tiles into sequential order by sliding adjacent tiles into the empty space.

Beyond a simple visual layout, this project implements strict mathematical parity checking to ensure the initial randomized state is always solvable, alongside optimized DOM event handling for smooth user interaction.

## 🚀 Key Features
* **Mathematical State Generation:** Utilizes inversion counting and row-parity logic to guarantee that the generated puzzle can be solved.
* **Dynamic DOM Manipulation:** Leverages vanilla JavaScript to map matrix coordinates to HTML elements and handle adjacent tile swapping.
* **Responsive CSS Grid:** Employs modern CSS Grid architecture to maintain a stable, scalable 4x4 matrix layout.
* **Real-time State Evaluation:** Tracks user moves and continuously monitors the matrix array to detect a winning state.

## 🧠 Theoretical Foundation (Solvability Proof)
A completely random placement of 15 tiles on a 4x4 grid has a 50% chance of being mathematically unsolvable. To prevent this, the engine evaluates the permutation using the following theorem:
* **Inversion Count:** The number of pairs of tiles $(a, b)$ where $a$ appears before $b$, but $a > b$.
* **Grid Parity:** On an even-width grid ($N=4$), a state is solvable if and only if the number of inversions plus the row of the empty square (counted from the bottom) is odd. 

## 🛠️ Technical Stack
* **Structure:** Semantic HTML5
* **Styling:** CSS3 (Variables, Grid, Flexbox, Transitions)
* **Logic:** Vanilla JavaScript (ES6+)

## 💻 Local Execution
1. Clone the repository: `git clone https://github.com/yourusername/game-of-15-casestudy.git`
2. Navigate to the directory: `cd game-of-15-casestudy`
3. Open `index.html` in any modern web browser to run the application. No local server or build tools are required.