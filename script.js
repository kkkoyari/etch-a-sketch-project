const container = document.querySelector('#container');
const randomColoringText = document.querySelector('.random');
const randomColorCheckbox = document.querySelector('input.random');

const GRID_SIZE = 16;

function setCellColor (cell, isChecked) {
	if (isChecked) {
		let rgb1 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
		let rgb2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
		let rgb3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
		cell.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
	} else {
		cell.style.backgroundColor = "black";
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

		cell.style.width = `${cellWidth}px`;
		cell.style.height = `${cellHeight}px`;

		container.appendChild(cell);

		cell.addEventListener("mouseenter", () => {
			setCellColor(cell, randomColorCheckbox.checked);
		});
	}
}

createGrid(GRID_SIZE);

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

resizeButton.addEventListener("click", () => {
	const gridNumber = userInput.value;
	userInput.value = '';
	createGrid(gridNumber);
});