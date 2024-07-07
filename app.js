document.getElementById("section-1").addEventListener("click", () => {
    showCard('card-1');})

function showCard(cardId) {
    document.getElementById(cardId).style.display = 'block';
    }