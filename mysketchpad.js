const button = document.querySelector('button');
button.onclick = function() {
    let section = document.querySelector("#parentDiv");
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
    let horizontalCells = prompt("How much horizontal cells on the page? (max = 100)", 16);
    if(checkCellsLimitMore100(horizontalCells)) return;
    let verticalCells = prompt("How much vertical cells  on the page? (max = 100)", 10);
    if(checkCellsLimitMore100(verticalCells)) return;
    let cellHeight = 600/verticalCells + 'px';
    // console.log(height);
    let parentDiv = document.getElementById('parentDiv');
    for (let i = 1; i <= horizontalCells; i++ ) {
        let newDiv = document.createElement('div');
        newDiv.className = 'line';
        newDiv.style.height = cellHeight;
        parentDiv.appendChild(newDiv);
        for (let j = 1; j <= horizontalCells; j++ ) {
            let newDivLine = document.createElement('div');
            newDivLine.className = 'cell';
            newDiv.appendChild(newDivLine);
        }   
    }
    paintCell('mouseover');
    paintCell('mouseout');
}


function paintCell(mouseState, color) {
    const cell = document.querySelectorAll('div.cell');
    // console.log(cell[0]);
    cell.forEach((elem) => {
        elem.addEventListener(mouseState, function (e) {
          if(mouseState == 'mouseover'){
              e.target.style.background = 'blue';
          }
          else {
            e.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
            
          }
        });
      });
}

function addDives(newClassName){
    let newDiv = document.createElement('div');
    newDiv.className = newClassName;
}

function checkCellsLimitMore100(cells){
    if (cells > 100 || isNaN(cells)) {
        alert(`${cells} more than 100 or NaN! Let's try again`);
        return 1;
    }
    return 0;
}