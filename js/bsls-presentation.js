function generate() {
    let noOfRows = document.getElementById('rownumber').value;
    let noOfCols = document.getElementById('colnumber').value;
    let cellData = document.getElementById('celldata').value;
    let cellHeight = document.getElementById('cellheight').value;
    let cellWidth = document.getElementById('cellwidth').value;
    let tableBody = document.getElementById("myTBody");
    tableBody.innerHTML = "";
    for (let y = 0; y < noOfRows; y++) {
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);
        for (let x = 0; x < noOfCols; x++) {
            let td = document.createElement('TD');
            if (cellHeight) {
                td.height = cellHeight;
            } else {
                td.height = 10;
            }
            if (cellWidth) {
                td.width = cellWidth;
            } else {
                td.width = 10;
            }
            let cellID = "cell [" + x + ", " + y + "]";
            if (cellData) {
                td.appendChild(document.createTextNode(cellData));
            } else {
                td.appendChild(document.createTextNode("Cell " + x + "," + y));
            }
            tr.appendChild(td);
            td.setAttribute("id", cellID.toString());
            td.addEventListener("click", cellClicked);
            td.addEventListener("mouseover", cellMouseOver);
        }
    }
}

function cellMouseOver() {
    this.style.backgroundColor = document.getElementById('sel_color').value;
}

function cellClicked() {
    this.style.backgroundColor = "white";
}

function clear_table() {
    let tableBody = document.getElementById("myTBody");
    tableBody.innerHTML = "";
}
