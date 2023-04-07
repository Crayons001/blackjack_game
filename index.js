let firstCard = 6
let secondCard = 15
let isWinner = false

let sum = firstCard + secondCard

if (sum <= 20)
{
    console.log("Do you want to print out a new card?")
}
else if (sum === 21)
{
    console.log("You've got blackjack!")
    isWinner = true
}
else
{
    console.log("You're out of the game")
}