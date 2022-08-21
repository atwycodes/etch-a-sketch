let gridBox = document.querySelector("#grid-box");


function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        row.textContent = `${i+1}`;
        gridBox.appendChild(row);
        // console.log(i);
        // console.log(row.className);
    }
}