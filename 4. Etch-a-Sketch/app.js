const masterDiv = document.querySelector('#grid-master');
const reset = document.querySelector('#reset')
const changeRes = document.querySelector('#changeRes')
let gridInput = 16;


// Functions:
// 1. makegrid(): Will take pixel as input and create new grid
// 2. clearGrid(): clear the grid
//
// Event Listeners:
// 1. When User Clicks on "Change Resolution Button" -> Take Prompt Input and Call makegrid()
// 2. When User Clicks on "Reset" Button -> Call ClearGrid(), and then makeGrid()


function makegrid(x) {
    let gridSize = x * x - 1;

    //for more info on fr: https://css-tricks.com/introduction-fr-css-unit/

    masterDiv.style.gridTemplateColumns = `repeat(${x}, 1fr)`
    masterDiv.style.gridTemplateRows = `repeat(${x}, 1fr)`
    
    for (i = 0; i <= gridSize; ++i) {
        let gridDiv = document.createElement('div')
        gridDiv.className = 'gridDivs'
        masterDiv.appendChild(gridDiv)
        gridDiv.addEventListener('mouseover', function(e) {
            this.style.backgroundColor = 'black';
        });
    }
}



function clearGrid(x) {
    masterDiv.innerHTML = ''
}


changeRes.addEventListener('click', function() {
    clearGrid(gridInput);
    gridInput = prompt('please select new resolution please put within 1 - 64 range');
    if (gridInput > 64 || gridInput < 1) {
        alert('Out of Range');
        return;
    }
    makegrid(gridInput)
});



reset.addEventListener('click', function() {
    clearGrid(gridInput);
    makegrid(gridInput);
});



makegrid(gridInput)