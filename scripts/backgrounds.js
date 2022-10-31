

const backgrounds = document.querySelector('#backgrounds');
const firstPattern = document.querySelector('.patterns');

let activePattern = firstPattern
activePattern.style.display = "block";

// document.onclick = function(x){
//     const oldPaturn = activePattern;
//     activePattern = activePattern.nextElementSibling ? activePattern.nextElementSibling : firstPattern;
//     oldPaturn.style.display = "none";
//     activePattern.style.display = "block";
// }


const wrapper = document.getElementById('tiles');

let columns = Math.floor(document.body.clientWidth /50),
    rows = Math.floor(document.body.clientHeight /50);

// console.log(document.body.clientHeight)

const createTile = index => {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}

wrapper.style.setProperty("--columns", columns);
wrapper.style.setProperty("--rows", rows);
createTiles(columns * rows);

const createGrid = () => {
    wrapper.innerHTML = "";

    let columns = Math.floor(document.body.clientWidth /50),
    rows = Math.floor(document.body.clientHeight /50);
    
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    createTiles(columns * rows);
}


window.onresize = () => createGrid();