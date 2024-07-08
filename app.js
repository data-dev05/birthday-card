// Section 1
document.getElementById("section-1").addEventListener("touchend", (event) => {
    showCard('card-1');
    event.preventDefault();})

document.getElementById("button-1").addEventListener("click", () => {
    closeCard("card-1");
})

// Section 2
document.getElementById("section-2").addEventListener("touchend", (event) => {
    showCard('card-2');
    event.preventDefault();})

document.getElementById("button-2").addEventListener("click", () => {
    closeCard("card-2");
})

// Section 3
document.getElementById("section-3").addEventListener("touchend", (event) => {
    showCard('card-3');
    event.preventDefault();})

document.getElementById("button-3").addEventListener("click", () => {
    closeCard("card-3");
})

// Section 4
document.getElementById("section-4").addEventListener("touchend", (event) => {
    showCard('card-4');
    event.preventDefault();
});

document.getElementById("button-4").addEventListener("click", () => {
    closeCard("card-4");
});

// // Section 5
// document.getElementById("section-5").addEventListener("touchend", (event) => {
//     showCard('card-5');
//     event.preventDefault();
// });

// document.getElementById("button-5").addEventListener("click", () => {
//     closeCard("card-5");
// });

// // Section 6
// document.getElementById("section-6").addEventListener("touchend", (event) => {
//     showCard('card-6');
//     event.preventDefault();
// });

// document.getElementById("button-6").addEventListener("click", () => {
//     closeCard("card-6");
// });

// // Section 7
// document.getElementById("section-7").addEventListener("touchend", (event) => {
//     showCard('card-7');
//     event.preventDefault();
// });

// document.getElementById("button-7").addEventListener("click", () => {
//     closeCard("card-7");
// });

// // Section 8
// document.getElementById("section-8").addEventListener("touchend", (event) => {
//     showCard('card-8');
//     event.preventDefault();
// });

// document.getElementById("button-8").addEventListener("click", () => {
//     closeCard("card-8");
// });

// // Section 9
// document.getElementById("section-9").addEventListener("touchend", (event) => {
//     showCard('card-9');
//     event.preventDefault();
// });

// document.getElementById("button-9").addEventListener("click", () => {
//     closeCard("card-9");
// });

// // Section 10
// document.getElementById("section-10").addEventListener("touchend", (event) => {
//     showCard('card-10');
//     event.preventDefault();
// });

// document.getElementById("button-10").addEventListener("click", () => {
//     closeCard("card-10");
// });

// // Section 11
// document.getElementById("section-11").addEventListener("touchend", (event) => {
//     showCard('card-11');
//     event.preventDefault();
// });

// document.getElementById("button-11").addEventListener("click", () => {
//     closeCard("card-11");
// });

// // Section 12
// document.getElementById("section-12").addEventListener("touchend", (event) => {
//     showCard('card-12');
//     event.preventDefault();
// });

// document.getElementById("button-12").addEventListener("click", () => {
//     closeCard("card-12");
// });


function showCard(cardId) {
    document.getElementById(cardId).style.display = 'block';
    }

function closeCard(cardId) {
    document.getElementById(cardId).style.display = 'none';
}