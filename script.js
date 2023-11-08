
let currentIndex = 0
const LeftButton = document.querySelector(".left-button");
const cards = document.querySelectorAll(".pet_card");
const RightButton = document.querySelector(".right-button");

function showCards() {
  for (let i = 0; i < cards.length; i++) {
    if (i >= currentIndex && i < currentIndex + 3) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

function showNext() {
  if (currentIndex + 3 < cards.length) {
    currentIndex = currentIndex + 1;
  } else {
    currentIndex = 0;
  }
  showCards();
}

function showPrevious() {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
  } else {
    currentIndex = cards.length - 3;
  }
  showCards();
}

LeftButton.addEventListener("click", showPrevious);
RightButton.addEventListener("click", showNext);

showCards();





