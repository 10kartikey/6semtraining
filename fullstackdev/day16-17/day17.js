function koifunction() {
    document.getElementsByTagName('h1')[0].style.backgroundColor = 'pink'
}

var heading1 = document.getElementsByTagName('h1')[0]
heading1.addEventListener('mouseover', changeToBlue)

function changeToBlue() {
    heading1.style.backgroundColor = 'skyblue'
    heading1.style.color = 'white'
}

heading1.addEventListener('mouseout',
    function () {
        heading1.style.backgroundColor = 'white'
        heading1.style.color = 'black'
    }
)

var turn = 0
var squares = document.getElementsByTagName('td')
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', createmaker)
}

function createmaker(){
    if (this.textContent === '') {
        if (turn == 0) {
            this.textContent = 'X'
        }
        else {
            this.textContent = 'O'
        }
        turn = 1 - turn;
    }
}

document.getElementById('reset').addEventListener('click',clearall)

function clearall(){
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent=''
    }
}



// var turn = 0
// var squares = document.getElementsByTagName('td')

// squares[0].addEventListener('click',
//     function () {
//         if (squares[0].textContent === '') {
//             if (turn == 0) {
//                 squares[0].textContent = 'X'
//             }
//             else {
//                 squares[0].textContent = 'o'
//             }
//             turn = 1 - turn;
//         }
//     }
// )