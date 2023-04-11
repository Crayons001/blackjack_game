
let isWinner = false
let isAlive = true
let cardsArray = []
let sum = 0
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
let player = {
    playerName: "Player 1",
    chips: 100
}

function renderPlayer()
{
    playerEl.textContent = player.playerName
    playerEl.textContent += player.chips
}

function startGame()
{
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cardsArray = [firstCard, secondCard]
    sum = firstCard + secondCard
    playGame()
}

function playGame()
{
    renderPlayer()
    cardsEl.textContent = "Cards: " + cardsArray
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20)
    {
        message = "Do you want to print out a new card?"
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

    messageEl.textContent = message
    //console.log(message)
}

function newCard()
{
    if(isAlive && !isWinner)
    {
        console.log("New card clicked!")
        card = randomCard()
        cardsArray.push(card)
        sum += card
        playGame()
    }
}

function randomCard()
{
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber>10)
    {
        randomNumber = 10
    }
    else if (randomNumber === 1)
    {
        randomNumber = 11
    }
    return randomNumber
}