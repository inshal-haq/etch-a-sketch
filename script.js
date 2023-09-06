const container = document.querySelector('#container');

// create 16x16 square grid
for (let row = 1; row <= 16; row++) {
  const rowContainer = document.createElement('div');
  rowContainer.classList.add('row');
  container.appendChild(rowContainer);

  for (let col = 1; col <= 16; col++) {
    const box = document.createElement('div');
    box.classList.add('box');
    rowContainer.appendChild(box);
  }
}

// on mouse enter, turn box red
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = 'red';
  });
});