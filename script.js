// GENERATE GRID & ATTACH EVENT LISTENERS
let gridSize = 16
const totalCells = gridSize * gridSize;
const gridBox = document.querySelector('#grid-box');
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

//DEFINING THE MODES
let currentMode = 'default'

const colourMode = document.querySelector('#user-colour');
colourMode.addEventListener('click', () => activateMode(colourMode))

const eraserMode = document.querySelector('#eraser-mode');
eraserMode.addEventListener('click', () => activateMode(eraserMode));

const randomMode = document.querySelector('#random-mode');
randomMode.addEventListener('click', () => activateMode(randomMode));

function activateMode(selectedMode,otherMode1,otherMode2) {
     selectedMode.classList.add('active');
     otherMode1.classList.remove('active');
     otherMode2.classList.remove('active');
}

// pending active state logic
function colourCell(cell) {
    if (currentMode === 'default') {
        cell.style.backgroundColor = `${colourMode.value}`; 
    } else if (currentMode === 'colour') {
        cell.style.backgroundColor = `${colourMode.value}`; 
    } else if (randomMode === 'Random Mode') {
        let randomColour = 
        cell.style.backgroundColor = `${randomColour}`;
    } else if (eraserMode === 'Eraser Mode') {
        cell.style.backgroundColor = `#fdf5e6`;
    }
}

//CLEAR DRAWING GRID
const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', () => clearGrid(totalCells));

function clearGrid(totalCells) {
    let clearColor = `#fdf5e6`;
    for (let i = 0; i < totalCells; i++) {
        collection[i].style.backgroundColor = clearColor;
    }
}

// TEST AREA
makeGrid(gridSize);
