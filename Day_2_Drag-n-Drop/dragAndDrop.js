const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragenter', dragEnter);
    placeholder.addEventListener('dragover', dragOver);
    placeholder.addEventListener('dragleave', dragLeave);
    placeholder.addEventListener('drop', dragDrop);
}


function dragstart(event) {
    // console.log('drag start', this);
    // console.log('drag start', event.target);
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add
        ('hide'), 0)
}

function dragend(event) {
    // console.log('drag end');
    // event.target.classList.remove('hold', 'hide');
    event.target.className = 'item';
}

function dragEnter(event) {
    event.target.classList.add('hovered');
}

function dragOver(event) {
    event.preventDefault();
}

function dragLeave(event) {
    event.target.classList.remove('hovered');
}

function dragDrop(event) {
    event.target.classList.remove('hovered');
    event.target.append(item)
}