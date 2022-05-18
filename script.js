
let firstCard = 10
let secondCard = 10
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum
    
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += (cards[i]) + " | "
    } 

    if (sum < 21) {
        message = "You got " + sum + " witch is less than 21!"
    }
    else if (sum === 21) {
        message = "Blackjack! You got 21!"
    }
    else {
        message = "You're out of the game!"
    }
    messageEl.textContent = message
}

function newCard() {
    let newCard = 1
    sum += newCard
    cards.push(newCard)
    startGame()
}
