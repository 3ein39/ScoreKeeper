let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let btn1 = document.querySelector('#incP1');
let btn2 = document.querySelector('#incP2');
let resetGame = document.querySelector('#reset');
let winScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winScore = parseInt(winScoreSelect.value);
let isGameOver = false;

btn1.addEventListener('click', function () {
    if (!isGameOver) {
        if (p1Score !== winScore) {
            p1Score++;
            p1Display.textContent = p1Score;
            if (p1Score === winScore) {
                isGameOver = true;
                p1Display.classList.add('win')
                p2Display.classList.add('lose')
            }
        }
    }
})

btn2.addEventListener('click', function () {
    if (!isGameOver) {
        if (p2Score !== winScore) {
            p2Score++;
            p2Display.textContent = p2Score;
            if (p2Score === winScore) {
                isGameOver = true;
                p2Display.classList.add('win')
                p1Display.classList.add('lose')
            }
        }
    }
})

resetGame.addEventListener('click', reset)

winScoreSelect.addEventListener('change', function () {
    reset()
    winScore = parseInt(this.value);
})

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('win', 'lose');
    p2Display.classList.remove('win', 'lose');
}
