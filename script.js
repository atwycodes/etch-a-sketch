// GENERATE GRID & ATTACH EVENT LISTENERS
let gridSize = 16
let totalCells = gridSize * gridSize;
let gridBox = document.querySelector('#grid-box');

const collection = document.getElementsByClassName('cell');

function makeGrid(gridSize) {
    // clear grid area when invoked again
    while (gridBox.firstChild) {
        gridBox.removeChild(gridBox.lastChild);
    }
    let gridDimensions = 500/gridSize;
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        gridBox.appendChild(row);
            
        for (let i = 0; i < gridSize; i++) {
            let cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            cell.style.width = `${gridDimensions}` + `px`
            cell.style.height = `${gridDimensions}` + `px`
            row.appendChild(cell);
            // attach event listener in each cell for colouring
            cell.addEventListener('mouseover', () => colourCell(cell));
        }
    }
}

//COLOUR & ERASER MODE
let colourMode = document.querySelector('#user-colour')
colourMode.addEventListener('input', () => console.log(colourMode.value));

function colourCell(cell) {
    cell.style.backgroundColor = `${colourMode.value}`
}

let eraserMode = document.querySelector('#eraser-mode')
eraserMode.addEventListener('input', () => console.log('eraser mode activated'));

function eraseCell(cell) {
    cell.style.backgroundColor = '#fdf5e6'
}

//CLEAR DRAWING GRID
let clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', () => clearGrid(totalCells));

function clearGrid(totalCells) {
    let clearColor = `#fdf5e6`;
    for (let i = 0; i < totalCells; i++) {
        collection[i].style.backgroundColor = clearColor;
    }
}

// TEST AREA
makeGrid(gridSize);

let currentMode = 'default'

// Conditions to change color
if (currentMode === 'default') {
    let currentColour = `${colourMode.value}`; 
} else if (currentMode === 'colour') {
    let currentColour = `${colourMode.value}`; 
} else if (currentMode === 'random') {
    let currentColour = ``; 
} else if (currentMode === 'eraser') {
    let currentColour = `#fdf5e6`;
}