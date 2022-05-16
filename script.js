let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard

let message

if (sum < 21) {
    message = "You got " + sum + " witch is less than 21!"
}
else if (sum === 21) {
    message = "Blackjack! You got 21!"
}
else {
    message = "You're out of the game!"
}

console.log(message)