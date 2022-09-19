// GENERATE GRID & ATTACH EVENT LISTENERS
let gridSize = 16

let gridBox = document.querySelector('#grid-box');
function makeGrid(gridSize) {
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
                cell.addEventListener('mouseover', () => colourCell(cell))
        }
    }
}

//COLOURING CELL
let userColour = document.querySelector('#user-colour')
userColour.addEventListener('input', () => console.log(userColour.value));

function colourCell(cell) {
    cell.style.backgroundColor = `${userColour.value}`
}

//CLEAR DRAWING GRID
let clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', () => clearGrid(gridSize));

function clearGrid(gridSize) {
    const collection = document.getElementsByClassName('cell');     
    let n = gridSize * gridSize;
    console.log(n);
    let clearColor = `#fdf5e6`;

    for (let i = 0; i < n; i++) {
        collection[i].style.backgroundColor = clearColor;
    }
}

// TEST AREA
makeGrid(gridSize);