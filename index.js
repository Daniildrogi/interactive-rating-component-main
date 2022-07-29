const ratingBtn = [...document.querySelectorAll(".rating-btn")];
const sumbitBtn = document.querySelector(".submit");
const chosenRating = document.querySelector(".chosen-rating");
const welcomeCard = document.getElementById("welcome-card");
const thanksCard = document.getElementById("thanks-card");

let choosingRating = function (e) {
  if (e.target.classList.contains("rating-btn"))
    for (let i = 0; i < ratingBtn.length; i++) {
      ratingBtn[i].classList.remove("clicked");
    }
  if (e.target.classList.contains("rating-btn"))
    e.target.classList.add("clicked");
  if (e.target.classList.contains("submit")) {
    let targetRating = ratingBtn.filter((b) => {
      if (b.classList.contains("clicked")) return b;
    });
    let rating = targetRating[0].id;

    welcomeCard.style.display = "none";
    thanksCard.style.display = "flex";
    chosenRating.innerHTML = `You selected ${targetRating[0].id} out of 5 `;
  }
};

document.addEventListener("click", choosingRating);
