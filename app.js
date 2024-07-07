document.getElementById("section-1").addEventListener("click", () => {
    showCard('card-1');})

document.getElementById("button-1").addEventListener("click", () => {
    closeCard("card-1");
})

document.getElementById("section-2").addEventListener("click", () => {
    showCard('card-2');})

document.getElementById("button-2").addEventListener("click", () => {
    closeCard("card-2");
})

function showCard(cardId) {
    document.getElementById(cardId).style.display = 'block';
    }

function closeCard(cardId) {
    document.getElementById(cardId).style.display = 'none';
}