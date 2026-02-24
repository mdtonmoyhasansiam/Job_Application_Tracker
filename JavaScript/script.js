// console.log('JS Connected');

const tabs = document.querySelectorAll(".tab");
const emptyBox = document.getElementById("emptyBox");

const total = document.getElementById("total");
const interviewCount = document.getElementById("interview");
const rejectedCount = document.getElementById("rejected");
const countText = document.getElementById("countText");

let activeTab = "All";

function showCards(tabName) {

  activeTab = tabName;

  const cards = document.querySelectorAll(".card");

  let totalCard = cards.length;
  let interview = 0;
  let rejected = 0;
  let visible = 0;

  for (let i = 0; i < cards.length; i++) {

    let status = cards[i].querySelector(".status").innerText;

    // total interview & rejected (সব card থেকে)
    if (status === "INTERVIEW") {
      interview++;
    }

    if (status === "REJECTED") {
      rejected++;
    }

    // filter
    if (tabName === "All" || status === tabName.toUpperCase()) {
      cards[i].style.display = "block";
      visible++;
    } else {
      cards[i].style.display = "none";
    }
  }

  // dashboard update
  total.innerText = totalCard;
  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected;
  countText.innerText = visible + " jobs";

  // empty message
  if (visible === 0) {
    emptyBox.style.display = "inline";
  } else {
    emptyBox.style.display = "none";
  }
}


// tab click
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {

    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("active");
    }

    this.classList.add("active");
    showCards(this.innerText);
  });
}


// button actions (event delegation)
document.addEventListener("click", function (e) {

  if (e.target.classList.contains("interviewBtn")) {

    let card = e.target.closest(".card");
    let status = card.querySelector(".status");

    if (status.innerText === "INTERVIEW") {
      status.innerText = "NOT APPLIED";
    } else {
      status.innerText = "INTERVIEW";
    }

    showCards(activeTab);
  }

  if (e.target.classList.contains("rejectedBtn")) {

    let card = e.target.closest(".card");
    let status = card.querySelector(".status");

    if (status.innerText === "REJECTED") {
      status.innerText = "NOT APPLIED";
    } else {
      status.innerText = "REJECTED";
    }

    showCards(activeTab);
  }

  if (e.target.classList.contains("deleteBtn")) {

    let card = e.target.closest(".card");
    card.remove();

    showCards(activeTab);
  }

});


// প্রথম লোড
showCards("All");