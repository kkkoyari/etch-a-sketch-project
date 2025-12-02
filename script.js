const container = document.querySelector('#container');

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
			cell.style.backgroundColor = "black";
		});
	}
}

createGrid(16);

const body = document.querySelector('body');
const userInputText = document.createElement('p');
userInputText.textContent = "Enter a grid size per side:"
const userInput = document.createElement('input');
const resizeButton = document.createElement('button');
resizeButton.textContent = "Resize";

body.insertBefore(userInput, container);
body.insertBefore(userInputText, userInput);
body.insertBefore(resizeButton, container);

resizeButton.addEventListener("click", () => {
	gridNumber = userInput.value;
	userInput.value = '';
	createGrid(gridNumber);
});