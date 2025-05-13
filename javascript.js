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
button.textContent = "Create a grid";
document.body.appendChild(button);

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
    `);
document.body.appendChild(container);

const blocksPerSide = 16
const blocks = blocksPerSide * blocksPerSide
const size = 960 / blocksPerSide

for (let i = 0; i < blocks; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("style", `
        width: ${size}px;
        height: ${size}px;
        `);
    container.appendChild(grid);
}

const colorDiv = document.querySelectorAll(".grid");
colorDiv.forEach(function(div) {
    div.addEventListener("mouseover", function() {
        let randomR = Math.floor(Math.random() * 255);
        let randomG = Math.floor(Math.random() * 255);
        let randomB = Math.floor(Math.random() * 255);
        div.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    })
})