const board = document.querySelector('#board');
const colors = ['#f40909', '#1242ed', '#29f233', '#f2e941', '#b50de8', '#f22821', '#0c19a0', '#1f8760', '#eaed4b', '#90119e'];
const SQUARES_NUMBER = 9999;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () =>
        setColor(square));

    square.addEventListener('mouseleave', () =>
        removeColor(square));

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 20px ${color}, 0 0 30px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
