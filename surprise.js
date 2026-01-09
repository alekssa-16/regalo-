const starsContainer = document.getElementById("stars");
const moon = document.getElementById("moon");
const phrase = document.getElementById("phrase");
const arrow = document.getElementById("arrow");
const final = document.getElementById("final");
const finalText = document.getElementById("finalText");

/* CREATE STARS */
function createStars() {
  for (let i = 0; i < 120; i++) {
    const star = document.createElement("span");
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    starsContainer.appendChild(star);
  }
}

/* SEQUENCE */
setTimeout(createStars, 500);

setTimeout(() => {
  moon.classList.remove("hidden");
  moon.classList.add("rise");

  const music = document.getElementById("bgMusic");
  music.volume = 0.15;
  music.play().catch(() => {});
}, 2500);

setTimeout(() => {
  phrase.classList.remove("hidden");
  phrase.classList.add("show");
}, 4200);

setTimeout(() => {
  phrase.classList.add("fade-out");
}, 6500);

setTimeout(() => {
  arrow.classList.remove("hidden");
}, 8200);

/* MOON CLICK */
moon.addEventListener("click", () => {
  phrase.style.display = "none";
  arrow.style.display = "none";
  moon.style.display = "none";

  final.classList.remove("hidden");
  setTimeout(() => {
    final.classList.add("show");
    typeMessage(message);
  }, 400);
});

/* TYPEWRITER */
const message = [
  "Buon compleanno Pasta.",
  "Ti amo tantissimo.",
  "Tanti auguri e tante benedizioni."
];

function typeMessage(lines, index = 0) {
  if (index >= lines.length) return;

  let words = lines[index].split(" ");
  let current = "";
  let i = 0;

  const interval = setInterval(() => {
    current += words[i] + " ";
    finalText.innerHTML += words[i] + " ";
    i++;

    if (i === words.length) {
      clearInterval(interval);
      finalText.innerHTML += "<br>";
      setTimeout(() => typeMessage(lines, index + 1), 900);
    }
  }, 320);
}

