document.getElementById("section-1").addEventListener("touchend", () => {
    showCard('card-1');
    event.preventDefault();})

document.getElementById("button-1").addEventListener("click", () => {
    closeCard("card-1");
})

document.getElementById("section-2").addEventListener("touchend", () => {
    showCard('card-2');
    event.preventDefault();})

document.getElementById("button-2").addEventListener("click", () => {
    closeCard("card-2");
})

function showCard(cardId) {
    document.getElementById(cardId).style.display = 'block';
    }

function closeCard(cardId) {
    document.getElementById(cardId).style.display = 'none';
}