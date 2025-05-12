document.body.setAttribute(
    "style", "margin: 0; display: flex; flex-direction: column; align-items: center")

const title = document.createElement("h1");
title.classList.add("title");
title.setAttribute("style", "font-family: 'Brush Script MT'");
title.textContent = "Etch A Sketch";
document.body.appendChild(title);

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
    flex-grow: 1;
    `);
document.body.appendChild(container);

const blocks = 16
const columns = Math.ceil(Math.sqrt(blocks));
const rows = Math.ceil(blocks / columns);
const blockWidth = 960 / columns;
const blockHeight = 960 / rows;

for (let i = 0; i < blocks; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("style", `
        background-color: pink;
        width: ${blockWidth}px;
        height: ${blockHeight}px;
        `);
    container.appendChild(grid);
}