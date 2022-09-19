//EVENT LISTENERS

// GENERATE GRID & ATTACH EVENT LISTENERS
function makeGrid(gridSize) {
    let gridBox = document.querySelector('#grid-box');
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
                // attach event listener in each cell
                cell.addEventListener('mouseover', () => colourCell(cell))
        }
    }
}

//COLOUR CELL
let userColour = document.querySelector('#user-colour')
userColour.addEventListener('input', () => console.log(userColour.value));

function colourCell(cell) {
    cell.style.backgroundColor = `${userColour.value}`
}

// TEST AREA
makeGrid(20);

