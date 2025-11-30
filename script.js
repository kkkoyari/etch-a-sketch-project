const container = document.querySelector('#container');

function createGrid (size) {
	while (container.firstChild) {
        parent.removeChild(parent.firstChild);
    }

	gridCount = size * size;

	const containerSize = container.getBoundingClientRect();
	const containerWidth = containerSize.width;
	const containerHeight = containerSize.height;
	
	const cellWidth = (containerWidth / size);
	const cellHeight = (containerHeight / size);

	for (let i = 0; i < gridCount; i++) {
		const cell = document.createElement('div');
		cell.classList.add("cell");

		cell.style.width = `${cellWidth}px`;
		cell.style.height = `${cellHeight}px`;
		cell.style.border = "1px solid #ccc";

		container.appendChild(cell);
	}
}

createGrid(16);