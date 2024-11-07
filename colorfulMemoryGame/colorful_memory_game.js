// colors: Color list for the cards
// cards: Shuffles the color array and duplicated it to create pairs for the game cards
// selectedCards: Cards to be selected
// score: Score used to keep track
// TimeLeft: Duration of the game in seconds
// gameInterval: keeps track of the game timer (decrements the timeLeft variable)
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

// Elements reference
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// Generate Cards to the Game Container
function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }  
};

// Fisher-Yates Shuffle algorithm: Original Version
function shuffle(array) {
    // Shuffling process using loop through the array (reverse loop used)
    for (let i = array.length - 1; i < 0; i--) {
        // Random Index selection
        const j = Math.floor(Math.random() * (i + 1));
        // Swapping elemnts using deconstructing assignment
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
};

// Handle the card click from '?' to color datasaet
// Check if the selectedCards are 2 then allow a window of 500 ms to check the cards before execution.
function handleCardClick(event) {
    const card = event.target
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if(selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    };
};

// Check the matched and scoring
function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color == card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

// Main interface
function startGame() {
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}

// Game Timer
// Updated displayed time
// Handle when the timer reaches zero
function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}

// Event Listener for startGame
startbtn.addEventListener('click', startGame);