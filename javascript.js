document.body.setAttribute(
    "style", "margin: 0; display: flex; flex-direction: column; align-items: center")

const title = document.createElement("h1");
title.classList.add("title");
title.setAttribute("style", `
    font-family: 'Brush Script MT';
    margin: 20px 0 0 0;
    `);
title.textContent = "Etch A Sketch";
document.body.appendChild(title);

const button = document.createElement("button");
button.classList.add("button");
button.setAttribute("style", `
    margin: 20px 0;
    padding: 8px 16px;
    `)
button.textContent = "Create new grid";
document.body.appendChild(button);

let blocksPerSide = 16;

const container = document.createElement("div");
container.classList.add("container");
container.setAttribute(
    "style",
    `
    width: 960px;
    height: 960px;
    border-style: solid;
    border-color: red;
    border-radius: 10px;
    border-width: 10px;
    display: flex;
    flex-wrap: wrap;
    background-color: black;
    opacity: 1
    `);
document.body.appendChild(container);

function colorDivs() {
    const colorDiv = document.querySelectorAll(".grid");
    colorDiv.forEach(function(div) {
        div.addEventListener("mouseover", function() {
            let randomR = Math.floor(Math.random() * 255);
            let randomG = Math.floor(Math.random() * 255);
            let randomB = Math.floor(Math.random() * 255);
            let checkColor = window.getComputedStyle(div).backgroundColor;
            if (checkColor === "rgb(192, 192, 192)") {
                div.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            } else {
                let checkOpacity = parseFloat(window.getComputedStyle(div).opacity);
                if (checkOpacity <= 1 && checkOpacity > 0) {
                    div.style.opacity = checkOpacity - 0.1
                }
            }
        })
    })
}

function createGrid(numberOfBlocksPerSide) {
    numberOfBlocksPerSide = blocksPerSide * blocksPerSide
    const size = 960 / blocksPerSide
    for (let i = 0; i < numberOfBlocksPerSide; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.setAttribute("style", `
            width: ${size}px;
            height: ${size}px;
            background-color: rgb(192, 192, 192)
            `);
        container.appendChild(grid);
    }
    colorDivs();
}

createGrid(blocksPerSide);

function removeGrid() {
    const element = document.querySelector(".container");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };
};

button.addEventListener("click", () => {
    // do {
    //     blocksPerSide = parseInt(prompt("Enter number of blocks per side between 1 - 64."));
    // } while (isNaN(blocksPerSide) || blocksPerSide < 1 || blocksPerSide > 64);

    while (true) {
        blocksPerSide = parseInt(prompt("Enter number of blocks per side between 1 - 64."));
        if (isNaN(blocksPerSide)) {
            return
        }
        else if (blocksPerSide > 0 && blocksPerSide < 65) {
            break
        }
        alert("Please enter a valid value.")
    }


    // blocksPerSide = parseInt(prompt("Enter number of blocks per side between 1 - 100."));
    removeGrid();
    createGrid(blocksPerSide);
})
