document.addEventListener('DOMContentLoaded', function () {
    const chessboard = document.getElementById('chessboard');
  
    // Function to create chessboard squares
    function createChessboard() {
      let increment = 1;
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          const square = document.createElement('div');
          square.setAttribute('sqare-id', increment);
          square.classList.add('square');
          if (row % 2 == 0) {
            if(col % 2 == 0) {
                square.classList.add('light-color');
            } else {
                square.classList.add('dark-color');
            }
          } else {
            if(col % 2 == 0) {
                square.classList.add('dark-color');
            } else {
                square.classList.add('light-color');
            }
          }
          if(row > 1 && row < 6) {
            square.innerHTML = ''
          } else if(row == 1 || row == 6) {
            square.innerHTML = pawn;
            square.firstChild.firstChild.classList.add(row == 6 ? 'white-piece' : 'black-piece');
            square.firstChild?.setAttribute('draggable', true);
          } else if(row == 0 || row == 7) {
            if(col == 0 || col == 7){
              square.innerHTML = rook;
            } else if(col == 1 || col == 6) {
              square.innerHTML = knight;
            } else if(col == 2 || col == 5) {
              square.innerHTML = bishop;
            } else if(col == 3) {
              square.innerHTML = queen;
            } else if(col == 4) {
              square.innerHTML = king;
            }
            square.firstChild.firstChild.classList.add(row == 7 ? 'white-piece' : 'black-piece');
            square.firstChild?.setAttribute('draggable', true);
          }
          chessboard.appendChild(square);
          increment++;
        }
      }
    }
  
    // Call the function to create chessboard squares
    createChessboard();
  });
  