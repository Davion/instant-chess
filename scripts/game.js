document.addEventListener('DOMContentLoaded', function () {
    const allSquares = document.querySelectorAll('#chessboard .square');

    allSquares.forEach(square => {
        square.addEventListener('dragstart', dragStart);
        square.addEventListener('dragover', dragOver);
        square.addEventListener('drop', dragDrop);
    });

    let startPositionId;
    let draggedElement;

    function dragStart(e) {
        startPositionId = e.target.parentNode.getAttribute('square-id');
        draggedElement = e.target;
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragDrop(e) {
        e.stopPropagation();

        // Testing functionality -- needs further development
        e.target.append(draggedElement);
    }
});