const cell = document.querySelector('#cell');
const btnX = document.querySelector('#btnX');
const btn0 = document.querySelector('#btn0');
const board = document.querySelectorAll('.cell');
const hd = document.querySelector('#hd');
const modal = document.querySelector('#modal');
const modal1 = document.querySelector('#modal1');
const close = document.querySelector('#close');
const closed = document.querySelector('#closed');
// combinatsiya
const cell1 = document.querySelector('.cell1');
const cell2 = document.querySelector('.cell2');
const cell3 = document.querySelector('.cell3');
const cell4 = document.querySelector('.cell4');
const cell5 = document.querySelector('.cell5');
const cell6 = document.querySelector('.cell6');
const cell7 = document.querySelector('.cell7');
const cell8 = document.querySelector('.cell8');
const cell9 = document.querySelector('.cell9');

// let x = 'x';
// let nol = '0'
btnX.addEventListener('click', () => {
    btn0.style.display = 'none'
    hd.style.display = 'none';
    board.forEach((board) => {
        board.addEventListener('click', () => {
            board.textContent = 'x';
            hd.style.display = 'grid';
            btn0.style.display = 'block'
            btnX.style.display = 'none'
            if (cell1.textContent == 'x' && cell2.textContent == 'x' && cell3.textContent == 'x') {
                modal.style.display = 'flex';
            }
             else if (cell4.textContent == 'x' && cell5.textContent == 'x' && cell6.textContent == 'x') {
                modal.style.display = 'flex';
            } else if (cell7.textContent == 'x' && cell8.textContent == 'x' && cell9.textContent == 'x') {
                modal.style.display = 'flex';
            } else if (cell1.textContent == 'x' && cell4.textContent == 'x' && cell7.textContent == 'x') {
                modal.style.display = 'flex';
            } else if (cell2.textContent == 'x' && cell5.textContent == 'x' && cell8.textContent == 'x') {
                modal.style.display = 'flex';
            } else if (cell3.textContent == 'x' && cell6.textContent == 'x' && cell9.textContent == 'x') {
                modal.style.display = 'flex';
            } else if (cell1.textContent == 'x' && cell5.textContent == 'x' && cell9.textContent == 'x') {
                modal.style.display = 'flex';
            } else if (cell3.textContent == 'x' && cell5.textContent == 'x' && cell7.textContent == 'x') {
                modal.style.display = 'flex';
            }
        })
    });
})

btn0.addEventListener('click', () => {
    btnX.style.display = 'none'
    hd.style.display = 'none';
    board.forEach((board) => {

        board.addEventListener('click', () => {
            board.textContent = '0';
            btn0.style.display = 'none'
            hd.style.display = 'grid';
            btnX.style.display = 'block'
            if (cell1.textContent == '0' && cell2.textContent == '0' && cell3.textContent == '0') {
                modal1.style.display = 'flex';
            } else if (cell4.textContent == '0' && cell5.textContent == '0' && cell6.textContent == '0') {
                modal1.style.display = 'flex';
            } else if (cell7.textContent == '0' && cell8.textContent == '0' && cell9.textContent == '0') {
                modal1.style.display = 'flex';
            } else if (cell1.textContent == '0' && cell4.textContent == '0' && cell7.textContent == '0') {
                modal1.style.display = 'flex';
            } else if (cell2.textContent == '0' && cell5.textContent == '0' && cell8.textContent == '0') {
                modal1.style.display = 'flex';
            } else if (cell3.textContent == '0' && cell6.textContent == '0' && cell9.textContent == '0') {
                modal1.style.display = 'flex';
            } else if (cell1.textContent == '0' && cell5.textContent == '0' && cell9.textContent == '0') {
                modal1.style.display = 'flex';
            } else if (cell3.textContent == '0' && cell5.textContent == '0' && cell7.textContent == '0') {
                modal1.style.display = 'flex';
            }
        })
    });
})


close.addEventListener('click', () => {
    modal.style.display = 'none';
    board.forEach((board) => {
        board.textContent = '';
    });
    btn0.style.display = 'block'
    btnX.style.display = 'block'
})

closed.addEventListener('click', () => {
    modal1.style.display = 'none';
    board.forEach((board) => {
        board.textContent = '';
    });
    btn0.style.display = 'block'
    btnX.style.display = 'block'
})