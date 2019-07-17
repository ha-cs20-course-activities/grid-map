// Grid Map

// Constants
const NUM_ROWS = 5;
const NUM_COLS = 5;

// DOM Elements
let gridEl = document.getElementById('grid');

// Global Variables
let grid = [
    [0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0],
    [2, 2, 0, 0, 1],
    [2, 2, 2, 0, 1]
];

let currentClass = 'water';

// Create map of divs based on grid
for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
        let divEl = document.createElement('div');
        if (grid[row][col] == 0) {
            divEl.classList.add('water');
        } else if (grid[row][col] == 1) {
            divEl.classList.add('rock');
        } else if (grid[row][col] == 2) {
            divEl.classList.add('grass');
        }
        divEl.dataset.row = row;
        divEl.dataset.col = col;
        divEl.addEventListener('click', cellClicked);
        gridEl.append(divEl);
    }
}

// Event Functions
function cellClicked(event) {
    // Update cell class to currentClass
    event.target.classList = "";
    event.target.classList.add(currentClass);

    // Update Grid
    let divRow = event.target.dataset.row;
    let divCol = event.target.dataset.col;
    if (currentClass == 'water') {
        grid[divRow][divCol] = 0;
    } else if (currentClass == 'rock') {
        grid[divRow][divCol] = 1;        
    } else if (currentClass == 'grass') {
        grid[divRow][divCol] = 2;
    }
    console.log(grid);
}

// Key Selection
document.addEventListener('keydown', keydownHandler);

function keydownHandler(event) {
    console.log(event.keyCode);
    if (event.code == 'KeyW') {
        currentClass = 'water';
    } else if (event.code == 'KeyR') {
        currentClass = 'rock';
    } else if (event.code == 'KeyG') {
        currentClass = 'grass';
    }
}