const GRID_SIZE = 4;
let boardState = [];
let moveCount = 0;

const boardElement = document.getElementById('board');
const moveDisplay = document.getElementById('move-count');
const statusDisplay = document.getElementById('game-status');
const shuffleBtn = document.getElementById('shuffle-btn');

function countInversions(arr) {
  let inversions = 0;
  const filtered = arr.filter(n => n !== 0);
  for (let i = 0; i < filtered.length - 1; i++) {
    for (let j = i + 1; j < filtered.length; j++) {
      if (filtered[i] > filtered[j]) inversions++;
    }
  }
  return inversions;
}

function isSolvable(state) {
  const inversions = countInversions(state);
  const emptyIndex = state.indexOf(0);
  const emptyRowFromBottom = GRID_SIZE - Math.floor(emptyIndex / GRID_SIZE);
  return (emptyRowFromBottom % 2 === 0) ? (inversions % 2 !== 0) : (inversions % 2 === 0);
}

function generateSolvableBoard() {
  let state;
  do {
    state = Array.from({ length: 15 }, (_, i) => i + 1).concat(0);
    for (let i = state.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [state[i], state[j]] = [state[j], state[i]];
    }
  } while (!isSolvable(state) || isSolved(state));
  return state;
}

function isSolved(state) {
  for (let i = 0; i < 15; i++) {
    if (state[i] !== i + 1) return false;
  }
  return state[15] === 0;
}

function renderBoard() {
  boardElement.innerHTML = '';
  boardState.forEach((val, idx) => {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    if (val === 0) {
      tile.classList.add('empty');
    } else {
      tile.textContent = val;
      tile.addEventListener('click', () => handleTileClick(idx));
    }
    boardElement.appendChild(tile);
  });
}

function handleTileClick(index) {
  const emptyIndex = boardState.indexOf(0);
  const validMoves = [
    index - 1 >= 0 && index % GRID_SIZE !== 0 ? index - 1 : null,
    index + 1 < 16 && (index + 1) % GRID_SIZE !== 0 ? index + 1 : null,
    index - GRID_SIZE >= 0 ? index - GRID_SIZE : null,
    index + GRID_SIZE < 16 ? index + GRID_SIZE : null
  ];

  if (validMoves.includes(emptyIndex)) {
    [boardState[index], boardState[emptyIndex]] = [boardState[emptyIndex], boardState[index]];
    moveCount++;
    moveDisplay.textContent = moveCount;
    renderBoard();

    if (isSolved(boardState)) {
      statusDisplay.textContent = 'Solved!';
    }
  }
}

function initGame() {
  boardState = generateSolvableBoard();
  moveCount = 0;
  moveDisplay.textContent = moveCount;
  statusDisplay.textContent = 'In Progress';
  renderBoard();
}

shuffleBtn.addEventListener('click', initGame);
initGame();