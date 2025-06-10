// show grid and take care of events
function showGrid(numberOfSquares) {
    for (let i = 0; i < numberOfSquares ** 2; i++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'newDiv')
        // make grid n*n
        newDiv.setAttribute('style', `height: ${(600 - (numberOfSquares * 2)) / numberOfSquares}px; width: ${(600 - (numberOfSquares * 2)) / numberOfSquares}px;`)
        container.appendChild(newDiv);
        newDiv.addEventListener('mouseover', (e) => {
            // generate random background color for divs that we hovered over
            e.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        })
    }
}

// generate grid
function generateGrid() {
    if (changeSquares == '' || isNaN(changeSquares) == true) {
        changeSquares = 16;
        const defaultSquares = document.createElement('h2');
        defaultSquares.textContent = 'Default grid is 16x16 -> Invalid input (non-number, nothing)';
        defaultSquares.setAttribute('style', 'text-align: center; padding: 20px; border-bottom: 1px solid white; width: 60%; margin: auto;')
        showGrid(changeSquares);
        document.body.insertBefore(defaultSquares, container);
    } else if (typeof changeSquares == 'number' && changeSquares <= 100) {
        showGrid(changeSquares);
    } else if (changeSquares > 100) {
        document.body.childNodes.forEach(element => {
            if (element.nodeType === Node.ELEMENT_NODE) {
                element.style.display = 'none'
            }
        });

        const limit = document.createElement('h2');
        limit.textContent = 'You exceed the limit!'
        limit.setAttribute('class', 'limit')
        document.body.appendChild(limit);
    }
}

// select div that contain all smaller divs
let container = document.querySelector('#container');

let changeSquares = Number(prompt('How much squares do you want in one row?'));

generateGrid();

const changeBtn = document.querySelector('#change');

changeBtn.addEventListener('click', () => {
    container.childNodes.forEach(element => {
        if (element.nodeType === Node.ELEMENT_NODE) {
            element.style.display = 'none'
        }
    });
    changeSquares = Number(prompt('How much squares do you want in one row?'));
    generateGrid();
})