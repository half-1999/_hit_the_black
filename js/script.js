let squares = document.querySelectorAll('.square')
let mole = document.querySelector('.mole')
let timeLeft = document.getElementById('secs')
let score = document.getElementById('score')
let res = document.getElementById('res')


let result = 0
let currentTime = 60
let hitPos

function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove('mole')
        // console.log(sq.classList.remove('mole'));
    })

    let randomPosition = squares[Math.floor(Math.random() * 9)]
    console.log(randomPosition);
    randomPosition.classList.add('mole')

    hitPos = randomPosition.id
}

// randomSquare()

squares.forEach((squares) => {
    squares.addEventListener('click', () => {
        if (squares.id == hitPos) {
            result++
            score.textContent = `${ result }`
            hitPos = null
        }
    })
})


function moveMole() {
    timerId = setInterval(randomSquare, 800)
}
moveMole()


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(time)
        clearInterval(timerId)

        res.textContent = (`Game Over !!!  Your Result is ` + result)
        res.style.color = "white"
        alert('Game Over !!! Your Final Score is ' + result)

    }
}

let time = setInterval(countDown, 1000)