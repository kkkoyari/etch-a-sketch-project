const container = document.querySelector('#container');

const randomColoringText = document.querySelector('.random');
const randomColorCheckbox = document.querySelector('input.random');

const shadowModeCheckbox = document.querySelector('input.shading');

const body = document.querySelector('body');
const userControlPanel = document.createElement('div');

const userInputText = document.createElement('p');
userInputText.textContent = "Enter a grid size per side:"

const userInput = document.createElement('input');

const resizeButton = document.createElement('button');
resizeButton.textContent = "Resize";

body.insertBefore(userControlPanel, randomColoringText);
userControlPanel.appendChild(userInputText);
userControlPanel.appendChild(userInput);
userControlPanel.appendChild(resizeButton);

const colorControlPanel = document.createElement('div');
const userColorInput = document.createElement('input')
userColorInput.setAttribute("type", "color");
colorControlPanel.appendChild(userColorInput);
body.appendChild(colorControlPanel);

let currentColor = "black";

userColorInput.addEventListener("input", () => {
	currentColor = userColorInput.value;
})

const GRID_SIZE = 16;

shadowModeCheckbox.addEventListener ("click", () => {
	if (shadowModeCheckbox.checked) {
		randomColorCheckbox.checked = false;
	}
})

randomColorCheckbox.addEventListener ("click", () => {
	if (randomColorCheckbox.checked) {
		shadowModeCheckbox.checked = false;
	}
})

let isDrawing = false;

document.addEventListener("mousedown", () => {
	isDrawing = true;
});

document.addEventListener("mouseup", () => {
	isDrawing = false;
});

function setCellColor (cell) {
	if (randomColorCheckbox.checked) {
		let rgb1 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
		let rgb2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
		let rgb3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
		cell.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;

	} else if (shadowModeCheckbox.checked) {
		let cellOpacity = Number(cell.dataset.opacity);
		let newCellOpacity = cellOpacity + 1;
		
		cell.dataset.opacity = String(newCellOpacity);
		cell.style.backgroundColor = currentColor;
		cell.style.opacity = newCellOpacity / 10 ;

	} else {
		cell.style.opacity = 1;
		cell.style.backgroundColor = currentColor;

	}
}

function createGrid (size) {
	while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

	const gridCount = size * size;

	const containerWidth = container.clientWidth;
	const containerHeight = container.clientHeight;
	
	const cellWidth = (containerWidth / size);
	const cellHeight = (containerHeight / size);

	for (let i = 0; i < gridCount; i++) {
		const cell = document.createElement('div');
		cell.classList.add("cell");
		cell.dataset.opacity = "0";

		cell.style.width = `${cellWidth}px`;
		cell.style.height = `${cellHeight}px`;

		container.appendChild(cell);

		cell.addEventListener("mouseenter", () => {
			if (isDrawing) {
				setCellColor(cell);
			}	
		});

		cell.addEventListener("click", () => {
			setCellColor(cell);
		});
	}
}

createGrid(GRID_SIZE);

resizeButton.addEventListener("click", () => {
	const gridNumber = userInput.value;
	userInput.value = '';
	createGrid(gridNumber);
});