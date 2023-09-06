const container = document.querySelector('#container');

let squaresPerSide = 16;

// user can input squaresPerSide
const changeGridBtn = document.querySelector('#changeGridBtn');
changeGridBtn.addEventListener('click', () => {
  squaresPerSide = prompt('Enter number of squares per side: ');
  if (!squaresPerSide || squaresPerSide > 100 || squaresPerSide < 0) {
    squaresPerSide = 16;
  }

  removeGrid();
  drawGrid();
});

drawGrid();

function drawGrid() {
  // create n x n square grid
  for (let row = 1; row <= squaresPerSide; row++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row');
    container.appendChild(rowContainer);
  
    for (let col = 1; col <= squaresPerSide; col++) {
      const box = document.createElement('div');
      box.classList.add('box');

      // make boxes fit in 640px row width
      box.style.width = `${640 / squaresPerSide}px`;
      box.style.height = `${640 / squaresPerSide}px`;

      rowContainer.appendChild(box);
    }
  }

  // on mouse enter, turn box red
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    let opacity = 0.1;
    box.addEventListener('mouseenter', () => {
      // increase opacity progressively by 10%
      if (opacity !== 1) opacity += 0.1;

      box.style.backgroundColor = `rgba(${randomRgbColor()},${opacity})`;
      // box.style.backgroundColor = `rgba(0,0,0,${opacity})`;
    });
  });
}

function removeGrid() {
  const rows = document.querySelectorAll('.row');
  rows.forEach(row => row.remove());
}

function randomRgbColor() {
  let r = Math.floor(Math.random() * 256); 
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return r + ',' + g + ',' + b;
}