let player1 = {
    score: 0,
    display: document.querySelector('#p1Display'),
    button: document.querySelector('#incP1'),
}
let player2 = {
    score: 0,
    display: document.querySelector('#p2Display'),
    button: document.querySelector('#incP2'),
}

let resetGame = document.querySelector('#reset');
let winScoreSelect = document.querySelector('#playTo');
let winScore = parseInt(winScoreSelect.value);
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        if (player.score !== winScore) {
            player.score++;
            player.display.textContent = player.score;
            if (player.score === winScore) {
                isGameOver = true;
                player.display.classList.add('win');
                opponent.display.classList.add('lose');
                player.button.disabled = true;
                opponent.button.disabled = true;
            }
        }
    }
}

player1.button.addEventListener('click', function () {
    updateScore(player1, player2);
})

player2.button.addEventListener('click', function () {
    updateScore(player2, player1);
})

resetGame.addEventListener('click', reset)

winScoreSelect.addEventListener('change', function () {
    reset()
    winScore = parseInt(this.value);
})

function reset() {
    isGameOver = false;
    for (let player of [player1, player2]) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('win', 'lose');
        player.button.disabled = false;
    }
}
