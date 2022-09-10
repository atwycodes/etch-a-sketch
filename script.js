//EVENT LISTENERS


// GENERATE GRID & ATTACH EVENT LISTENERS
function makeGrid(gridSize) {
    let gridDimensions = 500/gridSize;
    let gridBox = document.querySelector("#grid-box");
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
                // cell.addEventListener('click', function to color cell)
        }
    }
}

// FUNCTION TO COLOUR CELL
function colourCell(cell) {
    
}

// TEST AREA
makeGrid(16);

