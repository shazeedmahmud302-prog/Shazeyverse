const messages = [
  "Your smile is still my favorite thing to accidentally think about.",
  "You make the world feel softer, brighter, and much more worth noticing.",
  "I love the way you turn simple moments into memories I want to replay.",
  "Being loved by you feels like finding spring in the middle of a long day.",
  "If I could give you a flower for every reason I adore you, this garden would never end."
];

const flowers = document.querySelectorAll(".flower");
const messageCard = document.querySelector("#messageCard");
const messageCount = document.querySelector("#messageCount");
const messageText = document.querySelector("#messageText");
const surpriseButton = document.querySelector("#surpriseButton");
const surprise = document.querySelector("#surprise");

function showMessage(index) {
  flowers.forEach((flower) => flower.classList.remove("active"));
  flowers[index].classList.add("active");

  messageCount.textContent = `Flower ${index + 1} of ${messages.length}`;
  messageText.textContent = messages[index];

  messageCard.classList.remove("pop");
  void messageCard.offsetWidth;
  messageCard.classList.add("pop");
}

flowers.forEach((flower) => {
  flower.addEventListener("click", () => {
    showMessage(Number(flower.dataset.index));
  });
});

surpriseButton.addEventListener("click", () => {
  const isHidden = surprise.hasAttribute("hidden");
  surprise.toggleAttribute("hidden", !isHidden);
  surpriseButton.textContent = isHidden ? "Close note" : "Open one more note";
});
