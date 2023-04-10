let firstCard = 6
let secondCard = 15
let isWinner = false
let isAlive = true

let sum = firstCard + secondCard
let message = ""

function startGame()
{
    if (sum <= 20)
    {
        message = "Do you want to print out a new card?"
        console.log(message)
    }
    else if (sum === 21)
    {
        message = "You've got blackjack!"
        isWinner = true
    }
    else
    {
        message = "You're out of the game"
        isAlive = false
    }

    console.log(message)
}