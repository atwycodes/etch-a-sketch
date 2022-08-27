let gridBox = document.querySelector("#grid-box");


function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        // row.textContent = `R${i+1}`;
        gridBox.appendChild(row);
        // console.log(i);
        // console.log(row.className);
        for (let i = 0; i < gridSize; i++) {
            let cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            // cell.textContent = `C${i+1}`;
            row.appendChild(cell);
        }
    }
}