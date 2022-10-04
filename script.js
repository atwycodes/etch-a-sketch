// GENERATE GRID & ATTACH EVENT LISTENERS
let gridSize = document.querySelector('#grid-size');
gridSize.addEventListener('input', () => makeGrid(gridSize.value))
const gridBox = document.querySelector('#grid-box');
const collection = document.getElementsByClassName('cell');
makeGrid(16);

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

//CLEAR DRAWING GRID
const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', () => clearGrid());

function clearGrid() {
    let totalCells = gridSize.value * gridSize.value;
    for (let i = 0; i < totalCells; i++) {
        collection[i].style.backgroundColor = `#fdf5e6`;
    }
}

//DEFINING THE MODES
const colourMode = document.querySelector('#user-colour');
colourMode.addEventListener('click', () => activateMode(colourMode,eraserMode,randomMode))

const eraserMode = document.querySelector('#eraser-mode');
eraserMode.addEventListener('click', () => activateMode(eraserMode,colourMode,randomMode));

const randomMode = document.querySelector('#random-mode');
randomMode.addEventListener('click', () => activateMode(randomMode,eraserMode,colourMode));

function activateMode(selectedMode,otherMode1,otherMode2) {
     selectedMode.classList.add('active');
     otherMode1.classList.remove('active');
     otherMode2.classList.remove('active');
}

function colourCell(cell) {
    if (colourMode.className === 'active') {
        cell.style.backgroundColor = `${colourMode.value}`; 
    } else if (eraserMode.className === 'btn-input active') {
        let randomColour = ``;
        cell.style.backgroundColor = `${randomColour}`;
    } else if (randomMode.className === 'btn-input active') {
        cell.style.backgroundColor = `#fdf5e6`;
    }
}

// TEST AREA