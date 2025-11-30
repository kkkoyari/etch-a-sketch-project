const container = document.querySelector('#container');

function createGrid (size) {
	while (container.firstChild) {
        parent.removeChild(parent.firstChild);
    }

	gridCount = size * size;

	const containerWidth = container.clientWidth;
	const containerHeight = container.clientHeight;
	
	const cellWidth = (containerWidth / size);
	const cellHeight = (containerHeight / size);

	for (let i = 0; i < gridCount; i++) {
		const cell = document.createElement('div');
		cell.classList.add("cell");

		cell.style.width = `${cellWidth}px`;
		cell.style.height = `${cellHeight}px`;
		cell.style.border = "0.1px solid #ccc";

		container.appendChild(cell);
	}
}

createGrid(16);