const backgrounds = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
];

const chosenImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];

const imgEl = document.createElement("img");

imgEl.src = `img/${chosenImage}`;

document.body.appendChild(imgEl);
