// https://game-icons.net/tags/dice.html
const dice = document.getElementById("dice");

dice.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    for (let i = 1; i <= 6; i++) {
        dice.querySelector(`img:nth-child(${i})`).style.zIndex = 6 - i;
    }
    
    dice.querySelector(`img:nth-child(${randomNumber})`).style.zIndex = 7;
});