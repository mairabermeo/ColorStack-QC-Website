/*
    Authors:
    Maira B.
*/

/* Nav Bar and Button Hover*/
function expandButton(button) {
    button.style.padding = "15px 25px"; 
}

function shrinkButton(button) {
    button.style.padding = "10px 15px"; 
}

function changeNavColor(link) {
    link.style.color = "black"; 
}

function revertNavColor(link) {
    link.style.color = "white"; 
}

/*Carousel effect*/
let currentIndex = 0;
const teamCards = document.querySelectorAll('.team-card');
const totalCards = teamCards.length;
const visibleCount = 3;
const cardWidth = teamCards[0].offsetWidth;

function moveCarousel(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1);
    }
    else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + totalCards);
    }

    updateCarousel();
}

function updateCarousel() {
    for (let i = 0; i < totalCards; i++) {
        teamCards[i].style.display = 'none'; 
    }

    for (let i = 0; i < visibleCount; i++) {
        let displayIndex = (currentIndex + i) % totalCards;
        teamCards[displayIndex].style.display = 'block'; 
    }

    if (currentIndex === totalCards - 1) {
        let firstCard = teamCards[0]; 
        firstCard.style.display = 'block';
    }
}

updateCarousel();
