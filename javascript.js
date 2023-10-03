const hideSectionButton = Array.from(
  document.getElementsByClassName("text-primary")
);
console.log(hideSectionButton);
const sales = document.getElementById("saldi");
console.log(hideSectionButton[0]);
hideSectionButton[0].addEventListener("click", (e) => {
  sales.classList.toggle("d-none");
});

const welcome = document.getElementById("welcome");
console.log(hideSectionButton[1]);
hideSectionButton[1].addEventListener("click", (e) => {
  welcome.classList.toggle("d-none");
  console.log(e.target);
});

/* <span
class="position-absolute start-100 translate-middle badge rounded-pill bg-danger"
>
Hot
<span class="visually-hidden">unread messages</span>
</span> */

const button = document.getElementById("how-many");
const welcomeCards = Array.from(document.querySelectorAll("#welcome .card"));
console.log(welcomeCards);
let counterCards = 0;
const textAlert = document.getElementById("text-alert");
button.addEventListener("click", () => {
  counterCards = 0;
  welcomeCards.forEach((card) => counterCards++);
  textAlert.innerHTML = `
  <div class="alert alert-info" role="alert">
Abbiamo ${counterCards} viaggi disponibili  </div> `;
});

const cards = Array.from(document.getElementsByClassName("card"));

console.log(cards);

const deleteAll = function () {
  cards.forEach((card) => {
    card.classList.add("d-none");
  });
};

const buttonDelete = document.querySelector("#deleteTrips");
console.log(buttonDelete);
buttonDelete.addEventListener("click", deleteAll);
