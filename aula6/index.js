const title = document.querySelector("h1");

const container = document.querySelector("div");

const button = document.createElement("button");
button.innerText = "Clique-me";

container.appendChild(button);

button.addEventListener("click", () => {
  title.style.color = generateColor();
});

function generateColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
