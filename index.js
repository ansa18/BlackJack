let result = 0
let hasBlackjack = false
let isAlive = false
let message = ""

let cards=[]  
let player = {
    name : "Ann",
    chip :  100
}
let chips = Number(player.chip)

let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let playerEl = document.querySelector("#player-el")
// playerEl.textContent = player.name + " : $" + chips


function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13) + 1
     if(randomNumber === 1){
        return 11
     }else if(randomNumber > 10){
        return 10
     }else{
        return randomNumber  
     }
}
function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard,secondCard]
    result=firstCard+secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent  = "Sum : " + result
    cardsEl.textContent = "Cards: "
    for(i = 0; i < cards.length; i++ ){
        cardsEl.textContent += cards[i] + " "
    }

    if(result <= 20){
        message = ("do you want to draw another number?")
    }else if(result ===21){
        message = (" you hite BlackJack")
        hasBlackjack = true
    }else {
        message = "you are out of the game"
        isAlive = false
}
messageEl.textContent = message
if(hasBlackjack === true){
    playerEl.textContent = player.name + " : $" + (chips + 100)
}
}

function newCard(){
    if( isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        result +=card
        cards.push(card)
        renderGame()
    }   
}
